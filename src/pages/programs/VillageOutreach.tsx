
import React from 'react';
import ProgramPage from '@/components/ProgramPage';

const VillageOutreach = () => {
  return (
    <ProgramPage
      title="Village Outreach Program"
      subtitle="Bringing addiction services to rural Tamil Nadu communities"
      imageSrc="https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&q=80&w=1600"
      description={[
        "Our Village Outreach Program extends addiction prevention and recovery services to women in rural and underserved areas of Tamil Nadu. We recognize that geographical isolation, limited resources, and heightened stigma create significant barriers to treatment in village settings.",
        "Through mobile teams, local partnerships, and innovative delivery methods, we ensure that women throughout the region have access to culturally-appropriate addiction services that respect local customs while providing evidence-based care."
      ]}
      keyPoints={[
        "Mobile assessment and counseling services that travel to remote communities",
        "Training for village health workers to identify and support women with addiction",
        "Telehealth options connecting rural women with addiction specialists",
        "Women's support groups established in village settings",
        "Resource coordination with existing rural health and social services"
      ]}
      services={[
        {
          title: "Mobile Health Units",
          description: "Traveling teams providing addiction screening, basic health services, and referrals."
        },
        {
          title: "Community Health Worker Training",
          description: "Education for local health staff on addiction identification and support."
        },
        {
          title: "Village Support Groups",
          description: "Facilitated peer support meetings in rural communities."
        },
        {
          title: "Telehealth Counseling",
          description: "Remote therapy sessions connecting village women with addiction specialists."
        },
        {
          title: "Transportation Assistance",
          description: "Help accessing treatment facilities for women from remote areas."
        }
      ]}
      outcomes={[
        {
          title: "Rural Reach",
          value: "180+",
          description: "Villages served across Tamil Nadu"
        },
        {
          title: "Access Improvement",
          value: "65%",
          description: "Increase in rural women accessing services"
        },
        {
          title: "Local Capacity",
          value: "240",
          description: "Village health workers trained"
        },
        {
          title: "Support Networks",
          value: "95",
          description: "Rural women's support groups established"
        }
      ]}
      testimonial={{
        quote: "In our village, women with addiction problems used to suffer in silence. When the mobile unit started visiting, it changed everything. I got help for my drinking problem without having to leave my children or explain to everyone where I was going. Now I help other women connect with the services.",
        author: "Selvi M.",
        role: "Program Participant, Tiruvannamalai District"
      }}
    />
  );
};

export default VillageOutreach;
