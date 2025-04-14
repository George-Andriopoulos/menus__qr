// constants/index.ts
import type { MenuCategory, Translations } from "@/types"; // Adjust path if needed

// Carousel images (update as needed)
export const mockCarouselImages: string[] = [
  "https://placehold.co/800x400/FBBF24/374151?text=Monk+Coffee",
  "https://placehold.co/800x400/FCD34D/374151?text=Specialty+Coffee",
  "https://placehold.co/800x400/FDBA74/374151?text=Cozy+Atmosphere",
  "https://placehold.co/800x400/FDE68A/374151?text=Fresh+Snacks",
];

// Updated Menu Data with Euro sign after price
export const mockMenuCategories: MenuCategory[] = [
  // --- Hot Beverages ---
  {
    id: "hot-beverages",
    name: { en: "Hot Beverages", gr: "Ζεστά Ροφήματα" },
    image: "https://placehold.co/400x300/a5522a/ffffff?text=Hot+Drinks",
    items: [
      {
        id: "hb1",
        name: { en: "Espresso", gr: "Espresso" },
        description: { en: "", gr: "" },
        price: "2.20€ / 2.80€",
        image: "https://placehold.co/100x100/d4a081/ffffff?text=Espresso",
      },
      {
        id: "hb2",
        name: { en: "Espresso Americano", gr: "Espresso Americano" },
        description: { en: "", gr: "" },
        price: "2.20€ / 2.80€",
        image: "https://placehold.co/100x100/d4a081/ffffff?text=Americano",
      },
      {
        id: "hb3",
        name: { en: "Espresso Macchiato", gr: "Espresso Macchiato" },
        description: { en: "", gr: "" },
        price: "2.50€ / 3.00€",
        image: "https://placehold.co/100x100/d4a081/ffffff?text=Macchiato",
      },
      {
        id: "hb4",
        name: { en: "Cappuccino", gr: "Cappuccino" },
        description: { en: "", gr: "" },
        price: "3.50€ / 4.00€",
        image: "https://placehold.co/100x100/e4b89a/ffffff?text=Cappuccino",
      },
      {
        id: "hb5",
        name: { en: "Latte", gr: "Latte" },
        description: { en: "", gr: "" },
        price: "4.00€",
        image: "https://placehold.co/100x100/e4b89a/ffffff?text=Latte",
      },
      {
        id: "hb6",
        name: { en: "Flat White", gr: "Flat White" },
        description: { en: "", gr: "" },
        price: "4.00€",
        image: "https://placehold.co/100x100/e4b89a/ffffff?text=Flat+White",
      },
      {
        id: "hb7",
        name: { en: "Filter Coffee", gr: "Καφές Φίλτρου" },
        description: { en: "", gr: "" },
        price: "3.50€",
        image: "https://placehold.co/100x100/bf8a6e/ffffff?text=Filter",
      },
      {
        id: "hb8",
        name: { en: "Greek Coffee", gr: "Ελληνικός Καφές" },
        description: { en: "", gr: "" },
        price: "2.20€ / 2.50€",
        image: "https://placehold.co/100x100/bf8a6e/ffffff?text=Greek",
      },
      {
        id: "hb9",
        name: { en: "Nes Coffee", gr: "Nes Καφές" },
        description: { en: "(Nescafé)", gr: "(Nescafé)" },
        price: "3.00€",
        image: "https://placehold.co/100x100/bf8a6e/ffffff?text=Nes",
      },
      {
        id: "hb10",
        name: { en: "Chocolate", gr: "Σοκολάτα" },
        description: { en: "Hot Chocolate Drink", gr: "Ζεστή Σοκολάτα Ρόφημα" },
        price: "4.00€",
        image: "https://placehold.co/100x100/7a3a1f/ffffff?text=Choco",
      },
      {
        id: "hb11",
        name: { en: "Syrup", gr: "Σιρόπι" },
        description: { en: "Add flavor syrup", gr: "Προσθήκη σιροπιού γεύσης" },
        price: "0.50€",
        image: "https://placehold.co/100x100/cccccc/ffffff?text=Syrup",
      },
      {
        id: "hb12",
        name: { en: "Single Origin Coffee", gr: "Καφές Μονοποικιλιακός" },
        description: {
          en: "Additional charge for single origin",
          gr: "Επιπλέον χρέωση για μονοποικιλιακό",
        },
        price: "+ 1.00€",
        image: "https://placehold.co/100x100/bf8a6e/ffffff?text=Origin",
      },
    ],
  },
  // --- Cold Beverages ---
  {
    id: "cold-beverages",
    name: { en: "Cold Beverages", gr: "Κρύα Ροφήματα" },
    image: "https://placehold.co/400x300/63a1c7/ffffff?text=Cold+Drinks",
    items: [
      {
        id: "cb1",
        name: { en: "Freddo Espresso", gr: "Freddo Espresso" },
        description: { en: "", gr: "" },
        price: "3.50€",
        image: "https://placehold.co/100x100/a1c8e1/ffffff?text=F.Espresso",
      },
      {
        id: "cb2",
        name: { en: "Freddo Cappuccino", gr: "Freddo Cappuccino" },
        description: { en: "", gr: "" },
        price: "3.80€",
        image: "https://placehold.co/100x100/a1c8e1/ffffff?text=F.Cappuccino",
      },
      {
        id: "cb3",
        name: { en: "Ice Latte", gr: "Ice Latte" },
        description: { en: "", gr: "" },
        price: "4.00€",
        image: "https://placehold.co/100x100/a1c8e1/ffffff?text=Ice+Latte",
      },
      {
        id: "cb4",
        name: { en: "Ice Flat White", gr: "Ice Flat White" },
        description: { en: "", gr: "" },
        price: "4.00€",
        image: "https://placehold.co/100x100/a1c8e1/ffffff?text=Ice+Flat+White",
      },
      {
        id: "cb5",
        name: { en: "Cold Brew", gr: "Cold Brew" },
        description: { en: "", gr: "" },
        price: "4.00€",
        image: "https://placehold.co/100x100/8db4d1/ffffff?text=Cold+Brew",
      },
      {
        id: "cb6",
        name: { en: "Frappé Coffee", gr: "Καφές Frappé" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/8db4d1/ffffff?text=Frappe",
      },
      {
        id: "cb7",
        name: { en: "Ice Chocolate", gr: "Κρύα Σοκολάτα" },
        description: { en: "", gr: "" },
        price: "4.00€",
        image: "https://placehold.co/100x100/8db4d1/ffffff?text=Ice+Choco",
      },
      {
        id: "cb8",
        name: { en: "Fredoccino", gr: "Fredoccino" },
        description: { en: "", gr: "" },
        price: "5.00€",
        image: "https://placehold.co/100x100/8db4d1/ffffff?text=Fredoccino",
      },
    ],
  },
  // --- Soft Drinks & Water ---
  {
    id: "soft-drinks-water",
    name: { en: "Soft Drinks & Water", gr: "Αναψυκτικά & Νερά" },
    image: "https://placehold.co/400x300/76c7c0/ffffff?text=Soft+Drinks",
    items: [
      {
        id: "sdw1",
        name: { en: "Arizona Lemon", gr: "Arizona Λεμόνι" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/a3d9d5/ffffff?text=Arizona",
      },
      {
        id: "sdw2",
        name: { en: "Arizona Peach", gr: "Arizona Ροδάκινο" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/a3d9d5/ffffff?text=Arizona",
      },
      {
        id: "sdw3",
        name: { en: "Arizona Pomegranate", gr: "Arizona Ρόδι" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/a3d9d5/ffffff?text=Arizona",
      },
      {
        id: "sdw4",
        name: {
          en: "Arizona Green Tea+Honey",
          gr: "Arizona Πράσινο Τσάι+Μέλι",
        },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/a3d9d5/ffffff?text=Arizona",
      },
      {
        id: "sdw5",
        name: { en: "Amita Motion", gr: "Amita Motion" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/bde4e0/ffffff?text=Amita",
      },
      {
        id: "sdw6",
        name: {
          en: "Amita Peach / Sour Cherry",
          gr: "Amita Ροδάκινο / Βύσσινο",
        },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/bde4e0/ffffff?text=Amita",
      },
      {
        id: "sdw7",
        name: {
          en: "Loux Orange / Lemon / Cherry",
          gr: "Λουξ Πορτοκάλι / Λεμόνι / Βύσσινο",
        },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/bde4e0/ffffff?text=Loux",
      },
      {
        id: "sdw8",
        name: {
          en: "Coca Cola / Zero / Light",
          gr: "Coca Cola / Zero / Light",
        },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/c93a3a/ffffff?text=Cola",
      },
      {
        id: "sdw9",
        name: { en: "Fanta Orange / Lemon", gr: "Fanta Πορτοκάλι / Λεμόνι" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/f58220/ffffff?text=Fanta",
      },
      {
        id: "sdw10",
        name: { en: "Fresh Orange Juice", gr: "Φρέσκος Χυμός Πορτοκάλι" },
        description: { en: "", gr: "" },
        price: "4.00€",
        image: "https://placehold.co/100x100/ffcc00/ffffff?text=Juice",
      },
      {
        id: "sdw11",
        name: { en: "Sprite", gr: "Sprite" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/009933/ffffff?text=Sprite",
      },
      {
        id: "sdw12",
        name: { en: "Soda", gr: "Σόδα" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/cccccc/ffffff?text=Soda",
      },
      {
        id: "sdw13",
        name: { en: "Tonic", gr: "Tonic" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/cccccc/ffffff?text=Tonic",
      },
      {
        id: "sdw14",
        name: { en: "Red Bull", gr: "Red Bull" },
        description: { en: "", gr: "" },
        price: "4.00€",
        image: "https://placehold.co/100x100/0044cc/ffffff?text=RB",
      },
      {
        id: "sdw15",
        name: { en: "Aqua Carpatica 0.5L", gr: "Aqua Carpatica 0.5L" },
        description: { en: "Still Water", gr: "Εμφιαλωμένο Νερό" },
        price: "1.00€",
        image: "https://placehold.co/100x100/add8e6/ffffff?text=Water",
      },
      {
        id: "sdw16",
        name: {
          en: "Aqua Carpatica Sparkling 330ml",
          gr: "Aqua Carpatica Ανθρακούχο 330ml",
        },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/add8e6/ffffff?text=Sparkling",
      },
      {
        id: "sdw17",
        name: { en: "Perrier", gr: "Perrier" },
        description: { en: "Sparkling Water", gr: "Ανθρακούχο Νερό" },
        price: "3.00€",
        image: "https://placehold.co/100x100/add8e6/ffffff?text=Perrier",
      },
      {
        id: "sdw18",
        name: { en: "Water Bottle 1.5L", gr: "Νερό Μπουκάλι 1.5L" },
        description: { en: "", gr: "" },
        price: "1.50€",
        image: "https://placehold.co/100x100/add8e6/ffffff?text=Water+L",
      },
      {
        id: "sdw19",
        name: { en: "Water Bottle 0.5L", gr: "Νερό Μπουκάλι 0.5L" },
        description: { en: "", gr: "" },
        price: "0.50€",
        image: "https://placehold.co/100x100/add8e6/ffffff?text=Water+S",
      },
    ],
  },
  // --- Tea Route ---
  {
    id: "tea-route",
    name: { en: "Tea Route Recommends", gr: "Προτάσεις Τσαγιού" },
    image: "https://placehold.co/400x300/8fbc8f/ffffff?text=Tea+Route",
    items: [
      // Note: All teas are 3.00€
      {
        id: "tr1",
        name: { en: "Gunpowder Bio", gr: "[GR] Gunpowder Bio" },
        description: {
          en: "Organic green tea from China in pearl shape (2-3min)",
          gr: "Οργανικό πράσινο τσάι Κίνας σε σχήμα πέρλας (2-3 λεπτά)",
        },
        price: "3.00€",
        image: "https://placehold.co/100x100/b2d8b2/ffffff?text=Tea",
      },
      {
        id: "tr2",
        name: { en: "Earl Grey Maharajah", gr: "[GR] Earl Grey Maharajah" },
        description: {
          en: "Black Darjeeling tea with bergamot (4-5min)",
          gr: "Μαύρο τσάι Darjeeling με περγαμόντο (4-5 λεπτά)",
        },
        price: "3.00€",
        image: "https://placehold.co/100x100/b2d8b2/ffffff?text=Tea",
      },
      {
        id: "tr3",
        name: { en: "Caramel", gr: "[GR] Caramel" },
        description: {
          en: "Black tea flavoured with whole caramel pieces (4-5min)",
          gr: "Μαύρο τσάι αρωματισμένο με κομμάτια καραμέλας (4-5 λεπτά)",
        },
        price: "3.00€",
        image: "https://placehold.co/100x100/b2d8b2/ffffff?text=Tea",
      },
      {
        id: "tr4",
        name: { en: "2001 Nights", gr: "[GR] 2001 Nights" },
        description: {
          en: "A blend of black and green tea with raisins, papaya and rose petals (3-4min)",
          gr: "Μείγμα μαύρου και πράσινου τσαγιού με σταφίδες, παπάγια και ροδοπέταλα (3-4 λεπτά)",
        },
        price: "3.00€",
        image: "https://placehold.co/100x100/b2d8b2/ffffff?text=Tea",
      },
      {
        id: "tr5",
        name: { en: "Green Fragrant Garden", gr: "[GR] Green Fragrant Garden" },
        description: {
          en: "Green tea with orange, apple, cinnamon, cardamom, coriander seeds, pink pepper and clove (2-3min)",
          gr: "Πράσινο τσάι με πορτοκάλι, μήλο, κανέλα, κάρδαμο, σπόρους κόλιανδρου, ροζ πιπέρι και γαρύφαλλο (2-3 λεπτά)",
        },
        price: "3.00€",
        image: "https://placehold.co/100x100/b2d8b2/ffffff?text=Tea",
      },
      {
        id: "tr6",
        name: { en: "Green Dragon", gr: "[GR] Green Dragon" },
        description: {
          en: "Green tea with cinnamon and orange (2-3min)",
          gr: "Πράσινο τσάι με κανέλα και πορτοκάλι (2-3 λεπτά)",
        },
        price: "3.00€",
        image: "https://placehold.co/100x100/b2d8b2/ffffff?text=Tea",
      },
      {
        id: "tr7",
        name: { en: "Sencha lemon", gr: "[GR] Sencha lemon" },
        description: {
          en: "Green tea with lemon peel and lemongrass (2-3min)",
          gr: "Πράσινο τσάι με φλούδα λεμονιού και λεμονόχορτο (2-3 λεπτά)",
        },
        price: "3.00€",
        image: "https://placehold.co/100x100/b2d8b2/ffffff?text=Tea",
      },
      {
        id: "tr8",
        name: { en: "Red Square", gr: "[GR] Red Square" },
        description: {
          en: "Hibiscus, cranberry, apple (8-10min)",
          gr: "Ιβίσκος, κράνμπερι, μήλο (8-10 λεπτά)",
        },
        price: "3.00€",
        image: "https://placehold.co/100x100/d8b2b2/ffffff?text=Tea",
      },
      {
        id: "tr9",
        name: { en: "Fitness Tea", gr: "[GR] Fitness Tea" },
        description: {
          en: "Mate, nettle, lemon balm, hibiscus, rose hip, marigold blossoms (8-10min)",
          gr: "Μάτε, τσουκνίδα, μελισσόχορτο, ιβίσκος, αγριοτριανταφυλλιά, άνθη καλέντουλας (8-10 λεπτά)",
        },
        price: "3.00€",
        image: "https://placehold.co/100x100/b2d8b2/ffffff?text=Tea",
      },
      {
        id: "tr10",
        name: { en: "Chamomile", gr: "Χαμομήλι" },
        description: {
          en: "Relaxing herbal infusion (8-10min)",
          gr: "Χαλαρωτικό αφέψημα βοτάνων (8-10 λεπτά)",
        },
        price: "3.00€",
        image: "https://placehold.co/100x100/d8d8b2/ffffff?text=Tea",
      },
    ],
  },
  // --- Snacks ---
  {
    id: "snacks",
    name: { en: "Snacks", gr: "Σνακς" },
    image: "https://placehold.co/400x300/f5c77e/ffffff?text=Snacks",
    items: [
      {
        id: "sn1",
        name: { en: "Turkey Brioche", gr: "Brioche Γαλοπούλα" },
        description: { en: "", gr: "" },
        price: "2.50€",
        image: "https://placehold.co/100x100/f8d7a0/ffffff?text=Brioche",
      },
      {
        id: "sn2",
        name: { en: "Chicken Brioche", gr: "Brioche Κοτόπουλο" },
        description: { en: "", gr: "" },
        price: "2.80€",
        image: "https://placehold.co/100x100/f8d7a0/ffffff?text=Brioche",
      },
      {
        id: "sn3",
        name: { en: "Salmon Brioche", gr: "Brioche Σολομός" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/f8d7a0/ffffff?text=Brioche",
      },
      {
        id: "sn4",
        name: { en: "Tuna Baguette", gr: "Μπαγκέτα Τόνος" },
        description: { en: "", gr: "" },
        price: "4.30€",
        image: "https://placehold.co/100x100/f9e1c2/ffffff?text=Baguette",
      },
      {
        id: "sn5",
        name: { en: "Chicken Baguette", gr: "Μπαγκέτα Κοτόπουλο" },
        description: { en: "", gr: "" },
        price: "4.30€",
        image: "https://placehold.co/100x100/f9e1c2/ffffff?text=Baguette",
      },
      {
        id: "sn6",
        name: { en: "Turkey Baguette", gr: "Μπαγκέτα Γαλοπούλα" },
        description: { en: "", gr: "" },
        price: "4.00€",
        image: "https://placehold.co/100x100/f9e1c2/ffffff?text=Baguette",
      },
      {
        id: "sn7",
        name: { en: "Chicken Tortilla", gr: "Τορίγια Κοτόπουλο" },
        description: { en: "", gr: "" },
        price: "3.20€",
        image: "https://placehold.co/100x100/f8d7a0/ffffff?text=Tortilla",
      },
    ],
  },
  // --- Puff Pastry ---
  {
    id: "puff-pastry",
    name: { en: "Puff Pastry", gr: "Σφολιάτες" },
    image: "https://placehold.co/400x300/d2b48c/ffffff?text=Puff+Pastry",
    items: [
      {
        id: "pp1",
        name: { en: "Cream Pie", gr: "Μπουγάτσα Κρέμα" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/e1cba4/ffffff?text=Pie",
      },
      {
        id: "pp2",
        name: { en: "Cheese Pie", gr: "Τυρόπιτα" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/e1cba4/ffffff?text=Pie",
      },
      {
        id: "pp3",
        name: { en: "Chicken Pie", gr: "Κοτόπιτα" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/e1cba4/ffffff?text=Pie",
      },
      {
        id: "pp4",
        name: { en: "Spinach Pie", gr: "Σπανακόπιτα" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/e1cba4/ffffff?text=Pie",
      },
      {
        id: "pp5",
        name: { en: "Philadelphia Bagel", gr: "Κουλούρι Philadelphia" },
        description: { en: "", gr: "" },
        price: "3.00€",
        image: "https://placehold.co/100x100/e1cba4/ffffff?text=Bagel",
      },
      {
        id: "pp6",
        name: { en: "Flogera", gr: "Φλογέρα" },
        description: { en: "Ham & Cheese Roll", gr: "Ρολό Ζαμπόν Τυρί" },
        price: "3.00€",
        image: "https://placehold.co/100x100/e1cba4/ffffff?text=Flogera",
      },
    ],
  },
  // --- Sweet Pastry ---
  {
    id: "sweet-pastry",
    name: { en: "Sweet Pastry", gr: "Γλυκές Ζύμες" },
    image: "https://placehold.co/400x300/ffb6c1/ffffff?text=Sweets",
    items: [
      {
        id: "sp1",
        name: { en: "Mini Croissant Choc.", gr: "Mini Croissant Σοκολάτα" },
        description: { en: "", gr: "" },
        price: "0.80€",
        image: "https://placehold.co/100x100/ffccd5/ffffff?text=Croissant",
      },
      {
        id: "sp2",
        name: { en: "Muffin", gr: "Muffin" },
        description: { en: "Various flavors", gr: "Διάφορες γεύσεις" },
        price: "3.50€",
        image: "https://placehold.co/100x100/ffccd5/ffffff?text=Muffin",
      },
    ],
  },
  // --- Beers ---
  {
    id: "beers",
    name: { en: "Beers", gr: "Μπύρες" },
    image: "https://placehold.co/400x300/f4a460/ffffff?text=Beers",
    items: [
      {
        id: "b1",
        name: { en: "Bud", gr: "Bud" },
        description: { en: "", gr: "" },
        price: "5.00€",
        image: "https://placehold.co/100x100/f7bc8f/ffffff?text=Beer",
      },
      {
        id: "b2",
        name: { en: "Corona", gr: "Corona" },
        description: { en: "", gr: "" },
        price: "5.00€",
        image: "https://placehold.co/100x100/f7bc8f/ffffff?text=Beer",
      },
      {
        id: "b3",
        name: { en: "Kaiser", gr: "Kaiser" },
        description: { en: "", gr: "" },
        price: "5.00€",
        image: "https://placehold.co/100x100/f7bc8f/ffffff?text=Beer",
      },
      {
        id: "b4",
        name: { en: "Alfa", gr: "Alfa" },
        description: { en: "", gr: "" },
        price: "5.00€",
        image: "https://placehold.co/100x100/f7bc8f/ffffff?text=Beer",
      },
      {
        id: "b5",
        name: { en: "Mamos", gr: "Mamos" },
        description: { en: "", gr: "" },
        price: "5.00€",
        image: "https://placehold.co/100x100/f7bc8f/ffffff?text=Beer",
      },
    ],
  },
  // --- Spirits ---
  {
    id: "spirits",
    name: { en: "Spirits", gr: "Ποτά" },
    image: "https://placehold.co/400x300/8a2be2/ffffff?text=Spirits",
    items: [
      {
        id: "spt1",
        name: { en: "Havanna Reserva", gr: "Havanna Reserva" },
        description: { en: "Rum", gr: "Ρούμι" },
        price: "8.00€",
        image: "https://placehold.co/100x100/b180e8/ffffff?text=Spirit",
      },
      {
        id: "spt2",
        name: { en: "Havanna Original 3y", gr: "Havanna Original 3y" },
        description: { en: "Rum", gr: "Ρούμι" },
        price: "7.00€",
        image: "https://placehold.co/100x100/b180e8/ffffff?text=Spirit",
      },
      {
        id: "spt3",
        name: { en: "Stolichnaya", gr: "Stolichnaya" },
        description: { en: "Vodka", gr: "Βότκα" },
        price: "7.00€",
        image: "https://placehold.co/100x100/b180e8/ffffff?text=Spirit",
      },
      {
        id: "spt4",
        name: { en: "Haig", gr: "Haig" },
        description: { en: "Whisky", gr: "Ουίσκι" },
        price: "7.00€",
        image: "https://placehold.co/100x100/b180e8/ffffff?text=Spirit",
      },
      {
        id: "spt5",
        name: { en: "Jack Daniels", gr: "Jack Daniels" },
        description: { en: "Whiskey", gr: "Ουίσκι" },
        price: "8.00€",
        image: "https://placehold.co/100x100/b180e8/ffffff?text=Spirit",
      },
      {
        id: "spt6",
        name: { en: "Jägermeister", gr: "Jägermeister" },
        description: { en: "Liqueur", gr: "Λικέρ" },
        price: "8.00€",
        image: "https://placehold.co/100x100/b180e8/ffffff?text=Spirit",
      },
      {
        id: "spt7",
        name: { en: "Beefeater", gr: "Beefeater" },
        description: { en: "Gin", gr: "Τζιν" },
        price: "7.00€",
        image: "https://placehold.co/100x100/b180e8/ffffff?text=Spirit",
      },
      {
        id: "spt8",
        name: { en: "Bailey’s", gr: "Bailey’s" },
        description: { en: "Liqueur", gr: "Λικέρ" },
        price: "7.00€",
        image: "https://placehold.co/100x100/b180e8/ffffff?text=Spirit",
      },
      {
        id: "spt9",
        name: { en: "Metaxa 5*", gr: "Metaxa 5*" },
        description: { en: "Brandy", gr: "Μπράντι" },
        price: "7.00€",
        image: "https://placehold.co/100x100/b180e8/ffffff?text=Spirit",
      },
      {
        id: "spt10",
        name: { en: "Ouzo Plomari", gr: "Ούζο Πλωμάρι" },
        description: { en: "", gr: "" },
        price: "4.00€",
        image: "https://placehold.co/100x100/b180e8/ffffff?text=Ouzo",
      },
      {
        id: "spt11",
        name: { en: "Tsipouro Tsililis", gr: "Τσίπουρο Τσιλιλή" },
        description: { en: "", gr: "" },
        price: "4.00€",
        image: "https://placehold.co/100x100/b180e8/ffffff?text=Tsipouro",
      },
    ],
  },
];

// Updated Translations object with "Ingredients" label
export const translations: Translations = {
  en: {
    headerTitle: "Monk",
    headerSubtitle: "Coffee that's always the way you like ☕",
    menuCategories: "Menu Categories",
    language: "Language",
    ingredients: "Ingredients", // Changed from Description
    price: "Price",
    close: "Close",
    orderNow: "Order Now",
    viewMenu: "View Menu",
  },
  gr: {
    headerTitle: "Monk", // Needs Greek translation if desired
    headerSubtitle: "Καφές όπως πάντα σου αρέσει ☕", // Needs Greek translation if desired
    menuCategories: "Κατηγορίες Μενού",
    language: "Γλώσσα",
    ingredients: "Συστατικά", // Changed from Περιγραφή
    price: "Τιμή",
    close: "Κλείσιμο",
    orderNow: "Παραγγείλετε Τώρα",
    viewMenu: "Δείτε το Μενού",
  },
};
