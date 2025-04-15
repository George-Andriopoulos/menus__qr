// types/index.ts

/**
 * Represents the structured price information for a menu item.
 * Allows for single price, double price, or a base price.
 * Includes optional unit and modifier (like '+').
 */
export interface PriceInfo {
  single?: number; // Price for single serving (optional)
  double?: number; // Price for double serving (optional)
  base?: number; // Base price for items with one price (optional)
  unit: string; // Currency unit (e.g., '€', '$')
  modifier?: string; // Optional modifier (e.g., '+')
}

/**
 * Represents a single item on the menu.
 */
export interface MenuItem {
  id: string;
  name: { en: string; gr: string }; // Name in English and Greek
  description: { en: string; gr: string }; // Description/Ingredients in English and Greek
  price: PriceInfo; // Use the structured PriceInfo object
}

/**
 * Represents a category in the menu (e.g., Hot Beverages, Snacks).
 */
export interface MenuCategory {
  id: string;
  name: { en: string; gr: string }; // Category name in English and Greek
  image: string; // Representative image URL for the category card
  items: MenuItem[]; // Array of menu items belonging to this category
}

/**
 * Defines the structure for translation strings used in the UI.
 */
export interface TranslationSet {
  headerTitle: string;
  headerSubtitle: string;
  menuCategories: string;
  language: string;
  ingredients: string; // Label for description field in modal
  price: string; // General price label
  close: string;
  orderNow: string;
  viewMenu: string;
  // Keys for modal table headers
  beverages: string; // Label for item name column header
  single: string; // Label for SINGLE price column header
  double: string; // Label for DOUBLE price column header
}

/**
 * Defines the structure for the main translations object,
 * mapping language codes ('en', 'gr') to their respective TranslationSet.
 */
export interface Translations {
  en: TranslationSet;
  gr: TranslationSet;
}
