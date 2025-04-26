// constants/casaPlaya.ts
// Import Casa Playa specific types
import {
  CasaPlayaMenuCategory,
  CasaPlayaTranslations,
} from "@/types/casaPlaya"; // Adjust path if needed

// Carousel images (Placeholders for Casa Playa)
export const mockCarouselImages: string[] = [
  "https://placehold.co/800x400/0284C7/FFFFFF?text=Casa+Playa+Beach", // Sky Blue
  "https://placehold.co/800x400/38BDF8/FFFFFF?text=Seafront+Dining", // Lighter Sky Blue
  "https://placehold.co/800x400/FDBA74/374151?text=Delicious+Food", // Orange Sand
  "https://placehold.co/800x400/FDE68A/374151?text=Relax+Enjoy", // Lighter Sand
];

// Menu Data for Casa Playa
export const casa_playa_MenuCategories: CasaPlayaMenuCategory[] = [
  // --- Brunch (10:00 - 12:30) ---
  {
    id: "brunch",
    name: { en: "Brunch (10:00 - 12:30)", gr: "Brunch (10:00 - 12:30)" },
    image: "/casa-playa/brunch.webp",
    items: [
      {
        id: "br1",
        name: { en: "Omelette", gr: "Ομελέτα" },
        description: {
          en: "with smoked bacon, fresh mushrooms & local graviera cheese",
          gr: "με καπνιστό μπέικον, φρέσκα μανιτάρια & τοπική γραβιέρα",
        },
        price: { base: 10.5, unit: "€" },
      },
      {
        id: "br2",
        name: { en: "Avocado toast", gr: "Τοστ αβοκάντο" },
        description: { en: "with scrambled eggs", gr: "με scrambled αυγά" },
        price: { base: 10.0, unit: "€" },
      },
      {
        id: "br3",
        name: {
          en: "Tortilla with scrambled eggs ‘strapatsada’",
          gr: "Τορτίγια με στραπατσάδα ",
        },
        description: {
          en: "grated tomato, feta cheese, thyme & virgin olive oil",
          gr: "τριμμένη ντομάτα, φέτα, θυμάρι & παρθένο ελαιόλαδο",
        },
        price: { base: 9.0, unit: "€" },
      },
      {
        id: "br4",
        name: { en: "‘Sfakian’ pie from Crete", gr: "Σφακιανή πίτα" },
        description: {
          en: "with walnuts & thyme honey",
          gr: "με καρύδια & θυμαρίσιο μέλι",
        },
        price: { base: 7.5, unit: "€" },
      },
    ],
  },
  // --- Healthy vibes ---
  {
    id: "healthy-vibes",
    name: { en: "Healthy vibes", gr: "Υγιεινές Επιλογές" },
    image: "/casa-playa/healthy.webp",
    items: [
      {
        id: "hv1",
        name: { en: "Super Bowl", gr: "Super Bowl" },
        description: {
          en: "with greek yoghurt, cranberries, chia, oats, almond fillet, black currant, honey & milk chocolate",
          gr: "με γιαούρτι, cranberries, chia, βρώμη, φιλέ αμυγδάλου, φραγκοστάφυλο, μέλι & σοκολάτα γάλακτος",
        },
        price: { base: 10.0, unit: "€" },
      },
      {
        id: "hv2",
        name: { en: "Fresh seasonal fruit", gr: "Φρέσκα φρούτα εποχής" },
        description: {
          en: "watermelon, melon, pear, banana, apple, strawberries",
          gr: "καρπούζι, πεπόνι, αχλάδι, μπανάνα, μήλο, φράουλες",
        },
        price: { base: 9.5, unit: "€" },
      },
      {
        id: "hv3",
        name: { en: "Greek Yoghurt", gr: "Γιαούρτι" },
        description: { en: "with honey & walnuts", gr: "με μέλι & καρύδια" },
        price: { base: 7.0, unit: "€" },
      },
      {
        id: "hv4",
        name: { en: "Oat bar", gr: "Μπάρα βρώμης" },
        description: {
          en: "with nuts, cranberries, peanut butter & milk chocolate",
          gr: "με ξηρούς καρπούς, cranberries, φυστικοβούτυρο & σοκολάτα γάλακτος",
        },
        price: { base: 5.5, unit: "€" },
      },
    ],
  },
  // --- Tastes of Greece from Land & Sea ---
  {
    id: "tastes-greece",
    name: { en: "Tastes of Greece from Land & Sea", gr: "Γεύσεις Ελλάδας" },
    image: "/casa-playa/greek_tastes.webp",
    items: [
      {
        id: "tg1",
        name: { en: "Grilled octopus", gr: "Χταπόδι σχάρας" },
        description: {
          en: "with Santorini fava bean cream, onion & virgin olive oil",
          gr: "με φάβα Σαντορίνης, κρεμμύδι & παρθένο ελαιόλαδο",
        },
        price: { base: 21.5, unit: "€" },
      },
      {
        id: "tg2",
        name: { en: "Fried calamari", gr: "Καλαμαράκια τηγανητά" },
        description: {
          en: "with white fish roe mousse & lime zest",
          gr: "με λευκό ταραμά & ξύσμα lime",
        },
        price: { base: 15.0, unit: "€" },
      },
      {
        id: "tg3",
        name: {
          en: "Seafood Pastirma (cod fillet)",
          gr: "Παστουρμάς θαλασσινών (μπακαλιάρος)",
        },
        description: {
          en: "with pastirma seasoning ‘tsimeni’, bites of fried bread & confit cherry tomatoes",
          gr: "με τσιμένι, μπουκιές τηγανητού ψωμιού & ντοματίνια κονφί",
        },
        price: { base: 14.5, unit: "€" },
      },
      {
        id: "tg4",
        name: { en: "Velouté Fish Soup", gr: "Βελουτέ Ψαρόσουπα" },
        description: { en: "with fish fillet", gr: "με φιλέτο ψαριού" },
        price: { base: 14.0, unit: "€" },
      },
      {
        id: "tg5",
        name: { en: "Dips", gr: "Αλοιφές" },
        description: {
          en: "with grilled pita bread & olive oil breadsticks White fish roe mousse, tzatziki, ‘Mount Athos’ aubergine salad",
          gr: "με πίτες σχάρας & κριτσίνια (Λευκός ταραμάς, τζατζίκι, Αγιορείτικη μελιτζανοσαλάτα)",
        },
        price: { base: 11.0, unit: "€" },
      },
      {
        id: "tg6",
        name: { en: "Fried ‘kefalotyri’ cheese", gr: "Κεφαλοτύρι τηγανητό" },
        description: {
          en: "in cereal crust, spicy-sweet rose sauce & red rocket leaves",
          gr: "σε κρούστα δημητριακών, γλυκόξινη σάλτσα τριαντάφυλλου & κόκκινη ρόκα",
        },
        price: { base: 10.0, unit: "€" },
      },
      {
        id: "tg7",
        name: { en: "French fries", gr: "Τηγανητές πατάτες" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
    ],
  },
  // --- Salads ---
  {
    id: "salads",
    name: { en: "Salads", gr: "Σαλάτες" },
    image: "/casa-playa/salads.webp",
    items: [
      {
        id: "sl1",
        name: { en: "Green salad", gr: "Πράσινη σαλάτα" },
        description: {
          en: "organic salad leaves, bulgur, red quinoa, marinated champignon mushrooms, caramelized almonds 'mandoles', spicy graviera cheese flakes & citrus vinaigrette",
          gr: "βιολογικά φύλλα σαλάτας, πλιγούρι, κόκκινη κινόα, μαριναρισμένα μανιτάρια, καραμελωμένα αμύγδαλα 'μάντολες', πικάντικη γραβιέρα & βινεγκρέτ εσπεριδοειδών",
        },
        price: { base: 13.5, unit: "€" },
      },
      {
        id: "sl2",
        name: { en: "Caesar’s salad", gr: "Σαλάτα του Καίσαρα" },
        description: {
          en: "iceberg leaves, lettuce hearts, chicken, crispy bacon, aged parmesan & handmade bread croutons",
          gr: "iceberg, καρδιές μαρουλιού, κοτόπουλο, τραγανό μπέικον, παλαιωμένη παρμεζάνα & χειροποίητα κρουτόν",
        },
        price: { base: 12.5, unit: "€" },
      },
      {
        id: "sl3",
        name: { en: "‘Exotic’ salad", gr: "Εξωτική σαλάτα" },
        description: {
          en: "red and white cabbage, radicchio, pineapple, mango & strawberry vinaigrette",
          gr: "κόκκινο/άσπρο λάχανο, radicchio, ανανάς, μάνγκο & βινεγκρέτ φράουλας",
        },
        price: { base: 11.5, unit: "€" },
      },
      {
        id: "sl4",
        name: { en: "Greek salad", gr: "Χωριάτικη σαλάτα" },
        description: {
          en: "tomato, cucumber, bell pepper, onion, olives, feta cheese, rusk & virgin olive oil",
          gr: "ντομάτα, αγγούρι, πιπεριά, κρεμμύδι, ελιές, φέτα, παξιμάδι & παρθένο ελαιόλαδο",
        },
        price: { base: 11.0, unit: "€" },
      },
      {
        id: "sl5",
        name: { en: "‘Riganada’ from Zakynthos", gr: "Ριγανάδα Ζακύνθου" },
        description: {
          en: "rusks, grated homegrown tomato, olives, oregano, sea salt, ‘prentza’ cheese & virgin olive oil",
          gr: "παξιμάδια, τριμμένη ντόπια ντομάτα, ελιές, ρίγανη, θαλασσινό αλάτι, πρέντζα & παρθένο ελαιόλαδο",
        },
        price: { base: 9.0, unit: "€" },
      },
    ],
  },
  // --- On The Grill ---
  {
    id: "on-the-grill",
    name: { en: "On The Grill", gr: "Στη Σχάρα" },
    image: "/casa-playa/grill.webp",
    items: [
      {
        id: "gr1",
        name: {
          en: "Tomahawk Pork Chop (+ 650 g)",
          gr: "Tomahawk Χοιρινή (+ 650 γρ)",
        },
        description: {
          en: "with lemon potatoes & mixed salad leaves",
          gr: "με λεμονάτες πατάτες & ανάμεικτα φύλλα σαλάτας",
        },
        price: { base: 19.0, unit: "€" },
      },
      {
        id: "gr2",
        name: { en: "Grilled shrimps", gr: "Γαρίδες σχάρας" },
        description: {
          en: "with boiled vegetables & olive oil-lemon dressing, flavoured with kumquat",
          gr: "με βραστά λαχανικά & λαδολέμονο, αρωματισμένο με κουμκουάτ",
        },
        price: { base: 19.0, unit: "€" },
      },
      {
        id: "gr3",
        name: { en: "Grilled gilt-head bream", gr: "Τσιπούρα σχάρας" },
        description: {
          en: "with boiled vegetables & olive oil-lemon dressing",
          gr: "με βραστά λαχανικά & λαδολέμονο",
        },
        price: { base: 18.5, unit: "€" },
      },
      {
        id: "gr4",
        name: {
          en: "Tender grilled chicken fillet",
          gr: "Φιλέτο κοτόπουλο σχάρας",
        },
        description: {
          en: "with herbs served with potato, carrot & green apple cream",
          gr: "με μυρωδικά, κρέμα πατάτας, καρότου & πράσινου μήλου",
        },
        price: { base: 15.5, unit: "€" },
      },
      {
        id: "gr5",
        name: { en: "Grilled fresh fish", gr: "Ψάρι ημέρας σχάρας" },
        description: {
          en: "Just ask our waiters for the catch of the day!",
          gr: "Ρωτήστε τους σερβιτόρους μας!",
        },
        price: { base: 0, unit: "€", modifier: "ASK" },
      },
    ],
  },
  // --- Premium Cuts ---
  {
    id: "premium-cuts",
    name: { en: "Premium Cuts", gr: "Premium Κοπές" },
    image: "/casa-playa/premium_cuts.webp",
    items: [
      {
        id: "pc1",
        name: {
          en: "Inside Skirt Black Angus (350gr / 700gr)",
          gr: "Inside Skirt Black Angus (350γρ / 700γρ)",
        },
        description: {
          en: "Served with jacket potatoes & mixed salad leaves",
          gr: "Συνοδεύεται από πατάτες jacket & ανάμεικτα φύλλα σαλάτας",
        },
        price: { forOnePerson: 30.0, forTwoPersons: 60.0, unit: "€" }, // Keys as defined before
      },
      {
        id: "pc2",
        name: {
          en: "Wagyu A5+ BMS 10-12 (100 gr)",
          gr: "Wagyu A5+ BMS 10-12 (100 γρ)",
        },
        description: {
          en: "Served with jacket potatoes & mixed salad leaves",
          gr: "Συνοδεύεται από πατάτες jacket & ανάμεικτα φύλλα σαλάτας",
        },
        price: { base: 45.0, unit: "€" },
      },
      {
        id: "pc3",
        name: {
          en: "Black Angus Beef Rib Eye (300 g)",
          gr: "Black Angus Rib Eye (300 γρ)",
        },
        description: {
          en: "Served with jacket potatoes & mixed salad leaves",
          gr: "Συνοδεύεται από πατάτες jacket & ανάμεικτα φύλλα σαλάτας",
        },
        price: { base: 35.0, unit: "€" },
      },
      {
        id: "pc4",
        name: {
          en: "Greek veal steak, Aged (+ 650 g)",
          gr: "Ελληνική μοσχαρίσια μπριζόλα, Ωρίμανσης (+ 650 γρ)",
        },
        description: {
          en: "Served with jacket potatoes & mixed salad leaves",
          gr: "Συνοδεύεται από πατάτες jacket & ανάμεικτα φύλλα σαλάτας",
        },
        price: { base: 32.0, unit: "€" },
      },
    ],
  },
  // ... (Rest of the categories remain the same) ...
  // --- Pasta ---
  {
    id: "pasta",
    name: { en: "Pasta", gr: "Ζυμαρικά" },
    image: "/casa-playa/pasta.webp",
    items: [
      {
        id: "ps1",
        name: { en: "Shrimp pasta", gr: "Γαριδομακαρονάδα" },
        description: {
          en: "with tagliolini ‘al nero’, bisque broth, tomato sauce & herbs",
          gr: "με ταλιολίνι 'al nero', ζωμό bisque, σάλτσα ντομάτας & μυρωδικά",
        },
        price: { base: 19.0, unit: "€" },
      },
      {
        id: "ps2",
        name: { en: "‘Skioufichta’ Cretan pasta", gr: "Σκιουφιχτά Κρήτης" },
        description: {
          en: "with chicken fillet, Portobello mushroom, semi sundried tomato, garlic, rosé wine & fresh cream",
          gr: "με φιλέτο κοτόπουλο, μανιτάρι Portobello, λιαστή ντομάτα, σκόρδο, ροζέ κρασί & κρέμα γάλακτος",
        },
        price: { base: 16.0, unit: "€" },
      },
      {
        id: "ps3",
        name: { en: "Carbonara", gr: "Καρμπονάρα" },
        description: {
          en: "with smoked bacon, pecorino cream & freshly ground pepper",
          gr: "με καπνιστό μπέικον, κρέμα πεκορίνο & φρεσκοτριμμένο πιπέρι",
        },
        price: { base: 14.5, unit: "€" },
      },
      {
        id: "ps4",
        name: { en: "Tagliatelle with vegetables", gr: "Ταλιατέλες λαχανικών" },
        description: {
          en: "Portobello mushrooms & feta cheese croutons",
          gr: "μανιτάρια Portobello & κρουτόν φέτας",
        },
        price: { base: 12.5, unit: "€" },
      },
      {
        id: "ps5",
        name: { en: "Lobster pasta", gr: "Αστακομακαρονάδα" },
        description: { en: "on request", gr: "κατόπιν παραγγελίας" },
        price: { base: 0, unit: "€", modifier: "ASK" },
      },
    ],
  },
  // --- Traditional dishes ---
  {
    id: "traditional",
    name: { en: "Traditional dishes", gr: "Παραδοσιακά πιάτα" },
    image: "/casa-playa/traditional.webp",
    items: [
      {
        id: "td1",
        name: { en: "Sea bass fillet stuffed", gr: "Φιλέτο λαβράκι γεμιστό" },
        description: {
          en: "with roasted summer vegetables ‘briam’ & parsley oil",
          gr: "με ψητά λαχανικά μπριάμ & λάδι μαϊντανού",
        },
        price: { base: 20.5, unit: "€" },
      },
      {
        id: "td2",
        name: { en: "Greek Moussaka", gr: "Μουσακάς" },
        description: { en: "", gr: "" },
        price: { base: 14.5, unit: "€" },
      },
      {
        id: "td3",
        name: { en: "Open-Greek pie", gr: "Ανοιχτή πίτα" },
        description: {
          en: "with pork gyros/chicken, tomato, onion, delicious tzatziki & French fries",
          gr: "με γύρο χοιρινό/κοτόπουλο, ντομάτα, κρεμμύδι, τζατζίκι & πατάτες τηγανητές",
        },
        price: { base: 15.0, unit: "€" },
      },
      {
        id: "td4",
        name: {
          en: "Aubergine ‘skordostoumpi’",
          gr: "Μελιτζάνες σκορδοστούμπι",
        },
        description: {
          en: "fried aubergines with tomato sauce, garlic & olive oil cheese ‘ladotyri’ from Zakynthos",
          gr: "τηγανητές μελιτζάνες με σάλτσα ντομάτας, σκόρδο & λαδοτύρι Ζακύνθου",
        },
        price: { base: 9.5, unit: "€" },
      },
      {
        id: "td5",
        name: { en: "Pan-fried eggs", gr: "Αυγά τηγανητά" },
        description: {
          en: "with tomato, garlic, local cheese & olive oil",
          gr: "με ντομάτα, σκόρδο, τοπικό τυρί & ελαιόλαδο",
        },
        price: { base: 9.0, unit: "€" },
      },
    ],
  },
  // --- Burgers ---
  {
    id: "burgers",
    name: { en: "Burgers", gr: "Burgers" },
    image: "/casa-playa/burgers.webp",
    items: [
      {
        id: "bg1",
        name: {
          en: "Double Smash Casa Playa Burger (220 g)",
          gr: "Double Smash Casa Playa Burger (220 γρ)",
        },
        description: {
          en: "brioche bun, 100% beef, bacon, cheddar cheese, caramelized onion, lettuce heart, tomato, mayonnaise, BBQ sauce & French fries",
          gr: "ψωμάκι brioche, 100% μοσχάρι, μπέικον, cheddar, καραμελωμένο κρεμμύδι, καρδιά μαρουλιού, ντομάτα, μαγιονέζα, BBQ σως & πατάτες τηγανητές",
        },
        price: { base: 15.5, unit: "€" },
      },
      {
        id: "bg2",
        name: { en: "Truffle Rooster Burger", gr: "Truffle Rooster Burger" },
        description: {
          en: "brioche bun, breaded chicken fillet, tomato, lettuce, truffle mayo sauce & French fries",
          gr: "ψωμάκι brioche, πανέ φιλέτο κοτόπουλο, ντομάτα, μαρούλι, σως μαγιονέζας τρούφας & πατάτες τηγανητές",
        },
        price: { base: 14.5, unit: "€" },
      },
      {
        id: "bg3",
        name: { en: "Grilled Portobello Burger", gr: "Burger Μανιταριού" },
        description: {
          en: "grilled Portobello mushroom, zucchini, tomato, onion rings & garlic sauce ‘aioli’ and multigrain bread",
          gr: "ψητό μανιτάρι Portobello, κολοκύθι, ντομάτα, ροδέλες κρεμμυδιού & σως σκόρδου 'aioli' σε ψωμί ολικής",
        },
        price: { base: 11.5, unit: "€" },
      },
      {
        id: "bg4",
        name: { en: "Chickpea Burger", gr: "Burger Ρεβυθιού" },
        description: {
          en: "chickpea meatballs, avocado mousse, crispy vegetables & tahini sauce",
          gr: "κεφτέδες ρεβυθιού, μους αβοκάντο, τραγανά λαχανικά & σως ταχίνι",
        },
        price: { base: 11.0, unit: "€" },
      },
    ],
  },
  // --- Snacks ---
  {
    id: "snacks",
    name: { en: "Snacks", gr: "Σνακς" },
    image: "/casa-playa/snacks.webp",
    items: [
      {
        id: "sn1",
        name: {
          en: "Club Sandwich Casa Playa",
          gr: "Club Sandwich Casa Playa",
        },
        description: {
          en: "grilled chicken fillet, edam cheese, bacon, tomato, lettuce, mayonnaise & french fries",
          gr: "φιλέτο κοτόπουλο σχάρας, edam, μπέικον, ντομάτα, μαρούλι, μαγιονέζα & τηγανητές πατάτες",
        },
        price: { base: 14.5, unit: "€" },
      },
      {
        id: "sn2",
        name: { en: "Club Sandwich Classic", gr: "Club Sandwich Κλασικό" },
        description: {
          en: "pork shoulder, edam cheese, bacon, tomato, mayonnaise & french fries",
          gr: "χοιρινή ωμοπλάτη, edam, μπέικον, ντομάτα, μαγιονέζα & τηγανητές πατάτες",
        },
        price: { base: 13.5, unit: "€" },
      },
      {
        id: "sn3",
        name: { en: "Tortilla Wrap", gr: "Τορτίγια Wrap" },
        description: {
          en: "with chicken fillet, vegetables, yoghurt cream, mustard & capers",
          gr: "με φιλέτο κοτόπουλο, λαχανικά, κρέμα γιαουρτιού, μουστάρδα & κάπαρη",
        },
        price: { base: 13.5, unit: "€" },
      },
      {
        id: "sn4",
        name: { en: "Tacos", gr: "Tacos" },
        description: {
          en: "with tender chicken, yoghurt cream, lime & fresh coriander",
          gr: "με κοτόπουλο, κρέμα γιαουρτιού, lime & φρέσκο κόλιανδρο",
        },
        price: { base: 11.5, unit: "€" },
      },
      {
        id: "sn5",
        name: { en: "Bao Bun", gr: "Bao Bun" },
        description: {
          en: "with pork, mango mayonnaise sauce, yogurt, radicchio leaves & Chinese cabbage",
          gr: "με χοιρινό, σως μαγιονέζας μάνγκο, γιαούρτι, φύλλα radicchio & κινέζικο λάχανο",
        },
        price: { base: 10.0, unit: "€" },
      },
      {
        id: "sn6",
        name: { en: "Hot Dog", gr: "Hot Dog" },
        description: {
          en: "brioche bread, sausage, pickled cucumber, ketchup sauce, yogurt & mustard",
          gr: "ψωμάκι brioche, λουκάνικο, πίκλα αγγουριού, κέτσαπ, γιαούρτι & μουστάρδα",
        },
        price: { base: 8.0, unit: "€" },
      },
    ],
  },
  // --- Asian Food ---
  {
    id: "asian-food",
    name: { en: "Asian Food", gr: "Ασιατική Κουζίνα" },
    image: "/casa-playa/asian.webp",
    items: [
      {
        id: "af1",
        name: {
          en: "Kamasutra Special Edition 32 pcs",
          gr: "Kamasutra Special Edition 32 τμχ",
        },
        description: {
          en: "8 Casa Playa, 8 Salmon Roll, 8 Vegan Uramaki, 8 Chicken Katsu served with sweet chilli mirin, teriyaki sauce, citrus soy sauce & sweet chilli sauce",
          gr: "8 Casa Playa, 8 Salmon Roll, 8 Vegan Uramaki, 8 Chicken Katsu με σως sweet chilli mirin, teriyaki, citrus soy & sweet chilli",
        },
        price: { base: 63.0, unit: "€" },
      },
      {
        id: "af2",
        name: { en: "Casa Playa Roll", gr: "Casa Playa Roll" },
        description: {
          en: "crab, shrimp, cream cheese, wasabi, sesame seeds served with sweet chilli mirin & teriyaki sauce",
          gr: "καβούρι, γαρίδα, cream cheese, wasabi, σουσάμι με σως sweet chilli mirin & teriyaki",
        },
        price: { base: 19.0, unit: "€" },
      },
      {
        id: "af3",
        name: { en: "Salmon Roll", gr: "Salmon Roll" },
        description: {
          en: "salmon, avocado, cream cheese, flying fish roe, sweet & sour mayonnaise served with citrus soy sauce",
          gr: "σολομός, αβοκάντο, cream cheese, αυγά χελιδονόψαρου, γλυκόξινη μαγιονέζα με σως citrus soy",
        },
        price: { base: 18.5, unit: "€" },
      },
      {
        id: "af4",
        name: { en: "Chicken Katsu", gr: "Chicken Katsu" },
        description: {
          en: "fried chicken thigh, mango, sweet & sour mayonnaise, black sesame served with sweet chilli mirin & citrus soy sauce",
          gr: "τηγανητό μπούτι κοτόπουλο, μάνγκο, γλυκόξινη μαγιονέζα, μαύρο σουσάμι με σως sweet chilli mirin & citrus soy",
        },
        price: { base: 14.0, unit: "€" },
      },
      {
        id: "af5",
        name: { en: "Vegan Uramaki", gr: "Vegan Uramaki" },
        description: {
          en: "cucumber, mango, tikuan, avocado, sweet & sour mayonnaise, tomato crumble served with sweet chilli sauce",
          gr: "αγγούρι, μάνγκο, tikuan, αβοκάντο, γλυκόξινη μαγιονέζα, crumble ντομάτας με σως sweet chilli",
        },
        price: { base: 11.5, unit: "€" },
      },
    ],
  },
  // --- Kids menu ---
  {
    id: "kids-menu",
    name: { en: "Kids menu", gr: "Παιδικό μενού" },
    image: "/casa-playa/kids.webp",
    items: [
      {
        id: "km1",
        name: { en: "Chicken nuggets", gr: "Κοτομπουκιές" },
        description: { en: "with French fries", gr: "με τηγανητές πατάτες" },
        price: { base: 9.0, unit: "€" },
      },
      {
        id: "km2",
        name: { en: "Fish & Chips", gr: "Fish & Chips" },
        description: { en: "", gr: "" },
        price: { base: 9.0, unit: "€" },
      },
      {
        id: "km3",
        name: { en: "Mac ‘n’ cheese", gr: "Mac ‘n’ cheese" },
        description: { en: "", gr: "" },
        price: { base: 8.0, unit: "€" },
      },
      {
        id: "km4",
        name: { en: "Tagliatelle", gr: "Ταλιατέλες" },
        description: {
          en: "with butter or with tomato sauce",
          gr: "με βούτυρο ή με σάλτσα ντομάτας",
        },
        price: { base: 7.0, unit: "€" },
      },
    ],
  },
  // --- Desserts ---
  {
    id: "desserts",
    name: { en: "Desserts", gr: "Επιδόρπια" },
    image: "/casa-playa/desserts.webp",
    items: [
      {
        id: "ds1",
        name: { en: "Chocolate soufflé", gr: "Σουφλέ σοκολάτας" },
        description: { en: "with vanilla ice cream", gr: "με παγωτό βανίλια" },
        price: { base: 9.0, unit: "€" },
      },
      {
        id: "ds2",
        name: {
          en: "Cretan Sweet Fritter ‘Xerotigano’",
          gr: "Ξεροτήγανο Κρήτης",
        },
        description: {
          en: "with semolina custard & honey sauce",
          gr: "με κρέμα σιμιγδαλιού & σάλτσα μελιού",
        },
        price: { base: 8.5, unit: "€" },
      },
      {
        id: "ds3",
        name: { en: "‘Frigania’", gr: "Φρυγανιά" },
        description: {
          en: "refreshing dessert from Zakynthos with Greek rusks, vanilla cream, crushed toasted almonds & strawberry sauce",
          gr: "δροσιστικό γλυκό Ζακύνθου με παξιμάδια, κρέμα βανίλιας, καβουρδισμένα αμύγδαλα & σάλτσα φράουλας",
        },
        price: { base: 8.0, unit: "€" },
      },
      {
        id: "ds4",
        name: { en: "‘Sfakian’ pie from Crete", gr: "Σφακιανή πίτα" },
        description: {
          en: "with thyme honey & walnuts",
          gr: "με θυμαρίσιο μέλι & καρύδια",
        },
        price: { base: 7.5, unit: "€" },
      },
      {
        id: "ds5",
        name: { en: "Yoghurt", gr: "Γιαούρτι" },
        description: { en: "with honey & walnuts", gr: "με μέλι & καρύδια" },
        price: { base: 7.0, unit: "€" },
      },
    ],
  },
  // --- Homemade Ice Cream ---
  {
    id: "ice-cream",
    name: { en: "Homemade Ice Cream", gr: "Σπιτικό Παγωτό" },
    image: "/casa-playa/icecream.webp",
    items: [
      {
        id: "ic1",
        name: { en: "‘Mandolato’ (soft nougat)", gr: "Μαντολάτο" },
        description: { en: "", gr: "" },
        price: { base: 8.0, unit: "€" },
      },
      {
        id: "ic2",
        name: {
          en: "Madagascar Vanilla Ice Cream",
          gr: "Βανίλια Μαδαγασκάρης",
        },
        description: { en: "", gr: "" },
        price: { base: 8.0, unit: "€" },
      },
      {
        id: "ic3",
        name: { en: "Violet Sorbet", gr: "Σορμπέ Βιολέτα" },
        description: { en: "", gr: "" },
        price: { base: 8.0, unit: "€" },
      },
    ],
  },
  // --- Milk Shakes ---
  {
    id: "milk-shakes",
    name: { en: "Milk Shakes", gr: "Milk Shakes" },
    image: "/casa-playa/milkshakes.webp",
    items: [
      {
        id: "ms1",
        name: {
          en: "Vanilla / Chocolate / Banana / Strawbery",
          gr: "Βανίλια / Σοκολάτα / Μπανάνα / Φράουλα",
        },
        description: { en: "", gr: "" },
        price: { base: 7.0, unit: "€" },
      },
    ],
  },
  // --- Coffee ---
  {
    id: "coffee",
    name: { en: "Coffee", gr: "Καφέδες" },
    image: "/casa-playa/coffee.webp",
    items: [
      {
        id: "cf1",
        name: { en: "Frappe", gr: "Φραπέ" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "cf2",
        name: { en: "Frappe with ice cream", gr: "Φραπέ με παγωτό" },
        description: { en: "", gr: "" },
        price: { base: 6.0, unit: "€" },
      },
      {
        id: "cf3",
        name: { en: "Freddo Espresso", gr: "Freddo Espresso" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "cf4",
        name: { en: "Freddo Cappuccino", gr: "Freddo Cappuccino" },
        description: { en: "", gr: "" },
        price: { base: 4.5, unit: "€" },
      },
      {
        id: "cf5",
        name: { en: "Cappuccino", gr: "Cappuccino" },
        description: { en: "", gr: "" },
        price: { single: 4.0, double: 4.5, unit: "€" },
      },
      {
        id: "cf6",
        name: { en: "Espresso", gr: "Espresso" },
        description: { en: "", gr: "" },
        price: { single: 2.0, double: 4.0, unit: "€" },
      },
      {
        id: "cf7",
        name: { en: "Americano", gr: "Americano" },
        description: { en: "", gr: "" },
        price: { base: 4.5, unit: "€" },
      },
      {
        id: "cf8",
        name: { en: "Ice chocolate", gr: "Κρύα σοκολάτα" },
        description: { en: "", gr: "" },
        price: { base: 5.5, unit: "€" },
      },
      {
        id: "cf9",
        name: { en: "Greek coffee", gr: "Ελληνικός καφές" },
        description: { en: "", gr: "" },
        price: { single: 2.5, double: 4.0, unit: "€" },
      },
      {
        id: "cf10",
        name: { en: "Tea", gr: "Τσάι" },
        description: { en: "", gr: "" },
        price: { base: 3.5, unit: "€" },
      },
    ],
  },
  // --- Refreshments ---
  {
    id: "refreshments",
    name: { en: "Refreshments", gr: "Αναψυκτικά" },
    image: "/casa-playa/refreshments.webp",
    items: [
      {
        id: "rf1",
        name: {
          en: "Coca cola / Zero / Light",
          gr: "Coca cola / Zero / Light",
        },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "rf2",
        name: { en: "Fanta Orange / Lemon", gr: "Fanta Πορτοκάλι / Λεμόνι" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "rf3",
        name: { en: "Sprite", gr: "Sprite" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "rf4",
        name: { en: "Homemade Lemonade", gr: "Σπιτική Λεμονάδα" },
        description: { en: "", gr: "" },
        price: { base: 5.5, unit: "€" },
      },
      {
        id: "rf5",
        name: {
          en: "Fuze Tea Peach / Lemon",
          gr: "Fuze Tea Ροδάκινο / Λεμόνι",
        },
        description: { en: "", gr: "" },
        price: { base: 4.5, unit: "€" },
      },
      {
        id: "rf6",
        name: { en: "Schweppes Soda", gr: "Schweppes Σόδα" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "rf7",
        name: { en: "Schweppes Tonic", gr: "Schweppes Τόνικ" },
        description: { en: "", gr: "" },
        price: { base: 4.0, unit: "€" },
      },
      {
        id: "rf8",
        name: {
          en: "Schweppes Bitter Lemon / pink grapefruit / Pomegranate",
          gr: "Schweppes Bitter Lemon / Ροζ Γκρέιπφρουτ / Ρόδι",
        },
        description: { en: "", gr: "" },
        price: { base: 4.5, unit: "€" },
      },
      {
        id: "rf9",
        name: { en: "Red bull", gr: "Red bull" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
      {
        id: "rf10",
        name: { en: "Smirnoff Ice (Alcohol)", gr: "Smirnoff Ice (Αλκοόλ)" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
      {
        id: "rf11",
        name: { en: "AVRA Mineral water 1lt", gr: "Νερό ΑΥΡΑ 1lt" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
      {
        id: "rf12",
        name: {
          en: "Souroti Natural sparkling water 250ml / 750ml",
          gr: "Σουρωτή Φυσικώς Ανθρακούχο 250ml / 750ml",
        },
        description: { en: "", gr: "" },
        price: { single: 4.0, double: 6.0, unit: "€" },
      },
      {
        id: "rf13",
        name: {
          en: "S. Pellegrino 250ml / 750ml",
          gr: "S. Pellegrino 250ml / 750ml",
        },
        description: { en: "", gr: "" },
        price: { single: 4.5, double: 7.0, unit: "€" },
      },
    ],
  },
  // --- Fresh «energy» Juices ---
  {
    id: "juices",
    name: { en: "Fresh «energy» Juices", gr: "Φρέσκοι χυμοί «ενέργειας»" },
    image: "/casa-playa/juices.webp",
    items: [
      {
        id: "ju1",
        name: { en: "Mixed Juice", gr: "Ανάμεικτος Χυμός" },
        description: { en: "", gr: "" },
        price: { base: 6.5, unit: "€" },
      },
      {
        id: "ju2",
        name: { en: "Orange Juice", gr: "Χυμός Πορτοκάλι" },
        description: { en: "", gr: "" },
        price: { base: 6.0, unit: "€" },
      },
      {
        id: "ju3",
        name: { en: "PEAR BASIC", gr: "PEAR BASIC" },
        description: {
          en: "Pear, Carrot, Apple, Ginger",
          gr: "Αχλάδι, Καρότο, Μήλο, Ginger",
        },
        price: { base: 7.0, unit: "€" },
      },
      {
        id: "ju4",
        name: { en: "ORANGE BASIC", gr: "ORANGE BASIC" },
        description: {
          en: "Orange, Carrot, Apple, Ginger",
          gr: "Πορτοκάλι, Καρότο, Μήλο, Ginger",
        },
        price: { base: 7.0, unit: "€" },
      },
      {
        id: "ju5",
        name: { en: "WATERMELON BASIC", gr: "WATERMELON BASIC" },
        description: {
          en: "Watermelon, Pineapple, Orange",
          gr: "Καρπούζι, Ανανάς, Πορτοκάλι",
        },
        price: { base: 7.0, unit: "€" },
      },
    ],
  },
  // --- Beer ---
  {
    id: "beers",
    name: { en: "Beer", gr: "Μπύρες" },
    image: "/casa-playa/beers.webp",
    items: [
      {
        id: "be1",
        name: {
          en: "Draught Mythos (330ml / 500ml)",
          gr: "Mythos Βαρέλι (330ml / 500ml)",
        },
        description: { en: "", gr: "" },
        price: { single: 5.0, double: 6.0, unit: "€" },
      },
      {
        id: "be2",
        name: { en: "Corona", gr: "Corona" },
        description: { en: "", gr: "" },
        price: { base: 6.0, unit: "€" },
      },
      {
        id: "be3",
        name: { en: "Mythos", gr: "Mythos" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
      {
        id: "be4",
        name: { en: "Fix", gr: "Fix" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
      {
        id: "be5",
        name: { en: "Mythos ice", gr: "Mythos ice" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
      {
        id: "be6",
        name: { en: "Kaiser", gr: "Kaiser" },
        description: { en: "", gr: "" },
        price: { base: 6.0, unit: "€" },
      },
      {
        id: "be7",
        name: { en: "Mythos Radler", gr: "Mythos Radler" },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
      {
        id: "be8",
        name: {
          en: "Fix Anef / Fix non alcohol",
          gr: "Fix Άνευ / Fix χωρίς αλκοόλ",
        },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
      {
        id: "be9",
        name: {
          en: "Levante (Zakynthian) beer",
          gr: "Levante (Ζακυνθινή) μπύρα",
        },
        description: { en: "", gr: "" },
        price: { base: 7.0, unit: "€" },
      },
      {
        id: "be10",
        name: { en: "Nissos All day organic", gr: "Nissos All day organic" },
        description: { en: "", gr: "" },
        price: { base: 7.0, unit: "€" },
      },
      {
        id: "be11",
        name: {
          en: "Somersby Apple / Watermelon / Mango",
          gr: "Somersby Μήλο / Καρπούζι / Μάνγκο",
        },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
    ],
  },
  // --- Alcoholic Drinks ---
  {
    id: "alcoholic-drinks",
    name: { en: "Alcoholic Drinks", gr: "Αλκοολούχα Ποτά" },
    image: "/casa-playa/drinks.webp",
    items: [
      {
        id: "ad1",
        name: {
          en: "Wine by glass (white/rose)",
          gr: "Κρασί ποτήρι (λευκό/ροζέ)",
        },
        description: { en: "", gr: "" },
        price: { base: 7.0, unit: "€" },
      },
      {
        id: "ad2",
        name: {
          en: "Ouzo / Tsipouro by glass 50ml",
          gr: "Ούζο / Τσίπουρο ποτήρι 50ml",
        },
        description: { en: "", gr: "" },
        price: { base: 5.0, unit: "€" },
      },
      {
        id: "ad3",
        name: { en: "Sangria", gr: "Sangria" },
        description: { en: "", gr: "" },
        price: { base: 6.0, unit: "€" },
      },
      {
        id: "ad4",
        name: { en: "Prosecco (glass/bottle)", gr: "Prosecco (ποτήρι/φιάλη)" },
        description: { en: "", gr: "" },
        price: { single: 7.0, double: 45.0, unit: "€" },
      },
      {
        id: "ad5",
        name: {
          en: "Drink (Simple / Special / Premium)",
          gr: "Ποτό (Απλό / Special / Premium)",
        },
        description: { en: "", gr: "" },
        price: { base: 9.0, special: 11.0, premium: 14.0, unit: "€" },
      },
      {
        id: "ad6",
        name: {
          en: "Bottle (Simple / Special / Premium)",
          gr: "Φιάλη (Απλή / Special / Premium)",
        },
        description: { en: "", gr: "" },
        price: { base: 90.0, special: 120.0, premium: 150.0, unit: "€" },
      },
    ],
  },
  // --- Champagne ---
  {
    id: "champagne",
    name: { en: "Champagne", gr: "Σαμπάνια" },
    image: "/casa-playa/champagne.webp",
    items: [
      {
        id: "ch1",
        name: { en: "Armand de Brignac Rose", gr: "Armand de Brignac Rose" },
        description: { en: "", gr: "" },
        price: { base: 1000.0, unit: "€" },
      },
      {
        id: "ch2",
        name: { en: "Armand de Brignac Gold", gr: "Armand de Brignac Gold" },
        description: { en: "", gr: "" },
        price: { base: 900.0, unit: "€" },
      },
      {
        id: "ch3",
        name: { en: "Dom Perignon", gr: "Dom Perignon" },
        description: { en: "", gr: "" },
        price: { base: 600.0, unit: "€" },
      },
      {
        id: "ch4",
        name: { en: "Moet Ice", gr: "Moet Ice" },
        description: { en: "", gr: "" },
        price: { base: 140.0, unit: "€" },
      },
      {
        id: "ch5",
        name: { en: "Moet", gr: "Moet" },
        description: { en: "", gr: "" },
        price: { base: 120.0, unit: "€" },
      },
    ],
  },
  // --- Gallery (Example, adapt as needed) ---
  {
    id: "photo-gallery",
    name: { en: "Gallery", gr: "Γκαλερί" },
    image: "/casa-playa/gallery.webp",
    items: [],
    images: [
      "/casa-playa/gallery/1.webp",
      "/casa-playa/gallery/2.webp",
      "/casa-playa/gallery/3.webp",
      "/casa-playa/gallery/4.webp",
      "/casa-playa/gallery/5.webp",
    ],
  },
];

// Translations object for Casa Playa
export const translations: CasaPlayaTranslations = {
  en: {
    // ... english translations ...
    forOnePerson: "For 1",
    forTwoPersons: "For 2",
    // ... other english translations ...
  },
  gr: {
    headerTitle: "Casa Playa",
    headerSubtitle: "Η απόδρασή σας στην παραλία",
    menuCategories: "Μενού",
    language: "Γλώσσα",
    ingredients: "Λεπτομέρειες",
    price: "Τιμή",
    close: "Κλείσιμο",
    orderNow: "Παραγγείλετε",
    viewMenu: "Δείτε το Μενού",
    beverages: "Ροφήματα",
    single: "ΜΟΝΟ",
    double: "ΔΙΠΛΟ",
    // --- Ensure these lines are exactly as follows ---
    forOnePerson: "Για ένα άτομο", // Should be this exact string
    forTwoPersons: "Για δύο άτομα", // Should be this exact string
    // --- End Verification ---
    ask: "Ρωτήστε",
    special: "SPECIAL", // Consider translating if needed
    premium: "PREMIUM", // Consider translating if needed
  },
};
