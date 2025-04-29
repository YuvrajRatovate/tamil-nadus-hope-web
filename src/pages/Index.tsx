
import React from 'react';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, ShieldCheck, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Empowering Women in Tamil Nadu"
        subtitle="Supporting recovery, building futures, and strengthening communities."
        imageSrc="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80&w=1600"
        ctaText="Our Programs"
        ctaLink="/programs"
        secondaryCtaText="Support Us"
        secondaryCtaLink="/donate"
      />
      
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              Tamil Nadu's Hope is dedicated to helping women break free from addiction, rebuild their lives, and create stronger communities across Tamil Nadu. We believe in the power of education, support, and community to transform lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary h-6 w-6" />
                </div>
                <CardTitle>Recovery Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Comprehensive programs to help individuals break free from alcohol, tobacco, and drug dependencies.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-primary h-6 w-6" />
                </div>
                <CardTitle>Education & Prevention</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Awareness campaigns and educational initiatives to prevent addiction and promote healthy living.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <CardTitle>Community Building</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Creating supportive networks and providing skills training for sustainable community development.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Impact Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
              <p className="text-gray-600">Women Supported</p>
            </div>
            
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">120+</p>
              <p className="text-gray-600">Villages Reached</p>
            </div>
            
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">85%</p>
              <p className="text-gray-600">Recovery Rate</p>
            </div>
            
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">₹2.5 Cr</p>
              <p className="text-gray-600">Community Savings</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Our Programs</h2>
            <Link to="/programs">
              <Button variant="link" className="flex items-center">
                View all programs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Alcohol Cessation</CardTitle>
                <CardDescription>Breaking free from alcohol dependence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our comprehensive program helps individuals overcome alcohol addiction through counseling, support groups, and medical assistance.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/programs/alcohol" className="w-full">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Tobacco Cessation</CardTitle>
                <CardDescription>Quit smoking and chewing tobacco</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specialized support for tobacco users with proven strategies to break the habit and improve health.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/programs/tobacco" className="w-full">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Savings Calculator</CardTitle>
                <CardDescription>See how much you can save by quitting</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our interactive calculator shows the financial and health benefits of quitting addictive substances.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/programs/calculator" className="w-full">
                  <Button variant="outline" className="w-full">Try Calculator</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Help Us Make a Difference</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your support can help women in Tamil Nadu break free from addiction and build better futures for themselves and their families.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">Donate Now</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
