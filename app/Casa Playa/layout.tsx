// app/monk/layout.tsx
import type { Metadata } from "next";
// Import Roboto_Slab from next/font/google
import { Roboto_Slab } from "next/font/google";
import "@/app/globals.css"; // Ensure global styles are imported

// Initialize the Roboto_Slab font with desired weights and subsets
const roboto_slab = Roboto_Slab({
  weight: ["300", "400", "500", "600", "700"], // Include various weights
  subsets: ["latin", "greek"], // Include Latin and Greek subsets
  display: "swap", // Use 'swap' for better font loading performance
  variable: "--font-roboto-slab", // Optional: Define CSS variable if needed
});

// Metadata remains the same
export const metadata: Metadata = {
  title: "Casa Playa",
  icons: {
    icon: "/monk/logo_menu.webp", // Correct path to icon in public/monk/
    shortcut: "/monk/logo_menu.webp", // For older browsers
    apple: "/monk/logo_menu.webp", // For Apple touch icons
  },
};

/**
 * Layout component for the /monk route segment using Roboto Slab font.
 * Returns a div wrapping children and applies the Roboto Slab font class to the div.
 * @param children - The page component for the /monk route.
 */
export default function MonkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Apply the Roboto Slab font className to the wrapping div
  return (
    // Using roboto_slab.className to apply the font
    <div className={`${roboto_slab.className} antialiased`}>
      {/* Render the page content (app/monk/page.tsx) */}
      {children}
    </div>
  );
}
