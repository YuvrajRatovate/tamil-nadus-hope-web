
import React from 'react';
import ProgramPage from '@/components/ProgramPage';

const DrugRehabilitationProgram = () => {
  return (
    <ProgramPage
      title="Drug Rehabilitation Program"
      subtitle="Comprehensive recovery support for women overcoming drug dependency"
      imageSrc="https://images.unsplash.com/photo-1599045118108-bf9954418b76?auto=format&fit=crop&q=80&w=1600"
      description={[
        "Our Drug Rehabilitation Program offers women a supportive pathway to recovery from substance use disorders. We recognize that women face unique challenges in both addiction and recovery, including social stigma, family responsibilities, and past trauma.",
        "Through an integrated approach combining medical care, psychological support, and social reintegration strategies, we help women rebuild their lives and develop the skills needed for sustained recovery and wellbeing."
      ]}
      keyPoints={[
        "Safe, medically-supervised detoxification with 24/7 support",
        "Trauma-informed therapy addressing the root causes of addiction",
        "Life skills development and vocational training for independence",
        "Childcare support for mothers during treatment sessions",
        "Long-term recovery planning and community integration support"
      ]}
      services={[
        {
          title: "Medical Detoxification",
          description: "Clinically supervised detox with medical support to manage withdrawal safely and comfortably."
        },
        {
          title: "Dual Diagnosis Treatment",
          description: "Integrated care for women dealing with both addiction and mental health challenges."
        },
        {
          title: "Trauma-Focused Therapy",
          description: "Specialized counseling to address trauma that often underlies substance use disorders."
        },
        {
          title: "Holistic Healing",
          description: "Complementary approaches including yoga, meditation, and art therapy for whole-person healing."
        },
        {
          title: "Family Reintegration",
          description: "Support for rebuilding damaged relationships and family systems during recovery."
        },
        {
          title: "Continuing Care",
          description: "Graduated levels of support as women transition back to independent living."
        }
      ]}
      outcomes={[
        {
          title: "Completion Rate",
          value: "83%",
          description: "Successfully complete the full program"
        },
        {
          title: "Sobriety",
          value: "65%",
          description: "Maintain recovery for at least one year"
        },
        {
          title: "Housing",
          value: "79%",
          description: "Secure stable housing after program"
        },
        {
          title: "Employment",
          value: "68%",
          description: "Find meaningful employment"
        }
      ]}
      testimonial={{
        quote: "When I arrived, I had lost everything - my health, my family's trust, my self-respect. This program didn't just help me get clean; it taught me how to live again. The all-women environment made me feel safe to be vulnerable and heal.",
        author: "Priya K.",
        role: "Program Graduate, Coimbatore"
      }}
    />
  );
};

export default DrugRehabilitationProgram;
