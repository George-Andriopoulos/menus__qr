// components/clients/Monk.tsx

"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Import UI Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
// Removed ChevronDown import as it's not explicitly used in SelectTrigger anymore

// Import Custom Components
import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import MenuModal from "@/components/MenuModal";

// Import Constants and Types (Standardized Path)
import { mockMenuCategories, translations } from "@/constants";
import { MenuCategory, TranslationSet } from "@/types/global";
// Standardize type import path assuming types are in @/types/index.ts

/**
 * Main application component logic, encapsulated in Monk.
 */
const Monk = () => {
  // --- State ---
  const [language, setLanguage] = useState<"en" | "gr">("en");
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setTimeout(() => setSelectedCategory(null), 300);
  };

  // --- Render ---
  return (
    // Main container div - Using user's specified colors
    <div className="min-h-screen text-[#fffdfe] antialiased bg-[#ae997a]">
      {/* Inner container */}
      <div className="container mx-auto px-3 sm:px-4 pb-12 relative">
        {/* Language Selector */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
          <Select
            value={language}
            onValueChange={(value: "en" | "gr") => {
              setLanguage(value);
            }}>
            <SelectTrigger
              className={cn(
                "w-[110px] sm:w-[140px] h-9 sm:h-10",
                "bg-[#fffdfe] backdrop-blur-sm border-[#ae997a] hover:text-[#ae997a]/80 text-[#ae997a]",
                "rounded-md shadow-sm text-xs sm:text-sm",
                "focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
              )}
              aria-label={t("language")}>
              <SelectValue
                placeholder={t("language")}
                className="text-gray-200"
              />
            </SelectTrigger>
            <SelectContent className="bg-[#fffdfe] border-[#ae997a] text-xs sm:text-sm">
              <SelectItem
                value="en"
                className="hover:bg-gray-700/50 text-[#ae997a] focus:bg-[#ae997a]/50 cursor-pointer min-h-[32px] sm:min-h-0 focus:ring-0 focus:outline-none">
                English
              </SelectItem>
              <SelectItem
                value="gr"
                className="hover:bg-gray-700/50 text-[#ae997a]  focus:bg-[#ae997a]/50 cursor-pointer min-h-[32px] sm:min-h-0 focus:ring-0 focus:outline-none">
                Ελληνικά
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Header */}
        <Header
          title={t("headerTitle")}
          subtitle={t("headerSubtitle")}
        />

        {/* Carousel (Currently commented out in user's code) */}
        {/* <ImageCarousel images={mockCarouselImages} /> */}

        {/* Menu Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center drop-shadow-md">
          {" "}
          {/* Changed text color slightly */}
          {t("menuCategories")}
        </h2>

        {/* Menu Grid */}
        {/* Removed place-items-center, adjusted gaps/margin */}
        <div className="grid grid-cols-2 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {menuData.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelect={handleCategorySelect}
              lang={language}
              t={t}
            />
          ))}
          {menuData.length === 0 && (
            <p className="col-span-full text-center text-gray-200">
              {" "}
              {/* Adjusted color */}
              No menu categories available.
            </p>
          )}
        </div>

        {/* Menu Modal */}
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

export default Monk;
