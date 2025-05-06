
import React from 'react';
import ProgramPage from '@/components/ProgramPage';

const EmploymentSupportProgram = () => {
  return (
    <ProgramPage
      title="Employment Support Program"
      subtitle="Building economic independence for women in recovery"
      imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1600"
      description={[
        "Our Employment Support Program focuses on helping women in recovery build economic independence through job readiness training, vocational skills development, and employment placement assistance. We understand that financial stability is crucial for sustained recovery and overall wellbeing.",
        "The program bridges the gap between recovery and reintegration into the workforce, addressing the unique barriers women face when seeking employment after addiction, including gaps in work history, legal issues, and confidence challenges."
      ]}
      keyPoints={[
        "Comprehensive vocational assessment to identify skills, interests and opportunities",
        "Resume building and interview preparation with industry-specific coaching",
        "Job placement assistance with supportive employers in the community",
        "Financial literacy education and money management skills",
        "Ongoing workplace support and mentoring during employment transition"
      ]}
      services={[
        {
          title: "Skills Assessment",
          description: "Professional evaluation of existing skills and identification of career paths."
        },
        {
          title: "Job Readiness Training",
          description: "Workshops on workplace expectations, communication, and professional behavior."
        },
        {
          title: "Resume & Interview Prep",
          description: "Personalized assistance with job applications and interview techniques."
        },
        {
          title: "Employer Partnerships",
          description: "Connections with local businesses committed to supporting women in recovery."
        },
        {
          title: "Workplace Mentoring",
          description: "Ongoing support during the critical first months of employment."
        },
        {
          title: "Entrepreneurship Support",
          description: "Guidance for women interested in starting their own small businesses."
        }
      ]}
      outcomes={[
        {
          title: "Employment Rate",
          value: "72%",
          description: "Secure employment within 3 months"
        },
        {
          title: "Job Retention",
          value: "65%",
          description: "Maintain employment for 1+ year"
        },
        {
          title: "Income Growth",
          value: "45%",
          description: "Average increase in income"
        },
        {
          title: "Self-Sufficiency",
          value: "83%",
          description: "Report improved financial stability"
        }
      ]}
      testimonial={{
        quote: "After years of addiction, I didn't believe anyone would hire me. The employment program helped me discover my strengths, prepare for interviews, and connect with an employer who gave me a chance. Now I'm supporting myself and my daughter.",
        author: "Kavitha R.",
        role: "Program Graduate, Tirunelveli"
      }}
    />
  );
};

export default EmploymentSupportProgram;
