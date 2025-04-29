
import React from 'react';
import Hero from '@/components/Hero';
import SavingsCalculator from '@/components/SavingsCalculator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight } from 'lucide-react';

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="Our Programs"
        subtitle="Comprehensive support for addiction recovery and community development."
        imageSrc="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1600"
      />
      
      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Recovery Programs</h2>
            <p className="text-lg text-gray-700">
              Tamil Nadu's Hope offers a range of programs designed to help individuals break free from addiction, rebuild their lives, and create stronger communities.
            </p>
          </div>
          
          <Tabs defaultValue="quit" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="quit">Quit Programs</TabsTrigger>
              <TabsTrigger value="support">Support Services</TabsTrigger>
              <TabsTrigger value="community">Community Initiatives</TabsTrigger>
            </TabsList>
            
            <TabsContent value="quit" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Alcohol Cessation Program</CardTitle>
                  <CardDescription>Breaking the cycle of alcohol dependency</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our alcohol cessation program takes a holistic approach to recovery, combining medical support, counseling, peer support groups, and family therapy to help individuals overcome addiction.
                  </p>
                  <h4 className="font-semibold mb-2">Program Components:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Medical assessment and detoxification support</li>
                    <li>One-on-one counseling with addiction specialists</li>
                    <li>Group therapy and peer support networks</li>
                    <li>Family counseling and education</li>
                    <li>Relapse prevention strategies and ongoing support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to="/programs/alcohol">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Tobacco Cessation Program</CardTitle>
                  <CardDescription>Quitting smoking and tobacco use</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our specialized tobacco cessation program helps individuals overcome nicotine addiction through evidence-based techniques, behavioral therapy, and supportive care.
                  </p>
                  <h4 className="font-semibold mb-2">Program Components:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Nicotine replacement therapy options</li>
                    <li>Behavioral counseling to address triggers</li>
                    <li>Group support sessions with others quitting tobacco</li>
                    <li>Personalized quitting plans and follow-up care</li>
                    <li>Educational resources on health benefits of quitting</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to="/programs/tobacco">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Drug Rehabilitation Program</CardTitle>
                  <CardDescription>Recovery from drug dependency</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our comprehensive drug rehabilitation program addresses all aspects of addiction recovery, from initial detoxification to long-term sobriety maintenance.
                  </p>
                  <h4 className="font-semibold mb-2">Program Components:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Medically supervised detoxification</li>
                    <li>Residential treatment options for severe cases</li>
                    <li>Outpatient treatment and counseling</li>
                    <li>Cognitive behavioral therapy and other evidence-based approaches</li>
                    <li>Life skills training and vocational support</li>
                    <li>Aftercare planning and relapse prevention</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to="/programs/drugs">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="support" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Counseling Services</CardTitle>
                  <CardDescription>Professional mental health support</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our counseling services provide professional mental health support for individuals dealing with addiction, trauma, depression, anxiety, and other challenges.
                  </p>
                  <h4 className="font-semibold mb-2">Services Include:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Individual therapy sessions</li>
                    <li>Family counseling</li>
                    <li>Group therapy</li>
                    <li>Crisis intervention</li>
                    <li>Mental health education</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to="/programs/counseling">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Employment Support</CardTitle>
                  <CardDescription>Building economic independence</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our employment support services help individuals in recovery build the skills and confidence needed to secure and maintain meaningful employment.
                  </p>
                  <h4 className="font-semibold mb-2">Services Include:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Vocational skills assessment</li>
                    <li>Job readiness training</li>
                    <li>Resume and interview preparation</li>
                    <li>Job placement assistance</li>
                    <li>Ongoing workplace support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to="/programs/employment">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="community" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Awareness Campaigns</CardTitle>
                  <CardDescription>Education and prevention initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our awareness campaigns aim to educate communities about the risks of addiction and promote healthy lifestyle choices through various outreach activities.
                  </p>
                  <h4 className="font-semibold mb-2">Campaign Activities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>School and college prevention programs</li>
                    <li>Community workshops and seminars</li>
                    <li>Media campaigns and educational materials</li>
                    <li>Health fair participation</li>
                    <li>Training for community leaders and influencers</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to="/programs/awareness">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Village Outreach</CardTitle>
                  <CardDescription>Bringing support to rural communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our village outreach program brings addiction prevention and recovery support services directly to underserved rural communities across Tamil Nadu.
                  </p>
                  <h4 className="font-semibold mb-2">Outreach Services:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Mobile health clinics</li>
                    <li>Community education sessions</li>
                    <li>Training for village health workers</li>
                    <li>Support group formation</li>
                    <li>Referrals for specialized treatment</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to="/programs/village">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Savings Calculator Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Addiction Savings Calculator</h2>
            <p className="text-lg text-gray-700">
              See how much money you could save by quitting harmful substances, and the health benefits you could gain over time.
            </p>
          </div>
          
          <SavingsCalculator />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-muted/30">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary text-xl font-bold">S</span>
                  </div>
                </div>
                <blockquote className="text-center italic mb-4">
                  "The alcohol cessation program changed my life. After 12 years of struggling, I've been sober for 2 years and have rebuilt my relationship with my family."
                </blockquote>
                <p className="text-center font-medium">Sangeetha, Chennai</p>
                <p className="text-center text-sm text-muted-foreground">Program Participant</p>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/30">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary text-xl font-bold">L</span>
                  </div>
                </div>
                <blockquote className="text-center italic mb-4">
                  "I never thought I could quit smoking after 20 years. The support I received helped me overcome my addiction and I've saved enough money to start a small business."
                </blockquote>
                <p className="text-center font-medium">Lakshmi, Coimbatore</p>
                <p className="text-center text-sm text-muted-foreground">Program Participant</p>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/30">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary text-xl font-bold">R</span>
                  </div>
                </div>
                <blockquote className="text-center italic mb-4">
                  "The village outreach program brought hope to our community. Now we have support groups and resources that weren't available before."
                </blockquote>
                <p className="text-center font-medium">Revathi, Madurai</p>
                <p className="text-center text-sm text-muted-foreground">Village Leader</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help or Have Questions?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our team is here to support you on your journey to recovery. Reach out to us today.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Programs;
