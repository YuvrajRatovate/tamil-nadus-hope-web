
import React from 'react';
import ProgramPage from '@/components/ProgramPage';

const SkillsWorkshops = () => {
  return (
    <ProgramPage
      title="Skills Workshops"
      subtitle="Developing practical abilities for independence and employment"
      imageSrc="https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&q=80&w=1600"
      description={[
        "Our Skills Workshops provide hands-on training in practical and marketable skills that support women's independence and employment prospects during recovery. We focus on both traditional and modern skills that have market demand in Tamil Nadu communities.",
        "These workshops not only equip women with valuable abilities but also build confidence, create community, and provide structured productive activity during the recovery journey. Many workshops also offer certification that can be valuable when seeking employment."
      ]}
      keyPoints={[
        "Hands-on learning environment with expert instructors and mentors",
        "Skills selected based on local market demand and employment opportunities",
        "Graduated difficulty levels accommodating beginners to advanced learners",
        "Micro-enterprise support for women interested in self-employment",
        "Social enterprise partnerships providing apprenticeship and employment pathways"
      ]}
      services={[
        {
          title: "Textile & Garment Production",
          description: "Training in sewing, embroidery, weaving, and garment construction with traditional and modern techniques."
        },
        {
          title: "Culinary Arts",
          description: "Food preparation, hygiene, nutrition, and specialized cooking skills for various culinary careers."
        },
        {
          title: "Digital Skills",
          description: "Computer literacy, office software, social media, and basic digital marketing for modern employment."
        },
        {
          title: "Handicrafts & Artisanal Products",
          description: "Traditional crafts with contemporary market appeal, including jewelry making, pottery, and home goods."
        },
        {
          title: "Beauty & Wellness Services",
          description: "Professional training in hair care, skin care, and therapeutic services with certification."
        },
        {
          title: "Agricultural Techniques",
          description: "Sustainable farming, organic gardening, and food processing methods for rural livelihoods."
        }
      ]}
      outcomes={[
        {
          title: "Skills Certification",
          value: "92%",
          description: "Workshop participants earn certification"
        },
        {
          title: "Income Generation",
          value: "78%",
          description: "Use skills to earn income within 6 months"
        },
        {
          title: "Self-Employment",
          value: "35%",
          description: "Launch micro-businesses using new skills"
        },
        {
          title: "Job Placement",
          value: "63%",
          description: "Secure jobs related to workshop training"
        }
      ]}
      testimonial={{
        quote: "Learning to sew and create garments gave me purpose during early recovery when each day was a struggle. Now I work at a garment factory and teach basic sewing at the center one evening a week. The skills workshop didn't just teach me a trade – it showed me I could still learn, create, and contribute.",
        author: "Kamala T.",
        role: "Skills Workshop Graduate"
      }}
    />
  );
};

export default SkillsWorkshops;
