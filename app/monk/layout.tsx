// app/monk/layout.tsx
import type { Metadata } from "next";
// Import Montserrat from next/font/google
import { Montserrat } from "next/font/google";
import "@/app/globals.css"; // Ensure global styles are imported

// Initialize the Montserrat font with desired weights and subsets
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"], // Include various weights
  subsets: ["latin", "cyrillic"], // Include Latin and Greek subsets
  display: "swap", // Use 'swap' for better font loading performance
  // variable: '--font-montserrat', // Optional: Define CSS variable if needed for Tailwind config
});

// Metadata remains the same
export const metadata: Metadata = {
  title: "Monk",
  description: "Coffee that's always the way you like",
};

/**
 * Layout component for the /monk route segment using Montserrat font.
 * Returns a div wrapping children and applies the Montserrat font class to the div.
 * @param children - The page component for the /monk route.
 */
export default function MonkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Apply the Montserrat font className to the wrapping div
  return (
    <div className={`${montserrat.className} antialiased`}>
      {/* Render the page content (app/monk/page.tsx) */}
      {children}
    </div>
  );
}
