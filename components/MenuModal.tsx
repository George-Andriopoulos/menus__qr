// components/MenuModal.tsx
import React from "react";
// Make sure Dialog imports are correct for your setup (e.g., shadcn/ui)
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { MenuCategory, TranslationSet } from "@/types"; // Adjust path if needed

interface MenuModalProps {
  category: MenuCategory | null; // Category can be null when modal is closed/closing
  onClose: () => void;
  isOpen: boolean;
  lang: "en" | "gr";
  t: (key: keyof TranslationSet) => string;
}

/**
 * Modal component displaying items for a selected menu category.
 * Handles string prices correctly.
 * @param category - The selected menu category data (or null).
 * @param onClose - Function to call when the modal should close.
 * @param isOpen - Boolean indicating if the modal is open.
 * @param lang - Current language ('en' or 'gr').
 * @param t - Translation function.
 */
const MenuModal: React.FC<MenuModalProps> = ({
  category,
  onClose,
  isOpen,
  lang,
  t,
}) => {
  // Early return if the modal shouldn't be open or no category is selected
  if (!isOpen || !category) {
    return null;
  }

  return (
    // Using Dialog component from shadcn/ui
    <Dialog
      open={isOpen}
      onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-md sm:max-w-[525px] bg-gray-900 border-gray-700 text-gray-100 max-h-[85vh] sm:max-h-[80vh] flex flex-col rounded-lg p-0">
        {" "}
        {/* Removed default padding */}
        {/* Modal Header */}
        <DialogHeader className="border-b border-gray-700 p-4 flex-shrink-0">
          {" "}
          {/* Added flex-shrink-0 */}
          <DialogTitle className="text-xl sm:text-2xl font-semibold text-yellow-400 text-center sm:text-left">
            {/* Display translated category name, provide default */}
            {category.name[lang] || category.name["en"]}
          </DialogTitle>
        </DialogHeader>
        {/* Modal Body - Scrollable List */}
        <div className="p-3 sm:p-4 flex-grow overflow-y-auto space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {category.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-gray-800 rounded-lg shadow space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex-grow">
                <h4 className="text-base sm:text-lg font-medium text-gray-100">
                  {/* Display translated item name, provide default */}
                  {item.name[lang] || item.name["en"]}
                </h4>
                {/* Conditionally render description only if it exists and has content */}
                {(item.description[lang] || item.description["en"]) && (
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {/* Use the translation key for the label */}
                    {t("ingredients")}:{" "}
                    {item.description[lang] || item.description["en"]}
                  </p>
                )}
              </div>
              {/* Display price string directly */}
              <p className="text-yellow-400 font-bold text-base sm:text-lg flex-shrink-0 self-end sm:self-center">
                {item.price}
              </p>
            </div>
          ))}
          {/* Message shown if a category has no items */}
          {category.items.length === 0 && (
            <p className="text-gray-500 text-center py-4">
              No items in this category yet.
            </p>
          )}
        </div>
        {/* Modal Footer */}
        <DialogFooter className="border-t border-gray-700 p-3 sm:p-4 flex-shrink-0">
          {" "}
          {/* Added flex-shrink-0 */}
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
