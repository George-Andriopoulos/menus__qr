// components/CategoryCard.tsx
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MenuCategory, TranslationSet } from "@/types/global";

interface CategoryCardProps {
  category: MenuCategory;
  onSelect: (category: MenuCategory) => void;
  lang: "en" | "gr";
  t: (key: keyof TranslationSet) => string;
}

/**
 * Card component displaying a menu category with a full-card image background and overlayed name.
 * Uses Next.js Image component within a fixed-height card.
 * Triggers onSelect when clicked.
 */
const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onSelect,
  lang,
  t,
}) => {
  const categoryName = category.name[lang] || category.name["en"]; // Fallback name

  return (
    <Card
      // Added focus:outline-none to remove focus outline, and cursor-pointer
      className="overflow-hidden text-[#fffdfe] transition-all lg:mt-10 lg:w-[270px]  duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer group bg-gray-800 border-gray-700 active:scale-[0.98] relative h-48 focus:outline-none focus:ring-0"
      onClick={() => onSelect(category)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && onSelect(category)
      }>
      {/* Image Component: Positioned absolutely to fill the entire card */}
      <Image
        src={category.image}
        alt={categoryName}
        fill // Use fill to cover the parent
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" // Adjust based on grid layout
        className="object-cover transition-transform duration-300 group-hover:scale-105 absolute inset-0 z-0"
      />

      {/* Content Overlay: Positioned absolutely over the image */}
      <CardContent className="absolute bottom-0 left-0 right-0 z-10 p-2 sm:p-3 text-center bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <h3 className="text-base sm:text-lg font-semibold text-[#fffdfe] drop-shadow-md">
          {categoryName}
        </h3>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
