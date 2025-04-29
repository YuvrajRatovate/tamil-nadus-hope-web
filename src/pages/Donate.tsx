import React from 'react';
import Hero from '@/components/Hero';
import PledgeForm from '@/components/PledgeForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Donate = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="Support Our Mission"
        subtitle="Your contribution helps women break free from addiction and build better lives."
        imageSrc="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1600"
      />
      
      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Support Makes a Difference</h2>
            <p className="text-lg text-gray-700">
              Every contribution helps us expand our programs and reach more women across Tamil Nadu who are struggling with addiction and its effects on their families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">₹1,000</CardTitle>
                <CardDescription>Monthly Donation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">Provides counseling sessions for one woman for a month</p>
                <div className="w-full bg-gray-200 h-2 mb-2 rounded-full">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
                <p className="text-sm text-muted-foreground">25% of monthly goal reached</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">₹5,000</CardTitle>
                <CardDescription>Monthly Donation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">Supports a village outreach program for one month</p>
                <div className="w-full bg-gray-200 h-2 mb-2 rounded-full">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
                </div>
                <p className="text-sm text-muted-foreground">40% of monthly goal reached</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">₹10,000</CardTitle>
                <CardDescription>Monthly Donation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">Funds addiction treatment for two women for a full month</p>
                <div className="w-full bg-gray-200 h-2 mb-2 rounded-full">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                </div>
                <p className="text-sm text-muted-foreground">15% of monthly goal reached</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Pledge Form Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Make a Pledge</h2>
            <p className="text-lg text-gray-700">
              Your pledge helps sustain our programs and ensure that women across Tamil Nadu receive the support they need.
            </p>
          </div>
          
          <PledgeForm />
        </div>
      </section>
      
      {/* Other Ways to Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Other Ways to Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Share your time and skills to help women in recovery. We need counselors, educators, and administrative support.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Corporate Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Partner with us through CSR initiatives, employee giving programs, or in-kind donations to support our mission.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Fundraise</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Organize a fundraising event or campaign in your community to raise awareness and funds for our programs.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>In-Kind Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Donate supplies, educational materials, or professional services to support our various programs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Transparency Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Our Commitment to Transparency</h2>
            <p className="text-center mb-8">
              We're committed to using your donations efficiently and effectively. 85% of all donations go directly to program services.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">How Your Donation is Used</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Program Services</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div className="bg-primary h-3 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Administrative Costs</span>
                    <span>10%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div className="bg-secondary h-3 rounded-full" style={{ width: "10%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Fundraising</span>
                    <span>5%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div className="bg-tamil-yellow h-3 rounded-full" style={{ width: "5%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Tamil Nadu's Hope is a registered non-profit organization. All donations are tax-deductible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
