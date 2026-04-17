"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Target, Zap, CheckCircle2, XCircle, Star, Database, Code, Settings } from "lucide-react";
import Link from "next/link"; // Kani ang mu-himo og saktong pages

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f8f8f8] relative overflow-hidden font-sans">
      
      {/* HEADER / NAVIGATION (Saktong Pages na ni, dili na scroll) */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wider flex items-center gap-2">
            <span className="text-white">Get Work</span>
            <span className="text-[#D4AF37]">Talent</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-gray-400">
            <Link href="/" className="text-[#D4AF37]">Home</Link>
            <Link href="/why-us" className="hover:text-[#D4AF37] transition-colors">Why Us</Link>
            <Link href="/talent-pool" className="hover:text-[#D4AF37] transition-colors">Talent Pool</Link>
            <Link href="/services" className="hover:text-[#D4AF37] transition-colors">Systems & Tech</Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
          </nav>
          <button className="px-6 py-2 bg-[#D4AF37] text-black font-semibold text-sm rounded-full hover:bg-white transition-colors duration-300">
            Book a 15-Minute Call
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 pt-20">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/90 to-[#0a0a0a] z-0"></div> 
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10 text-center max-w-4xl mx-auto space-y-6">
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-gray-400">NOT for companies looking for the cheapest labor.</p>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
            Remote Talent That <br/> <span className="italic text-[#D4AF37]">Actually Performs.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            We place vetted, full time remote professionals for firms that can't afford bad hires, missed calls, or operational mistakes.
          </p>
          <div className="pt-8">
            <button className="px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:bg-white transition-colors duration-300">
              This is for operators who care about performance.
            </button>
          </div>
        </motion.div>
      </section>

      {/* APPLE-STYLE INFINITE SCROLLING MARQUEE */}
      <div className="w-full bg-[#D4AF37] py-4 overflow-hidden flex z-20 relative">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap items-center min-w-max text-black font-bold uppercase tracking-widest text-sm"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8">Elite Virtual Assistants</span> <span>•</span>
              <span className="mx-8">Custom CRM Buildouts</span> <span>•</span>
              <span className="mx-8">Premium Web Development</span> <span>•</span>
              <span className="mx-8">Business Automation</span> <span>•</span>
              <span className="mx-8">Executive Operations</span> <span>•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* WHY SERIOUS FIRMS WORK WITH US */}
      <section className="py-24 px-6 bg-[#0a0a0a] relative z-10 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">Why Serious Firms Work With Us</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { icon: ShieldCheck, title: "We Vet For Performance", desc: "Every candidate is screened for skill, communication, reliability, and role fit before you ever meet them." },
              { icon: FileText, title: "No Resume Dumps", desc: "You won't get flooded with options. You only interview candidates worth hiring." },
              { icon: Target, title: "Built By Operators", desc: "We've built and managed remote teams ourselves. This isn't theory - it's execution." },
              { icon: Zap, title: "Fast Without Cutting corners", desc: "Most clients interview qualified candidates within days, not weeks." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 bg-[#111] rounded-lg border border-gray-800 hover:border-[#D4AF37]/50 transition-colors">
                <item.icon className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WE WORK WITH / WE DON'T WORK WITH */}
      <section className="py-24 px-6 bg-[#0f0f0f] relative z-10 border-b border-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-serif text-white mb-8 flex items-center gap-3"><CheckCircle2 className="text-[#D4AF37] w-8 h-8"/> We Work With</h3>
            <ul className="space-y-4 text-gray-400 text-sm md:text-base">
              <li>• Business owners building long-term operational teams</li>
              <li>• Law firms and professional practices that value structure and reliability</li>
              <li>• Real estate and property management teams focused on consistent growth</li>
              <li>• Mortgage and insurance operations that depend on process discipline</li>
              <li>• Call centers that prioritize performance and brand protection</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-serif text-white mb-8 flex items-center gap-3"><XCircle className="text-red-500 w-8 h-8"/> We Don't Work With</h3>
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

      {/* CUSTOM SYSTEMS & TECH BUILDOUT */}
      <section className="py-24 px-6 bg-[#0a0a0a] relative z-10 border-b border-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">Beyond Talent: We Build Your Systems</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just provide world-class talent. We engineer the infrastructure they need to scale your business effortlessly.</p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Database, title: "CRM Buildouts", desc: "Custom GoHighLevel, HubSpot, and elite CRM setups tailored to your sales pipeline and client management." },
              { icon: Code, title: "Premium Web Development", desc: "High-converting, luxury websites designed to position your brand as the absolute authority in your industry." },
              { icon: Settings, title: "Business Automation", desc: "Zapier & Make integrations. We automate your onboarding, lead flow, and repetitive tasks so your team focuses on closing." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-xl text-left hover:border-[#D4AF37] transition-all">
                <item.icon className="w-10 h-10 text-[#D4AF37] mb-6" />
                <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS & SOCIAL PROOF */}
      <section className="py-24 px-6 bg-[#0f0f0f] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">Trusted By Industry Leaders</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="p-8 bg-[#111] rounded-lg border border-gray-800">
              <div className="flex gap-1 mb-4 text-[#D4AF37]"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
              <p className="text-gray-300 italic mb-6">"Get Work Talent didn't just give us a virtual assistant. They restructured our entire CRM and gave us a professional who executes flawlessly. They are true operational partners."</p>
              <div className="font-medium text-white">Managing Partner</div>
              <div className="text-xs text-[#D4AF37] uppercase tracking-wider">Top-Tier Law Firm</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-8 bg-[#111] rounded-lg border border-gray-800">
              <div className="flex gap-1 mb-4 text-[#D4AF37]"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
              <p className="text-gray-300 italic mb-6">"We went through 4 different VA agencies before finding them. The difference in quality, communication, and tech-savviness is night and day. Worth every penny."</p>
              <div className="font-medium text-white">Founder & CEO</div>
              <div className="text-xs text-[#D4AF37] uppercase tracking-wider">Real Estate Investment Group</div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  )
}


