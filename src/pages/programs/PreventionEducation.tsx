
import React from 'react';
import ProgramDetail from '@/components/ProgramDetail';

const PreventionEducationProgram = () => {
  return (
    <ProgramDetail
      title="Prevention & Education Program"
      subtitle="Empowering communities through knowledge and early intervention"
      imageSrc="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=1600"
      description={[
        "Our Prevention & Education Program works proactively to address addiction before it takes hold. We believe that education, awareness, and early intervention are powerful tools in preventing substance use disorders, especially among vulnerable populations.",
        "Through schools, community centers, and workplaces across Tamil Nadu, we deliver evidence-based prevention programs tailored to different age groups and cultural contexts, equipping individuals with the knowledge and skills to make healthy choices."
      ]}
      goals={[
        "Raise awareness about addiction risks and warning signs",
        "Provide accurate information about substances and their effects",
        "Teach healthy coping skills and stress management techniques",
        "Empower youth to resist peer pressure and make informed decisions",
        "Train community gatekeepers to identify and respond to early warning signs",
        "Create supportive environments that discourage substance use"
      ]}
      approach={[
        {
          title: "School-Based Programs",
          description: "Age-appropriate curriculum for students from elementary through high school, focusing on resilience, decision-making, and substance education."
        },
        {
          title: "Community Workshops",
          description: "Interactive sessions in community centers, religious institutions, and public spaces reaching diverse community members."
        },
        {
          title: "Workplace Programs",
          description: "Tailored prevention and early intervention programs for employers, increasing awareness and reducing addiction's impact on productivity."
        },
        {
          title: "Peer Education",
          description: "Training youth leaders to deliver accurate information and positive messaging to their peers, leveraging social influence constructively."
        },
        {
          title: "Media Campaigns",
          description: "Targeted awareness campaigns using various media channels to dispel myths and reduce stigma around addiction."
        },
        {
          title: "Gatekeeper Training",
          description: "Equipping teachers, healthcare workers, and community leaders with skills to identify risk factors and connect individuals to appropriate services."
        }
      ]}
      impact={[
        {
          title: "People Reached",
          value: "25,000+",
          description: "Individuals reached through education programs"
        },
        {
          title: "Schools Engaged",
          value: "120",
          description: "Schools implementing our prevention curriculum"
        },
        {
          title: "Trained Leaders",
          value: "450+",
          description: "Community gatekeepers and peer educators trained"
        },
        {
          title: "Risk Reduction",
          value: "38%",
          description: "Decrease in high-risk behaviors among program participants"
        }
      ]}
      testimonials={[
        {
          quote: "The school prevention program opened my eyes to the dangers of casual substance use. When my friends started experimenting with alcohol, I had the confidence to say no.",
          author: "Raji P.",
          role: "High school student, Madurai"
        },
        {
          quote: "As a teacher, the gatekeeper training gave me concrete tools to identify students at risk and connect them with help before problems escalated.",
          author: "Vimal S.",
          role: "Secondary school teacher, Chennai"
        }
      ]}
      faqs={[
        {
          question: "At what age should prevention education begin?",
          answer: "We believe in age-appropriate prevention education starting as early as elementary school. For younger children, we focus on general life skills and healthy choices, introducing more specific substance information as children mature."
        },
        {
          question: "How do you adapt programs for different communities in Tamil Nadu?",
          answer: "We work closely with local community leaders to ensure our materials are culturally relevant. Our programs address specific substances most prevalent in each community and incorporate local values and customs."
        },
        {
          question: "Can parents request programs for their children's schools?",
          answer: "Yes! We encourage parent advocacy. We provide materials to help parents approach school administrators, and our staff can conduct presentations for parent-teacher associations."
        },
        {
          question: "Do prevention programs actually work?",
          answer: "Research shows that comprehensive, sustained prevention programs can reduce substance use by 20-40%. Our specific programs are evaluated regularly and show significant positive outcomes in knowledge, attitudes, and behaviors."
        }
      ]}
    />
  );
};

export default PreventionEducationProgram;
