"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, FileText, Target, Zap, CheckCircle2, XCircle, Briefcase, Users, PhoneCall, Building2, Gavel } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f8f8f8] relative overflow-hidden font-sans">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wider flex items-center gap-2">
            <span className="text-white">Get Work</span>
            <span className="text-[#D4AF37]">Talent</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-gray-400">
            <Link href="/" className="text-[#D4AF37]">Home</Link>
            <Link href="/talent-pool" className="hover:text-[#D4AF37] transition-colors">Talent Pool</Link>
            <Link href="/services" className="hover:text-[#D4AF37] transition-colors">Systems Built</Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
          </nav>
          <Link href="/contact" className="px-6 py-2 bg-[#D4AF37] text-black font-semibold text-sm rounded-full hover:bg-white transition-colors duration-300">
            Book a 15-Minute Call
          </Link>
        </div>
      </header>

      {/* 1. HERO SECTION (Screenshot 1) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 pt-20">
        <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/90 to-[#0a0a0a] z-0"></div> 
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10 text-center max-w-4xl mx-auto space-y-6">
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-gray-400">NOT for companies looking for the cheapest labor.</p>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
            Remote Talent That <br/> <span className="italic text-[#D4AF37]">Actually Performs.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            We place vetted, full time remote professionals for firms that can't afford bad hires, missed calls, or operational mistakes.
          </p>
          <div className="pt-8">
            <Link href="/contact" className="inline-block px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:bg-white transition-colors duration-300">
              This is for operators who care about performance.
            </Link>
          </div>
        </motion.div>
      </section>

      {/* APPLE-STYLE MARQUEE (Imong Request) */}
      <div className="w-full bg-[#D4AF37] py-4 overflow-hidden flex z-20 relative">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className="flex whitespace-nowrap items-center min-w-max text-black font-bold uppercase tracking-widest text-sm">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8">Elite Virtual Assistants</span> <span>•</span>
              <span className="mx-8">Custom CRM Buildouts</span> <span>•</span>
              <span className="mx-8">Premium Web Development</span> <span>•</span>
              <span className="mx-8">Business Automation</span> <span>•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. WHY SERIOUS FIRMS WORK WITH US (Screenshot 2) */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white">Why Serious Firms Work With Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { icon: ShieldCheck, title: "We Vet For Performance", desc: "Every candidate is screened for skill, communication, reliability, and role fit before you ever meet them." },
              { icon: FileText, title: "No Resume Dumps", desc: "You won't get flooded with options. You only interview candidates worth hiring." },
              { icon: Target, title: "Built By Operators", desc: "We've built and managed remote teams ourselves. This isn't theory - it's execution." },
              { icon: Zap, title: "Fast Without Cutting corners", desc: "Most clients interview qualified candidates within days, not weeks." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-6 bg-[#111] rounded-lg border border-gray-800 hover:border-[#D4AF37]/50">
                <item.icon className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION (Screenshot 3 Header) */}
      <section className="py-20 px-6 bg-[#111] text-center border-b border-gray-900">
         <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to Stop Wasting Time on Bad Hires?</h2>
         <Link href="/contact" className="inline-block px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-white transition-colors">Book a 15-Minute Call</Link>
      </section>

      {/* 3. WE WORK WITH / WE DON'T WORK WITH (Screenshot 3) */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-b border-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-serif text-white mb-8 flex items-center gap-3"><CheckCircle2 className="text-[#D4AF37] w-6 h-6"/> We Work With</h3>
            <ul className="space-y-4 text-gray-400 text-sm md:text-base">
              <li>• Business owners building long-term operational teams</li>
              <li>• Law firms and professional practices that value structure and reliability</li>
              <li>• Real estate and property management teams focused on consistent growth</li>
              <li>• Mortgage and insurance operations that depend on process discipline</li>
              <li>• Call centers that prioritize performance and brand protection</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-serif text-white mb-8 flex items-center gap-3"><XCircle className="text-red-500 w-6 h-6"/> We Don't Work With</h3>
            <ul className="space-y-4 text-gray-400 text-sm md:text-base">
              <li>• Lowest-cost labor seekers</li>
              <li>• Freelance or short-term staffing experiments/temporary hiring models</li>
              <li>• Teams unwilling to actively manage, guide, and integrate remote staff into their operation</li>
              <li>• Organizations that avoid accountability and shift blame instead of improving systems</li>
              <li>• Quick-fix expectations without operational discipline</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION (Screenshot 4 Header) */}
      <section className="py-20 px-6 bg-[#111] text-center border-b border-gray-900">
         <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">We'll Be Upfront About Whether This Is a Fit.</h2>
         <Link href="/contact" className="inline-block px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-white transition-colors">Book a 15-Minute Call</Link>
      </section>

      {/* 4. THE FRAMEWORK BEHIND EVERY TEAM WE BUILD (Screenshot 4) */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-b border-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-16">The Framework Behind Every Team We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#D4AF37] text-black font-bold rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <Briefcase className="w-10 h-10 text-[#D4AF37] mx-auto" />
              <h3 className="text-xl font-medium text-white">Define the Role</h3>
              <p className="text-gray-400 text-sm">We clarify responsibilities, expectations, and performance standards before beginning our search.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#D4AF37] text-black font-bold rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <Target className="w-10 h-10 text-[#D4AF37] mx-auto" />
              <h3 className="text-xl font-medium text-white">Vet and Present</h3>
              <p className="text-gray-400 text-sm">We source and screen full-time professionals for skill, communication, and reliability.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#D4AF37] text-black font-bold rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <Users className="w-10 h-10 text-[#D4AF37] mx-auto" />
              <h3 className="text-xl font-medium text-white">Hire and Embed</h3>
              <p className="text-gray-400 text-sm">You select the right candidate. We support onboarding to ensure they integrate into your operation seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION (Screenshot 5 Header) */}
      <section className="py-20 px-6 bg-[#111] text-center border-b border-gray-900">
         <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Get Vetted Remote Talent - FAST!</h2>
         <Link href="/contact" className="inline-block px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-white transition-colors">Book a 15-Minute Call</Link>
      </section>

      {/* 5. TEAMS WE BUILD (Screenshot 5) */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-b border-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-16">Teams We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-[#111] rounded-lg border border-gray-800">
              <Gavel className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Legal & Professional Operations</h3>
              <p className="text-gray-400 text-sm">handling intake, scheduling, documentation, client communication, and administrative workflows — so your firm runs smoothly and responds fast.</p>
            </div>
            <div className="p-6 bg-[#111] rounded-lg border border-gray-800">
              <Building2 className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Real Estate Operations & Growth</h3>
              <p className="text-gray-400 text-sm">managers, listing support, tenant communication, and follow-up specialists who keep deals moving and pipelines full.</p>
            </div>
            <div className="p-6 bg-[#111] rounded-lg border border-gray-800">
              <PhoneCall className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Client & Call Center Operations</h3>
              <p className="text-gray-400 text-sm">handlers, appointment setters, and process-driven support staff trained to protect your brand and execute consistently.</p>
            </div>
            <div className="p-6 bg-[#111] rounded-lg border border-gray-800">
              <FileText className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Mortgage & Insurance Processing</h3>
              <p className="text-gray-400 text-sm">professionals who manage documentation, follow-ups, underwriting support, and coordination — without slowing revenue down.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER (Screenshot 6) */}
      <footer className="py-16 px-6 bg-[#050505] text-center border-t border-gray-800">
        <h2 className="text-2xl md:text-3xl font-serif text-white mb-8">
          Full-Time. Dedicated. Vetted for Performance. No Split Attention.
        </h2>
        <Link href="/contact" className="inline-block px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-white transition-colors mb-16">
          We both know what this is. If it makes sense, let's talk.
        </Link>
        
        <div className="text-gray-500 text-sm space-y-2">
          <p className="font-bold text-white">Get Work Talent</p>
          <p>Built by operators. Focused on performance.</p>
          <p className="pt-8">Copyright © 2026 Get Work Talent - All Rights Reserved.</p>
        </div>
      </footer>

    </main>
  )
}


