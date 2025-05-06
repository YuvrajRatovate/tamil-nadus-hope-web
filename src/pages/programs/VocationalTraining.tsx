
import React from 'react';
import ProgramDetail from '@/components/ProgramDetail';

const VocationalTrainingProgram = () => {
  return (
    <ProgramDetail
      title="Vocational Training Program"
      subtitle="Building skills for sustainable recovery and independence"
      imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
      description={[
        "Our Vocational Training Program is designed to address one of the most critical factors in sustainable recovery: economic independence. Women in recovery often face significant barriers to employment due to gaps in work history, legal issues, or limited skills.",
        "Through comprehensive skills training, job readiness preparation, and employer partnerships, we help women develop marketable skills that lead to stable employment opportunities, financial independence, and a strong foundation for long-term recovery."
      ]}
      goals={[
        "Develop marketable skills aligned with local employment opportunities",
        "Build confidence and self-efficacy through mastery of new abilities",
        "Address barriers to employment such as resume gaps and interview skills",
        "Connect women with supportive employers who understand recovery",
        "Create pathways to financial independence and stability",
        "Foster pride and purpose through meaningful work"
      ]}
      approach={[
        {
          title: "Skills Assessment",
          description: "Comprehensive evaluation of existing skills, interests, and aptitudes to develop personalized vocational plans."
        },
        {
          title: "Technical Training",
          description: "Hands-on instruction in high-demand fields such as healthcare support, hospitality, textile production, and information technology."
        },
        {
          title: "Soft Skills Development",
          description: "Training in workplace communication, time management, conflict resolution, and customer service essentials."
        },
        {
          title: "Entrepreneurship Support",
          description: "Guidance for women interested in starting small businesses, including planning, financial management, and microloan access."
        },
        {
          title: "Job Placement Services",
          description: "Resume building, interview preparation, and direct connections with our network of recovery-friendly employers."
        },
        {
          title: "Ongoing Support",
          description: "Workplace mentoring and regular check-ins during the first year of employment to address challenges and ensure success."
        }
      ]}
      impact={[
        {
          title: "Women Trained",
          value: "350+",
          description: "Women have completed vocational training programs"
        },
        {
          title: "Employment Rate",
          value: "83%",
          description: "Graduates find employment within three months"
        },
        {
          title: "Income Increase",
          value: "165%",
          description: "Average increase in monthly income after program"
        },
        {
          title: "Business Launched",
          value: "45",
          description: "Women have started their own businesses"
        }
      ]}
      testimonials={[
        {
          quote: "Learning to become a healthcare aide gave me purpose and stability. Two years sober now, I have my own apartment and can support my children.",
          author: "Anitha J.",
          role: "Program graduate, now employed in healthcare"
        },
        {
          quote: "The tailoring program taught me more than sewing—it taught me patience, attention to detail, and believing in myself. My small business now employs two other women in recovery.",
          author: "Meena K.",
          role: "Program graduate and small business owner"
        }
      ]}
      faqs={[
        {
          question: "Do I need previous work experience to join the vocational program?",
          answer: "No, our programs are designed for various experience levels, including those with limited or no formal work history. We meet you where you are."
        },
        {
          question: "What types of vocational training do you offer?",
          answer: "We offer training in several high-demand fields including healthcare support, hospitality services, textile production, beauty services, food production, retail operations, and basic computer skills."
        },
        {
          question: "How long do the training programs last?",
          answer: "Program length varies by skill area, ranging from 6 weeks to 6 months. Most programs include both classroom instruction and practical internship components."
        },
        {
          question: "Is there financial support available during training?",
          answer: "Yes, we offer stipends to cover transportation costs and basic needs during the training period. We also provide childcare support for mothers participating in our programs."
        }
      ]}
    />
  );
};

export default VocationalTrainingProgram;
