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
// Assuming types are in @/types/index.ts - adjusted path

import { cn } from "@/lib/utils"; // Import cn
import { MenuCategory, TranslationSet } from "@/types/global";

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
  // Return empty string or placeholder if price is invalid
  if (price === undefined || price === null || isNaN(price)) return "";
  const formattedPrice = price.toFixed(2);
  return `${modifier || ""}${formattedPrice}${unit || ""}`;
};

/**
 * Modal component displaying items for a selected menu category.
 * Reflects user-provided styling and layout.
 * Handles structured prices and displays SINGLE/DOUBLE columns where applicable.
 * Hides the scrollbar visually using the 'no-scrollbar' class.
 * Removes focus ring from the close button.
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
      {/* User's specified styling for DialogContent */}
      <DialogContent className="w-[95vw] max-w-lg  sm:max-w-xl bg-[url('/monk/monk_modal_bg.webp')] bg-cover bg-center bg-no-repeat border-gray-700 text-[#fffdfe] max-h-[85vh] sm:max-h-[80vh] flex flex-col rounded-lg p-0">
        {/* Modal Header */}
        <DialogHeader className="border-b border-gray-700 p-4 flex-shrink-0">
          {/* User's specified styling for DialogTitle */}
          <DialogTitle className="text-xl sm:text-2xl font-semibold text-[#ae997a] text-center ">
            {category.name[lang] || category.name["en"]}
          </DialogTitle>
        </DialogHeader>

        {/* Optional Headers for Price Columns */}
        {showSingleDoubleHeaders && (
          // User's specified styling for headers
          <div className="grid grid-cols-3 bg-[#ae997a] gap-x-3 sm:gap-x-4 px-3 sm:px-4 pt-3 pb-2 text-xs sm:text-sm font-semibold text-[#fffdfe] sticky top-0 z-10">
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
                // User's item row styling
                "p-3 hover:bg-gray-800/50 transition-colors duration-150 mx-1 rounded",
                // Apply grid only if needed, otherwise use flex
                showSingleDoubleHeaders
                  ? "grid grid-cols-3 gap-x-3 sm:gap-x-4 items-center"
                  : "flex items-center justify-start gap-x-4" // Use flex, justify-start, and gap for fixed price items
              )}>
              {/* Column 1 / Flex Item 1: Name & Description */}
              <div
                className={cn(
                  "flex flex-col justify-center",
                  showSingleDoubleHeaders ? "col-span-1" : "flex-grow"
                )}>
                {/* User's item name styling */}
                <h4 className="text-sm sm:text-base font-medium text-[#fffdfe]">
                  {item.name[lang] || item.name["en"]}
                </h4>
                {/* User's item description styling (no label prefix) */}
                {(item.description[lang] || item.description["en"]) && (
                  <p className="text-xs text-gray-200 mt-0.5">
                    {item.description[lang] || item.description["en"]}
                  </p>
                )}
              </div>

              {/* Prices Section */}
              {showSingleDoubleHeaders ? (
                <>
                  {/* Column 2: Single Price / Base Price */}
                  {/* User's price styling */}
                  <div className="col-span-1 text-right text-sm sm:text-base text-[#fffdfe] font-medium pr-1">
                    {formatPrice(
                      item.price.single ?? item.price.base,
                      item.price.unit,
                      item.price.modifier
                    )}
                  </div>
                  {/* Column 3: Double Price */}
                  {/* User's price styling */}
                  <div className="col-span-1 text-right text-sm sm:text-base text-[#fffdfe] font-medium pr-1">
                    {formatPrice(item.price.double, item.price.unit)}
                  </div>
                </>
              ) : (
                // Flex Item 2: Fixed Price (when not using columns)
                // User's price styling
                <p className="text-[#fffdfe] font-bold text-base sm:text-lg flex-shrink-0">
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
        {/* User's specified footer styling */}
        <DialogFooter className=" p-3 sm:p-4 flex-shrink-0">
          {/* User's specified button styling + focus removal */}
          <Button
            className={cn(
              "bg-[#ae997a] hover:bg-[#ae997a]/80 text-gray-900 w-full sm:w-auto",
              // Add classes to remove focus ring/outline
              "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            )}
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
