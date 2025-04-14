// components/clients/Monk.tsx

"use client"; // Add this if using Next.js App Router

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Import UI Components (adjust paths as needed, assuming '@' alias)
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

// Import Custom Components (adjust paths as needed, assuming '@' alias)
import Header from "@/components/Header"; // Assuming Header is in components/Header.tsx
import ImageCarousel from "@/components/ImageCarousel"; // Assuming ImageCarousel is in components/ImageCarousel.tsx
import CategoryCard from "@/components/CategoryCard"; // Assuming CategoryCard is in components/CategoryCard.tsx
import MenuModal from "@/components/MenuModal"; // Assuming MenuModal is in components/MenuModal.tsx

// Import Constants and Types (adjust paths as needed, assuming '@' alias)
import {
  mockCarouselImages,
  mockMenuCategories,
  translations,
} from "@/constants";
import { MenuCategory, TranslationSet } from "@/types/global";

/**
 * Main application component logic, now encapsulated in Monk.
 * Handles state management, language selection, modal display, and renders the menu layout.
 */
const Monk = () => {
  // --- State ---
  const [language, setLanguage] = useState<"en" | "gr">("en");
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Initialize menuData directly from constants
  const [menuData, setMenuData] = useState<MenuCategory[]>(mockMenuCategories);

  // --- Translation Function ---
  const t = (key: keyof TranslationSet): string => {
    return translations[language]?.[key] || translations["en"][key];
  };

  // --- Handlers ---
  const handleCategorySelect = (category: MenuCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay resetting selectedCategory to allow modal fade-out animation
    setTimeout(() => setSelectedCategory(null), 300);
  };

  // --- Render ---
  return (
    // Main container div
    <div className="bg-gray-950 min-h-screen text-gray-100 font-sans antialiased">
      {/* Inner container for layout */}
      <div className="container mx-auto px-3 sm:px-4 pb-12 relative">
        {/* Language Selector Dropdown */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
          <Select
            value={language}
            onValueChange={(value: "en" | "gr") => {
              setLanguage(value);
              // Add logic here if data needs re-fetching based on language
            }}>
            <SelectTrigger
              className={cn(
                "w-[110px] sm:w-[140px] h-9 sm:h-10",
                "bg-gray-800/80 backdrop-blur-sm border-gray-700 text-gray-200",
                "focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-yellow-500 focus:border-yellow-500",
                "flex items-center justify-between",
                "rounded-md shadow-sm text-xs sm:text-sm"
              )}
              aria-label={t("language")}>
              <SelectValue
                placeholder={t("language")}
                className="text-gray-200"
              />
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 text-gray-400 flex-shrink-0" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700 text-xs sm:text-sm">
              <SelectItem
                value="en"
                className="hover:bg-gray-700/50 text-gray-200 focus:bg-gray-700/50 cursor-pointer min-h-[32px] sm:min-h-0">
                English
              </SelectItem>
              <SelectItem
                value="gr"
                className="hover:bg-gray-700/50 text-gray-200 focus:bg-gray-700/50 cursor-pointer min-h-[32px] sm:min-h-0">
                Ελληνικά
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Header Section Component */}
        <Header
          title={t("headerTitle")}
          subtitle={t("headerSubtitle")}
        />

        {/* Image Carousel Section Component */}
        <ImageCarousel images={mockCarouselImages} />

        {/* Menu Categories Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-6 md:mb-8 text-center">
          {t("menuCategories")}
        </h2>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {/* Map through menu data to render category cards */}
          {menuData.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelect={handleCategorySelect}
              lang={language}
              t={t}
            />
          ))}
          {/* Display message if no menu data */}
          {menuData.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No menu categories available.
            </p>
          )}
        </div>

        {/* Menu Modal Component (conditionally rendered with animation) */}
        <AnimatePresence>
          {isModalOpen && selectedCategory && (
            <MenuModal
              category={selectedCategory}
              onClose={handleCloseModal}
              isOpen={isModalOpen}
              lang={language}
              t={t}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Export the component as default
export default Monk;
