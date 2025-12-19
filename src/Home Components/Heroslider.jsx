import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../Components/ui/button";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    title: "Your Library, Delivered",
    description:
      "Skip the trip to the library. Browse, borrow, and have your favorite books delivered right to your doorstep.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: 2,
    title: "Read More, Stress Less",
    description:
      "From bestsellers to rare finds, access your local library's collection without leaving home.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: 3,
    title: "Join the Reading Revolution",
    description:
      "Students, researchers, and book lovers trust BookCourier for convenient, reliable library access.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=80",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          <div className="absolute inset-0 bg-secondary/60" />

          <div className="relative h-full max-w-7xl lg:mx-11 px-4 md:px-4 flex items-center">
            <div className="max-w-xl text-secondary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-6 text-secondary-foreground/80">
                {slide.description}
              </p>

              <div className="flex gap-4">
                <Link to="/books">
                  <Button
                    size="lg"
                    className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Browse Books
                  </Button>
                </Link>

                <Link to="/register">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-secondary-foreground/40 text-secondary-foreground
                               transition-all duration-300
                               hover:bg-secondary-foreground hover:text-secondary
                               hover:scale-105 hover:shadow-lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2
                   w-10 h-10 rounded-full
                   bg-background/30 backdrop-blur
                   flex items-center justify-center
                   text-secondary-foreground
                   transition hover:bg-background/50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2
                   w-10 h-10 rounded-full
                   bg-background/30 backdrop-blur
                   flex items-center justify-center
                   text-secondary-foreground
                   transition hover:bg-background/50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide
                ? "bg-primary scale-110"
                : "bg-secondary-foreground/40 hover:bg-secondary-foreground/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
