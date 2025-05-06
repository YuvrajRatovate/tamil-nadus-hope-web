
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontSizeProvider } from "@/context/FontSizeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Pages
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Program Detail Pages
import RehabilitationProgram from "./pages/programs/Rehabilitation";
import FamilySupportProgram from "./pages/programs/FamilySupport";
import PreventionEducationProgram from "./pages/programs/PreventionEducation";
import VocationalTrainingProgram from "./pages/programs/VocationalTraining";

// Additional Program Pages
import AlcoholCessationProgram from "./pages/programs/AlcoholCessation";
import TobaccoCessationProgram from "./pages/programs/TobaccoCessation";
import DrugRehabilitationProgram from "./pages/programs/DrugRehabilitation";
import SavingsCalculatorPage from "./pages/programs/SavingsCalculator";
import CounselingProgram from "./pages/programs/Counseling";
import EmploymentSupportProgram from "./pages/programs/EmploymentSupport";
import EducationPrograms from "./pages/programs/EducationPrograms";
import AwarenessCampaigns from "./pages/programs/AwarenessCampaigns";
import VillageOutreach from "./pages/programs/VillageOutreach";
import SkillsWorkshops from "./pages/programs/SkillsWorkshops";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <FontSizeProvider>
          <BrowserRouter>
            <Toaster />
            <Sonner />
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/programs" element={<Programs />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* Original Program Detail Pages */}
                  <Route path="/programs/rehabilitation" element={<RehabilitationProgram />} />
                  <Route path="/programs/family-support" element={<FamilySupportProgram />} />
                  <Route path="/programs/prevention-education" element={<PreventionEducationProgram />} />
                  <Route path="/programs/vocational-training" element={<VocationalTrainingProgram />} />
                  
                  {/* Quit Programs */}
                  <Route path="/programs/alcohol" element={<AlcoholCessationProgram />} />
                  <Route path="/programs/tobacco" element={<TobaccoCessationProgram />} />
                  <Route path="/programs/drugs" element={<DrugRehabilitationProgram />} />
                  <Route path="/programs/calculator" element={<SavingsCalculatorPage />} />
                  
                  {/* Support Services */}
                  <Route path="/programs/counseling" element={<CounselingProgram />} />
                  <Route path="/programs/employment" element={<EmploymentSupportProgram />} />
                  <Route path="/programs/education" element={<EducationPrograms />} />
                  
                  {/* Community Initiatives */}
                  <Route path="/programs/awareness" element={<AwarenessCampaigns />} />
                  <Route path="/programs/village" element={<VillageOutreach />} />
                  <Route path="/programs/workshops" element={<SkillsWorkshops />} />
                  
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </FontSizeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
