
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FontSizeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/about" element={<About />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Program Detail Pages */}
                <Route path="/programs/rehabilitation" element={<RehabilitationProgram />} />
                <Route path="/programs/family-support" element={<FamilySupportProgram />} />
                <Route path="/programs/prevention-education" element={<PreventionEducationProgram />} />
                <Route path="/programs/vocational-training" element={<VocationalTrainingProgram />} />
                
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
);

export default App;
