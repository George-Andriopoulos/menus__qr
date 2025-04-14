// components/CategoryCard.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card"; // Adjust path if needed
import { MenuCategory, TranslationSet } from "@/types/global";

interface CategoryCardProps {
  category: MenuCategory;
  onSelect: (category: MenuCategory) => void;
  lang: "en" | "gr";
  t: (key: keyof TranslationSet) => string; // Use TranslationSet keys
}

/**
 * Card component displaying a menu category with an image and name.
 * Triggers onSelect when clicked.
 * @param category - The menu category data.
 * @param onSelect - Function to call when the card is selected.
 * @param lang - Current language ('en' or 'gr').
 * @param t - Translation function.
 */
const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onSelect,
  lang,
  t,
}) => {
  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer group bg-gray-800 border-gray-700 flex flex-col active:scale-[0.98]"
      onClick={() => onSelect(category)}
      role="button" // Accessibility: Indicate it's clickable
      tabIndex={0} // Accessibility: Make it focusable
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && onSelect(category)
      } // Accessibility: Allow selection with keyboard
    >
      {/* Responsive image height */}
      <div className="relative h-40 sm:h-48 w-full">
        <img
          src={category.image}
          // Use translated name for alt text, provide default if translation missing
          alt={category.name[lang] || category.name["en"]}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:opacity-90"
          onError={(e) =>
            (e.currentTarget.src = `https://placehold.co/400x300/cccccc/ffffff?text=${encodeURIComponent(
              category.name[lang] || category.name["en"]
            )}`)
          }
          loading="lazy"
        />
      </div>
      {/* Adjusted padding and text size */}
      <CardContent className="p-3 sm:p-4 text-center flex-grow flex flex-col justify-center">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-100">
          {/* Display translated name, provide default if translation missing */}
          {category.name[lang] || category.name["en"]}
        </h3>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
