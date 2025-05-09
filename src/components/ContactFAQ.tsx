
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ContactFAQ = () => {
  return (
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
  );
};

export default ContactFAQ;
