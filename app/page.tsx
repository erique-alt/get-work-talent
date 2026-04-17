export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">G</div>
            <span>Get Work Talent</span>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold text-sm rounded-md hover:bg-blue-700 transition-colors">
            Book a 15-Minute Call
          </button>
        </div>
      </header>

      {/* HERO SECTION (Screenshot 1) */}
      <section className="pt-40 pb-20 px-6 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">NOT for companies looking for the cheapest labor.</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Remote Talent That Actually Performs.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We place vetted, full time report professionals for firms that can't afford bad hires, missed calls, or operational mistakes.
          </p>
          <div className="pt-6">
            <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-shadow">
              This is for operators who care about performance.
            </button>
          </div>
        </div>
      </section>

      {/* WHY SERIOUS FIRMS WORK WITH US (Screenshot 2) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Why Serious Firms Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">✓</div>
            <h3 className="text-lg font-bold mb-3">We Vet For Performance</h3>
            <p className="text-gray-600 text-sm">Every candidate is screened for skill, communication, reliability, and role fit before you ever meet them.</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">📄</div>
            <h3 className="text-lg font-bold mb-3">No Resume Dumps</h3>
            <p className="text-gray-600 text-sm">You won't get flooded with options. You only interview candidates worth hiring.</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">⚙️</div>
            <h3 className="text-lg font-bold mb-3">Built By Operators</h3>
            <p className="text-gray-600 text-sm">We've built and managed remote teams ourselves. This isn't theory — it's execution.</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">⚡</div>
            <h3 className="text-lg font-bold mb-3">Fast Without Cutting corners</h3>
            <p className="text-gray-600 text-sm">Most clients interview qualified candidates within days, not weeks.</p>
          </div>
        </div>
      </section>

      {/* WORK WITH / DON'T WORK WITH (Screenshot 3) */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">We Work With</h3>
            <ul className="space-y-4 text-gray-700">
              <li>• Business owners building long-term operational teams</li>
              <li>• Law firms and professional practices that value structure and reliability</li>
              <li>• Real estate and property management teams focused on consistent growth</li>
              <li>• Mortgage and insurance operations that depend on process discipline</li>
              <li>• Call centers that prioritize performance and brand protection</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8">We Don't Work With</h3>
            <ul className="space-y-4 text-gray-700">
              <li>• Lowest-cost labor seekers</li>
              <li>• Freelance or short-term staffing experiments/temporary hiring models</li>
              <li>• Teams unwilling to actively manage, guide, and integrate remote staff into their operation</li>
              <li>• Organizations that avoid accountability and shift blame instead of improving systems</li>
              <li>• Quick-fix expectations without operational discipline</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FRAMEWORK (Screenshot 4) */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-16">The Framework Behind Every Team We Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center mx-auto">1</div>
            <h3 className="font-bold">Define the Role</h3>
            <p className="text-gray-600 text-sm">We clarify responsibilities, expectations, and performance standards before beginning our search.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center mx-auto">2</div>
            <h3 className="font-bold">Vet and Present</h3>
            <p className="text-gray-600 text-sm">We source and screen full-time professionals for skill, communication, and reliability.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center mx-auto">3</div>
            <h3 className="font-bold">Hire and Embed</h3>
            <p className="text-gray-600 text-sm">You select the right candidate. We support onboarding to ensure they integrate into your operation seamlessly.</p>
          </div>
        </div>
      </section>

      {/* TEAMS WE BUILD (Screenshot 5) */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Teams We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white shadow-sm rounded-lg border border-gray-100">
              <h3 className="font-bold text-lg mb-4">Legal & Professional Operations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">handling intake, scheduling, documentation, client communication, and administrative workflows — so your firm runs smoothly and responds fast.</p>
            </div>
            <div className="p-8 bg-white shadow-sm rounded-lg border border-gray-100">
              <h3 className="font-bold text-lg mb-4">Real Estate Operations & Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">managers, listing support, tenant communication, and follow-up specialists who keep deals moving and pipelines full.</p>
            </div>
            <div className="p-8 bg-white shadow-sm rounded-lg border border-gray-100">
              <h3 className="font-bold text-lg mb-4">Client & Call Center Operations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">handlers, appointment setters, and process-driven support staff trained to protect your brand and execute consistently.</p>
            </div>
            <div className="p-8 bg-white shadow-sm rounded-lg border border-gray-100">
              <h3 className="font-bold text-lg mb-4">Mortgage & Insurance Processing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">professionals who manage documentation, follow-ups, underwriting support, and coordination — without slowing revenue down.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (Screenshot 6) */}
      <footer className="py-20 px-6 text-center border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-8 italic">Full-Time. Dedicated. Vetted for Performance. No Split Attention.</h2>
        <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-md mb-12">
          We both know what this is. if it makes sense, let's talk.
        </button>
        <div className="text-gray-400 text-sm space-y-1">
          <p className="font-bold text-gray-900">Get Work Talent</p>
          <p>Built by operators. Focused on performance.</p>
          <p className="pt-4">Copyright © 2026 Get Work Talent - All Rights Reserved.</p>
        </div>
      </footer>

    </main>
  );
}

