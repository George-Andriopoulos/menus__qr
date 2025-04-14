// constants/index.ts
import type { MenuCategory, Translations } from "@/types"; // Adjust path if needed

/**
 * Mock data for image URLs in the carousel.
 * Replace with your actual image URLs or fetch dynamically.
 */
export const mockCarouselImages: string[] = [
  "https://placehold.co/800x400/FBBF24/374151?text=Restaurant+View",
  "https://placehold.co/800x400/FCD34D/374151?text=Delicious+Food",
  "https://placehold.co/800x400/FDBA74/374151?text=Cozy+Ambiance",
  "https://placehold.co/800x400/FDE68A/374151?text=Special+Dish",
];

/**
 * Mock data for menu categories and their items.
 * Replace with your actual menu data, potentially fetched from an API.
 */
export const mockMenuCategories: MenuCategory[] = [
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

/**
 * Translation strings for different languages.
 */
export const translations: Translations = {
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
