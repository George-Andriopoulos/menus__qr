// components/Header.tsx
import Image from "next/image";
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
    <header className="text-center   pt-16 pb-8 mb-6 md:pt-8 ">
      {/* Render title only if it exists */}
      {title && (
        <Image
          src="/monk/logo.webp"
          alt="Logo Monk"
          width={250}
          height={250}
          quality={100}
          className="mx-auto mt-10 "
        />
      )}
      {/* Render subtitle only if it exists */}
      {subtitle && (
        <h3 className="text-lg sm:text-xl text-[#fffdfe] mt-4 px-2">
          {subtitle}
        </h3>
      )}
    </header>
  );
};

export default Header;
