
import React from 'react';
import ProgramDetail from '@/components/ProgramDetail';

const FamilySupportProgram = () => {
  return (
    <ProgramDetail
      title="Family Support Program"
      subtitle="Healing families affected by addiction"
      imageSrc="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=1600"
      description={[
        "Our Family Support Program recognizes that addiction affects not just the individual, but the entire family unit. We provide comprehensive support services designed to help families heal from the effects of addiction, rebuild trust, and establish healthy communication patterns.",
        "Through education, counseling, and community building, we empower family members to understand addiction, set appropriate boundaries, and contribute positively to their loved one's recovery journey while also attending to their own well-being."
      ]}
      goals={[
        "Educate families about the nature of addiction as a disease",
        "Address codependency and enabling behaviors that unintentionally sustain addiction",
        "Rebuild trust and communication within family systems",
        "Provide safe spaces for processing grief, anger, and other complex emotions",
        "Develop healthy boundary-setting and conflict resolution skills",
        "Create supportive communities among families facing similar challenges"
      ]}
      approach={[
        {
          title: "Family Education Workshops",
          description: "Interactive sessions explaining addiction mechanisms, recovery processes, and how families can support recovery without enabling."
        },
        {
          title: "Group Counseling",
          description: "Facilitated discussions among families experiencing similar challenges, fostering mutual support and shared problem-solving."
        },
        {
          title: "Individual Family Therapy",
          description: "Targeted sessions addressing specific dynamics, traumas, and communication patterns within each unique family system."
        },
        {
          title: "Children's Support Groups",
          description: "Age-appropriate activities and discussions helping children understand and cope with a family member's addiction."
        },
        {
          title: "Crisis Intervention",
          description: "Immediate support during relapses or family emergencies with practical guidance and emotional stabilization."
        },
        {
          title: "Community Building",
          description: "Regular events fostering connections between families, creating lasting support networks beyond formal program participation."
        }
      ]}
      impact={[
        {
          title: "Families Supported",
          value: "450+",
          description: "Families have participated in our support program"
        },
        {
          title: "Children Helped",
          value: "600+",
          description: "Children have received specialized support"
        },
        {
          title: "Support Groups",
          value: "18",
          description: "Active support groups across Tamil Nadu"
        },
        {
          title: "Community Events",
          value: "24",
          description: "Family-focused events held annually"
        }
      ]}
      testimonials={[
        {
          quote: "I used to blame myself for my daughter's addiction. The family program helped me understand addiction as a disease and showed me how to support her recovery without enabling.",
          author: "Sunita M.",
          role: "Mother of a program participant"
        },
        {
          quote: "The children's group was transformative for my son. For the first time, he could express his feelings about my addiction with others who understood.",
          author: "Deepa K.",
          role: "Program graduate and mother"
        }
      ]}
      faqs={[
        {
          question: "Do family members have to attend if our loved one is in the rehabilitation program?",
          answer: "While highly encouraged, participation is voluntary. However, research shows that recovery outcomes improve significantly with family involvement."
        },
        {
          question: "My family member doesn't want treatment. Can we still get help?",
          answer: "Absolutely. Our program supports families regardless of whether their loved one is seeking treatment. We can help you navigate this challenging situation."
        },
        {
          question: "How do you accommodate work schedules for employed family members?",
          answer: "We offer evening and weekend sessions, as well as some online support groups, to ensure accessibility for working family members."
        },
        {
          question: "Is there support specifically for children affected by a parent's addiction?",
          answer: "Yes, we offer age-appropriate groups for children ages 5-12 and teens 13-17, using art therapy, play therapy, and discussion formats designed for younger participants."
        }
      ]}
    />
  );
};

export default FamilySupportProgram;
