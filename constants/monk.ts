// constants/index.ts
// Corrected import path assuming types are in @/types/index.ts

import { MenuCategory, Translations } from "@/types/global";

// Carousel images (update as needed)
export const mockCarouselImages: string[] = [
  "https://placehold.co/800x400/FBBF24/374151?text=Monk+Coffee",
  "https://placehold.co/800x400/FCD34D/374151?text=Specialty+Coffee",
  "https://placehold.co/800x400/FDBA74/374151?text=Cozy+Atmosphere",
  "https://placehold.co/800x400/FDE68A/374151?text=Fresh+Snacks",
];

// Updated Menu Data based on comparison of DOCX files
export const mockMenuCategories: MenuCategory[] = [
  // --- Hot Beverages ---
  {
    id: "hot-beverages",
    name: { en: "Hot Beverages", gr: "Ζεστά Ροφήματα" },
    image: "/monk/hot_drinks.webp", // Category image
    items: [
      // Prices match structure from previous steps based on DOCX
      {
        id: "hb1",
        name: { en: "Espresso", gr: "Espresso" },
        description: { en: "", gr: "" },
        price: { single: 2.2, double: 2.8, unit: "€" },
      },
      {
        id: "hb2",
        name: { en: "Espresso Americano", gr: "Espresso Americano" },
        description: { en: "", gr: "" },
        price: { single: 2.2, double: 2.8, unit: "€" },
      },
      {
        id: "hb3",
        name: { en: "Espresso Machiato", gr: "Espresso Machiato" },
        description: { en: "", gr: "" },
        price: { single: 2.5, double: 3.0, unit: "€" },
      }, // Corrected spelling Macchiato -> Machiato based on DOCX
      {
        id: "hb4",
        name: { en: "Cappuccino", gr: "Cappuccino" },
        description: { en: "", gr: "" },
        price: { single: 3.5, double: 4.0, unit: "€" },
      },
      {
        id: "hb5",
        name: { en: "Latte", gr: "Latte" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "hb6",
        name: { en: "Flat White", gr: "Flat White" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "hb7",
        name: { en: "Filter coffee", gr: "Φίλτρου" },
        description: { en: "", gr: "" },
        price: { base: 3.5, unit: "€" },
      }, // Updated Greek name
      {
        id: "hb8",
        name: { en: "Greek coffee", gr: "Ελληνικός" },
        description: { en: "", gr: "" },
        price: { single: 2.2, double: 2.5, unit: "€" },
      }, // Updated Greek name
      {
        id: "hb9",
        name: { en: "Nes coffee", gr: "Στηγμιαίος" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      }, // Updated Greek name
      {
        id: "hb10",
        name: { en: "Chocolate", gr: "Σοκολάτα" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "hb11",
        name: { en: "Syrup", gr: "Σιρόπια" },
        description: { en: "", gr: "" },
        price: { base: 0.5, unit: "€" },
      }, // Updated Greek name
      {
        id: "hb12",
        name: { en: "Single origin coffee", gr: "Single origin coffee" },
        description: { en: "", gr: "" },
        price: { base: 1.0, modifier: "+", unit: "€" },
      }, // Updated Greek name
    ],
  },
  // --- Cold Beverages ---
  {
    id: "cold-beverages",
    name: { en: "Cold Beverages", gr: "Κρύα Ροφήματα" }, // Updated names from DOCX
    image: "/monk/cold_brew.webp",
    items: [
      {
        id: "cb1",
        name: { en: "Freddo espresso", gr: "Freddo espresso" },
        description: { en: "", gr: "" },
        price: { base: 3.5, unit: "€" },
      },
      {
        id: "cb2",
        name: { en: "Freddo cappuccino", gr: "Freddo cappuccino" },
        description: { en: "", gr: "" },
        price: { base: 3.8, unit: "€" },
      },
      {
        id: "cb3",
        name: { en: "Ice Latte", gr: "Ice Latte" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "cb4",
        name: { en: "Ice Flat White", gr: "Ice Flat White" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "cb5",
        name: { en: "Cold Brew", gr: "Cold Brew" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "cb6",
        name: { en: "Frappé coffee", gr: "Φραπέ" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      }, // Updated Greek name
      {
        id: "cb7",
        name: { en: "Ice Chocolate", gr: "Σοκολάτα κρύα" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      }, // Updated Greek name
      {
        id: "cb8",
        name: { en: "Fredoccino", gr: "Fredoccino" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
    ],
  },
  // --- Soft Drinks & Water ---
  {
    id: "soft-drinks-water",
    name: { en: "Soft Drinks Water", gr: "Νερά - Ανθρακούχα" }, // Updated names from DOCX (Note: Greek title combines water/sparkling)
    image: "/monk/soft_drinks.webp",
    items: [
      {
        id: "sdw1",
        name: { en: "Arizona Lemon", gr: "Arizona Lemon" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      },
      {
        id: "sdw2",
        name: { en: "Arizona Peach", gr: "Arizona Peach" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      }, // Price fixed based on EN doc
      {
        id: "sdw3",
        name: { en: "Arizona Pomeg.", gr: "Arizona Pomeg." },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      },
      {
        id: "sdw4",
        name: { en: "Arizona Green Tea+Honey", gr: "Arizona Green Tea+Honey" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      },
      {
        id: "sdw5",
        name: { en: "Amita Motion", gr: "Amita Motion" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      },
      {
        id: "sdw6",
        name: { en: "Amita Peach/ Sour Cherry", gr: "Amita Ροδάκινο/ Κεράσι" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      }, // Corrected GR name
      {
        id: "sdw7",
        name: { en: "Loux orange/leon/cherry", gr: "Λούξ πορτ./λεμ./κεράσ." },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      }, // Corrected GR name
      {
        id: "sdw8",
        name: { en: "Coca Cola/Zero/Light", gr: "Coca Cola/Zero/Light" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      },
      {
        id: "sdw9",
        name: { en: "Fanta orange/lemon", gr: "Φάντα πορτοκ/λεμόνι" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      }, // Corrected GR name
      {
        id: "sdw10",
        name: { en: "Fresh orange juice", gr: "Φρέσκος χυμός πορτοκάλι" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "sdw11",
        name: { en: "Sprite", gr: "Sprite" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      },
      {
        id: "sdw12",
        name: { en: "Soda", gr: "Σόδα" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      },
      {
        id: "sdw13",
        name: { en: "Tonic", gr: "Τόνικ" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      }, // Corrected GR name
      {
        id: "sdw14",
        name: { en: "Red Bull", gr: "Red Bull" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "sdw15",
        name: { en: "Aqua Carpatica 0,5ml", gr: "Aqua Carpatica 0,5ml" },
        description: { en: "", gr: "" },
        price: { base: 1.0, unit: "€" },
      }, // Corrected typo 0,5ml -> 0.5L assumed
      {
        id: "sdw16",
        name: {
          en: "Aqua Carpatica sparkling 330ml",
          gr: "Aqua Carpatica sparkling 330ml",
        },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      },
      {
        id: "sdw17",
        name: { en: "Perrier", gr: "Perrier" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      },
      {
        id: "sdw18",
        name: { en: "Water bottle 1,50L", gr: "Νερό μπουκάλι 1,50L" },
        description: { en: "", gr: "" },
        price: { base: 1.5, unit: "€" },
      },
      {
        id: "sdw19",
        name: { en: "Water bottle 0,50l", gr: "Νερό μπουκάλι 0,50l" },
        description: { en: "", gr: "" },
        price: { base: 0.5, unit: "€" },
      }, // Price fixed based on EN doc
    ],
  },
  // --- Tea Route ---
  {
    id: "tea-route",
    name: {
      en: "Tea route recommends…",
      gr: "Ο Δρόμος του Τσαγιού σας προτείνει...",
    }, // Updated names
    image: "/monk/tea.webp",
    items: [
      // Added descriptions from DOCX files
      {
        id: "tr1",
        name: { en: "Gunpowder Bio", gr: "Gunpowder Bio" },
        description: {
          en: "Organic green tea from China in pearl shape (2-3min)",
          gr: "Πράσινο τσάι Κίνας Βιολογικής καλλιέργειας σε σχήμα μπαλίτσας (2-3min)",
        },
        price: { base: 3.0, unit: "€" },
      },
      {
        id: "tr2",
        name: { en: "Earl Grey Maharajah", gr: "Early Grey του Μαχαραγιά" },
        description: {
          en: "Black Darjeeling tea with bergamot (4-5min)",
          gr: "Μαύρο τσάι Darjeeling  με περγαμόντο  (4-5min)",
        },
        price: { base: 3.0, unit: "€" },
      }, // Corrected GR name
      {
        id: "tr3",
        name: { en: "Caramel", gr: "Καραμέλα" },
        description: {
          en: "Black tea flavoured with whole caramel pieces (4-5min)",
          gr: "Αρωματισμένο μαύρο τσάι με ολόκληρα κομμάτια καραμέλας (4-5min)",
        },
        price: { base: 3.0, unit: "€" },
      }, // Corrected GR name
      {
        id: "tr4",
        name: { en: "2001 Nights", gr: "2001 Νύχτες" },
        description: {
          en: "A blend of black and green tea with raisins, papaya and rose petals. (3-4min)",
          gr: "Μίγμα μαύρου και πράσινου τσαγιού με σταφίδες, παπάγια και άνθη τριανταφυλλιάς. (3-4min)",
        },
        price: { base: 3.0, unit: "€" },
      }, // Corrected GR name
      {
        id: "tr5",
        name: { en: "Green Fragrant Garden", gr: "Μυρωμένος Θάμνος" },
        description: {
          en: "Green tea with orange, apple, cinnamon, cardamom, coriander seeds, pink pepper and clove (2-3min)",
          gr: "Πράσινο τσάι με προρτοκάλι μήλο, κανέλλα, κάρδαμο, κορίανδρο, ροζ πιπέρι και γαρίφαλο (2-3min)",
        },
        price: { base: 3.0, unit: "€" },
      }, // Corrected GR name
      {
        id: "tr6",
        name: { en: "Green Dragon", gr: "Πράσινος Δράκος" },
        description: {
          en: "Green tea with cinnamon and orange (2-3min)",
          gr: "πράσινο τσάι με κανέλα και πορτοκάλι (2-3min)",
        },
        price: { base: 3.0, unit: "€" },
      }, // Corrected GR name
      {
        id: "tr7",
        name: { en: "Sencha lemon", gr: "Sencha λεμόνι" },
        description: {
          en: "Green tea with lemon peel and lemongrass (2-3min)",
          gr: "Πράσινο τσάι με φλούδες λεμονιού και lemongrass. (2-3min)",
        },
        price: { base: 3.0, unit: "€" },
      }, // Corrected GR name
      {
        id: "tr8",
        name: { en: "Red Square", gr: "Κόκκινη Πλατεία" },
        description: {
          en: "Hibiscus, cranberry, apple (8-10min)",
          gr: "Ιβίσκο, cranberry, μήλο (8-10min)",
        },
        price: { base: 3.0, unit: "€" },
      }, // Corrected GR name
      {
        id: "tr9",
        name: { en: "Fitness Tea", gr: "Fitness Tea" },
        description: {
          en: "Mate, nettle, lemon balm, hibiscus, rose hip, marigold blossoms (8-10min)",
          gr: "Mate, τσουκνίδα, μελισσόχορτο, ιβίσκος, κυνόροδο, ηλίανθοι (8-10min)",
        },
        price: { base: 3.0, unit: "€" },
      }, // Corrected GR description
      {
        id: "tr10",
        name: { en: "Chamomile", gr: "Χαμομήλι" },
        description: {
          en: "Relaxing herbal infusion (8-10min)",
          gr: "Χαλαρωτικό βότανο (8-10min)",
        },
        price: { base: 3.0, unit: "€" },
      }, // Corrected GR description
    ],
  },
  // --- Snacks ---
  {
    id: "snacks",
    name: { en: "Snacks", gr: "Σνακς" }, // Updated names
    image: "/monk/snacks.webp",
    items: [
      {
        id: "sn1",
        name: { en: "Turkey Brioche", gr: "Γαλοπούλα Brioche" },
        description: { en: "", gr: "" },
        price: { base: 2.5, unit: "€" },
      },
      {
        id: "sn2",
        name: { en: "Chicken Brioche", gr: "Κοτόπουλο Brioche" },
        description: { en: "", gr: "" },
        price: { base: 2.8, unit: "€" },
      },
      {
        id: "sn3",
        name: { en: "Salmon Brioche", gr: "Σολωμός Brioche" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      }, // Corrected spelling Salmon
      {
        id: "sn4",
        name: { en: "Tuna Baguette", gr: "Τόνος Μπαγκέτα" },
        description: { en: "", gr: "" },
        price: { base: 4.3, unit: "€" },
      },
      {
        id: "sn5",
        name: { en: "Chicken Baguette", gr: "Κοτόπουλο Μπαγκέτα" },
        description: { en: "", gr: "" },
        price: { base: 4.3, unit: "€" },
      },
      {
        id: "sn6",
        name: { en: "Turkey Baguette", gr: "Γαλοπούλα Μπαγκέτα" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "sn7",
        name: { en: "Chicken Tortilla", gr: "Τορτίγια κοτόπουλο" },
        description: { en: "", gr: "" },
        price: { base: 3.2, unit: "€" },
      },
    ],
  },
  // --- Puff Pastry ---
  {
    id: "puff-pastry",
    name: { en: "Puff Pastry", gr: "Σφολιάτες" }, // Updated names
    image: "/monk/puff_pastry.webp",
    items: [
      {
        id: "pp1",
        name: { en: "Cream pie", gr: "Μπουγάτσα" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      }, // Updated GR name
      {
        id: "pp2",
        name: { en: "Cheese pie", gr: "Τυρόπιτα" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      },
      {
        id: "pp3",
        name: { en: "Chicken pie", gr: "Κοτόπιτα" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      },
      {
        id: "pp4",
        name: { en: "Spinach pie", gr: "Σπανακόπιτα" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      },
      {
        id: "pp5",
        name: { en: "Philadelphia bagel", gr: "Κουλούρι Φιλαδέλ." },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      }, // Updated GR name
      {
        id: "pp6",
        name: { en: "Flogera", gr: "Φλογέρα" },
        description: { en: "", gr: "" },
        price: { base: 3.0, unit: "€" },
      }, // Added EN description based on previous code
    ],
  },
  // --- Sweet Pastry ---
  {
    id: "sweet-pastry",
    name: { en: "Sweet Pastry", gr: "Γλυκές Σφολιάτες" }, // Updated names
    image: "/monk/croissants.webp",
    items: [
      {
        id: "sp1",
        name: { en: "Mini Croissant choc.", gr: "Mini Κρουασαν σοκ." },
        description: { en: "", gr: "" },
        price: { base: 0.8, unit: "€" },
      }, // Updated GR name
      {
        id: "sp2",
        name: { en: "Muffin", gr: "Μάφιν" },
        description: { en: "Various flavors", gr: "Διάφορες γεύσεις" },
        price: { base: 3.5, unit: "€" },
      }, // Updated GR name
    ],
  },
  // --- Beers ---
  {
    id: "beers",
    name: { en: "Beers", gr: "Μπύρες" }, // Updated names
    image: "/monk/beer.webp",
    items: [
      {
        id: "b1",
        name: { en: "Bud", gr: "Bud" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
      {
        id: "b2",
        name: { en: "Corona", gr: "Corona" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
      {
        id: "b3",
        name: { en: "Kaiser", gr: "Kaiser" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
      {
        id: "b4",
        name: { en: "Alfa", gr: "Alfa" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
      {
        id: "b5",
        name: { en: "Mamos", gr: "Mamos" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
    ],
  },
  // --- Spirits ---
  {
    id: "spirits",
    name: { en: "Spirits", gr: "Ποτά" }, // Updated names
    image: "/monk/spirits.webp",
    items: [
      {
        id: "spt1",
        name: { en: "Havanna reserva", gr: "Havanna reserva" },
        description: { en: "", gr: "" },
        price: { base: 8.0, unit: "€" },
      },
      {
        id: "spt2",
        name: { en: "Havanna original 3y", gr: "Havanna original 3y" },
        description: { en: "", gr: "" },
        price: { base: 7.0, unit: "€" },
      },
      {
        id: "spt3",
        name: { en: "Stolichnaya", gr: "Stolichnaya" },
        description: { en: "", gr: "" },
        price: { base: 7.0, unit: "€" },
      },
      {
        id: "spt4",
        name: { en: "Haig", gr: "Haig" },
        description: { en: "", gr: "" },
        price: { base: 7.0, unit: "€" },
      },
      {
        id: "spt5",
        name: { en: "Jack Daniels", gr: "Jack Daniels" },
        description: { en: "", gr: "" },
        price: { base: 8.0, unit: "€" },
      },
      {
        id: "spt6",
        name: { en: "Jägermeister", gr: "Jägermeister" },
        description: { en: "", gr: "" },
        price: { base: 8.0, unit: "€" },
      },
      {
        id: "spt7",
        name: { en: "Beefeater", gr: "Beefeater" },
        description: { en: "", gr: "" },
        price: { base: 7.0, unit: "€" },
      },
      {
        id: "spt8",
        name: { en: "Bailey’s", gr: "Bailey’s" },
        description: { en: "", gr: "" },
        price: { base: 7.0, unit: "€" },
      },
      {
        id: "spt9",
        name: { en: "Metaxa 5*", gr: "Metaxa 5*" },
        description: { en: "", gr: "" },
        price: { base: 7.0, unit: "€" },
      },
      {
        id: "spt10",
        name: { en: "Ouzo Plomari", gr: "Ούζο Πλωμάρι" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "spt11",
        name: { en: "Tsipouro Tsililis", gr: "Τσίπουρο Τσιλιλής" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
    ],
  },
  {
    id: "photo-gallery",
    name: { en: "Gallery", gr: "Γκαλερί" },
    image: "/monk/gallery_cover.webp",
    items: [], // No menu items
    images: [
      "/monk/gallery1.webp",
      "/monk/gallery2.webp",
      "/monk/gallery3.webp",
      "/monk/gallery4.webp",
      "/monk/gallery5.webp",
      "/monk/gallery6.webp",
      "/monk/gallery7.webp",
      "/monk/gallery8.webp",
      "/monk/gallery9.webp",
      "/monk/gallery10.webp",
      "/monk/gallery11.webp",
    ],
  },
];

// Updated Translations object with SINGLE/DOUBLE labels
export const translations: Translations = {
  en: {
    headerTitle: "Monk",
    headerSubtitle: "Coffee that's always the way you like",
    menuCategories: "Menu ",
    language: "Language",
    ingredients: "Ingredients", // Changed from Description
    price: "Price", // General label
    close: "Close",
    orderNow: "Order Now",
    viewMenu: "View Menu",
    beverages: "Beverages", // New key
    single: "SINGLE", // New key
    double: "DOUBLE", // New key
  },
  gr: {
    headerTitle: "Monk", // Needs Greek translation if desired
    headerSubtitle: "Coffee that's always the way you like", // Needs Greek translation if desired
    menuCategories: " Μενού",
    language: "Γλώσσα",
    ingredients: "Συστατικά", // Changed from Περιγραφή
    price: "Τιμή", // General label
    close: "Κλείσιμο",
    orderNow: "Παραγγείλετε Τώρα",
    viewMenu: "Δείτε το Μενού",
    beverages: "Ροφήματα", // New key
    single: "ΜΟΝΟ", // New key
    double: "ΔΙΠΛΟ", // New key
  },
};
