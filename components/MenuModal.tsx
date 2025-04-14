// components/MenuModal.tsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// Ensure PriceInfo is imported from your types file
import type {
  MenuCategory,
  MenuItem,
  PriceInfo,
  TranslationSet,
} from "@/types";
import { cn } from "@/lib/utils"; // Import cn

interface MenuModalProps {
  category: MenuCategory | null;
  onClose: () => void;
  isOpen: boolean;
  lang: "en" | "gr";
  t: (key: keyof TranslationSet) => string;
}

// Helper function to format price numbers consistently
const formatPrice = (
  price?: number,
  unit?: string,
  modifier?: string
): string => {
  if (price === undefined || price === null || isNaN(price)) return "";
  const formattedPrice = price.toFixed(2);
  return `${modifier || ""}${formattedPrice}${unit || ""}`;
};

/**
 * Modal component displaying items for a selected menu category.
 * Handles structured prices and displays SINGLE/DOUBLE columns where applicable.
 * Adjusts layout for fixed-price items to reduce space.
 * Hides the scrollbar visually using the 'no-scrollbar' class.
 */
const MenuModal: React.FC<MenuModalProps> = ({
  category,
  onClose,
  isOpen,
  lang,
  t,
}) => {
  if (!isOpen || !category) {
    return null;
  }

  // Check if any item in this category has single or double pricing
  const showSingleDoubleHeaders = category.items.some(
    (item) => item.price.single !== undefined || item.price.double !== undefined
  );

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-lg sm:max-w-xl bg-gray-900 border-gray-700 text-gray-100 max-h-[85vh] sm:max-h-[80vh] flex flex-col rounded-lg p-0">
        {/* Modal Header */}
        <DialogHeader className="border-b border-gray-700 p-4 flex-shrink-0">
          <DialogTitle className="text-xl sm:text-2xl font-semibold text-yellow-400 text-center sm:text-left">
            {category.name[lang] || category.name["en"]}
          </DialogTitle>
        </DialogHeader>

        {/* Optional Headers for Price Columns */}
        {showSingleDoubleHeaders && (
          <div className="grid grid-cols-3 gap-x-3 sm:gap-x-4 px-3 sm:px-4 pt-3 pb-2 text-xs sm:text-sm font-semibold text-gray-400 border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
            <div className="col-span-1 uppercase tracking-wider">
              {/* t('beverages') */}
            </div>
            <div className="col-span-1 text-right pr-1 uppercase tracking-wider">
              {t("single")}
            </div>
            <div className="col-span-1 text-right pr-1 uppercase tracking-wider">
              {t("double")}
            </div>
          </div>
        )}

        {/* Modal Body - Scrollable List */}
        <div
          className={cn(
            "flex-grow overflow-y-auto space-y-1 no-scrollbar px-1 sm:px-2 pb-2",
            !showSingleDoubleHeaders && "pt-3 sm:pt-4" // Add top padding only if headers aren't present
          )}>
          {category.items.map((item) => (
            <div
              key={item.id}
              className={cn(
                "p-3 hover:bg-gray-800/50 transition-colors duration-150 mx-1 rounded",
                // Apply grid only if needed, otherwise use flex
                showSingleDoubleHeaders
                  ? "grid grid-cols-3 gap-x-3 sm:gap-x-4 items-center"
                  : "flex items-center justify-start gap-x-4" // Use flex, justify-start, and gap for fixed price items
              )}>
              {/* Column 1 / Flex Item 1: Name & Description */}
              {/* Use flex-grow when using flex layout for fixed price items */}
              <div
                className={cn(
                  "flex flex-col justify-center",
                  showSingleDoubleHeaders ? "col-span-1" : "flex-grow"
                )}>
                <h4 className="text-sm sm:text-base font-medium text-gray-100">
                  {item.name[lang] || item.name["en"]}
                </h4>
                {(item.description[lang] || item.description["en"]) && (
                  <p className="text-xs text-gray-400 mt-0.5">
                    {item.description[lang] || item.description["en"]}
                  </p>
                )}
              </div>

              {/* Prices Section */}
              {showSingleDoubleHeaders ? (
                <>
                  {/* Column 2: Single Price / Base Price */}
                  <div className="col-span-1 text-right text-sm sm:text-base text-yellow-400 font-medium pr-1">
                    {formatPrice(
                      item.price.single ?? item.price.base,
                      item.price.unit,
                      item.price.modifier
                    )}
                  </div>
                  {/* Column 3: Double Price */}
                  <div className="col-span-1 text-right text-sm sm:text-base text-yellow-400 font-medium pr-1">
                    {formatPrice(item.price.double, item.price.unit)}
                  </div>
                </>
              ) : (
                // Flex Item 2: Fixed Price (when not using columns)
                <p className="text-yellow-400 font-bold text-base sm:text-lg flex-shrink-0">
                  {/* Display base price directly */}
                  {formatPrice(
                    item.price.base,
                    item.price.unit,
                    item.price.modifier
                  )}
                </p>
              )}
            </div>
          ))}
          {/* Message if category is empty */}
          {category.items.length === 0 && (
            <p className="text-gray-500 text-center py-4 px-3 sm:px-4">
              No items in this category yet.
            </p>
          )}
        </div>

        {/* Modal Footer */}
        <DialogFooter className="border-t border-gray-700 p-3 sm:p-4 flex-shrink-0">
          <Button
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 w-full sm:w-auto"
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
