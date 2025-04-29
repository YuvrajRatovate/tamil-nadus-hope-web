
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const Hero = ({
  title,
  subtitle,
  imageSrc,
  ctaText = "Learn More",
  ctaLink = "/about",
  secondaryCtaText,
  secondaryCtaLink = "/donate",
}: HeroProps) => {
  return (
    <div className="relative bg-gradient-to-br from-primary/20 to-secondary/10 overflow-hidden">
      {/* Background image with overlay */}
      {imageSrc && (
        <div className="absolute inset-0">
          <img
            src={imageSrc}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to={ctaLink}>
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-white">
                {ctaText}
              </Button>
            </Link>
            {secondaryCtaText && (
              <Link to={secondaryCtaLink}>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
