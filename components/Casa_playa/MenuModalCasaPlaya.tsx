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
// --- CORRECTED TYPE IMPORTS ---
import {
  CasaPlayaMenuCategory,
  CasaPlayaTranslationSet,
  CasaPlayaPriceInfo,
  CasaPlayaMenuItem,
} from "@/types/casaPlaya"; // Adjust path if needed

// --- Define props with specific Casa Playa types ---
interface MenuModalProps {
  category: CasaPlayaMenuCategory | null;
  onClose: () => void;
  isOpen: boolean;
  lang: "en" | "gr";
  t: (key: keyof CasaPlayaTranslationSet) => string;
}

const formatPrice = (
  price?: number | null,
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
  // Gallery state and handlers (remain unchanged from your original code)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!category?.images || category.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % category.images!.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [category?.images]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!category?.images || category.images.length <= 1) return;
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (
      !isDragging ||
      startX === null ||
      !category?.images ||
      category.images.length <= 1
    )
      return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        setCurrentIndex((prev) => (prev + 1) % category.images!.length);
      } else {
        setCurrentIndex((prev) =>
          prev === 0 ? category.images!.length - 1 : prev - 1
        );
      }
      setIsDragging(false);
      setStartX(null);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!category?.images || category.images.length <= 1) return;
    setStartX(e.clientX);
    setIsDragging(true);
    e.currentTarget.classList.add("grabbing");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (
      !isDragging ||
      startX === null ||
      !category?.images ||
      category.images.length <= 1
    )
      return;
    const currentX = e.clientX;
    const deltaX = currentX - startX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        setCurrentIndex((prev) => (prev + 1) % category.images!.length);
      } else {
        setCurrentIndex((prev) =>
          prev === 0 ? category.images!.length - 1 : prev - 1
        );
      }
      setIsDragging(false);
      setStartX(null);
      e.currentTarget.classList.remove("grabbing");
    }
  };

  const handleEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.currentTarget && "classList" in e.currentTarget) {
      e.currentTarget.classList.remove("grabbing");
    }
    setIsDragging(false);
    setStartX(null);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (isDragging) {
      e.currentTarget.classList.remove("grabbing");
      setIsDragging(false);
      setStartX(null);
    }
  };

  if (!isOpen || !category) return null;

  // --- CASE 1: CATEGORY HAS IMAGES (Gallery Mode - Unchanged from your original styling) ---
  if (category.images && category.images.length > 0) {
    return (
      <Dialog
        open={isOpen}
        onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="w-[90vw] max-w-2xl h-[80vh] p-0 bg-[#cfc3bc] flex flex-col rounded-lg overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>{category.name[lang] || category.name.en}</DialogTitle>
          </DialogHeader>

          <div
            className="relative w-full h-full overflow-hidden cursor-grab"
            style={{ touchAction: "pan-y" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleMouseLeave}>
            <div
              ref={trackRef}
              className="flex transition-transform ease-out duration-300 h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {category.images.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full flex-shrink-0 h-full">
                  <Image
                    src={src}
                    alt={`${category.name[lang] || category.name.en} ${
                      index + 1
                    }`}
                    fill
                    className="object-cover select-none"
                    sizes="(max-width: 768px) 90vw, 672px"
                    priority={index === 0}
                    draggable="false"
                  />
                </div>
              ))}
            </div>
            {category.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {category.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-colors duration-300 border border-white/50",
                      currentIndex === index
                        ? "bg-white"
                        : "bg-black/30 hover:bg-black/50"
                    )}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <DialogFooter className="p-3 sm:p-4 bg-[#cfc3bc] border-t border-black/10">
            <Button
              onClick={onClose}
              className="bg-[#ae997a] hover:bg-[#ae997a]/80 text-gray-900 w-full sm:w-auto"
              size="lg">
              {t("close")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  // --- CASE 2: NORMAL MENU MODAL (Original Styling Preserved) ---
  const showSingleDoubleHeaders = category.items.some(
    (item) =>
      (item.price as CasaPlayaPriceInfo).single !== undefined ||
      (item.price as CasaPlayaPriceInfo).double !== undefined
  );

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => !open && onClose()}>
      {/* Using original DialogContent className */}
      <DialogContent className="w-[95vw] max-w-lg sm:max-w-xl bg-[url('/monk/monk_modal_bg.webp')] bg-cover bg-center bg-no-repeat border-gray-700 text-[#fffdfe] max-h-[85vh] sm:max-h-[80vh] flex flex-col rounded-lg p-0">
        {/* Using original DialogHeader className */}
        <DialogHeader className="border-b border-gray-700 p-4 flex-shrink-0">
          <DialogTitle className="text-xl sm:text-2xl font-semibold text-[#1F1F1F] text-center">
            {category.name[lang] || category.name["en"]}
          </DialogTitle>
        </DialogHeader>

        {/* Using original Single/Double Headers section */}
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

        {/* Using original scrollable div structure */}
        <div
          className={cn(
            "flex-grow overflow-y-auto space-y-1 no-scrollbar px-1 sm:px-2 pb-2",
            !showSingleDoubleHeaders && "pt-3 sm:pt-4"
          )}>
          {(category.items as CasaPlayaMenuItem[]).map((item) => {
            const priceInfo = item.price as CasaPlayaPriceInfo;
            const isPersonPrice =
              priceInfo.forOnePerson !== undefined ||
              priceInfo.forTwoPersons !== undefined;

            return (
              <div
                key={item.id}
                className={cn(
                  "p-3 hover:bg-[#ae997a]/90 transition-colors duration-150 mx-1 rounded",
                  showSingleDoubleHeaders
                    ? "grid grid-cols-3 gap-x-3 sm:gap-x-4 items-center"
                    : "flex items-center justify-between gap-x-4" // Use justify-between for flex layout
                )}>
                {/* Item Name and Description (Original structure) */}
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

                {/* Price Rendering */}
                {showSingleDoubleHeaders ? (
                  // Original Single/Double rendering
                  <>
                    <div className="col-span-1 text-right text-sm sm:text-base text-[#4B3621] font-medium pr-1">
                      {formatPrice(
                        priceInfo.single ?? priceInfo.base,
                        priceInfo.unit,
                        priceInfo.modifier
                      )}
                    </div>
                    <div className="col-span-1 text-right text-sm sm:text-base text-[#4B3621] font-medium pr-1">
                      {formatPrice(priceInfo.double, priceInfo.unit)}
                    </div>
                  </>
                ) : (
                  <div className="text-[#4B3621] font-medium text-sm sm:text-base flex-shrink-0 text-right">
                    {/* Check for 'forPerson' price first */}
                    {isPersonPrice ? (
                      // --- MODIFIED: Use flex-col to stack lines ---
                      <div className="flex flex-col">
                        <span>
                          {`${t("forOnePerson") || "For 1"}: ${formatPrice(
                            priceInfo.forOnePerson,
                            priceInfo.unit
                          )}`}
                        </span>
                        <span>
                          {`${t("forTwoPersons") || "For 2"}: ${formatPrice(
                            priceInfo.forTwoPersons,
                            priceInfo.unit
                          )}`}
                        </span>
                      </div>
                    ) : // --- END MODIFICATION ---
                    priceInfo.modifier === "ASK" ? (
                      <span>{t("ask") || "Ask Staff"}</span>
                    ) : (
                      <span>
                        {formatPrice(
                          priceInfo.base,
                          priceInfo.unit,
                          priceInfo.modifier
                        )}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {category.items.length === 0 && (
            <p className="text-gray-500 text-center py-4 px-3 sm:px-4">
              No items in this category yet.
            </p>
          )}
        </div>

        {/* Original DialogFooter */}
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
