// components/CategoryCard.tsx
import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { Card, CardContent } from "@/components/ui/card"; // Adjust path if needed
import { MenuCategory, TranslationSet } from "@/types/global";
// Assuming types are in '@/types', adjust if your path is different (e.g., '@/types/global')

interface CategoryCardProps {
  category: MenuCategory;
  onSelect: (category: MenuCategory) => void;
  lang: "en" | "gr";
  t: (key: keyof TranslationSet) => string;
}

/**
 * Card component displaying a menu category with an image background and overlayed name.
 * Uses Next.js Image component.
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
      className="overflow-hidden w-[180px] lg:w-[300px] xl:w-[350px]  md:w-[250px] transition-all duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer group bg-gray-800 border-gray-700 active:scale-[0.98] relative" // Added relative positioning
      onClick={() => onSelect(category)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && onSelect(category)
      }>
      {/* Image Container: Relative positioning and reduced height */}
      <div className="relative h-32 sm:h-40 w-full">
        {" "}
        {/* Reduced height */}
        <Image
          src={category.image}
          alt={categoryName}
          fill // Makes image cover the container
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" // Example sizes, adjust based on your grid layout
          className="object-cover transition-transform duration-300 group-hover:scale-105" // Use object-cover
          // onError is not directly supported like in <img>. Handle missing images upstream or configure loaders.
          // loading="lazy" is handled automatically by Next.js Image
        />
        {/* Optional: Add a subtle overlay for better text contrast always */}
        {/* <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div> */}
      </div>

      {/* Content Overlay: Positioned absolutely over the image */}
      <CardContent className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-center bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        {" "}
        {/* Gradient background */}
        <h3 className="text-base sm:text-lg font-semibold text-white drop-shadow-md">
          {" "}
          {/* Ensure text is visible */}
          {categoryName}
        </h3>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
