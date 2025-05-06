
import React from 'react';
import ProgramPage from '@/components/ProgramPage';

const CounselingProgram = () => {
  return (
    <ProgramPage
      title="Counseling Services"
      subtitle="Professional mental health support for women in recovery"
      imageSrc="https://images.unsplash.com/photo-1573497161923-5a8e229be17d?auto=format&fit=crop&q=80&w=1600"
      description={[
        "Our Counseling Services provide professional mental health support designed specifically for women affected by addiction, either directly or through family members. We understand that lasting recovery requires addressing underlying emotional and psychological factors.",
        "Our team of trained counselors, many of whom are women from Tamil Nadu communities, offer culturally-sensitive therapy in multiple languages. We create a safe, confidential environment where women can explore their challenges, develop coping strategies, and build resilience."
      ]}
      keyPoints={[
        "Individual counseling tailored to each woman's unique needs and circumstances",
        "Group therapy sessions that foster connection and mutual support",
        "Specialized trauma counseling using evidence-based approaches",
        "Family counseling to heal relationships damaged by addiction",
        "Crisis intervention and ongoing emotional support"
      ]}
      services={[
        {
          title: "Individual Therapy",
          description: "One-on-one sessions with trained counselors addressing personal recovery challenges."
        },
        {
          title: "Group Therapy",
          description: "Facilitated groups where women can share experiences and learn from each other."
        },
        {
          title: "Trauma Recovery",
          description: "Specialized counseling for women dealing with past trauma or abuse."
        },
        {
          title: "Family Counseling",
          description: "Sessions that help heal family relationships affected by addiction."
        },
        {
          title: "Grief Counseling",
          description: "Support for processing losses often experienced during addiction and recovery."
        }
      ]}
      outcomes={[
        {
          title: "Mental Health",
          value: "76%",
          description: "Report reduced depression symptoms"
        },
        {
          title: "Anxiety Reduction",
          value: "68%",
          description: "Experience decreased anxiety levels"
        },
        {
          title: "Relationship Health",
          value: "72%",
          description: "Report improved family relationships"
        },
        {
          title: "Coping Skills",
          value: "85%",
          description: "Develop effective stress management"
        }
      ]}
      testimonial={{
        quote: "I was hesitant to open up at first, but my counselor created such a safe space that I finally felt understood. Working through my childhood trauma has been key to staying sober and building a healthier life.",
        author: "Sangeetha M.",
        role: "Counseling Program Participant"
      }}
    />
  );
};

export default CounselingProgram;
