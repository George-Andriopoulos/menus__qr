// types/index.ts

/**
 * Represents a single item on the menu.
 * Prices are now optional specific fields.
 */
export interface MenuItem {
  id: string;
  name: { en: string; gr: string };
  description: { en: string; gr: string };
  priceSingle?: string; // Optional: Price for single size/version
  priceDouble?: string; // Optional: Price for double size/version
  priceFixed?: string; // Optional: Price for items with only one price
  image: string;
}

/**
 * Represents a category in the menu.
 */
export interface MenuCategory {
  id: string;
  name: { en: string; gr: string };
  image: string;
  items: MenuItem[];
}

/**
 * Defines the structure for translation strings.
 */
export interface TranslationSet {
  headerTitle: string;
  headerSubtitle: string;
  menuCategories: string;
  language: string;
  ingredients: string;
  price: string; // General price label (might be less used now)
  close: string;
  orderNow: string;
  viewMenu: string;
  // Added keys for modal table headers
  beverages: string;
  single: string;
  double: string;
}

/**
 * Defines the structure for the main translations object.
 */
export interface Translations {
  en: TranslationSet;
  gr: TranslationSet;
}
