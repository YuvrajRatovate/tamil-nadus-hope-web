
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInformation = () => {
  return (
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
  );
};

export default ContactInformation;
