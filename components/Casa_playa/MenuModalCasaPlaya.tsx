"use client";

import React, { useRef, useEffect, useState, FC } from "react";
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
import { CasaPlayaMenuCategory, CasaPlayaTranslationSet } from "@/types/global";

// --- CORRECTED IMPORTS ---
// Import Casa Playa specific Types (Adjust path if needed, e.g., "@/types/global" if that's where they now reside)

// --- DEFINE PROPS INTERFACE ---
interface MenuModalProps {
  category: CasaPlayaMenuCategory | null; // Type the category prop
  onClose: () => void; // Type the onClose function
  isOpen: boolean; // Type the isOpen boolean
  lang: "en" | "gr"; // Type the lang prop
  t: (key: keyof CasaPlayaTranslationSet) => string; // Type the translation function
}

// --- HELPER FUNCTION (Unchanged) ---
const formatPrice = (
  price?: number | null,
  unit?: string,
  modifier?: string
): string => {
  if (price === undefined || price === null || isNaN(price)) return "";
  // Ensure template literal is correct
  return `${modifier || ""}${price.toFixed(2)}${unit || ""}`;
};

// --- UPDATE COMPONENT SIGNATURE ---
const MenuModal: React.FC<MenuModalProps> = ({
  category,
  onClose,
  isOpen,
  lang,
  t,
}) => {
  // --- Gallery Logic ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  // Correctly type useRef for HTMLDivElement
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optional chaining is safer here since category can be null
    if (!category?.images || category.images.length <= 1) return;
    const interval = setInterval(() => {
      // Ensure category and images still exist within interval closure if needed,
      // but relying on the length check outside is usually sufficient.
      // Use optional chaining on images inside calculation just in case.
      setCurrentIndex((prev) => (prev + 1) % (category?.images?.length ?? 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [category?.images]); // Dependency array is correct

  // --- TOUCH/MOUSE HANDLERS (Ensure safety checks with category?.images) ---
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
      // Added null check for category.images inside condition
      if (deltaX < 0 && category.images) {
        setCurrentIndex((prev) => (prev + 1) % category.images!.length);
      } else if (category.images) {
        setCurrentIndex((prev) =>
          prev === 0 ? category.images!.length - 1 : prev - 1
        );
      }
      setIsDragging(false);
      setStartX(null);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Type event target
    if (!category?.images || category.images.length <= 1) return;
    setStartX(e.clientX);
    setIsDragging(true);
    e.currentTarget.classList.add("grabbing");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Type event target
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
      // Added null check for category.images inside condition
      if (deltaX < 0 && category.images) {
        setCurrentIndex((prev) => (prev + 1) % category.images!.length);
      } else if (category.images) {
        setCurrentIndex((prev) =>
          prev === 0 ? category.images!.length - 1 : prev - 1
        );
      }
      setIsDragging(false);
      setStartX(null);
      // Check if currentTarget still exists before removing class
      if (e.currentTarget) {
        e.currentTarget.classList.remove("grabbing");
      }
    }
  };

  const handleEnd = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    // Type event target
    // Check if currentTarget exists and has classList
    if (e.currentTarget && "classList" in e.currentTarget) {
      e.currentTarget.classList.remove("grabbing");
    }
    setIsDragging(false);
    setStartX(null);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    // Type event target
    if (isDragging) {
      // Check if currentTarget exists before removing class
      if (e.currentTarget) {
        e.currentTarget.classList.remove("grabbing");
      }
      setIsDragging(false);
      setStartX(null);
    }
  };

  // --- RENDER LOGIC ---
  if (!isOpen || !category) return null; // Correctly handles null category

  // --- CASE 1: GALLERY ---
  // Use optional chaining for category.images and category.name
  if (category.images && category.images.length > 0) {
    return (
      <Dialog
        open={isOpen}
        onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="w-[90vw] max-w-2xl h-[80vh] p-0 bg-[#cfc3bc] flex flex-col rounded-lg overflow-hidden">
          <DialogHeader className="sr-only">
            {/* Use optional chaining and provide fallback */}
            <DialogTitle>
              {category?.name?.[lang] ?? category?.name?.en ?? "Gallery"}
            </DialogTitle>
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
              {/* category.images is guaranteed non-null and non-empty here */}
              {category.images.map((src, index) => (
                <div
                  key={index} // Using index as key is acceptable if list doesn't change order/size
                  className="relative w-full flex-shrink-0 h-full">
                  <Image
                    src={src} // src is now correctly inferred as string
                    // Use optional chaining for name access
                    alt={`${
                      category?.name?.[lang] ?? category?.name?.en ?? "Image"
                    } ${index + 1}`}
                    fill
                    className="object-cover select-none"
                    sizes="(max-width: 768px) 90vw, 672px" // Check if this needs adjustment
                    priority={index === 0} // index is correctly inferred as number
                    draggable="false"
                  />
                </div>
              ))}
            </div>
            {/* category.images confirmed > 1 here */}
            {category.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {category.images.map(
                  (
                    _,
                    index // index is correctly number
                  ) => (
                    <button
                      key={index} // index as key again
                      onClick={() => setCurrentIndex(index)}
                      className={cn(
                        "w-2.5 h-2.5 rounded-full transition-colors duration-300 border border-white/50",
                        currentIndex === index
                          ? "bg-white"
                          : "bg-black/30 hover:bg-black/50"
                      )}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  )
                )}
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

  // --- CASE 2: NORMAL MENU MODAL ---
  // category is non-null and doesn't have images here

  // Check if headers should be shown
  const showCoffeeHeaders =
    category.id === "coffee" &&
    // Use optional chaining on items just in case, though category is non-null
    category.items?.some(
      (
        item // item is CasaPlayaMenuItem
      ) =>
        // No need for cast 'as CasaPlayaPriceInfo' if item is typed
        item.price.single !== undefined || item.price.double !== undefined
    );

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => !open && onClose()}>
      {/* Using original styling */}
      <DialogContent className="w-[95vw] max-w-lg sm:max-w-xl bg-[url('/casa_playa/modal_bg.webp')] bg-cover bg-center bg-no-repeat border-[#603913] text-[#fffdfe] max-h-[85vh] sm:max-h-[80vh] flex flex-col rounded-lg p-0">
        <DialogHeader className="border-b border-[#603913] p-4 flex-shrink-0">
          <DialogTitle className="text-xl sm:text-2xl font-semibold text-[#1F1F1F] text-center">
            {/* Use optional chaining */}
            {category?.name?.[lang] ?? category?.name?.["en"] ?? "Menu"}
          </DialogTitle>
        </DialogHeader>

        {/* Conditionally render headers ONLY for coffee section */}
        {showCoffeeHeaders && (
          <div className="grid grid-cols-3 bg-[#603913] gap-x-3 sm:gap-x-4 px-3 sm:px-4 pt-3 pb-2 text-xs sm:text-sm font-semibold text-[#fffdfe] sticky top-0 z-10">
            <div className="col-span-1 uppercase tracking-wider"></div>{" "}
            <div className="col-span-1 text-right pr-1 uppercase tracking-wider">
              {t("single")} {/* Use translation key */}
            </div>
            <div className="col-span-1 text-right pr-1 uppercase tracking-wider">
              {t("double")} {/* Use translation key */}
            </div>
          </div>
        )}

        {/* Scrollable div - Padding adjusted based on headers */}
        <div
          className={cn(
            "flex-grow overflow-y-auto space-y-1 no-scrollbar px-1 sm:px-2 pb-2",
            !showCoffeeHeaders && "pt-3 sm:pt-4" // Add top padding only if headers aren't shown
          )}>
          {/* category.items should be CasaPlayaMenuItem[] */}
          {/* Added optional chaining for safety */}
          {category?.items?.map((item) => {
            // item is CasaPlayaMenuItem
            // No need for cast: 'as CasaPlayaPriceInfo'
            const priceInfo = item.price;

            // Determine price structure for layout and rendering
            const isCoffeeItemWithSingleDouble =
              category.id === "coffee" &&
              (priceInfo.single !== undefined ||
                priceInfo.double !== undefined);

            const isOtherSingleDoubleItem =
              category.id !== "coffee" && priceInfo.single !== undefined;

            const isPersonPrice =
              priceInfo.forOnePerson !== undefined ||
              priceInfo.forTwoPersons !== undefined;

            // Determine layout: Grid only for coffee items with single/double
            const useGridLayout = isCoffeeItemWithSingleDouble;

            return (
              <div
                key={item.id} // Use item.id as key
                className={cn(
                  "p-3 hover:bg-[#F7931E] transition-colors duration-150 mx-1 rounded",
                  useGridLayout
                    ? "grid grid-cols-3 gap-x-3 sm:gap-x-4 items-center"
                    : "flex items-center justify-between gap-x-4"
                )}>
                {/* Name / Description */}
                <div
                  className={cn(
                    "flex flex-col justify-center",
                    useGridLayout ? "col-span-1" : "flex-grow"
                  )}>
                  <h4 className="text-sm sm:text-base font-medium text-[#4B3621]">
                    {/* item guaranteed non-null here */}
                    {item.name[lang] || item.name["en"]}
                  </h4>
                  {/* Description check */}
                  {(item.description[lang] || item.description["en"]) && (
                    <p className="text-xs text-[#4B3621] mt-0.5">
                      {item.description[lang] || item.description["en"]}
                    </p>
                  )}
                </div>

                {/* Price Rendering Logic */}
                {useGridLayout ? (
                  // Grid Layout (Coffee Single/Double)
                  <>
                    <div className="col-span-1 text-right text-sm sm:text-base text-[#4B3621] font-medium pr-1">
                      {/* priceInfo guaranteed non-null here */}
                      {formatPrice(
                        priceInfo.single ?? priceInfo.base, // Use base as fallback if single missing
                        priceInfo.unit,
                        priceInfo.modifier
                      )}
                    </div>
                    <div className="col-span-1 text-right text-sm sm:text-base text-[#4B3621] font-medium pr-1">
                      {formatPrice(priceInfo.double, priceInfo.unit)}
                    </div>
                  </>
                ) : (
                  // Flex Layout (All Others)
                  <div className="text-[#4B3621] font-medium text-sm sm:text-base flex-shrink-0 text-right">
                    {isPersonPrice ? (
                      // Stacked for Persons
                      <div className="flex flex-col">
                        <span>
                          {/* Use optional chaining on t() just in case keys are missing */}
                          {`${t("forOnePerson") ?? "For 1"}: ${formatPrice(
                            priceInfo.forOnePerson,
                            priceInfo.unit
                          )}`}
                        </span>
                        <span>
                          {`${t("forTwoPersons") ?? "For 2"}: ${formatPrice(
                            priceInfo.forTwoPersons,
                            priceInfo.unit
                          )}`}
                        </span>
                      </div>
                    ) : isOtherSingleDoubleItem ? (
                      // Inline Slash for Other Single/Double
                      <span className="whitespace-nowrap">
                        {formatPrice(priceInfo.single, priceInfo.unit)}
                        {/* Check double is not undefined before showing slash */}
                        {priceInfo.double !== undefined &&
                          ` / ${formatPrice(priceInfo.double, priceInfo.unit)}`}
                      </span>
                    ) : priceInfo.modifier === "ASK" ? (
                      // Ask Staff text
                      <span>{t("ask") ?? "Ask Staff"}</span>
                    ) : (
                      // Base price fallback
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
                {/* End Price Rendering Logic */}
              </div>
            );
          })}

          {/* Check items length */}
          {category?.items?.length === 0 && (
            <p className="text-gray-500 text-center py-4 px-3 sm:px-4">
              No items in this category yet.
            </p>
          )}
        </div>

        {/* Original DialogFooter */}
        <DialogFooter className="p-3 sm:p-4 flex-shrink-0">
          <Button
            className="bg-[#F7931E] hover:bg-[#FFA640] text-gray-900 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
