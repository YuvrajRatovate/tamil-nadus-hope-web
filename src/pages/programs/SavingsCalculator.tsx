
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import SavingsCalculator from '@/components/SavingsCalculator';
import { Button } from "@/components/ui/button";

const SavingsCalculatorPage = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="Addiction Savings Calculator"
        subtitle="Discover how much you could save by quitting harmful substances"
        imageSrc="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1600"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">See The Impact of Quitting</h2>
            <p className="text-gray-700">
              Addiction affects not just your health, but also your financial wellbeing. Use our calculator to see how much money 
              you could save by quitting alcohol, tobacco, or other substances. The results might surprise you!
            </p>
          </div>
          
          <SavingsCalculator />
          
          <div className="max-w-3xl mx-auto mt-16 space-y-6">
            <h3 className="text-2xl font-bold text-center">Benefits Beyond Money</h3>
            <p className="text-gray-700">
              While the financial savings of quitting are substantial, the benefits to your health, relationships, and quality of life 
              are even more valuable. When you stop using harmful substances, you can experience:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Health Benefits</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Improved respiratory and cardiovascular function</li>
                  <li>• Better sleep quality and energy levels</li>
                  <li>• Enhanced immune system</li>
                  <li>• Reduced risk of chronic diseases</li>
                  <li>• Improved mental health and cognitive function</li>
                </ul>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Life Improvements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Stronger relationships with family and friends</li>
                  <li>• Increased productivity at work or school</li>
                  <li>• More time for hobbies and activities you enjoy</li>
                  <li>• Improved self-esteem and confidence</li>
                  <li>• Greater control over your future</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Change?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Our compassionate team is here to help you start your recovery journey. 
            Whether you need information, resources, or comprehensive support, we're just a call away.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/programs">Explore Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SavingsCalculatorPage;
