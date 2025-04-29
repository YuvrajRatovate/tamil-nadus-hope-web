
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import FontSizeAdjuster from './FontSizeAdjuster';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsMenuOpen, setProgramsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Tamil Nadu's Hope</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
            
            {/* Programs dropdown with mega menu */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
                onClick={() => setProgramsMenuOpen(!programsMenuOpen)}
              >
                Our Programs <ChevronDown size={16} className="ml-1" />
              </button>
              
              {/* Mega Menu */}
              <div className="absolute left-0 mt-2 w-screen max-w-4xl bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block border border-gray-200">
                <div className="grid grid-cols-3 gap-8 p-8">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Quit Programs</h3>
                    <ul className="space-y-2">
                      <li><Link to="/programs/alcohol" className="text-gray-700 hover:text-primary block">Alcohol Cessation</Link></li>
                      <li><Link to="/programs/tobacco" className="text-gray-700 hover:text-primary block">Tobacco Cessation</Link></li>
                      <li><Link to="/programs/drugs" className="text-gray-700 hover:text-primary block">Drug Rehabilitation</Link></li>
                      <li><Link to="/programs/calculator" className="text-gray-700 hover:text-primary block">Savings Calculator</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Support Services</h3>
                    <ul className="space-y-2">
                      <li><Link to="/programs/counseling" className="text-gray-700 hover:text-primary block">Counseling</Link></li>
                      <li><Link to="/programs/employment" className="text-gray-700 hover:text-primary block">Employment Support</Link></li>
                      <li><Link to="/programs/education" className="text-gray-700 hover:text-primary block">Education Programs</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Community Initiatives</h3>
                    <ul className="space-y-2">
                      <li><Link to="/programs/awareness" className="text-gray-700 hover:text-primary block">Awareness Campaigns</Link></li>
                      <li><Link to="/programs/village" className="text-gray-700 hover:text-primary block">Village Outreach</Link></li>
                      <li><Link to="/programs/workshops" className="text-gray-700 hover:text-primary block">Skills Workshops</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="bg-muted p-4">
                  <p className="text-sm text-muted-foreground">Need immediate help? Call our 24/7 helpline: <span className="font-bold">1800-XXX-XXXX</span></p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">About Us</Link>
            <Link to="/donate" className="text-gray-700 hover:text-primary transition-colors">Donate</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Font Size Adjuster */}
          <div className="hidden md:flex items-center">
            <FontSizeAdjuster />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-center py-3">
              <FontSizeAdjuster />
            </div>
            <Link to="/" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            
            {/* Mobile Programs Menu */}
            <div>
              <button 
                className="flex items-center w-full py-2 text-gray-700 hover:text-primary justify-between"
                onClick={() => setProgramsMenuOpen(!programsMenuOpen)}
              >
                <span>Our Programs</span> <ChevronDown size={16} className={`transform ${programsMenuOpen ? 'rotate-180' : ''} transition-transform`} />
              </button>
              
              {programsMenuOpen && (
                <div className="pl-4 border-l-2 border-primary ml-2 space-y-1 mb-2">
                  <Link to="/programs/alcohol" className="block py-1 text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Alcohol Cessation</Link>
                  <Link to="/programs/tobacco" className="block py-1 text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Tobacco Cessation</Link>
                  <Link to="/programs/drugs" className="block py-1 text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Drug Rehabilitation</Link>
                  <Link to="/programs/calculator" className="block py-1 text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Savings Calculator</Link>
                  <Link to="/programs/counseling" className="block py-1 text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Counseling</Link>
                  <Link to="/programs/awareness" className="block py-1 text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Awareness Campaigns</Link>
                </div>
              )}
            </div>
            
            <Link to="/about" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link to="/donate" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Donate</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
