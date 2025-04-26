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

// Import Custom Components
import CategoryCard from "@/components/Casa_playa/CategoryCardCasaPlaya";
import MenuModal from "@/components/Casa_playa/MenuModalCasaPlaya";
import Header from "./HeaderCasaPlaya";

// --- CORRECTED IMPORTS ---
// Import Casa Playa specific Types (Adjust path if needed)

// Import Casa Playa specific Constants (Adjust path if needed)
import {
  casa_playa_MenuCategories,
  translations, // Import translations from casa_playa !!
  // mockCarouselImages // Uncomment if using carousel
} from "@/constants/casa_playa";
import { CasaPlayaMenuCategory, CasaPlayaTranslationSet } from "@/types/global";
// --- END CORRECTED IMPORTS ---

/**
 * Main application component logic for Casa Playa.
 */
const CasaPlaya = () => {
  // --- State ---
  const [language, setLanguage] = useState<"en" | "gr">("en");
  // --- Use Correct Type ---
  const [selectedCategory, setSelectedCategory] =
    useState<CasaPlayaMenuCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // --- Use Correct Type ---
  const [menuData, setMenuData] = useState<CasaPlayaMenuCategory[]>(
    casa_playa_MenuCategories
  );

  // --- Translation Function ---
  // --- Use Correct Type ---
  const t = (key: keyof CasaPlayaTranslationSet): string => {
    return (
      translations[language]?.[key] ?? translations["en"][key] ?? String(key)
    );
  };

  // --- Handlers ---
  // --- Use Correct Type ---
  const handleCategorySelect = (category: CasaPlayaMenuCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCategory(null), 300);
  };

  // --- Render (KEEPING ORIGINAL STYLES) ---
  return (
    // Original container styles
    <div className="min-h-screen text-[#fffdfe] antialiased bg-[#f4e4c4]">
      <div className="container mx-auto px-3 sm:px-4 pb-12 relative">
        {/* Original Language Selector styles */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
          <Select
            value={language}
            onValueChange={(value: "en" | "gr") => {
              setLanguage(value);
            }}>
            <SelectTrigger
              className={cn(
                "w-[110px] sm:w-[140px] h-9 sm:h-10",
                "bg-[#F7931E] backdrop-blur-sm border-black hover:text-black/80 text-black",
                "rounded-md shadow-sm text-xs sm:text-sm",
                "focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
              )}
              aria-label={t("language")}>
              <SelectValue
                placeholder={t("language")}
                className="text-gray-200"
              />
            </SelectTrigger>
            <SelectContent className="bg-[#F7931E] border-black text-xs sm:text-sm">
              <SelectItem
                value="en"
                className="hover:bg-gray-700/50 text-black focus:bg-black/20 cursor-pointer min-h-[32px] sm:min-h-0 focus:ring-0 focus:outline-none">
                English
              </SelectItem>
              <SelectItem
                value="gr"
                className="hover:bg-gray-700/50 text-black  focus:bg-black/20 cursor-pointer min-h-[32px] sm:min-h-0 focus:ring-0 focus:outline-none">
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

        {/* Carousel (Commented out) */}
        {/* <ImageCarousel images={mockCarouselImages} /> */}

        {/* Menu Title (Original styles) */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7931E] mb-6 md:mb-8 text-center drop-shadow-md">
          {" "}
          {t("menuCategories")}
        </h2>

        {/* --- Menu Grid (Original styles restored) --- */}
        <div className="grid grid-cols-2 mt-8 sm:grid-cols-2 lg:place-items-center lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {(menuData as CasaPlayaMenuCategory[]).map((category) => (
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
              No menu categories available.
            </p>
          )}
        </div>
        {/* --- End Menu Grid --- */}

        {/* Menu Modal */}
        <AnimatePresence>
          {isModalOpen && selectedCategory && (
            <MenuModal
              category={selectedCategory as CasaPlayaMenuCategory}
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

export default CasaPlaya;
