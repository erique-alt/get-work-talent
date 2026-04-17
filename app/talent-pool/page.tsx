"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Briefcase, Star } from "lucide-react";

// Placeholder Data para sa inyong Talents
const talents = [
  {
    name: "Alexandra M.",
    role: "Executive Assistant",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    skills: ["Inbox Management", "Complex Scheduling", "Client Concierge"],
    experience: "5+ Years",
  },
  {
    name: "David K.",
    role: "CRM & Systems Architect",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    skills: ["GoHighLevel", "HubSpot", "Zapier Automation"],
    experience: "7+ Years",
  },
  {
    name: "Sarah L.",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    skills: ["Team Leadership", "KPI Tracking", "SOP Creation"],
    experience: "6+ Years",
  },
  {
    name: "Marcus T.",
    role: "Real Estate ISA",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    skills: ["Outbound Prospecting", "Lead Qualification", "Follow-up Systems"],
    experience: "4+ Years",
  }
];

export default function TalentPool() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f8f8f8] font-sans pt-20 pb-20">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wider flex items-center gap-2">
            <span className="text-white">Get Work</span>
            <span className="text-[#D4AF37]">Talent</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-gray-400">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <Link href="/talent-pool" className="text-[#D4AF37]">Talent Pool</Link>
            <Link href="/services" className="hover:text-[#D4AF37] transition-colors">Systems Built</Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
          </nav>
          <Link href="/contact" className="px-6 py-2 bg-[#D4AF37] text-black font-semibold text-sm rounded-full hover:bg-white transition-colors duration-300">
            Book a 15-Minute Call
          </Link>
        </div>
      </header>

      {/* PAGE HEADER */}
      <section className="py-24 px-6 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">The Elite <span className="italic text-[#D4AF37]">Roster</span></h1>
          <p className="text-gray-400 text-lg">Pre-vetted, rigorously tested, and ready to deploy. Browse a sample of our top-tier professionals currently available for placement.</p>
        </motion.div>
      </section>

      {/* TALENT GRID */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {talents.map((talent, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111] rounded-xl overflow-hidden border border-gray-800 hover:border-[#D4AF37] group transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={talent.image} alt={talent.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" />
              </div>
              
              {/* Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center justify-between">
                    {talent.name} <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
                  </h3>
                  <p className="text-[#D4AF37] text-sm font-medium tracking-wide uppercase mt-1">{talent.role}</p>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Briefcase className="w-4 h-4" />
                  <span>{talent.experience} Experience</span>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Top Skills</p>
                  <ul className="space-y-2">
                    {talent.skills.map((skill, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="block text-center w-full mt-6 py-3 border border-gray-600 text-white text-sm font-semibold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300">
                  Interview Candidate
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}


