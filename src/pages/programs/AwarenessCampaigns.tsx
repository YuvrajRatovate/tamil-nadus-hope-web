
import React from 'react';
import ProgramPage from '@/components/ProgramPage';

const AwarenessCampaigns = () => {
  return (
    <ProgramPage
      title="Awareness Campaigns"
      subtitle="Reducing stigma and promoting understanding about addiction"
      imageSrc="https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&q=80&w=1600"
      description={[
        "Our Awareness Campaigns aim to transform public attitudes and understanding about addiction in Tamil Nadu communities. We challenge stigma, misconceptions, and discriminatory practices that prevent women from seeking help for substance use disorders.",
        "Through culturally-sensitive educational events, media outreach, and community partnerships, we create conversations that promote compassion and factual understanding of addiction as a treatable health condition rather than a moral failing."
      ]}
      keyPoints={[
        "Evidence-based education about the nature of addiction as a health condition",
        "First-person recovery stories that humanize addiction and inspire hope",
        "Training for healthcare providers, educators, and community leaders",
        "Strategic media partnerships to reach diverse audiences",
        "Policy advocacy for improved addiction services for women"
      ]}
      services={[
        {
          title: "Community Workshops",
          description: "Interactive educational sessions in villages, schools, and community centers."
        },
        {
          title: "Healthcare Provider Training",
          description: "Programs teaching medical professionals about addiction, treatment, and compassionate care."
        },
        {
          title: "Media Campaigns",
          description: "Radio, print, and social media initiatives that challenge stigma and share accurate information."
        },
        {
          title: "School Programs",
          description: "Age-appropriate prevention education for children and adolescents."
        },
        {
          title: "Religious Leader Engagement",
          description: "Collaboration with spiritual communities to promote compassionate responses to addiction."
        }
      ]}
      outcomes={[
        {
          title: "Reach",
          value: "50,000+",
          description: "People reached annually through campaigns"
        },
        {
          title: "Knowledge Improvement",
          value: "85%",
          description: "Show improved understanding of addiction"
        },
        {
          title: "Attitude Change",
          value: "73%",
          description: "Report more compassionate views"
        },
        {
          title: "Help-Seeking",
          value: "42%",
          description: "Increase in women seeking treatment"
        }
      ]}
      testimonial={{
        quote: "After attending your workshop at our temple, I completely changed how I view women struggling with addiction. I now understand it's a health issue, not a character flaw. Our community prayer group has started supporting your organization's work.",
        author: "Radhika P.",
        role: "Community Workshop Participant"
      }}
    />
  );
};

export default AwarenessCampaigns;
