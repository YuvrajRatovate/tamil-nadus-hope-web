
import React from 'react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import ContactInformation from '@/components/ContactInformation';
import MapSection from '@/components/MapSection';
import RegionalCenters from '@/components/RegionalCenters';
import ContactFAQ from '@/components/ContactFAQ';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="Contact Us"
        subtitle="Reach out for support, information, or to join our cause."
        imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1600"
      />
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Details */}
            <ContactInformation />
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <MapSection />
      
      {/* Regional Centers */}
      <RegionalCenters />
      
      {/* FAQ Section */}
      <ContactFAQ />
    </div>
  );
};

export default ContactPage;
