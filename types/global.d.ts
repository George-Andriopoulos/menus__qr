/**
 * Represents a single item on the menu.
 */
export interface MenuItem {
  id: string;
  name: { en: string; gr: string }; // Name in English and Greek
  description: { en: string; gr: string }; // Description/Ingredients in English and Greek
  price: number;
  image: string; // Image URL for the item (optional, could be used in modal)
}

/**
 * Represents a category in the menu (e.g., Starters, Mains).
 */
export interface MenuCategory {
  id: string;
  name: { en: string; gr: string }; // Category name in English and Greek
  image: string; // Representative image URL for the category card
  items: MenuItem[]; // Array of menu items belonging to this category
}

/**
 * Defines the structure for translation strings.
 * Uses keyof typeof translations.en for type safety in the t function.
 */
export interface TranslationSet {
  headerTitle: string;
  headerSubtitle: string;
  menuCategories: string;
  language: string;
  ingredients: string;
  price: string;
  close: string;
  orderNow: string;
  viewMenu: string;
}

/**
 * Defines the structure for the main translations object,
 * mapping language codes ('en', 'gr') to their respective TranslationSet.
 */
export interface Translations {
  en: TranslationSet;
  gr: TranslationSet;
}
