
import React from 'react';
import ProgramPage from '@/components/ProgramPage';

const AlcoholCessationProgram = () => {
  return (
    <ProgramPage
      title="Alcohol Cessation Program"
      subtitle="Empowering women to break free from alcohol dependency"
      imageSrc="https://images.unsplash.com/photo-1569437061235-3bef9f7aeea1?auto=format&fit=crop&q=80&w=1600"
      description={[
        "Our Alcohol Cessation Program is tailored specifically to address the unique challenges women face when overcoming alcohol dependency in Tamil Nadu. We combine evidence-based therapeutic approaches with cultural sensitivity to provide comprehensive support.",
        "The program addresses not only the physical aspects of alcohol dependency but also the psychological, social, and spiritual dimensions of recovery, creating a holistic healing environment that empowers women to rebuild their lives."
      ]}
      keyPoints={[
        "Personalized treatment plans that respect cultural values and individual needs",
        "Medical detoxification support with 24/7 care from trained healthcare professionals",
        "Individual and group therapy sessions led by female counselors",
        "Family involvement and education to build support systems",
        "Long-term aftercare planning to prevent relapse and ensure sustainable recovery"
      ]}
      services={[
        {
          title: "Medical Assessment & Detox",
          description: "Safe, medically-supervised detoxification with careful monitoring and support to manage withdrawal symptoms."
        },
        {
          title: "Cognitive Behavioral Therapy",
          description: "Evidence-based therapy to identify and change negative thought patterns related to alcohol use."
        },
        {
          title: "Women's Support Groups",
          description: "Peer support sessions that create solidarity and understanding among women facing similar challenges."
        },
        {
          title: "Relapse Prevention",
          description: "Practical strategies and coping mechanisms to maintain sobriety in challenging situations."
        },
        {
          title: "Family Counseling",
          description: "Sessions that heal family relationships and build stronger support networks for long-term recovery."
        }
      ]}
      outcomes={[
        {
          title: "Recovery Rate",
          value: "78%",
          description: "Of women remain sober one year after program completion"
        },
        {
          title: "Family Reunification",
          value: "65%",
          description: "Report improved family relationships"
        },
        {
          title: "Employment",
          value: "71%",
          description: "Gain or maintain employment after recovery"
        },
        {
          title: "Cost Savings",
          value: "₹85,000+",
          description: "Average annual savings per person after quitting"
        }
      ]}
      testimonial={{
        quote: "This program didn't just help me stop drinking - it helped me rediscover who I am. The women-only environment made me feel safe to share my story without judgment.",
        author: "Lakshmi R.",
        role: "Program Graduate, Chennai"
      }}
    />
  );
};

export default AlcoholCessationProgram;
