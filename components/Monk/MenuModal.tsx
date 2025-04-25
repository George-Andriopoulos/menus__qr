// components/MenuModal.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuCategory, TranslationSet } from "@/types/global";

interface MenuModalProps {
  category: MenuCategory | null;
  onClose: () => void;
  isOpen: boolean;
  lang: "en" | "gr";
  t: (key: keyof TranslationSet) => string;
}

const formatPrice = (
  price?: number,
  unit?: string,
  modifier?: string
): string => {
  if (price === undefined || price === null || isNaN(price)) return "";
  return `${modifier || ""}${price.toFixed(2)}${unit || ""}`;
};

const MenuModal: React.FC<MenuModalProps> = ({
  category,
  onClose,
  isOpen,
  lang,
  t,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!category?.images?.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % category.images!.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [category?.images]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || startX === null) return;
    const deltaX = e.touches[0].clientX - startX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        setCurrentIndex((prev) => (prev + 1) % (category?.images?.length || 1));
      } else {
        setCurrentIndex((prev) =>
          prev === 0 ? (category?.images?.length || 1) - 1 : prev - 1
        );
      }
      setIsDragging(false);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || startX === null) return;
    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        setCurrentIndex((prev) => (prev + 1) % (category?.images?.length || 1));
      } else {
        setCurrentIndex((prev) =>
          prev === 0 ? (category?.images?.length || 1) - 1 : prev - 1
        );
      }
      setIsDragging(false);
    }
  };

  const handleEnd = () => setIsDragging(false);

  if (!isOpen || !category) return null;

  if (category.images && category.images.length > 0) {
    return (
      <Dialog
        open={isOpen}
        onOpenChange={onClose}>
        <DialogContent className="w-[90vw] max-w-2xl h-[80vh] p-0 bg-black flex flex-col rounded-lg overflow-hidden">
          <div
            className="relative w-full h-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}>
            <div
              ref={trackRef}
              className="flex transition-transform ease-in-out duration-300 h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {category.images.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full flex-shrink-0 h-full">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 700px"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
          <DialogFooter className="p-3 sm:p-4">
            <Button
              className="bg-[#ae997a] hover:bg-[#ae997a]/80 text-gray-900 w-full sm:w-auto"
              onClick={onClose}
              size="lg">
              {t("close")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  const showSingleDoubleHeaders = category.items.some(
    (item) => item.price.single !== undefined || item.price.double !== undefined
  );

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-lg sm:max-w-xl bg-[url('/monk/monk_modal_bg.webp')] bg-cover bg-center bg-no-repeat border-gray-700 text-[#fffdfe] max-h-[85vh] sm:max-h-[80vh] flex flex-col rounded-lg p-0">
        <DialogHeader className="border-b border-gray-700 p-4 flex-shrink-0">
          <DialogTitle className="text-xl sm:text-2xl font-semibold text-[#1F1F1F] text-center">
            {category.name[lang] || category.name["en"]}
          </DialogTitle>
        </DialogHeader>

        {showSingleDoubleHeaders && (
          <div className="grid grid-cols-3 bg-[#ae997a] gap-x-3 sm:gap-x-4 px-3 sm:px-4 pt-3 pb-2 text-xs sm:text-sm font-semibold text-[#fffdfe] sticky top-0 z-10">
            <div className="col-span-1 uppercase tracking-wider"></div>
            <div className="col-span-1 text-right pr-1 uppercase tracking-wider">
              {t("single")}
            </div>
            <div className="col-span-1 text-right pr-1 uppercase tracking-wider">
              {t("double")}
            </div>
          </div>
        )}

        <div
          className={cn(
            "flex-grow overflow-y-auto space-y-1 no-scrollbar px-1 sm:px-2 pb-2",
            !showSingleDoubleHeaders && "pt-3 sm:pt-4"
          )}>
          {category.items.map((item) => (
            <div
              key={item.id}
              className={cn(
                "p-3 hover:bg-[#ae997a]/90 transition-colors duration-150 mx-1 rounded",
                showSingleDoubleHeaders
                  ? "grid grid-cols-3 gap-x-3 sm:gap-x-4 items-center"
                  : "flex items-center justify-start gap-x-4"
              )}>
              <div
                className={cn(
                  "flex flex-col justify-center",
                  showSingleDoubleHeaders ? "col-span-1" : "flex-grow"
                )}>
                <h4 className="text-sm sm:text-base font-medium text-[#4B3621]">
                  {item.name[lang] || item.name["en"]}
                </h4>
                {(item.description[lang] || item.description["en"]) && (
                  <p className="text-xs text-[#4B3621] mt-0.5">
                    {item.description[lang] || item.description["en"]}
                  </p>
                )}
              </div>

              {showSingleDoubleHeaders ? (
                <>
                  <div className="col-span-1 text-right text-sm sm:text-base text-[#4B3621] font-medium pr-1">
                    {formatPrice(
                      item.price.single ?? item.price.base,
                      item.price.unit,
                      item.price.modifier
                    )}
                  </div>
                  <div className="col-span-1 text-right text-sm sm:text-base text-[#4B3621] font-medium pr-1">
                    {formatPrice(item.price.double, item.price.unit)}
                  </div>
                </>
              ) : (
                <p className="text-[#4B3621] font-medium text-base flex-shrink-0">
                  {formatPrice(
                    item.price.base,
                    item.price.unit,
                    item.price.modifier
                  )}
                </p>
              )}
            </div>
          ))}

          {category.items.length === 0 && (
            <p className="text-gray-500 text-center py-4 px-3 sm:px-4">
              No items in this category yet.
            </p>
          )}
        </div>

        <DialogFooter className="p-3 sm:p-4 flex-shrink-0">
          <Button
            className="bg-[#ae997a] hover:bg-[#ae997a]/80 text-gray-900 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={onClose}
            size="lg">
            {t("close")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MenuModal;
