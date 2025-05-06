
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Programs = () => {
  const programs = [
    {
      id: "rehabilitation",
      title: "Rehabilitation Program",
      description: "Comprehensive addiction treatment and recovery support for women across Tamil Nadu.",
      image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=800",
      path: "/programs/rehabilitation"
    },
    {
      id: "family-support",
      title: "Family Support Program",
      description: "Healing services for families affected by a loved one's addiction.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=800",
      path: "/programs/family-support"
    },
    {
      id: "prevention",
      title: "Prevention & Education",
      description: "Community-based initiatives to prevent addiction before it starts.",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800",
      path: "/programs/prevention-education"
    },
    {
      id: "vocational",
      title: "Vocational Training",
      description: "Skills development and employment support for long-term recovery success.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      path: "/programs/vocational-training"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Our Programs"
        subtitle="Comprehensive support for women overcoming addiction in Tamil Nadu"
        imageSrc="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1600"
      />
      
      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Holistic Approach to Recovery</h2>
            <p className="text-lg text-gray-700">
              At Tamil Nadu's Hope, we understand that addiction recovery requires addressing multiple aspects of a woman's life. 
              Our interconnected programs provide comprehensive support through each stage of the recovery journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {programs.map((program) => (
              <Card key={program.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild>
                    <Link to={program.path}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Culturally Sensitive Care</h3>
                <p className="text-gray-700">
                  We ground our work in the cultural context of Tamil Nadu, honoring local traditions while applying 
                  evidence-based approaches to addiction treatment. Our team members speak Tamil and understand the 
                  unique challenges women face in local communities.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Gender-Responsive Treatment</h3>
                <p className="text-gray-700">
                  Our programs address the unique needs of women in addiction recovery, including trauma, family responsibilities, 
                  and societal expectations. We create safe spaces where women can heal and grow without judgment.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Community Integration</h3>
                <p className="text-gray-700">
                  We believe in working closely with existing community structures, from health centers to religious institutions. 
                  By collaborating with community leaders, we increase access to services and reduce the stigma surrounding addiction.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Long-Term Support</h3>
                <p className="text-gray-700">
                  Recovery is a lifelong journey, not a quick fix. Our programs provide ongoing support through alumni networks, 
                  community events, and accessible resources that women can turn to throughout their recovery journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">1,500+</p>
                <p className="text-gray-600">Women served through our programs</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">73%</p>
                <p className="text-gray-600">Recovery success rate after one year</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">12</p>
                <p className="text-gray-600">Districts reached across Tamil Nadu</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">85%</p>
                <p className="text-gray-600">Program graduates employed or in education</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Whether you're seeking help, looking to support our work, or want to volunteer, 
            we'd love to hear from you.
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

export default Programs;
