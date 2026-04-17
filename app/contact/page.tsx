"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f8f8f8] font-sans pt-20">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wider flex items-center gap-2">
            <span className="text-white">Get Work</span>
            <span className="text-[#D4AF37]">Talent</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-gray-400">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <Link href="/talent-pool" className="hover:text-[#D4AF37] transition-colors">Talent Pool</Link>
            <Link href="/services" className="hover:text-[#D4AF37] transition-colors">Systems Built</Link>
            <Link href="/contact" className="text-[#D4AF37]">Contact</Link>
          </nav>
          <Link href="/contact" className="px-6 py-2 bg-[#D4AF37] text-black font-semibold text-sm rounded-full hover:bg-white transition-colors duration-300">
            Book a 15-Minute Call
          </Link>
        </div>
      </header>

      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative">
        {/* Background Glow */}
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Left Side: Information */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 space-y-8 z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Let's Build Your <br/><span className="italic text-[#D4AF37]">Dream Team.</span></h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              We only partner with serious operators. Fill out the form or book a call directly to discuss your operational bottlenecks and how our premium talent can solve them.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center bg-[#111]">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Email Us</p>
                <p className="font-medium">hello@getworktalent.com</p>
              </div>
            </div>
            {/* Pwede ra idugang ang Phone ug Location diri puhon kung naa na */}
          </div>
        </motion.div>

        {/* Right Side: Form / Booking */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 z-10">
          <div className="bg-[#111] border border-gray-800 p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-serif mb-6 text-white">Request a Consultation</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-md p-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-md p-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider">Company Email</label>
                <input type="email" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-md p-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="john@yourcompany.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider">What do you need help with?</label>
                <select className="w-full bg-[#0a0a0a] border border-gray-800 rounded-md p-3 text-gray-300 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                  <option>Hiring a Virtual Assistant</option>
                  <option>CRM & Systems Buildout</option>
                  <option>Web Development</option>
                  <option>Not sure, need a strategy call</option>
                </select>
              </div>

              <button type="button" className="w-full mt-4 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-sm rounded-md hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group">
                Submit Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-800 text-center">
              <p className="text-sm text-gray-400 mb-4">Prefer to pick a time right now?</p>
              {/* Kung naa na kay Calendly Link, ilisi nang href="#" sa ubos */}
              <a href="#" target="_blank" className="block w-full py-3 border border-gray-600 text-white font-semibold uppercase tracking-wider text-sm rounded-md hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300">
                Open Calendar
              </a>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}

