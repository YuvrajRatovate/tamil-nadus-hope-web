import React, { useState } from 'react';
import Hero from '@/components/Hero';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from "@/integrations/supabase/client";
import Map from '@/components/Map';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert the contact form data into Supabase
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);
        
      if (error) {
        console.error("Error submitting contact form:", error);
        toast.error("There was a problem submitting your message. Please try again.");
        setIsSubmitting(false);
        return;
      }
      
      console.log("Contact form submitted successfully");
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Exception submitting contact form:", error);
      toast.error("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

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
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions or need support? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required 
                          placeholder="you@example.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        required 
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        required 
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                You can reach us through any of the following channels or visit our main office in Chennai.
              </p>
              
              <div className="space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Our Main Office</h3>
                        <p className="text-gray-600">123 Hope Street</p>
                        <p className="text-gray-600">Anna Nagar, Chennai</p>
                        <p className="text-gray-600">Tamil Nadu 600040</p>
                        <p className="text-gray-600">India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-gray-600">Helpline: 1800-XXX-XXXX (24/7)</p>
                        <p className="text-gray-600">Office: +91 44 XXXX XXXX</p>
                        <p className="text-gray-600 mt-2 text-sm">
                          Our helpline is available 24/7 for immediate assistance
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-gray-600">General Inquiries: contact@tamilnaduhope.org</p>
                        <p className="text-gray-600">Support: support@tamilnaduhope.org</p>
                        <p className="text-gray-600">Donations: donate@tamilnaduhope.org</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Operating Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                        <p className="text-gray-600 mt-2 text-sm">
                          Helpline services are available 24/7
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          
          <div className="mx-auto max-w-4xl">
            <Map height="500px" />
          </div>
        </div>
      </section>
      
      {/* Regional Centers */}
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
      
      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How do I refer someone to your program?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You can refer someone by calling our helpline at 1800-XXX-XXXX or filling out the referral form on our website. Our team will follow up within 24 hours.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Are your services confidential?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, all our services are completely confidential. We respect the privacy of all individuals seeking help and strictly adhere to confidentiality protocols.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>How can I volunteer with Tamil Nadu's Hope?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We welcome volunteers! Please fill out the volunteer application form on our website or contact our office directly. We offer various volunteer opportunities based on your skills and availability.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Do you offer services in languages other than Tamil?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, our services are available in Tamil, English, and Telugu to ensure accessibility for diverse communities across Tamil Nadu.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
