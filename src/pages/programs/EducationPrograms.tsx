
import React from 'react';
import ProgramPage from '@/components/ProgramPage';

const EducationPrograms = () => {
  return (
    <ProgramPage
      title="Education Programs"
      subtitle="Creating pathways to learning for women in recovery"
      imageSrc="https://images.unsplash.com/photo-1501290741922-b56c0d0884af?auto=format&fit=crop&q=80&w=1600"
      description={[
        "Our Education Programs provide women in recovery with opportunities to continue their formal education, from basic literacy to higher education. We recognize that addiction often interrupts educational journeys, and that improved education is a powerful tool for sustainable recovery and life transformation.",
        "Through partnerships with local educational institutions and dedicated volunteer tutors, we offer flexible learning options that accommodate the unique circumstances of women rebuilding their lives after addiction."
      ]}
      keyPoints={[
        "Educational assessment and personalized learning plans",
        "Basic literacy and numeracy courses for those needing fundamental skills",
        "High school completion programs with official certification",
        "College preparation and application support",
        "Scholarships and financial aid guidance for continuing education"
      ]}
      services={[
        {
          title: "Basic Education",
          description: "Literacy, numeracy, and fundamental educational skills development."
        },
        {
          title: "Secondary Education",
          description: "Support for completing high school equivalency programs."
        },
        {
          title: "Higher Education Pathways",
          description: "Guidance for college applications, scholarships, and degree programs."
        },
        {
          title: "Digital Literacy",
          description: "Computer skills training essential for modern education and employment."
        },
        {
          title: "Study Support",
          description: "Tutoring, study groups, and academic counseling for ongoing success."
        }
      ]}
      outcomes={[
        {
          title: "Literacy Gains",
          value: "96%",
          description: "Improve reading and writing skills"
        },
        {
          title: "Program Completion",
          value: "78%",
          description: "Complete their educational goals"
        },
        {
          title: "Further Education",
          value: "45%",
          description: "Continue to higher education"
        },
        {
          title: "Employment Improvement",
          value: "82%",
          description: "Gain better jobs after education"
        }
      ]}
      testimonial={{
        quote: "I dropped out of school when my addiction started at 15. At 32, I never thought I'd have a chance to continue my education. This program helped me earn my high school certificate, and now I'm studying to become a social worker to help others.",
        author: "Deepa S.",
        role: "Education Program Participant"
      }}
    />
  );
};

export default EducationPrograms;
