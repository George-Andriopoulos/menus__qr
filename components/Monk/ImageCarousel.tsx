// components/ImageCarousel.tsx
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"; // Adjust path if needed

interface ImageCarouselProps {
  images?: string[]; // Images array is optional
}

/**
 * Image Carousel component with autoplay functionality.
 * Renders only if the images array is provided and not empty.
 * @param images - Array of image URLs.
 */
const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    // Autoplay functionality
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Loop back to start
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [api]);

  // Render the carousel only if images are provided and the array is not empty
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full relative mb-10 md:mb-12">
      <Carousel
        setApi={setApi}
        className="w-full max-w-5xl mx-auto"
        opts={{
          align: "center",
          loop: true,
        }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-full">
              <div className="p-1">
                <img
                  src={image}
                  alt={`Carousel Image ${index + 1}`}
                  className="rounded-lg w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover shadow-lg"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://placehold.co/800x400/cccccc/ffffff?text=Image+Not+Found")
                  }
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
