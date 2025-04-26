// types/casaPlaya.ts (or wherever you keep your Casa Playa specific types)

/**
 * Base Price Information - Copied from original types/index.ts for reference
 * Represents the structured price information for a menu item.
 */
export interface PriceInfo {
  single?: number; // Price for single serving (optional)
  double?: number; // Price for double serving (optional)
  base?: number; // Base price for items with one price (optional)
  unit: string; // Currency unit (e.g., '€', '$')
  modifier?: string; // Optional modifier (e.g., '+')
}

/**
 * Extended Price Information for Casa Playa.
 * Adds specific price tiers (special, premium) and allows "ASK" modifier.
 * --- CORRECTED: Added optional 'forOnePerson' and 'forTwoPersons' ---
 */
export interface CasaPlayaPriceInfo extends PriceInfo {
  special?: number; // Price for special tier (e.g., drinks)
  premium?: number; // Price for premium tier (e.g., drinks)
  forOnePerson?: number; // Optional price for one person (e.g., premium cuts)
  forTwoPersons?: number; // Optional price for two persons (e.g., premium cuts)
  // Override modifier to be more specific if needed, or keep as string
  modifier?: string | "ASK"; // Allows '+' or specific string "ASK"
}

/**
 * Base Menu Item - Copied from original types/index.ts for reference
 * Represents a single item on the menu.
 */
export interface MenuItem {
  id: string;
  name: { en: string; gr: string }; // Name in English and Greek
  description: { en: string; gr: string }; // Description/Ingredients in English and Greek
  price: PriceInfo; // Use the structured PriceInfo object
}

/**
 * Extended Menu Item for Casa Playa.
 * Uses the extended CasaPlayaPriceInfo.
 */
export interface CasaPlayaMenuItem extends MenuItem {
  price: CasaPlayaPriceInfo; // Use the extended price info for Casa Playa items
}

/**
 * Base Menu Category - Copied from original types/index.ts for reference
 * Represents a category in the menu (e.g., Hot Beverages, Snacks).
 */
export interface MenuCategory {
  id: string;
  name: { en: string; gr: string }; // Category name in English and Greek
  image: string; // Representative image URL for the category card
  items: MenuItem[]; // Array of menu items belonging to this category
  images?: string[]; // Optional array of images for gallery-like categories
}

/**
 * Extended Menu Category for Casa Playa.
 * Contains an array of CasaPlayaMenuItem.
 */
export interface CasaPlayaMenuCategory extends MenuCategory {
  items: CasaPlayaMenuItem[]; // Items must conform to the extended Casa Playa item type
}

/**
 * Base Translation Set - Copied from original types/index.ts for reference
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
 * Extended Translation Set for Casa Playa.
 * Adds labels for specific price tiers and the "ASK" modifier.
 * --- CORRECTED: Added optional 'forOnePerson' and 'forTwoPersons' labels ---
 */
export interface CasaPlayaTranslationSet extends TranslationSet {
  // Add keys specific to Casa Playa translations
  ask?: string; // Label for 'Ask Staff' price indicator
  special?: string; // Label for SPECIAL price column header (if needed)
  premium?: string; // Label for PREMIUM price column header (if needed)
  forOnePerson?: string; // Label for 'For 1 Person' price info
  forTwoPersons?: string; // Label for 'For 2 Persons' price info
}

/**
 * Base Translations - Copied from original types/index.ts for reference
 * Defines the structure for the main translations object,
 * mapping language codes ('en', 'gr') to their respective TranslationSet.
 */
export interface Translations {
  en: TranslationSet;
  gr: TranslationSet;
}

/**
 * Extended Translations for Casa Playa.
 * Uses the extended CasaPlayaTranslationSet for each language.
 */
export interface CasaPlayaTranslations extends Translations {
  en: CasaPlayaTranslationSet; // English translations use the extended set
  gr: CasaPlayaTranslationSet; // Greek translations use the extended set
}

// You can now use these CasaPlaya specific types in your constants/casaPlaya.ts file:
// import { CasaPlayaMenuCategory, CasaPlayaTranslations } from "@/types/casaPlaya"; // Adjust import path
// export const mockMenuCategories: CasaPlayaMenuCategory[] = [ ... ];
// export const translations: CasaPlayaTranslations = { ... };
