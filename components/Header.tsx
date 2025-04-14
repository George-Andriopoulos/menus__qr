// components/Header.tsx
import React from "react";

interface HeaderProps {
  title?: string; // Title is optional
  subtitle?: string; // Subtitle is optional
}

/**
 * Header component displaying the main title and subtitle.
 * Renders only if title or subtitle is provided.
 * @param title - The main heading text.
 * @param subtitle - The subheading text.
 */
const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  // Render the header only if there's a title or subtitle to display
  if (!title && !subtitle) {
    return null;
  }

  return (
    <header className="text-center pt-16 pb-8 mb-6 md:pt-8 ">
      {/* Render title only if it exists */}
      {title && (
        <h1 className="text-4xl md:mb-10 sm:text-5xl font-bold text-yellow-400">
          {title}
        </h1>
      )}
      {/* Render subtitle only if it exists */}
      {subtitle && (
        <h3 className="text-lg sm:text-xl text-gray-300 mt-2 px-2">
          {subtitle}
        </h3>
      )}
    </header>
  );
};

export default Header;
