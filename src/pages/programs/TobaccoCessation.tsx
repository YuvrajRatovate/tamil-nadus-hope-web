
import React from 'react';
import ProgramPage from '@/components/ProgramPage';

const TobaccoCessationProgram = () => {
  return (
    <ProgramPage
      title="Tobacco Cessation Program"
      subtitle="Breaking free from tobacco addiction through compassionate support"
      imageSrc="https://images.unsplash.com/photo-1527099908998-5b762c412ca0?auto=format&fit=crop&q=80&w=1600"
      description={[
        "Our Tobacco Cessation Program addresses the physical, psychological, and social aspects of tobacco addiction, with culturally-sensitive approaches designed specifically for women in Tamil Nadu communities.",
        "We understand that tobacco use often begins as a coping mechanism for stress and life challenges. Our program helps women develop healthier coping strategies while addressing the physiological dependence on nicotine."
      ]}
      keyPoints={[
        "Comprehensive assessment and personalized cessation plans",
        "Nicotine replacement therapy and medication support when appropriate",
        "Behavioral counseling to break habitual patterns of tobacco use",
        "Stress management and healthy coping skills development",
        "Community-based support groups for sustained motivation"
      ]}
      services={[
        {
          title: "Nicotine Dependence Assessment",
          description: "Professional evaluation of dependence level and tailored cessation strategies."
        },
        {
          title: "Medication Support",
          description: "Access to appropriate nicotine replacement therapies and cessation medications."
        },
        {
          title: "Craving Management",
          description: "Practical techniques to manage cravings and withdraw symptoms effectively."
        },
        {
          title: "Health Education",
          description: "Information on the health impacts of tobacco and benefits of quitting."
        },
        {
          title: "Long-term Follow-up",
          description: "Continued support and check-ins to prevent relapse and celebrate milestones."
        }
      ]}
      outcomes={[
        {
          title: "Quit Success",
          value: "68%",
          description: "Remain tobacco-free after 6 months"
        },
        {
          title: "Health Improvements",
          value: "92%",
          description: "Report better respiratory health"
        },
        {
          title: "Financial Impact",
          value: "₹24,000+",
          description: "Average annual savings after quitting"
        },
        {
          title: "Quality of Life",
          value: "85%",
          description: "Report improved overall wellbeing"
        }
      ]}
      testimonial={{
        quote: "After 15 years of tobacco use, I never thought I could quit. The program helped me understand my triggers and gave me tools to manage them. My children no longer have to worry about my health.",
        author: "Meena S.",
        role: "Program Graduate, Madurai"
      }}
    />
  );
};

export default TobaccoCessationProgram;
