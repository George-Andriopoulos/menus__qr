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
  title: "Monk",
  description: "Coffee that's always the way you like",
  icons: {
    icon: "/monk/logo_menu.webp", // Path to your icon in the public folder
    shortcut: "/monk/logo_menu.webp", // For older browsers
    apple: "/monk/logo_menu.webp", // For Apple touch icons
    // You can specify different sizes or types if needed:
    // icon: [
    //   { url: '/icon.png', type: 'image/png' },
    //   { url: '/icon.svg', type: 'image/svg+xml' },
    // ],
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
