
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Heart, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';

interface ProgramPageProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  description: string[];
  keyPoints: string[];
  services?: {
    title: string;
    description: string;
  }[];
  outcomes?: {
    title: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
}

const ProgramPage: React.FC<ProgramPageProps> = ({
  title,
  subtitle,
  imageSrc,
  description,
  keyPoints,
  services = [],
  outcomes = [],
  testimonial
}) => {
  return (
    <div className="min-h-screen">
      <Hero
        title={title}
        subtitle={subtitle}
        imageSrc={imageSrc}
      />
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Program Overview</h2>
            
            <div className="space-y-6">
              {description.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-5">Key Benefits</h3>
              <ul className="space-y-3">
                {keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      {services.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Outcomes Section */}
      {outcomes.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Program Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {outcomes.map((outcome, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">{outcome.title}</h3>
                    <p className="text-3xl font-bold text-primary mb-3">{outcome.value}</p>
                    <p className="text-gray-600 text-sm">{outcome.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Testimonial Section */}
      {testimonial && (
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
            
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6 text-center">
                <p className="text-gray-700 italic mb-4 text-xl">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.author}</p>
                {testimonial.role && (
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the First Step?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Our compassionate team is here to support your journey to recovery and wellness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/donate">Support Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramPage;
