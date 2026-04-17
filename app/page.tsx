// Converted to a Next-compatible client page. Styles were moved to globals.css.
"use client";

import React, { useEffect } from "react";

const bodyHtml = `
<!-- NAV -->
<nav>
  <a class="nav-logo" href="#">
    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="19" stroke="white" stroke-width="2"/>
      <ellipse cx="22" cy="22" rx="9" ry="19" stroke="white" stroke-width="2"/>
      <line x1="3" y1="22" x2="41" y2="22" stroke="white" stroke-width="2"/>
      <path d="M5 13 Q22 9 39 13" stroke="white" stroke-width="1.5" fill="none"/>
      <path d="M5 31 Q22 35 39 31" stroke="white" stroke-width="1.5" fill="none"/>
    </svg>
    <div class="nav-logo-text">
      <span>Get Work</span>
      <span>Talent</span>
    </div>
  </a>
  <div class="nav-right">
    <div class="nav-icons">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    </div>
    <a class="nav-cta" href="#contact">Book a 15-Minute Call</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-content">
    <p class="hero-tag">NOT for companies looking for the cheapest labor.</p>
    <h1>Remote Talent That<br/>Actually Preforms.</h1>
    <p class="hero-sub">We place vetted, full time report professionals for firms that can't afford bad hires, missed calls, or operational mistakes.</p>
    <a class="btn-pill" href="#contact">This is for operators who care about performance.</a>
  </div>
</section>

<!-- WHY SERIOUS FIRMS -->
<section class="why">
  <div class="why-inner">
    <h2 class="section-title">Why Serious Firms Work With Us</h2>
    <div class="why-grid">
      <div class="why-card">
        <div class="why-icon">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 8L12 20V40C12 56 24 68 40 74C56 68 68 56 68 40V20L40 8Z" stroke="#1e3fce" stroke-width="4" fill="none"/>
            <path d="M27 41l9 9 18-18" stroke="#1e3fce" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h4>We Vet For Performance</h4>
        <p>Every candidate is screened for skill, communication, reliability, and role fit before you ever meet them.</p>
      </div>
      <div class="why-card">
        <div class="why-icon">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="16" y="14" width="48" height="56" rx="4" stroke="#1e3fce" stroke-width="4"/>
            <rect x="28" y="8" width="24" height="12" rx="3" stroke="#1e3fce" stroke-width="3" fill="none"/>
            <path d="M26 36l5 5 12-12" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="47" y1="36" x2="58" y2="36" stroke="#1e3fce" stroke-width="3" stroke-linecap="round"/>
            <path d="M26 52l5 5 12-12" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="47" y1="52" x2="58" y2="52" stroke="#1e3fce" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>
        <h4>No Resume Dumps</h4>
        <p>You won't get flooded with options. You only interview candidates worth hiring.</p>
      </div>
      <div class="why-card">
        <div class="why-icon">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="44" r="26" stroke="#1e3fce" stroke-width="4"/>
            <circle cx="40" cy="44" r="15" stroke="#1e3fce" stroke-width="4"/>
            <circle cx="40" cy="44" r="5" fill="#1e3fce"/>
            <path d="M53 12l-5 9 9 9-9-2-9 2 5-9z" fill="#1e3fce" stroke="#1e3fce" stroke-width="1" stroke-linejoin="round"/>
            <line x1="51" y1="27" x2="41" y2="43" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round"/>
          </svg>
        </div>
        <h4>Built By Operators</h4>
        <p>We've built and managed remote teams ourselves. This isn't theory — it's execution.</p>
      </div>
      <div class="why-card">
        <div class="why-icon">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45 8L18 46h26L28 72l34-36H38L45 8z" fill="#1e3fce" stroke="#1e3fce" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </div>
        <h4>Fast Without Cutting corners</h4>
        <p>Most clients interview qualified candidates within days, not weeks.</p>
      </div>
    </div>
  </div>
</section>

<!-- BANNER: Ready to Stop Wasting Time -->
<div class="banner">
  <h2>Ready to Stop Wasting Time on Bad Hires?</h2>
  <a class="btn-pill" href="#contact">Book a 15-Minute Call</a>
</div>

<!-- WE WORK WITH / WE DON'T -->
<section class="fit-section">
  <div class="fit-inner">
    <div class="fit-col">
      <h3>We Work With</h3>
      <ul>
        <li>Business owners building long-term operational teams</li>
        <li>Law firms and professional practices that value structure and reliability</li>
        <li>Real estate and property management teams focused on consistent growth</li>
        <li>Mortgage and insurance operations that depend on process discipline</li>
        <li>Call centers that prioritize performance and brand protection</li>
      </ul>
    </div>
    <div class="fit-col">
      <h3>We Don't Work With</h3>
      <ul>
        <li>Lowest-cost labor seekers</li>
        <li>Freelance or short-term staffing experiments/temporary hiring models</li>
        <li>Teams unwilling to actively manage, guide, and integrate remote staff into their operation</li>
        <li>Organizations that avoid accountability and shift blame instead of improving systems</li>
        <li>Quick-fix expectations without operational discipline</li>
      </ul>
    </div>
  </div>
</section>

<!-- BANNER: Upfront About Fit -->
<div class="banner">
  <h2>We'll Be Upfront About Whether This Is a Fit.</h2>
  <a class="btn-pill" href="#contact">Book a 15-Minute Call</a>
</div>

<!-- FRAMEWORK -->
<section class="framework">
  <div class="framework-inner">
    <h2 class="section-title">The Framework Behind Every Team We Build</h2>
    <div class="fw-grid">
      <div class="fw-step">
        <div class="fw-num">1</div>
        <div class="fw-icon">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="20" width="56" height="50" rx="5" stroke="#1e3fce" stroke-width="3.5"/>
            <line x1="12" y1="34" x2="68" y2="34" stroke="#1e3fce" stroke-width="3.5"/>
            <line x1="28" y1="12" x2="28" y2="28" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="52" y1="12" x2="52" y2="28" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M24 52l7 7 18-16" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h4>Define the Role</h4>
        <p>We clarify responsibilities, expectations, and performance standards before sourcing begins.</p>
      </div>
      <div class="fw-step">
        <div class="fw-num">2</div>
        <div class="fw-icon">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="44" r="26" stroke="#1e3fce" stroke-width="3.5"/>
            <circle cx="40" cy="44" r="15" stroke="#1e3fce" stroke-width="3.5"/>
            <circle cx="40" cy="44" r="5" fill="#1e3fce"/>
            <path d="M53 12l-5 9 9 9-9-2-9 2 5-9z" fill="#1e3fce" stroke="#1e3fce" stroke-width="1" stroke-linejoin="round"/>
            <line x1="51" y1="27" x2="41" y2="43" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round"/>
          </svg>
        </div>
        <h4>Vet and Present</h4>
        <p>We source and screen full-time professionals for skill, communication, and reliability. You only meet candidates worth hiring.</p>
      </div>
      <div class="fw-step">
        <div class="fw-num">3</div>
        <div class="fw-icon">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 40 C14 40 22 52 32 52 C36 52 38 50 40 48 C42 50 44 52 48 52 C58 52 66 40 66 40" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M24 28 C24 28 28 36 40 36 C52 36 56 28 56 28" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round"/>
            <circle cx="32" cy="22" r="7" stroke="#1e3fce" stroke-width="3.5"/>
            <circle cx="48" cy="22" r="7" stroke="#1e3fce" stroke-width="3.5"/>
          </svg>
        </div>
        <h4>Hire and Embed</h4>
        <p>You select the right candidate. We support onboarding to ensure they integrate into your operation smoothly.</p>
      </div>
    </div>
  </div>
</section>

<!-- BANNER: Get Vetted Fast -->
<div class="banner">
  <h2>Get Vetted Remote Talent - FAST!</h2>
  <a class="btn-pill" href="#contact">Book a 15-Minute Call</a>
</div>

<!-- TEAMS WE BUILD -->
<section class="teams">
  <div class="teams-inner">
    <h2 class="section-title">Teams We Build</h2>
    <div class="teams-grid">
      <div class="team-card">
        <div class="team-icon">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="10" width="42" height="54" rx="4" stroke="#1e3fce" stroke-width="3.5"/>
            <line x1="20" y1="26" x2="46" y2="26" stroke="#1e3fce" stroke-width="3" stroke-linecap="round"/>
            <line x1="20" y1="35" x2="46" y2="35" stroke="#1e3fce" stroke-width="3" stroke-linecap="round"/>
            <line x1="20" y1="44" x2="34" y2="44" stroke="#1e3fce" stroke-width="3" stroke-linecap="round"/>
            <path d="M50 52 L66 68" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round"/>
            <rect x="42" y="38" width="14" height="18" rx="2" transform="rotate(-45 42 38)" stroke="#1e3fce" stroke-width="3" fill="none"/>
          </svg>
        </div>
        <h4>Legal &amp; Professional Operations</h4>
        <p>Full-time remote professionals handling intake, scheduling, documentation, client communication, and administrative workflows — so your firm runs smoothly and responds fast.</p>
      </div>
      <div class="team-card">
        <div class="team-icon">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 38 L40 12 L70 38" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="16" y="38" width="48" height="34" rx="2" stroke="#1e3fce" stroke-width="3.5"/>
            <path d="M40 44 v3 m0 10 v3 M34 53 c0-3.3 2.7-6 6-6 s6 2.7 6 6 -2.7 4-6 4 -6 1-6 4 2.7 6 6 6 6-2.7 6-6" stroke="#1e3fce" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>
        <h4>Real Estate Operations &amp; Growth</h4>
        <p>Transaction coordinators, CRM managers, listing support, tenant communication, and follow-up specialists who keep deals moving and pipelines full.</p>
      </div>
      <div class="team-card">
        <div class="team-icon">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 38C20 27 29 18 40 18s20 9 20 20" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round"/>
            <rect x="10" y="38" width="14" height="20" rx="6" stroke="#1e3fce" stroke-width="3.5"/>
            <rect x="56" y="38" width="14" height="20" rx="6" stroke="#1e3fce" stroke-width="3.5"/>
            <path d="M70 54c0 8-13 14-30 14" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round"/>
            <circle cx="40" cy="68" r="3" fill="#1e3fce"/>
          </svg>
        </div>
        <h4>Client &amp; Call Center Operations</h4>
        <p>Inbound and outbound call handlers, appointment setters, and process-driven support staff trained to protect your brand and execute consistently.</p>
      </div>
      <div class="team-card">
        <div class="team-icon">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="8" width="56" height="64" rx="4" stroke="#1e3fce" stroke-width="3.5"/>
            <path d="M22 28l6 6 14-14" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="48" y1="28" x2="60" y2="28" stroke="#1e3fce" stroke-width="3" stroke-linecap="round"/>
            <path d="M22 46l6 6 14-14" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="48" y1="46" x2="60" y2="46" stroke="#1e3fce" stroke-width="3" stroke-linecap="round"/>
            <path d="M22 62l6 6 14-14" stroke="#1e3fce" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="48" y1="62" x2="60" y2="62" stroke="#1e3fce" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>
        <h4>Mortgage &amp; Insurance Processing</h4>
        <p>Administrative and processing professionals who manage documentation, follow-ups, underwriting support, and coordination — without slowing revenue down.</p>
      </div>
    </div>
  </div>
</section>

<!-- BANNER: Final CTA -->
<div class="banner" id="contact">
  <h2>Full-Time. Dedicated. Vetted for Performance. No Split Attention.</h2>
  <a class="btn-pill" href="https://getworktalent.com/contact#0ea15fd3-e5f5-426f-8976-0912d541ab8c" target="_blank">We both know what this is. If it makes sense, let's talk.</a>
</div>

<!-- FOOTER -->
<footer>
  <div class="foot-brand">Get Work Talent</div>
  <div class="foot-tagline">Built by operators. Focused on performance.</div>
  <div class="foot-copy">Copyright &copy; 2026 Get Work Talent - All Rights Reserved.</div>
</footer>

<!-- COOKIE BANNER -->
<div class="cookie" id="cookieBanner">
  <h5>This website uses cookies.</h5>
  <p>We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.</p>
  <button id="cookieBtn" class="cookie-btn">Accept</button>
</div>

`;


export default function Page() {
  useEffect(() => {
    const btn = document.getElementById("cookieBtn");
    const banner = document.getElementById("cookieBanner");
    if (!btn || !banner) return;
    const handler = () => banner.classList.add("hidden");
    btn.addEventListener("click", handler);
    return () => btn.removeEventListener("click", handler);
  }, []);

  return (
    <div>
      {/* The raw HTML markup from the original page is injected here. Styles moved to globals.css. */}
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </div>
  );
}



