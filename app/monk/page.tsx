"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Assuming shadcn/ui components are correctly installed and configured
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils"; // Assuming shadcn/ui utils
import { ChevronDown, Loader2 } from "lucide-react";

// --- MOCK DATA ---
// (No changes to data structure needed for responsiveness)

interface MenuItem {
  id: string;
  name: { en: string; gr: string };
  description: { en: string; gr: string };
  price: number;
  image: string;
}

interface MenuCategory {
  id: string;
  name: { en: string; gr: string };
  image: string;
  items: MenuItem[];
}

// Example Carousel Images
const mockCarouselImages = [
  "https://placehold.co/800x400/FBBF24/374151?text=Restaurant+View",
  "https://placehold.co/800x400/FCD34D/374151?text=Delicious+Food",
  "https://placehold.co/800x400/FDBA74/374151?text=Cozy+Ambiance",
  "https://placehold.co/800x400/FDE68A/374151?text=Special+Dish",
];

// Example Menu Data
const mockMenuCategories: MenuCategory[] = [
  {
    id: "starters",
    name: { en: "Starters", gr: "Ορεκτικά" },
    image: "https://placehold.co/400x300/FBBF24/374151?text=Starters",
    items: [
      {
        id: "s1",
        name: { en: "Greek Salad", gr: "Ελληνική Σαλάτα" },
        description: {
          en: "Fresh tomatoes, cucumbers, onion, feta cheese, olives, olive oil.",
          gr: "Φρέσκια ντομάτα, αγγούρι, κρεμμύδι, φέτα, ελιές, ελαιόλαδο.",
        },
        price: 9.99,
        image: "https://placehold.co/100x100/FCD34D/374151?text=Salad",
      },
      {
        id: "s2",
        name: { en: "Tzatziki Dip", gr: "Τζατζίκι" },
        description: {
          en: "Yogurt, cucumber, garlic, olive oil, dill.",
          gr: "Γιαούρτι, αγγούρι, σκόρδο, ελαιόλαδο, άνηθος.",
        },
        price: 6.5,
        image: "https://placehold.co/100x100/FDBA74/374151?text=Dip",
      },
      {
        id: "s3",
        name: { en: "Feta Saganaki", gr: "Σαγανάκι Φέτα" },
        description: {
          en: "Pan-fried feta cheese with lemon.",
          gr: "Τηγανητή φέτα με λεμόνι.",
        },
        price: 8.0,
        image: "https://placehold.co/100x100/FDE68A/374151?text=Saganaki",
      },
    ],
  },
  {
    id: "mains",
    name: { en: "Main Courses", gr: "Κυρίως Πιάτα" },
    image: "https://placehold.co/400x300/FCD34D/374151?text=Main+Courses",
    items: [
      {
        id: "m1",
        name: { en: "Moussaka", gr: "Μουσακάς" },
        description: {
          en: "Layers of eggplant, potato, minced meat, béchamel sauce.",
          gr: "Στρώσεις από μελιτζάνα, πατάτα, κιμά, σάλτσα μπεσαμέλ.",
        },
        price: 15.5,
        image: "https://placehold.co/100x100/FBBF24/374151?text=Moussaka",
      },
      {
        id: "m2",
        name: { en: "Grilled Salmon", gr: "Σολομός Σχάρας" },
        description: {
          en: "Fresh salmon fillet grilled, served with vegetables.",
          gr: "Φρέσκο φιλέτο σολομού στη σχάρα, σερβιρισμένο με λαχανικά.",
        },
        price: 18.99,
        image: "https://placehold.co/100x100/FCD34D/374151?text=Salmon",
      },
      {
        id: "m3",
        name: { en: "Lamb Kleftiko", gr: "Κλέφτικο Αρνί" },
        description: {
          en: "Slow-cooked lamb with herbs and potatoes.",
          gr: "Αργοψημένο αρνί με μυρωδικά και πατάτες.",
        },
        price: 19.5,
        image: "https://placehold.co/100x100/FDBA74/374151?text=Lamb",
      },
    ],
  },
  {
    id: "desserts",
    name: { en: "Desserts", gr: "Επιδόρπια" },
    image: "https://placehold.co/400x300/FDBA74/374151?text=Desserts",
    items: [
      {
        id: "d1",
        name: { en: "Baklava", gr: "Μπακλαβάς" },
        description: {
          en: "Layers of phyllo pastry, nuts, and honey syrup.",
          gr: "Στρώσεις από φύλλο κρούστας, ξηρούς καρπούς και σιρόπι μελιού.",
        },
        price: 7.0,
        image: "https://placehold.co/100x100/FDE68A/374151?text=Baklava",
      },
      {
        id: "d2",
        name: { en: "Chocolate Cake", gr: "Σοκολατένιο Κέικ" },
        description: {
          en: "Rich chocolate cake with fudge frosting.",
          gr: "Πλούσιο σοκολατένιο κέικ με γλάσο φοντάν.",
        },
        price: 7.99,
        image: "https://placehold.co/100x100/FBBF24/374151?text=Cake",
      },
    ],
  },
  {
    id: "drinks",
    name: { en: "Drinks", gr: "Ποτά" },
    image: "https://placehold.co/400x300/FDE68A/374151?text=Drinks",
    items: [
      {
        id: "dr1",
        name: { en: "Greek Coffee", gr: "Ελληνικός Καφές" },
        description: {
          en: "Traditional strong brewed coffee.",
          gr: "Παραδοσιακός δυνατός καφές.",
        },
        price: 3.0,
        image: "https://placehold.co/100x100/FBBF24/374151?text=Coffee",
      },
      {
        id: "dr2",
        name: { en: "Ouzo", gr: "Ούζο" },
        description: {
          en: "Anise-flavored aperitif.",
          gr: "Απεριτίφ με γεύση γλυκάνισου.",
        },
        price: 5.0,
        image: "https://placehold.co/100x100/FCD34D/374151?text=Ouzo",
      },
      {
        id: "dr3",
        name: { en: "House Wine (Glass)", gr: "Κρασί Χύμα (Ποτήρι)" },
        description: { en: "Red or White.", gr: "Κόκκινο ή Λευκό." },
        price: 4.5,
        image: "https://placehold.co/100x100/FDBA74/374151?text=Wine",
      },
    ],
  },
];

// --- TRANSLATIONS ---
const translations = {
  en: {
    headerTitle: "Little Lemon",
    headerSubtitle: "A Taste of the Mediterranean",
    menuCategories: "Menu Categories",
    language: "Language",
    ingredients: "Ingredients",
    price: "Price",
    close: "Close",
    orderNow: "Order Now",
    viewMenu: "View Menu",
  },
  gr: {
    headerTitle: "Μικρό Λεμόνι",
    headerSubtitle: "Γεύση Μεσογείου",
    menuCategories: "Κατηγορίες Μενού",
    language: "Γλώσσα",
    ingredients: "Συστατικά",
    price: "Τιμή",
    close: "Κλείσιμο",
    orderNow: "Παραγγείλετε Τώρα",
    viewMenu: "Δείτε το Μενού",
  },
};

// --- COMPONENTS ---

// Header Component - Adjusted font sizes for mobile
const Header = ({ title, subtitle }: { title: string; subtitle: string }) => (
  // Added responsive text sizes and adjusted padding
  <header className="text-center pt-16 pb-8 mb-6 md:pt-8">
    {" "}
    {/* More top padding on mobile due to absolute language selector */}
    <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400">{title}</h1>
    <h3 className="text-lg sm:text-xl text-gray-300 mt-2 px-2">
      {subtitle}
    </h3>{" "}
    {/* Added horizontal padding for subtitle on small screens */}
  </header>
);

// Image Carousel Component - Adjusted height for mobile
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [api, setApi] = React.useState<CarouselApi>(); // Use correct type from shadcn/ui

  React.useEffect(() => {
    if (!api) return;

    // Autoplay functionality
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Loop back to start
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full relative mb-10 md:mb-12">
      {" "}
      {/* Slightly less margin bottom on mobile */}
      <Carousel
        setApi={setApi}
        className="w-full max-w-5xl mx-auto"
        opts={{
          align: "center",
          loop: true,
        }}>
        <CarouselContent>
          {images.map((image, index) => (
            // Basis 1/1 (full width) on mobile, adjusted for larger screens
            <CarouselItem
              key={index}
              className="basis-full">
              <div className="p-1">
                <img
                  src={image}
                  alt={`Carousel Image ${index + 1}`}
                  // Responsive height: shorter on mobile, taller on larger screens
                  className="rounded-lg w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover shadow-lg"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://placehold.co/800x400/cccccc/ffffff?text=Image+Not+Found")
                  }
                  loading="lazy" // Added lazy loading for images
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

// Category Card Component - Adjusted image height for mobile
const CategoryCard = ({
  category,
  onSelect,
  lang,
  t,
}: {
  category: MenuCategory;
  onSelect: (category: MenuCategory) => void;
  lang: string;
  t: (key: string) => string;
}) => (
  <Card
    className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer group bg-gray-800 border-gray-700 flex flex-col active:scale-[0.98]" // Added active scale for tap feedback
    onClick={() => onSelect(category)}>
    {/* Responsive image height */}
    <div className="relative h-40 sm:h-48 w-full">
      <img
        src={category.image}
        alt={category.name[lang]}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:opacity-90"
        onError={(e) =>
          (e.currentTarget.src = `https://placehold.co/400x300/cccccc/ffffff?text=${encodeURIComponent(
            category.name[lang]
          )}`)
        }
        loading="lazy" // Added lazy loading for images
      />
    </div>
    {/* Adjusted padding and text size */}
    <CardContent className="p-3 sm:p-4 text-center flex-grow flex flex-col justify-center">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-100">
        {category.name[lang]}
      </h3>
    </CardContent>
  </Card>
);

// Menu Modal Component - Adjusted width and layout for mobile
const MenuModal = ({
  category,
  onClose,
  isOpen,
  lang,
  t,
}: {
  category: MenuCategory | null;
  onClose: () => void;
  isOpen: boolean;
  lang: string;
  t: (key: string) => string;
}) => {
  if (!category) return null;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}>
      {/* Responsive width: full width on small screens, max-width on larger */}
      <DialogContent className="w-[95vw] max-w-md sm:max-w-[525px] bg-gray-900 border-gray-700 text-gray-100 max-h-[85vh] sm:max-h-[80vh] flex flex-col rounded-lg">
        {/* Modal Header */}
        <DialogHeader className="border-b border-gray-700 p-4">
          {" "}
          {/* Consistent padding */}
          <DialogTitle className="text-xl sm:text-2xl font-semibold text-yellow-400 text-center sm:text-left">
            {category.name[lang]}
          </DialogTitle>
        </DialogHeader>

        {/* Modal Body - Adjusted padding and layout for list items */}
        <div className="p-3 sm:p-4 flex-grow overflow-y-auto space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {category.items.map((item) => (
            // Use flex-col on mobile, flex-row on sm+
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-gray-800 rounded-lg shadow space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex-grow">
                <h4 className="text-base sm:text-lg font-medium text-gray-100">
                  {item.name[lang]}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  {t("ingredients")}: {item.description[lang]}
                </p>
              </div>
              {/* Ensure price is visible and aligned */}
              <p className="text-yellow-400 font-bold text-base sm:text-lg flex-shrink-0 self-end sm:self-center">
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))}
          {category.items.length === 0 && (
            <p className="text-gray-500 text-center py-4">
              No items in this category yet.
            </p>
          )}
        </div>

        {/* Modal Footer - Consistent padding */}
        <DialogFooter className="border-t border-gray-700 p-3 sm:p-4">
          <Button
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 w-full sm:w-auto"
            onClick={onClose}
            size="lg" // Make button larger for easier tapping on mobile
          >
            {t("close")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// --- MAIN APP COMPONENT ---
const LittleLemonApp = () => {
  // State hooks
  const [language, setLanguage] = useState<"en" | "gr">("en");
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [menuData, setMenuData] = useState<MenuCategory[]>([]);

  // Translation function
  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations["en"][key];
  };

  // --- Effects ---
  // Simulate fetching data
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setMenuData(mockMenuCategories);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [language]);

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
    // Added font-inter for better cross-platform rendering
    <div className="bg-gray-950 min-h-screen text-gray-100 font-sans antialiased">
      {/* Adjusted container padding for mobile */}
      <div className="container mx-auto px-3 sm:px-4 pb-12 relative">
        {" "}
        {/* Added relative positioning for absolute child */}
        {/* Language Selector - Adjusted position and size for mobile */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
          <Select
            value={language}
            onValueChange={(value: "en" | "gr") => setLanguage(value)}>
            <SelectTrigger
              className={cn(
                // Responsive width
                "w-[110px] sm:w-[140px] h-9 sm:h-10", // Smaller height/width on mobile
                "bg-gray-800/80 backdrop-blur-sm border-gray-700 text-gray-200", // Added transparency and blur
                "focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-yellow-500 focus:border-yellow-500",
                "flex items-center justify-between",
                "rounded-md shadow-sm text-xs sm:text-sm" // Smaller text on mobile
              )}
              aria-label={t("language")}>
              <SelectValue
                placeholder={t("language")}
                className="text-gray-200"
              />
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 text-gray-400 flex-shrink-0" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700 text-xs sm:text-sm">
              {" "}
              {/* Smaller text */}
              <SelectItem
                value="en"
                className="hover:bg-gray-700/50 text-gray-200 focus:bg-gray-700/50 cursor-pointer min-h-[32px] sm:min-h-0">
                English
              </SelectItem>{" "}
              {/* Min height for touch target */}
              <SelectItem
                value="gr"
                className="hover:bg-gray-700/50 text-gray-200 focus:bg-gray-700/50 cursor-pointer min-h-[32px] sm:min-h-0">
                Ελληνικά
              </SelectItem>{" "}
              {/* Min height for touch target */}
            </SelectContent>
          </Select>
        </div>
        {/* Header Section */}
        <Header
          title={t("headerTitle")}
          subtitle={t("headerSubtitle")}
        />
        {/* Image Carousel Section */}
        <ImageCarousel images={mockCarouselImages} />
        {/* Menu Categories Section Title - Adjusted font size */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-6 md:mb-8 text-center">
          {t("menuCategories")}
        </h2>
        {/* Loading Indicator or Menu Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin text-yellow-500 w-10 h-10 sm:w-12 sm:h-12" />
          </div>
        ) : (
          // Grid for Menu Category Cards - Adjusted columns and gap for mobile
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {" "}
            {/* Start with 2 columns on smallest screens, reduced gap */}
            {menuData.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onSelect={handleCategorySelect}
                lang={language}
                t={t}
              />
            ))}
          </div>
        )}
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

export default LittleLemonApp;

// --- Helper Functions/Types ---
// Ensure you have shadcn/ui components (Carousel, Card, Button, Dialog, Select)
// and utils (cn) installed and properly configured in your Next.js project.
// You might need a globals.css file for base Tailwind styles and potentially font imports.
// Example globals.css content:
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gray-950 text-gray-100;
     font-family: 'Inter', sans-serif; // Example using Inter font
  }
  * {
     @apply border-border; // Optional: Apply border color globally if using shadcn variables
  }
}
// Remember to import Google Fonts (e.g., Inter) in your main layout or _app.tsx/_document.tsx
*/
