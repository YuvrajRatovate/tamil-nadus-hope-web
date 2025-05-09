
import React from 'react';
import Map from '@/components/Map';

const MapSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
        
        <div className="mx-auto max-w-4xl">
          <Map height="500px" />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
