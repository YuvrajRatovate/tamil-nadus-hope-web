
import React from 'react';
import ProgramDetail from '@/components/ProgramDetail';

const RehabilitationProgram = () => {
  return (
    <ProgramDetail
      title="Rehabilitation Program"
      subtitle="Comprehensive recovery support for women battling addiction"
      imageSrc="https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=1600"
      description={[
        "Our Rehabilitation Program provides comprehensive addiction treatment and recovery support for women across Tamil Nadu. We understand that addiction recovery requires a holistic approach that addresses physical dependency, psychological factors, and social support systems.",
        "The program operates through both residential and outpatient services, allowing us to meet the unique needs of each woman. Our approach combines evidence-based therapies with local cultural sensitivities to create truly effective treatment plans."
      ]}
      goals={[
        "Provide safe, supportive environments for physical detoxification and withdrawal management",
        "Address underlying psychological factors contributing to addiction through counseling and therapy",
        "Develop personalized recovery plans focused on sustainable sobriety",
        "Equip women with coping skills and relapse prevention strategies",
        "Rebuild family relationships damaged by addiction",
        "Foster reintegration with community and society"
      ]}
      approach={[
        {
          title: "Medical Support",
          description: "Physician-supervised detoxification and withdrawal management with 24/7 medical support during critical phases of recovery."
        },
        {
          title: "Psychological Counseling",
          description: "Individual and group therapy sessions led by qualified addiction counselors addressing trauma, mental health, and behavioral patterns."
        },
        {
          title: "Family Involvement",
          description: "Structured family therapy sessions and education to repair relationships and create a supportive home environment."
        },
        {
          title: "Life Skills Training",
          description: "Practical workshops on stress management, healthy communication, conflict resolution, and other essential life skills."
        },
        {
          title: "Vocational Support",
          description: "Skills training and job placement assistance to ensure economic independence after program completion."
        },
        {
          title: "Aftercare Planning",
          description: "Ongoing support through alumni groups, check-ins, and community resources to maintain sobriety long-term."
        }
      ]}
      impact={[
        {
          title: "Women Served",
          value: "500+",
          description: "Women have completed our rehabilitation program since inception"
        },
        {
          title: "Success Rate",
          value: "73%",
          description: "Remain sober one year after completing the program"
        },
        {
          title: "Families Reunited",
          value: "300+",
          description: "Women successfully reunited with their families"
        },
        {
          title: "Employment",
          value: "85%",
          description: "Of graduates secure employment within 6 months"
        }
      ]}
      testimonials={[
        {
          quote: "After 8 years of alcohol addiction, I had lost my job and my family's trust. The rehabilitation program gave me back my life, my dignity, and my family.",
          author: "Priya S.",
          role: "Program Graduate, Chennai"
        },
        {
          quote: "The counselors understood my struggles without judgment. They helped me face my trauma and find healthier coping mechanisms. I've been sober for 3 years now.",
          author: "Lakshmi R.",
          role: "Program Graduate, Coimbatore"
        }
      ]}
      faqs={[
        {
          question: "How long does the residential rehabilitation program last?",
          answer: "Our residential program typically lasts 90 days, though this can be adjusted based on individual needs and progress. We believe in providing sufficient time for both physical recovery and psychological healing."
        },
        {
          question: "Do you accept women with co-occurring mental health disorders?",
          answer: "Yes, we provide dual-diagnosis treatment for women struggling with both addiction and mental health challenges such as depression, anxiety, or trauma-related disorders."
        },
        {
          question: "Is family participation required during the rehabilitation process?",
          answer: "While highly encouraged, family participation is not mandatory. We understand that family dynamics vary, and we adapt our approach based on each woman's specific situation."
        },
        {
          question: "What happens after the formal rehabilitation program ends?",
          answer: "We offer a structured aftercare program including regular support group meetings, check-ins with counselors, and community resources to support long-term recovery."
        }
      ]}
    />
  );
};

export default RehabilitationProgram;
