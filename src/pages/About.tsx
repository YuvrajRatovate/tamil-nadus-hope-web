
import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Award, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="About Tamil Nadu's Hope"
        subtitle="Empowering women through addiction recovery and community support since 2010."
        imageSrc="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1600"
      />
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                Tamil Nadu's Hope was founded in 2010 by Dr. Meena Rajendran, a dedicated physician who witnessed firsthand the devastating impact of addiction on women and their families across Tamil Nadu. Working in rural clinics, Dr. Rajendran observed that women facing addiction had few resources and often suffered in silence due to social stigma.
              </p>
              <p className="mb-4">
                What began as a small support group in Chennai quickly grew as the need for these services became evident. By 2012, Tamil Nadu's Hope had established its first formal rehabilitation center and started outreach programs in five villages surrounding Chennai.
              </p>
              <p className="mb-4">
                Today, we operate across 120+ villages in Tamil Nadu, with comprehensive programs that address addiction recovery, prevention, education, and community development. Our holistic approach recognizes that successful recovery involves not just breaking the cycle of addiction, but also building sustainable livelihoods and supportive communities.
              </p>
              <p>
                Over the past decade, we have helped more than 5,000 women overcome addiction and rebuild their lives, while also working to address the root causes of substance abuse through education and economic empowerment initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To empower women across Tamil Nadu to break free from addiction, rebuild their lives, and strengthen their communities through comprehensive support programs, education, and advocacy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We envision a Tamil Nadu where women are free from the burden of addiction, stigma is eliminated, and communities thrive through mutual support, education, and economic opportunity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary h-6 w-6" />
                </div>
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  We approach our work with empathy and understanding, recognizing the dignity of every person we serve.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  We believe in the power of supportive communities to foster healing and sustainable change.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  We operate with honesty, transparency, and accountability in all our actions and relationships.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary h-6 w-6" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  We strive for the highest standards in our programs and services, continuously improving our approach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader className="text-center pb-2">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <CardTitle>Dr. Meena Rajendran</CardTitle>
                <CardDescription>Founder & Executive Director</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-2">
                  Dr. Rajendran has over 20 years of experience in public health and addiction medicine.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center pb-2">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <CardTitle>Priya Sundaram</CardTitle>
                <CardDescription>Program Director</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-2">
                  Priya oversees all rehabilitation programs and brings 15 years of experience in social work.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center pb-2">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <CardTitle>Rajesh Kumar</CardTitle>
                <CardDescription>Community Outreach Director</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-2">
                  Rajesh leads our village outreach initiatives with 12 years of rural development experience.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="mb-4">
              Our team also includes dedicated counselors, medical professionals, social workers, and administrative staff who work tirelessly to support our mission.
            </p>
            <Link to="/contact">
              <Button variant="outline">Contact Our Team</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Impact Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">5,000+</p>
              <p>Women Supported</p>
            </div>
            
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">120+</p>
              <p>Villages Reached</p>
            </div>
            
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">85%</p>
              <p>Recovery Success Rate</p>
            </div>
            
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">12</p>
              <p>Years of Service</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners & Supporters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Partners & Supporters</h2>
          
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Partner Logo</span>
            </div>
            <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Partner Logo</span>
            </div>
            <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Partner Logo</span>
            </div>
            <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Partner Logo</span>
            </div>
            <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Partner Logo</span>
            </div>
            <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Partner Logo</span>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="mb-6 max-w-2xl mx-auto">
              We're grateful to our partners and supporters who make our work possible. From government agencies to private organizations and individual donors, each contributes to our mission.
            </p>
            <Link to="/donate">
              <Button>Become a Supporter</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
