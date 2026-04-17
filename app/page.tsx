"use client";

import React, { useState } from 'react';

export default function Home() {
  const [cookieHidden, setCookieHidden] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-sans antialiased">
      {/* CSS STYLES - Direct from Claude's code */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;600&display=swap');
        
        :root {
          --blue: #1e3fce;
          --blue-dark: #0f2090;
          --blue-btn: #2244e8;
          --white: #ffffff;
          --off-white: #f7f7f5;
          --text-dark: #1a1a1a;
          --text-mid: #444;
          --text-light: #666;
        }

        body { font-family: 'Open Sans', sans-serif; }
        .raleway { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* NAV */}
      <nav className="absolute top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-5 md:px-12">
        <a className="flex items-center gap-2 text-white no-underline" href="#">
          <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11 shrink-0">
            <circle cx="22" cy="22" r="19" stroke="white" strokeWidth="2"/>
            <ellipse cx="22" cy="22" rx="9" ry="19" stroke="white" strokeWidth="2"/>
            <line x1="3" y1="22" x2="41" y2="22" stroke="white" strokeWidth="2"/>
            <path d="M5 13 Q22 9 39 13" stroke="white" strokeWidth="1.5" fill="none"/>
            <path d="M5 31 Q22 35 39 31" stroke="white" strokeWidth="1.5" fill="none"/>
          </svg>
          <div className="raleway font-bold text-[17px] leading-tight text-white">
            <span className="block">Get Work</span>
            <span className="block">Talent</span>
          </div>
        </a>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex gap-4 text-white/80">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <a className="bg-[#2244e8] hover:bg-[#0f2090] text-white no-underline raleway font-bold text-[13px] px-7 py-3 rounded-[30px] tracking-wide transition-colors" href="#contact">
            Book a 15-Minute Call
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section 
        className="relative min-h-[82vh] flex items-center px-6 md:px-20 py-36"
        style={{ 
          background: "linear-gradient(105deg, rgba(8,16,80,.88) 0%, rgba(8,16,80,.6) 55%, rgba(8,16,80,.15) 100%), url('https://img1.wsimg.com/isteam/ip/82443e89-7ff8-4aed-b684-1fe9a74153e9/blob-c92a2a9.png') center/cover no-repeat" 
        }}
      >
        <div className="max-w-[600px]">
          <p className="text-white/85 text-[13px] italic mb-3.5">NOT for companies looking for the cheapest labor.</p>
          <h1 className="raleway font-extrabold text-white text-[34px] md:text-[58px] leading-[1.1] mb-5">
            Remote Talent That<br/>Actually Preforms.
          </h1>
          <p className="text-white/88 text-base leading-relaxed mb-8 max-w-[510px]">
            We place vetted, full time report professionals for firms that can't afford bad hires, missed calls, or operational mistakes.
          </p>
          <a className="inline-block bg-[#2244e8] hover:bg-[#0f2090] text-white no-underline raleway font-semibold text-[13px] px-8 py-3.5 rounded-[30px] tracking-wide transition-all hover:-translate-y-px" href="#contact">
            This is for operators who care about performance.
          </a>
        </div>
      </section>

      {/* WHY SERIOUS FIRMS */}
      <section className="bg-[#f7f7f5] py-20 px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="raleway font-bold text-center text-[22px] md:text-[32px] mb-14 text-[#1a1a1a]">Why Serious Firms Work With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-[90px] h-[90px] mx-auto mb-5">
                <svg viewBox="0 0 80 80" fill="none"><path d="M40 8L12 20V40C12 56 24 68 40 74C56 68 68 56 68 40V20L40 8Z" stroke="#1e3fce" strokeWidth="4" fill="none"/><path d="M27 41l9 9 18-18" stroke="#1e3fce" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4 className="raleway font-bold text-base mb-3">We Vet For Performance</h4>
              <p className="text-[13.5px] text-[#666] leading-relaxed">Every candidate is screened for skill, communication, reliability, and role fit before you ever meet them.</p>
            </div>
            <div className="text-center">
              <div className="w-[90px] h-[90px] mx-auto mb-5">
                <svg viewBox="0 0 80 80" fill="none"><rect x="16" y="14" width="48" height="56" rx="4" stroke="#1e3fce" strokeWidth="4"/><rect x="28" y="8" width="24" height="12" rx="3" stroke="#1e3fce" strokeWidth="3" fill="none"/><path d="M26 36l5 5 12-12" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="47" y1="36" x2="58" y2="36" stroke="#1e3fce" strokeWidth="3" strokeLinecap="round"/><path d="M26 52l5 5 12-12" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="47" y1="52" x2="58" y2="52" stroke="#1e3fce" strokeWidth="3" strokeLinecap="round"/></svg>
              </div>
              <h4 className="raleway font-bold text-base mb-3">No Resume Dumps</h4>
              <p className="text-[13.5px] text-[#666] leading-relaxed">You won't get flooded with options. You only interview candidates worth hiring.</p>
            </div>
            <div className="text-center">
              <div className="w-[90px] h-[90px] mx-auto mb-5">
                <svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="44" r="26" stroke="#1e3fce" strokeWidth="4"/><circle cx="40" cy="44" r="15" stroke="#1e3fce" strokeWidth="4"/><circle cx="40" cy="44" r="5" fill="#1e3fce"/><path d="M53 12l-5 9 9 9-9-2-9 2 5-9z" fill="#1e3fce" stroke="#1e3fce" strokeWidth="1" strokeLinejoin="round"/><line x1="51" y1="27" x2="41" y2="43" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round"/></svg>
              </div>
              <h4 className="raleway font-bold text-base mb-3">Built By Operators</h4>
              <p className="text-[13.5px] text-[#666] leading-relaxed">We've built and managed remote teams ourselves. This isn't theory — it's execution.</p>
            </div>
            <div className="text-center">
              <div className="w-[90px] h-[90px] mx-auto mb-5">
                <svg viewBox="0 0 80 80" fill="none"><path d="M45 8L18 46h26L28 72l34-36H38L45 8z" fill="#1e3fce" stroke="#1e3fce" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              </div>
              <h4 className="raleway font-bold text-base mb-3">Fast Without Cutting corners</h4>
              <p className="text-[13.5px] text-[#666] leading-relaxed">Most clients interview qualified candidates within days, not weeks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER 1 */}
      <div 
        className="text-center py-20 px-10 text-white"
        style={{ background: "linear-gradient(rgba(10,22,95,.78),rgba(10,22,95,.78)), url('https://img1.wsimg.com/isteam/ip/82443e89-7ff8-4aed-b684-1fe9a74153e9/blob-d5271c0.png') center/cover no-repeat" }}
      >
        <h2 className="raleway font-bold text-[20px] md:text-[34px] mb-7">Ready to Stop Wasting Time on Bad Hires?</h2>
        <a className="inline-block bg-[#2244e8] hover:bg-[#0f2090] text-white no-underline raleway font-semibold text-[13px] px-8 py-3.5 rounded-[30px] tracking-wide transition-all" href="#contact">Book a 15-Minute Call</a>
      </div>

      {/* WE WORK WITH / WE DON'T */}
      <section className="bg-white py-20 px-10">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16">
          <div>
            <h3 className="raleway font-bold text-xl mb-6 text-center">We Work With</h3>
            <ul className="list-none space-y-4">
              {['Business owners building long-term operational teams', 'Law firms and professional practices that value structure and reliability', 'Real estate and property management teams focused on consistent growth', 'Mortgage and insurance operations that depend on process discipline', 'Call centers that prioritize performance and brand protection'].map((text, i) => (
                <li key={i} className="flex gap-2.5 text-[13.5px] text-[#444] leading-relaxed">
                  <span className="text-[#1e3fce] text-lg leading-none shrink-0">•</span> {text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="raleway font-bold text-xl mb-6 text-center">We Don't Work With</h3>
            <ul className="list-none space-y-4">
              {['Lowest-cost labor seekers', 'Freelance or short-term staffing experiments/temporary hiring models', 'Teams unwilling to actively manage, guide, and integrate remote staff into their operation', 'Organizations that avoid accountability and shift blame instead of improving systems', 'Quick-fix expectations without operational discipline'].map((text, i) => (
                <li key={i} className="flex gap-2.5 text-[13.5px] text-[#444] leading-relaxed">
                  <span className="text-[#1e3fce] text-lg leading-none shrink-0">•</span> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BANNER 2 */}
      <div 
        className="text-center py-20 px-10 text-white"
        style={{ background: "linear-gradient(rgba(10,22,95,.78),rgba(10,22,95,.78)), url('https://img1.wsimg.com/isteam/ip/82443e89-7ff8-4aed-b684-1fe9a74153e9/blob-d5271c0.png') center/cover no-repeat" }}
      >
        <h2 className="raleway font-bold text-[20px] md:text-[34px] mb-7">We'll Be Upfront About Whether This Is a Fit.</h2>
        <a className="inline-block bg-[#2244e8] hover:bg-[#0f2090] text-white no-underline raleway font-semibold text-[13px] px-8 py-3.5 rounded-[30px] tracking-wide transition-all" href="#contact">Book a 15-Minute Call</a>
      </div>

      {/* FRAMEWORK */}
      <section className="bg-[#f7f7f5] py-20 px-10">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="raleway font-bold text-center text-[22px] md:text-[32px] mb-14 text-[#1a1a1a]">The Framework Behind Every Team We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { num: 1, title: 'Define the Role', desc: 'We clarify responsibilities, expectations, and performance standards before sourcing begins.', icon: <svg viewBox="0 0 80 80" fill="none"><rect x="12" y="20" width="56" height="50" rx="5" stroke="#1e3fce" strokeWidth="3.5"/><line x1="12" y1="34" x2="68" y2="34" stroke="#1e3fce" strokeWidth="3.5"/><line x1="28" y1="12" x2="28" y2="28" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round"/><line x1="52" y1="12" x2="52" y2="28" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round"/><path d="M24 52l7 7 18-16" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { num: 2, title: 'Vet and Present', desc: 'We source and screen full-time professionals for skill, communication, and reliability. You only meet candidates worth hiring.', icon: <svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="44" r="26" stroke="#1e3fce" strokeWidth="3.5"/><circle cx="40" cy="44" r="15" stroke="#1e3fce" strokeWidth="3.5"/><circle cx="40" cy="44" r="5" fill="#1e3fce"/><path d="M53 12l-5 9 9 9-9-2-9 2 5-9z" fill="#1e3fce" stroke="#1e3fce" strokeWidth="1" strokeLinejoin="round"/><line x1="51" y1="27" x2="41" y2="43" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round"/></svg> },
              { num: 3, title: 'Hire and Embed', desc: 'You select the right candidate. We support onboarding to ensure they integrate into your operation smoothly.', icon: <svg viewBox="0 0 80 80" fill="none"><path d="M14 40 C14 40 22 52 32 52 C36 52 38 50 40 48 C42 50 44 52 48 52 C58 52 66 40 66 40" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round"/><path d="M24 28 C24 28 28 36 40 36 C52 36 56 28 56 28" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round"/><circle cx="32" cy="22" r="7" stroke="#1e3fce" strokeWidth="3.5"/><circle cx="48" cy="22" r="7" stroke="#1e3fce" strokeWidth="3.5"/></svg> }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-[46px] h-[46px] bg-[#2244e8] text-white rounded-full flex items-center justify-center raleway font-bold text-[18px] mx-auto mb-4">{step.num}</div>
                <div className="w-20 h-20 mx-auto mb-5">{step.icon}</div>
                <h4 className="raleway font-bold text-[17px] mb-3">{step.title}</h4>
                <p className="text-[13.5px] text-[#666] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER 3 */}
      <div 
        className="text-center py-20 px-10 text-white"
        style={{ background: "linear-gradient(rgba(10,22,95,.78),rgba(10,22,95,.78)), url('https://img1.wsimg.com/isteam/ip/82443e89-7ff8-4aed-b684-1fe9a74153e9/blob-d5271c0.png') center/cover no-repeat" }}
      >
        <h2 className="raleway font-bold text-[20px] md:text-[34px] mb-7">Get Vetted Remote Talent - FAST!</h2>
        <a className="inline-block bg-[#2244e8] hover:bg-[#0f2090] text-white no-underline raleway font-semibold text-[13px] px-8 py-3.5 rounded-[30px] tracking-wide transition-all" href="#contact">Book a 15-Minute Call</a>
      </div>

      {/* TEAMS */}
      <section className="bg-white py-20 px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="raleway font-bold text-center text-[22px] md:text-[32px] mb-14 text-[#1a1a1a]">Teams We Build</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { title: 'Legal & Professional Operations', desc: 'Full-time remote professionals handling intake, scheduling, documentation, client communication, and administrative workflows — so your firm runs smoothly and responds fast.', icon: <svg viewBox="0 0 80 80" fill="none"><rect x="12" y="10" width="42" height="54" rx="4" stroke="#1e3fce" strokeWidth="3.5"/><line x1="20" y1="26" x2="46" y2="26" stroke="#1e3fce" strokeWidth="3" strokeLinecap="round"/><line x1="20" y1="35" x2="46" y2="35" stroke="#1e3fce" strokeWidth="3" strokeLinecap="round"/><line x1="20" y1="44" x2="34" y2="44" stroke="#1e3fce" strokeWidth="3" strokeLinecap="round"/><path d="M50 52 L66 68" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round"/><rect x="42" y="38" width="14" height="18" rx="2" transform="rotate(-45 42 38)" stroke="#1e3fce" strokeWidth="3" fill="none"/></svg> },
              { title: 'Real Estate Operations & Growth', desc: 'Transaction coordinators, CRM managers, listing support, tenant communication, and follow-up specialists who keep deals moving and pipelines full.', icon: <svg viewBox="0 0 80 80" fill="none"><path d="M10 38 L40 12 L70 38" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="16" y="38" width="48" height="34" rx="2" stroke="#1e3fce" strokeWidth="3.5"/><path d="M40 44 v3 m0 10 v3 M34 53 c0-3.3 2.7-6 6-6 s6 2.7 6 6 -2.7 4-6 4 -6 1-6 4 2.7 6 6 6 6-2.7 6-6" stroke="#1e3fce" strokeWidth="3" strokeLinecap="round"/></svg> },
              { title: 'Client & Call Center Operations', desc: 'Inbound and outbound call handlers, appointment setters, and process-driven support staff trained to protect your brand and execute consistently.', icon: <svg viewBox="0 0 80 80" fill="none"><path d="M20 38C20 27 29 18 40 18s20 9 20 20" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round"/><rect x="10" y="38" width="14" height="20" rx="6" stroke="#1e3fce" strokeWidth="3.5"/><rect x="56" y="38" width="14" height="20" rx="6" stroke="#1e3fce" strokeWidth="3.5"/><path d="M70 54c0 8-13 14-30 14" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round"/><circle cx="40" cy="68" r="3" fill="#1e3fce"/></svg> },
              { title: 'Mortgage & Insurance Processing', desc: 'Administrative and processing professionals who manage documentation, follow-ups, underwriting support, and coordination — without slowing revenue down.', icon: <svg viewBox="0 0 80 80" fill="none"><rect x="12" y="8" width="56" height="64" rx="4" stroke="#1e3fce" strokeWidth="3.5"/><path d="M22 28l6 6 14-14" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="48" y1="28" x2="60" y2="28" stroke="#1e3fce" strokeWidth="3" strokeLinecap="round"/><path d="M22 46l6 6 14-14" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="48" y1="46" x2="60" y2="46" stroke="#1e3fce" strokeWidth="3" strokeLinecap="round"/><path d="M22 62l6 6 14-14" stroke="#1e3fce" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="48" y1="62" x2="60" y2="62" stroke="#1e3fce" strokeWidth="3" strokeLinecap="round"/></svg> }
            ].map((team, i) => (
              <div key={i}>
                <div className="w-[90px] h-[90px] mx-auto mb-5">{team.icon}</div>
                <h4 className="raleway font-bold text-[15px] mb-3 leading-tight">{team.title}</h4>
                <p className="text-[13px] text-[#666] leading-relaxed">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <div className="text-center py-20 px-10 bg-[#f2f2ee]" id="contact">
        <h2 className="raleway font-bold text-[20px] md:text-[32px] mb-10 max-w-3xl mx-auto italic">Full-Time. Dedicated. Vetted for Performance. No Split Attention.</h2>
        <a className="inline-block bg-[#2244e8] hover:bg-[#0f2090] text-white no-underline raleway font-bold text-[13px] px-10 py-4 rounded-[30px] tracking-wide transition-all" href="https://getworktalent.com/contact#0ea15fd3-e5f5-426f-8976-0912d541ab8c" target="_blank">
          We both know what this is. If it makes sense, let's talk.
        </a>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#f2f2ee] pb-7 pt-10 text-center px-10 border-t border-[#ddd]">
        <div className="raleway font-bold text-base mb-1.5">Get Work Talent</div>
        <div className="text-[13px] text-[#666] mb-6">Built by operators. Focused on performance.</div>
        <div className="text-[12px] text-[#999] pt-4 border-t border-[#ddd]">Copyright &copy; 2026 Get Work Talent - All Rights Reserved.</div>
      </footer>

      {/* COOKIE BANNER */}
      {!cookieHidden && (
        <div className="fixed bottom-6 right-6 bg-[#1e3fce] text-white p-5 rounded-md w-[300px] z-[999] shadow-2xl text-[13px] leading-relaxed">
          <h5 className="raleway font-bold text-sm mb-2.5">This website uses cookies.</h5>
          <p className="mb-3.5 text-white/85">We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.</p>
          <button onClick={() => setCookieHidden(true)} className="w-full bg-white text-[#1a1a1a] border-none rounded py-2.5 raleway font-semibold text-[13px] cursor-pointer hover:bg-[#eee]">
            Accept
          </button>
        </div>
      )}
    </main>
  );
}


