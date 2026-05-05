import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Search, Phone, MessageCircle, MapPin, FlaskConical, 
  ShieldCheck, Clock, Menu, ChevronRight, Activity,
  FileText, Home as HomeIcon, Zap, X, Star, ClipboardList,
  Info, ArrowRight, Mail, HeartPulse, Microscope, 
  Stethoscope, Award, PlusCircle, Headset, ThumbsUp, 
  CheckCircle2, ExternalLink, ShieldAlert, BadgeCheck
} from 'lucide-react';
import './App.css';

/**
 * DR RAMAN DIAGNOSTIC - OFFICIAL PLATFORM 2026
 * Managed by: Aman Pandey
 * Location: Tedhibazar, Ayodhya
 * Fully Responsive / Mobile-Hardened
 */

const App = () => {
  // --- CORE STATE MANAGEMENT ---
  const [search, setSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [viewRateList, setViewRateList] = useState(false);
  const [activeTest, setActiveTest] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const searchRef = useRef(null);

  // --- UI CONTROLS ---
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- BUSINESS & CONTACT CONFIGURATION ---
  const CONTACT = {
    phone: "+919214037192",
    display: "+91 92140 37192",
    whatsapp: "919214037192",
    email: "paman9421@gmail.com",
    address: "Shop No. 129 Arundhati Complex Tedhibazar Chauraha - Ayodhya - 224123",
    googleReview: "https://share.google/5GeTMKBrDLvM8h70p"
  };

  const tests = [
    { 
      id: 1, 
      name: "Thyroid Profile Total (T3, T4, TSH)", 
      price: 399, 
      mrp: 800, 
      category: "Hormonal", 
      details: "Comprehensive evaluation of thyroid gland activity. Essential for detecting metabolic imbalances, energy issues, and hormonal regulation.",
      preparation: "10-12 hours fasting is highly recommended for accurate mapping."
    },
    { 
      id: 2, 
      name: "Vitamin D (25-Hydroxy)", 
      price: 899, 
      mrp: 1800, 
      category: "Vitamin", 
      details: "Measures concentration of Vitamin D in blood. Crucial for bone density, immune system strength, and cardiovascular health.",
      preparation: "No specific fasting required."
    },
    { 
      id: 3, 
      name: "Liver Function Test (LFT)", 
      price: 599, 
      mrp: 1000, 
      category: "Routine", 
      details: "Analyzes enzymes, proteins, and bilirubin levels to assess liver health and detect potential inflammation or damage.",
      preparation: "Overnight fasting (8-10 hours) is mandatory."
    },
    { 
      id: 4, 
      name: "Kidney Function Test (KFT)", 
      price: 799, 
      mrp: 1100, 
      category: "Routine", 
      details: "Checks Urea, Creatinine, and Electrolytes to monitor how effectively your kidneys filter metabolic waste.",
      preparation: "Fasting preferred; avoid high protein intake 24h prior."
    },
    { 
      id: 5, 
      name: "CBC (Complete Blood Count)", 
      price: 299, 
      mrp: 450, 
      category: "Routine", 
      details: "A fundamental screen analyzing red cells, white cells, and platelets to detect anemia, infection, and various blood disorders.",
      preparation: "No preparation required."
    },
    { 
      id: 6, 
      name: "HbA1c (Diabetes Screening)", 
      price: 449, 
      mrp: 600, 
      category: "Diabetic", 
      details: "The gold standard for diabetes monitoring. Tracks average blood sugar levels over the past 90 days.",
      preparation: "Can be performed at any time of day regardless of food."
    },
    { 
      id: 7, 
      name: "Lipid Profile (Cardiac Risk)", 
      price: 699, 
      mrp: 950, 
      category: "Routine", 
      details: "Measures Cholesterol, Triglycerides, and HDL/LDL levels to evaluate heart health and cardiovascular risks.",
      preparation: "Strict 12-hour fasting is essential."
    },
    { 
      id: 8, 
      name: "Vitamin B12", 
      price: 899, 
      mrp: 1200, 
      category: "Vitamin", 
      details: "Vital for nerve tissue health, brain function, and red blood cell production.",
      preparation: "Fasting for 8-10 hours recommended."
    }
  ];

  const packages = [
    { 
      name: "Essential Health Shield", 
      id: "Basic", 
      price: 999, 
      mrp: 2500, 
      off: "60%", 
      details: "Includes 40+ Parameters: CBC, Blood Sugar Fasting, Kidney Basics, and Urine Routine.",
      perks: ["Home Collection", "1 Hr Report", "Free Doctor Consult"]
    },
    { 
      name: "Gold Advanced Guard", 
      id: "Advanced", 
      price: 1299, 
      mrp: 3500, 
      off: "63%", 
      details: "65+ Parameters: Everything in Basic + Thyroid Profile + Cardiac Risk + LFT.",
      perks: ["Home Collection", "1 Hr Report", "Free Doctor Consult"]
    },
    { 
      name: "Platinum Full Body", 
      id: "Comprehensive", 
      price: 1999, 
      mrp: 5500, 
      off: "64%", 
      details: "Our most complete assessment: Gold Shield + Vitamin D + B12 + Iron Studies + Electrolytes.",
      perks: ["Home Collection", "1 Hr Report", "Free Doctor Consult"]
    }
  ];

  // --- LOGIC: SEARCH & RECOMMENDATIONS ---
  const suggestions = useMemo(() => {
    if (!search.trim()) return [];
    return tests.filter(t => t.name.toLowerCase().includes(search.toLowerCase())).slice(0, 5);
  }, [search]);

  const filteredTests = useMemo(() => {
    if (!search.trim()) return tests;
    return tests.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  // --- BOOKING & REDIRECTS ---
  const handleBooking = (name, isExpertRequest = false) => {
    const text = isExpertRequest 
      ? "Hello Dr Raman Diagnostic, I want to know about the tests and health packages."
      : `Hello Dr Raman Diagnostic, I want to book the ${name} investigation.`;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    setIsMenuOpen(false);
  };

  const handleReviewRedirect = () => {
    window.open(CONTACT.googleReview, '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white bg-surface">
      {/* 1. TOP UTILITY BAR (Email/Contact/Address) */}
      <div className="bg-primary text-white py-1.5 px-4 text-[10px] md:text-xs font-bold flex justify-between items-center sticky top-0 z-[130] uppercase">
        <div className="flex items-center gap-2 italic">
          <MapPin size={12} className="text-secondary animate-pulse"/> 
          <span className="truncate max-w-[140px] md:max-w-none">Ayodhya 15km Radius Collection Support</span>
        </div>
        <div className="flex gap-4 items-center uppercase">
          <a href={`mailto:${CONTACT.email}`} className="hidden md:flex items-center gap-1.5 hover:text-secondary lowercase font-medium transition-colors">
            <Mail size={12}/> {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-1 hover:text-secondary transition-colors tracking-tighter">
            <Phone size={12}/> {CONTACT.display}
          </a>
        </div>
      </div>

      {/* 2. NAVIGATION & HAMBURGER LOGIC */}
      <nav className={`transition-all duration-300 border-b sticky top-[28px] md:top-[33px] z-[120] ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-white/95 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => { window.scrollTo(0,0); setIsMenuOpen(false); }}>
            <div className="bg-secondary p-1 rounded-lg group-hover:rotate-12 transition-transform shadow-md">
              <Activity className="text-white w-6 h-6" />
            </div>
            <div className="text-left leading-none uppercase">
              <h1 className="text-primary font-black text-xl md:text-2xl italic tracking-tighter">Dr Raman</h1>
              <p className="text-secondary font-black text-[8px] md:text-[9px] tracking-[0.3em]">Diagnostic</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <button onClick={() => document.getElementById('packages').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 italic cursor-pointer"><HeartPulse size={14}/> Packages</button>
            <button onClick={() => document.getElementById('tests').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 italic cursor-pointer"><ClipboardList size={14}/> Directory</button>
            <button onClick={() => setViewRateList(true)} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 italic cursor-pointer"><FileText size={14}/> View Rate List</button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => handleBooking('', true)} className="hidden sm:flex bg-accent text-white px-5 py-2.5 rounded-full font-black text-[9px] uppercase tracking-wider shadow-lg hover:bg-green-700 transition-all items-center gap-2">
              <MessageCircle size={16}/> Expert Help
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-primary p-2 focus:outline-none">
              {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>
          </div>
        </div>

        {/* Mobile Menu Sidebar */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300 z-[115]">
            <div className="flex flex-col p-6 gap-6 font-black uppercase text-[11px] tracking-widest text-slate-500 italic">
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('packages').scrollIntoView(); }} className="flex items-center gap-4 text-left"><HeartPulse size={20} className="text-secondary"/> Health Packages</button>
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('tests').scrollIntoView(); }} className="flex items-center gap-4 text-left"><ClipboardList size={20} className="text-secondary"/> Investigation Directory</button>
              <button onClick={() => { setIsMenuOpen(false); setViewRateList(true); }} className="flex items-center gap-4 text-left"><FileText size={20} className="text-secondary"/> Official Rate List</button>
              <div className="h-[1px] bg-slate-100 w-full"></div>
              <button onClick={() => handleBooking('', true)} className="bg-accent text-white py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg italic"><Headset size={20}/> Contact Our Expert</button>
            </div>
          </div>
        )}
      </nav>

      {/* 3. HERO SECTION & WORKING RECOMMENDATIONS SEARCH */}
      <header className="bg-white pt-10 md:pt-16 pb-14 px-6 text-center border-b border-slate-50 relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10" ref={searchRef}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-6">
            <Star size={12} className="fill-primary"/> Aman Pandey Initiative
          </div>
          <h2 className="text-primary text-4xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tighter italic uppercase">
            Smart Care. <br/>
            <span className="text-secondary italic underline decoration-primary underline-offset-4 decoration-4">1 Hr Delivery.</span>
          </h2>
          
          <div className="relative max-w-md mx-auto group">
            <input 
              type="text" 
              value={search}
              placeholder="Search blood tests (e.g. Thyroid, LFT)..."
              className="w-full p-4 pl-12 rounded-xl border-2 border-slate-100 focus:border-primary focus:ring-4 focus:ring-blue-50 outline-none shadow-xl transition-all text-sm font-medium bg-white"
              onFocus={() => setShowSuggestions(true)}
              onChange={(e) => { setSearch(e.target.value); setShowSuggestions(true); }}
            />
            <Search className="absolute left-4 top-4 text-slate-300 group-focus-within:text-primary transition-colors" size={24} />
            
            {/* Auto-Complete Search Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border shadow-2xl rounded-b-2xl z-[150] text-left mt-1 overflow-hidden animate-in fade-in zoom-in-95 duration-200 search-suggestion-box">
                {suggestions.map(s => (
                  <button 
                    key={s.id} 
                    onClick={() => { setSearch(s.name); setShowSuggestions(false); document.getElementById('tests').scrollIntoView(); }}
                    className="w-full p-4 hover:bg-slate-50 text-[11px] font-black text-primary flex justify-between items-center border-b border-slate-50 uppercase italic transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2 uppercase tracking-tighter"><Microscope size={14} className="text-secondary"/> {s.name}</span>
                    <span className="text-accent italic font-black font-mono">₹{s.price}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-10 right-0 text-primary/5 -rotate-12 hidden lg:block"><FlaskConical size={320}/></div>
      </header>

      {/* 4. PACKAGES SECTION (WITH DOCTOR CONSULTANCY COMPONENT) */}
      <section id="packages" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-black text-primary uppercase italic mb-12 border-l-4 border-secondary pl-4">Health Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map(pkg => (
            <div key={pkg.name} className="bg-primary rounded-[3rem] p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl transition-transform hover:-translate-y-2">
              <div className="absolute top-6 right-6 bg-secondary text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-lg z-10 animate-pulse">SAVE {pkg.off}</div>
              
              <div>
                {/* Free Doctor Consultancy Special Component */}
                <div className="bg-white/10 border border-white/20 rounded-2xl p-4 mb-8 flex items-center gap-4">
                  <div className="bg-accent p-2 rounded-xl text-white shadow-lg"><Stethoscope size={24}/></div>
                  <div className="text-left leading-none uppercase">
                    <p className="text-[9px] font-black text-accent tracking-widest mb-1 italic">Standard Feature</p>
                    <p className="text-xs font-black tracking-tighter italic">Free Doctor Consultation</p>
                  </div>
                </div>

                <p className="text-[9px] font-black text-blue-200 uppercase mb-2 tracking-[0.2em]">{pkg.id} Shield</p>
                <h4 className="text-2xl font-black mb-4 leading-tight italic uppercase">{pkg.name}</h4>
                <p className="text-blue-100/60 text-xs mb-10 font-medium italic leading-relaxed">{pkg.details}</p>
                
                <ul className="space-y-4 mb-12 uppercase italic">
                  {pkg.perks.map(perk => (
                    <li key={perk} className="flex items-center gap-3 text-[10px] font-bold tracking-tighter">
                      <Zap size={14} className="text-secondary fill-secondary"/> {perk}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-end justify-between border-t border-white/10 pt-8">
                <div className="text-left overflow-hidden">
                  <p className="text-xs text-white/40 line-through font-bold mb-1 italic tracking-tighter mrp-text">₹{pkg.mrp}</p>
                  <p className="text-4xl md:text-5xl font-black tracking-tighter italic leading-none responsive-price">₹{pkg.price}</p>
                </div>
                <button onClick={() => handleBooking(pkg.name)} className="bg-white text-primary p-5 rounded-[2.2rem] hover:bg-secondary hover:text-white transition-all shadow-xl shadow-blue-900 cursor-pointer">
                  <ArrowRight size={28} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DYNAMIC TEST DIRECTORY (FILTERED GRID) */}
      <main id="tests" className="max-w-7xl mx-auto px-4 md:px-6 py-16 bg-white rounded-[4rem] shadow-sm mt-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-l-4 border-secondary pl-6 text-left">
          <div className="text-left">
            <h3 className="text-3xl font-black text-primary uppercase tracking-tighter italic leading-none">Test Directory</h3>
            <p className="text-slate-400 font-black uppercase text-[8px] mt-2 italic tracking-widest leading-none">Laboratory Investigation Pricing</p>
          </div>
          {search && (
            <div className="mt-4 text-[10px] font-black bg-blue-50 text-primary px-4 py-1.5 rounded-full uppercase italic">
              Showing {filteredTests.length} Investigations
            </div>
          )}
        </div>

        {filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 px-2 md:px-4">
            {filteredTests.map((test) => (
              <div key={test.id} className="bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group text-left relative shadow-sm overflow-hidden">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest leading-none">{test.category}</span>
                    <Stethoscope size={20} className="text-primary/20 group-hover:text-primary transition-colors"/>
                  </div>
                  <h4 className="font-black text-lg md:text-xl text-slate-800 group-hover:text-primary transition-colors leading-tight mb-4 h-[3rem] overflow-hidden tracking-tighter italic uppercase responsive-title">
                    {test.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-accent text-[9px] font-black uppercase italic mb-8">
                    <Zap size={12} className="fill-accent"/> 1 Hr Delivery
                  </div>
                </div>
                
                <div className="pt-6 border-t border-slate-50 flex justify-between items-end gap-3">
                  <div className="text-left overflow-hidden min-w-0">
                    <p className="text-[10px] text-slate-300 line-through font-black italic mb-1 leading-none tracking-tighter mrp-text font-mono">₹{test.mrp}</p>
                    <p className="text-2xl md:text-3xl font-black text-primary tracking-tighter leading-none italic truncate responsive-price font-mono">₹{test.price}</p>
                  </div>
                  <div className="flex flex-col gap-3 items-end shrink-0">
                    <button onClick={() => setActiveTest(test)} className="text-primary text-[10px] font-black uppercase hover:text-secondary underline underline-offset-4 cursor-pointer">Details</button>
                    <button onClick={() => handleBooking(test.name)} className="bg-primary text-white p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-secondary transition-all shadow-lg cursor-pointer">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <FlaskConical className="mx-auto text-slate-100 mb-8" size={64} />
            <p className="text-slate-400 font-black uppercase tracking-widest text-sm italic">No matching results for "{search}"</p>
            <button onClick={() => setSearch('')} className="mt-6 bg-primary/5 text-primary px-6 py-2 rounded-full font-black text-[10px] uppercase italic">View All Investigations</button>
          </div>
        )}
      </main>

      {/* 6. COMPREHENSIVE FOOTER (CORRECTED ADDRESS/EMAIL) */}
      <footer className="bg-white pt-20 pb-12 px-6 text-left border-t border-slate-100 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-slate-100 text-left">
          <div className="space-y-10">
            <div className="flex items-center gap-3 justify-start">
              <Activity className="text-secondary w-12 h-12" />
              <div className="text-left leading-none uppercase">
                <h1 className="text-primary font-black text-2xl md:text-3xl uppercase italic tracking-tighter leading-none">Dr Raman</h1>
                <p className="text-secondary font-black text-[9px] tracking-[0.3em]">Diagnostic</p>
              </div>
            </div>
            <p className="text-slate-400 text-[10px] md:text-[11px] font-bold leading-relaxed uppercase tracking-tighter italic">
              Managed by Aman Pandey. Accurate diagnostics for Ayodhya. High-precision clinical pathology services delivered with care to your location.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-primary font-black text-[12px] italic transition-colors hover:text-secondary group">
                <Mail size={18} className="text-secondary group-hover:rotate-12 transition-transform"/> {CONTACT.email}
              </a>
              <div className="flex gap-4">
                 <a href={`tel:${CONTACT.phone}`} className="bg-primary text-white p-4 rounded-2xl shadow-xl transition-all hover:bg-secondary"><Phone size={24}/></a>
                 <button onClick={() => handleBooking('', true)} className="bg-accent text-white p-4 rounded-2xl shadow-xl cursor-pointer hover:bg-green-700 transition-all"><MessageCircle size={24}/></button>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h4 className="font-black text-[11px] uppercase tracking-[0.4em] text-secondary italic border-b border-slate-100 pb-2">Physical Center</h4>
            <div className="flex gap-5">
              <MapPin className="text-primary shrink-0" size={32} />
              <p className="text-slate-600 font-black text-[12px] uppercase leading-tight tracking-tight italic">
                {CONTACT.address}<br/>
                <span className="text-primary bg-blue-50 px-3 py-1 rounded mt-4 inline-block italic tracking-tighter text-[10px] uppercase border border-blue-100 shadow-sm leading-none">✓ 15km Collection Radius</span>
              </p>
            </div>
            <div className="flex gap-5">
              <BadgeCheck className="text-primary shrink-0" size={32} />
              <p className="text-slate-600 font-black text-[12px] uppercase leading-tight tracking-tight italic">
                Certified Laboratory<br/>
                <span className="text-secondary italic">Aman Pandey Initiative</span>
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <h4 className="font-black text-[11px] uppercase tracking-[0.4em] text-secondary italic border-b border-slate-100 pb-2">24/7 Helpline</h4>
            <div className="flex gap-6 items-center">
              <div className="bg-blue-50 p-5 rounded-[2rem] text-primary shadow-inner"><Phone size={36}/></div>
              <div className="text-left leading-none uppercase">
                <p className="text-primary font-black text-3xl md:text-4xl tracking-tighter italic leading-none">{CONTACT.display}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase mt-2 italic tracking-widest leading-none">Contact for Home Samples</p>
              </div>
            </div>
          </div>
        </div>

        {/* 7. REDIRECTING RATE US BOX (GOOGLE MAPS) */}
        <div className="max-w-7xl mx-auto py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-2 text-center md:text-left">
            <h5 className="text-primary font-black uppercase text-base italic tracking-[0.2em]">Patient Feedback</h5>
            <p className="text-slate-400 font-bold uppercase text-[10px] italic">Your support helps us maintain medical excellence in Ayodhya.</p>
          </div>
          
          <button 
            onClick={handleReviewRedirect}
            className="group relative bg-white border-4 border-slate-50 p-10 rounded-[3.5rem] shadow-2xl hover:border-primary transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="flex items-center gap-8 relative z-10">
              <div className="flex gap-1 text-yellow-400 star-glow">
                <Star size={24} fill="#fbbf24"/><Star size={24} fill="#fbbf24"/><Star size={24} fill="#fbbf24"/><Star size={24} fill="#fbbf24"/><Star size={24} fill="#fbbf24"/>
              </div>
              <div className="h-12 w-[2px] bg-slate-100 hidden md:block"></div>
              <div className="flex items-center gap-4">
                <span className="text-primary font-black uppercase tracking-widest text-xl italic leading-none">Rate Us on Google</span>
                <ThumbsUp className="text-secondary hover-bounce transition-all" size={32}/>
              </div>
            </div>
            <div className="absolute inset-0 bg-slate-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-50"></div>
          </button>
        </div>

        <p className="text-center mt-12 text-[11px] font-black text-slate-300 uppercase tracking-widest italic">
          © 2026 Dr Raman Diagnostic | Aman Pandey Initiative | Ayodhya, UP | All Rights Reserved
        </p>
      </footer>

      {/* 8. RATE LIST MODAL (NO OVERFLOW + EXPERT CHAT) */}
      {viewRateList && (
        <div className="fixed inset-0 z-[500] bg-white overflow-y-auto">
          <div className="p-4 md:p-12">
            <div className="max-w-4xl mx-auto border-[12px] border-primary rounded-[4rem] md:rounded-[5rem] p-8 md:p-20 relative bg-white shadow-2xl overflow-hidden text-left uppercase">
              <button onClick={() => setViewRateList(false)} className="absolute top-8 right-8 bg-secondary text-white p-5 rounded-full shadow-2xl z-[510] cursor-pointer hover:scale-110 transition-all"><X size={32}/></button>
              
              <div className="text-center mb-16 md:mb-24">
                <Activity className="text-secondary w-20 h-20 mx-auto mb-8" />
                <h1 className="text-primary font-black text-5xl md:text-8xl uppercase italic tracking-tighter leading-none">DR RAMAN</h1>
                <p className="text-secondary font-black text-2xl md:text-3xl tracking-[0.4em] uppercase leading-none">DIAGNOSTIC</p>
                <div className="h-2 w-48 bg-secondary mx-auto mt-10 rounded-full"></div>
                <h2 className="text-slate-800 text-xl md:text-2xl font-black uppercase tracking-tighter mt-10 italic">Official Investigation Directory — 2026</h2>
                <p className="text-slate-400 text-[11px] font-black italic mt-4 uppercase tracking-[0.4em]">Managed by Aman Pandey</p>
              </div>

              <div className="space-y-20">
                {/* Health Packages Subsection */}
                <section>
                  <div className="bg-slate-50 p-6 rounded-[2.5rem] border-l-8 border-secondary mb-10 flex items-center gap-4">
                    <PlusCircle className="text-accent" size={32}/>
                    <h3 className="text-primary font-black uppercase text-sm tracking-[0.2em] italic leading-none">Premium Health Packages</h3>
                  </div>
                  <table className="rate-table border-collapse">
                    <tbody className="text-slate-800 font-bold italic">
                      {packages.map(p => (
                        <tr key={p.id} className="border-b-2 border-slate-100 text-base md:text-2xl italic tracking-tighter">
                          <td className="py-8 align-top leading-tight uppercase pr-4">
                            {p.name}
                            <span className="block text-[10px] md:text-[12px] text-accent mt-2 tracking-[0.1em] font-black">+ INCLUDES FREE DOCTOR CONSULTANCY</span>
                          </td>
                          <td className="w-32 md:w-48 py-8 text-right text-primary text-4xl md:text-6xl font-black italic tracking-tighter leading-none font-mono">₹{p.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>

                {/* Individual Test Subsection */}
                <section>
                  <div className="bg-slate-50 p-6 rounded-[2.5rem] border-l-8 border-secondary mb-10 flex items-center gap-4">
                    <ClipboardList className="text-secondary" size={32}/>
                    <h3 className="text-primary font-black uppercase text-sm tracking-[0.2em] italic leading-none">Pathology Investigations</h3>
                  </div>
                  <table className="rate-table border-collapse">
                    <tbody className="text-slate-800 font-bold uppercase italic">
                      {tests.map(t => (
                        <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors text-[11px] md:text-lg italic tracking-tighter">
                          <td className="py-5 pr-4 align-top leading-tight">{t.name}</td>
                          <td className="w-32 md:w-48 py-5 text-right text-primary text-2xl md:text-3xl font-black italic tracking-tighter leading-none font-mono">₹{t.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              </div>

              {/* Expert Redirect CTA Section */}
              <div className="mt-24 pt-16 border-t-4 border-slate-100 flex flex-col items-center gap-12 uppercase italic">
                <button 
                  onClick={() => handleBooking('', true)} 
                  className="w-full bg-accent text-white py-8 md:py-10 rounded-[4rem] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-6 hover:bg-green-700 transition-all shadow-2xl text-[14px] cursor-pointer"
                >
                  <Headset size={36}/> Contact Our Expert via WhatsApp
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full italic">
                  <div>
                    <p className="text-[11px] font-black text-secondary uppercase mb-2 tracking-widest italic leading-none">Clinical Helpline</p>
                    <p className="text-primary font-black text-4xl italic tracking-tighter leading-none">{CONTACT.display}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-secondary uppercase mb-2 tracking-widest italic text-right leading-none">Diagnostic Center</p>
                    <p className="text-primary font-black text-[13px] uppercase tracking-tighter italic text-right leading-tight max-w-[300px] ml-auto">{CONTACT.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 9. TEST DETAILS MODAL (OVERLAY) */}
      {activeTest && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-md uppercase">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 max-w-2xl w-full shadow-2xl relative animate-in zoom-in duration-300 text-left">
            <button onClick={() => setActiveTest(null)} className="absolute right-12 top-12 text-slate-300 hover:text-secondary cursor-pointer transition-colors"><X size={44}/></button>
            <div className="bg-blue-50 w-24 h-24 rounded-[3rem] flex items-center justify-center mb-12 shadow-inner"><Microscope className="text-primary" size={48}/></div>
            <h3 className="text-3xl md:text-4xl font-black text-primary uppercase mb-6 italic leading-tight tracking-tighter leading-none">{activeTest.name}</h3>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-12 font-medium italic normal-case">{activeTest.details}</p>
            <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 mb-12 shadow-sm italic">
              <h6 className="text-[12px] font-black text-primary uppercase mb-4 tracking-widest flex items-center gap-3 italic leading-none"><Clock size={24}/> Essential Preparation</h6>
              <p className="text-slate-500 text-[15px] md:text-[18px] font-bold leading-relaxed">{activeTest.preparation}</p>
            </div>
            <button 
              onClick={() => { handleBooking(activeTest.name); setActiveTest(null); }} 
              className="w-full bg-accent text-white py-8 md:py-10 rounded-[4rem] font-black uppercase tracking-[0.5em] shadow-xl flex items-center justify-center gap-5 text-[12px] md:text-[14px] cursor-pointer hover:bg-green-700 transition-all transform hover:scale-[1.02]"
            >
              Book via WhatsApp <ArrowRight size={32}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;