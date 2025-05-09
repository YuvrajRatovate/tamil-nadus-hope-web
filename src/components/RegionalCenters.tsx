
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const RegionalCenters = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Regional Centers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Coimbatore Center</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">456 Renewal Road</p>
              <p className="text-gray-600 mb-2">Coimbatore, Tamil Nadu 641018</p>
              <p className="text-gray-600">Phone: +91 422 XXX XXXX</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Madurai Center</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">789 Hope Avenue</p>
              <p className="text-gray-600 mb-2">Madurai, Tamil Nadu 625001</p>
              <p className="text-gray-600">Phone: +91 452 XXX XXXX</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Trichy Center</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">321 Renewal Street</p>
              <p className="text-gray-600 mb-2">Trichy, Tamil Nadu 620001</p>
              <p className="text-gray-600">Phone: +91 431 XXX XXXX</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegionalCenters;
