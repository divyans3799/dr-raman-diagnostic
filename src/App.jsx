import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Search, Phone, MessageCircle, MapPin, FlaskConical, 
  ShieldCheck, Clock, Menu, ChevronRight, Activity,
  FileText, Home as HomeIcon, Zap, X, Star, ClipboardList,
  Info, ArrowRight, Download, HeartPulse, Microscope, 
  Stethoscope, Award, PlusCircle, Headset, CheckCircle2,
  AlertCircle, HelpCircle
} from 'lucide-react';

const App = () => {
  // --- APPLICATION STATE ---
  const [search, setSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [viewRateList, setViewRateList] = useState(false);
  const [activeTest, setActiveTest] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const searchRef = useRef(null);

  // --- UI EFFECTS ---
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search suggestions when clicking outside the search area
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- BUSINESS DATA ---
  const CONTACT = {
    phone: "+919214037192",
    display: "+91 92140 37192",
    whatsapp: "919214037192",
    address: "Shop No. 129 Arundhati Complex Tedhi Bajar Chauraha - Ayodhya - 224123"
  };

  const tests = [
    { 
      id: 1, 
      name: "Thyroid Profile Total (T3, T4, TSH)", 
      price: 399, 
      mrp: 800, 
      category: "Hormonal", 
      details: "A comprehensive analysis of thyroid gland activity. Essential for detecting metabolic imbalances, energy issues, and unexplained weight changes.",
      preparation: "Fasting for 10-12 hours is highly recommended for accurate hormonal mapping."
    },
    { 
      id: 2, 
      name: "Vitamin D (25-Hydroxy)", 
      price: 899, 
      mrp: 1800, 
      category: "Vitamin", 
      details: "Measures the concentration of Vitamin D in your blood. Crucial for bone density, immune function, and overall cell health.",
      preparation: "No specific fasting required, though consistent testing time is preferred."
    },
    { 
      id: 3, 
      name: "Liver Function Test (LFT)", 
      price: 599, 
      mrp: 1000, 
      category: "Routine", 
      details: "Evaluates liver enzymes, proteins, and bilirubin levels to assess liver health and detect potential inflammation or damage.",
      preparation: "Overnight fasting (8-10 hours) is mandatory for this investigation."
    },
    { 
      id: 4, 
      name: "Kidney Function Test (KFT)", 
      price: 799, 
      mrp: 1100, 
      category: "Routine", 
      details: "Checks Urea, Creatinine, and Uric Acid levels to monitor how effectively your kidneys are filtering metabolic waste.",
      preparation: "Fasting preferred; avoid heavy protein intake 24 hours before the test."
    },
    { 
      id: 5, 
      name: "CBC (Complete Blood Count)", 
      price: 299, 
      mrp: 450, 
      category: "Routine", 
      details: "A fundamental screening test that analyzes red cells, white cells, and platelets to detect anemia, infection, and various blood disorders.",
      preparation: "No fasting required."
    },
    { 
      id: 6, 
      name: "HbA1c (Diabetes Screening)", 
      price: 449, 
      mrp: 600, 
      category: "Diabetic", 
      details: "Tracks average blood sugar levels over the last 90 days. The gold standard for diabetes monitoring and long-term diagnosis.",
      preparation: "Can be performed at any time of day, regardless of food intake."
    },
    { 
      id: 7, 
      name: "Lipid Profile (Cardiac Screen)", 
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
      details: "Assesses B12 levels which are vital for nerve function, brain health, and red blood cell production.",
      preparation: "Fasting for 8-10 hours is recommended."
    }
  ];

  const packages = [
    { 
      name: "Essential Health Shield", 
      id: "Basic", 
      price: 999, 
      mrp: 2500, 
      off: "60%", 
      details: "Includes 40+ Parameters: CBC, Blood Sugar Fasting, Kidney Basics (Urea, Creatinine), and Urine Routine Analysis.",
      perks: ["Home Collection", "1 Hr Report", "Doctor Consult"]
    },
    { 
      name: "Gold Health Shield", 
      id: "Advanced", 
      price: 1299, 
      mrp: 3500, 
      off: "63%", 
      details: "Includes 65+ Parameters: Everything in Basic + Thyroid Profile + Lipid Profile + Liver Function Test.",
      perks: ["Home Collection", "1 Hr Report", "Doctor Consult"]
    },
    { 
      name: "Platinum Full Body", 
      id: "Comprehensive", 
      price: 1999, 
      mrp: 5500, 
      off: "64%", 
      details: "Our most complete assessment. Includes 85+ Parameters: Gold Shield + Vitamin D + B12 + Iron Studies + Electrolytes.",
      perks: ["Home Collection", "1 Hr Report", "Free Doctor Consult"]
    }
  ];

  // --- HANDLERS & LOGIC ---
  const suggestions = useMemo(() => {
    if (!search) return [];
    return tests.filter(t => t.name.toLowerCase().includes(search.toLowerCase())).slice(0, 5);
  }, [search]);

  const filteredTests = useMemo(() => {
    return tests.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const handleBooking = (name, isExpertRequest = false) => {
    const text = isExpertRequest 
      ? "Hello Dr Raman Diagnostic, I want to know about the tests and health packages."
      : `Hello Dr Raman Diagnostic, I want to book the ${name} investigation.`;
    
    const msg = encodeURIComponent(text);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, '_blank');
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* 1. TOP IDENTITY BAR */}
      <div className="bg-primary text-white py-1.5 px-4 text-[10px] md:text-xs font-bold flex justify-between items-center sticky top-0 z-[130]">
        <div className="flex items-center gap-2">
          <MapPin size={12} className="text-secondary animate-pulse"/> 
          <span className="truncate max-w-[150px] md:max-w-none uppercase tracking-tighter">Ayodhya 15km Radius Collection</span>
        </div>
        <div className="flex gap-4">
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-1 hover:text-secondary transition-colors uppercase">
            <Phone size={12}/> {CONTACT.display}
          </a>
        </div>
      </div>

      {/* 2. NAVIGATION & MOBILE HAMBURGER */}
      <nav className={`transition-all duration-300 border-b sticky top-[28px] md:top-[33px] z-[120] ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-white/95 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => { window.scrollTo(0,0); setIsMenuOpen(false); }}>
            <div className="bg-secondary p-1 rounded-lg group-hover:rotate-12 transition-transform shadow-md">
              <Activity className="text-white w-6 h-6" />
            </div>
            <div className="text-left leading-none">
              <h1 className="text-primary font-black text-xl md:text-2xl uppercase italic tracking-tighter leading-none">Dr Raman</h1>
              <p className="text-secondary font-black text-[8px] md:text-[9px] tracking-[0.2em] uppercase leading-none">Diagnostic</p>
            </div>
          </div>
          
          {/* Desktop Menu Links */}
          <div className="hidden lg:flex items-center gap-10">
            <button onClick={() => document.getElementById('packages').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer italic"><HeartPulse size={14}/> Packages</button>
            <button onClick={() => document.getElementById('tests').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer italic"><ClipboardList size={14}/> Test Directory</button>
            <button onClick={() => setViewRateList(true)} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer italic"><FileText size={14}/> View Rate List</button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => handleBooking('', true)} className="hidden sm:flex bg-accent text-white px-5 py-2.5 rounded-full font-black text-[9px] uppercase tracking-wider shadow-lg shadow-green-100 hover:bg-green-700 transition-all items-center gap-2">
              <MessageCircle size={16}/> Chat with Expert
            </button>
            {/* Hamburger Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-primary p-2 focus:outline-none">
              {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300 z-[115]">
            <div className="flex flex-col p-6 gap-6 font-black uppercase text-[11px] tracking-widest text-slate-500">
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('packages').scrollIntoView(); }} className="flex items-center gap-4 text-left"><HeartPulse size={22} className="text-secondary"/> Health Packages</button>
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('tests').scrollIntoView(); }} className="flex items-center gap-4 text-left"><ClipboardList size={22} className="text-secondary"/> Investigation Directory</button>
              <button onClick={() => { setIsMenuOpen(false); setViewRateList(true); }} className="flex items-center gap-4 text-left"><FileText size={22} className="text-secondary"/> Official Rate List</button>
              <div className="h-[1px] bg-slate-100 w-full"></div>
              <button onClick={() => handleBooking('', true)} className="bg-accent text-white py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-green-100 italic"><Headset size={20}/> Contact Our Expert</button>
            </div>
          </div>
        )}
      </nav>

      {/* 3. HERO & SEARCH WITH RECOMMENDATIONS */}
      <header className="bg-white pt-12 md:pt-16 pb-14 px-6 text-center border-b border-slate-50 relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10" ref={searchRef}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Star size={12} className="fill-primary"/> Aman Pandey Initiative
          </div>
          <h2 className="text-primary text-4xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tighter italic">
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
            
            {/* Search Suggestions Dropdown Logic */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border shadow-2xl rounded-b-2xl z-[150] text-left overflow-hidden mt-1">
                <div className="max-h-[250px] overflow-y-auto">
                  {suggestions.map(s => (
                    <button 
                      key={s.id} 
                      onClick={() => { setSearch(s.name); setShowSuggestions(false); }}
                      className="w-full p-4 hover:bg-slate-50 text-xs font-bold text-primary flex justify-between items-center border-b border-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 uppercase tracking-tighter">
                        <Microscope size={14} className="text-secondary"/>
                        {s.name}
                      </div>
                      <span className="text-accent italic font-black">₹{s.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-10 right-0 text-primary/5 -rotate-12 hidden lg:block"><FlaskConical size={300}/></div>
      </header>

      {/* 4. DR RAMAN DIAGNOSTIC PACKAGES (WITH CONSULTANCY) */}
      <section id="packages" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-12 border-l-4 border-secondary pl-4 text-left">
          <div>
            <h3 className="text-3xl font-black text-primary uppercase tracking-tighter italic leading-none">Health Packages</h3>
            <p className="text-slate-400 font-black uppercase tracking-widest text-[9px] mt-2 underline decoration-secondary underline-offset-4 italic">Dr Raman Diagnostic Exclusive</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map(pkg => (
            <div key={pkg.name} className="bg-primary rounded-[3rem] p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl transition-transform hover:-translate-y-2 duration-300">
              {/* Offer Badge */}
              <div className="absolute top-6 right-6 bg-secondary text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-lg z-10 animate-pulse">
                SAVE {pkg.off}
              </div>
              
              <div>
                {/* Doctor Consultancy Branding Component */}
                <div className="bg-white/10 border border-white/20 rounded-2xl p-4 mb-8 flex items-center gap-4">
                  <div className="bg-accent p-2 rounded-xl text-white shadow-lg"><Stethoscope size={24}/></div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase text-accent leading-none tracking-widest mb-1 italic">Exclusive Perk</p>
                    <p className="text-xs font-black leading-tight uppercase tracking-tighter">Free Doctor Consultation</p>
                  </div>
                </div>

                <p className="text-[9px] font-black text-blue-200 uppercase mb-2 tracking-[0.2em]">{pkg.id} SHIELD</p>
                <h4 className="text-2xl font-black mb-4 leading-tight italic">{pkg.name}</h4>
                <p className="text-blue-100/60 text-xs mb-10 font-medium italic leading-relaxed">{pkg.details}</p>
                
                <ul className="space-y-4 mb-12 text-left">
                  {pkg.perks.map(perk => (
                    <li key={perk} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-tighter italic">
                      <Zap size={14} className="text-secondary fill-secondary"/> {perk}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-end justify-between border-t border-white/10 pt-8">
                <div className="text-left">
                  <p className="text-xs text-white/40 line-through font-bold mb-1 italic tracking-tighter">₹{pkg.mrp}</p>
                  <p className="text-5xl font-black tracking-tighter italic leading-none">₹{pkg.price}</p>
                </div>
                <button 
                  onClick={() => handleBooking(pkg.name)} 
                  className="bg-white text-primary p-5 rounded-[2.2rem] hover:bg-secondary hover:text-white transition-all shadow-xl shadow-blue-900 cursor-pointer"
                >
                  <ArrowRight size={28} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DYNAMIC TEST DIRECTORY (MOBILE OPTIMIZED) */}
      <main id="tests" className="max-w-7xl mx-auto px-4 md:px-6 py-16 bg-white rounded-[4rem] shadow-sm mt-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-l-4 border-secondary pl-6 text-left">
          <div className="text-left">
            <h3 className="text-3xl font-black text-primary uppercase tracking-tighter italic leading-none">Test Directory</h3>
            <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[8px] mt-2 italic">Official Investigation Pricing</p>
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
                  <h4 className="font-black text-xl text-slate-800 group-hover:text-primary transition-colors leading-tight mb-4 h-[3rem] overflow-hidden tracking-tighter italic">
                    {test.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-accent text-[9px] font-black uppercase italic mb-8">
                    <Zap size={12} className="fill-accent"/> 1 Hr Delivery
                  </div>
                </div>
                
                <div className="pt-6 border-t border-slate-50 flex justify-between items-end gap-3">
                  <div className="text-left overflow-hidden min-w-0">
                    <p className="text-[10px] text-slate-300 line-through font-black italic mb-1 leading-none tracking-tighter">₹{test.mrp}</p>
                    <p className="text-2xl md:text-3xl font-black text-primary tracking-tighter leading-none italic truncate">₹{test.price}</p>
                  </div>
                  <div className="flex flex-col gap-3 items-end shrink-0">
                    <button onClick={() => setActiveTest(test)} className="text-primary text-[10px] font-black uppercase hover:text-secondary underline underline-offset-4 cursor-pointer">Details</button>
                    <button onClick={() => handleBooking(test.name)} className="bg-primary text-white p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-secondary transition-all cursor-pointer shadow-lg">
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
            <p className="text-slate-400 font-black uppercase tracking-widest text-sm italic">No investigations found for "{search}"</p>
            <button onClick={() => setSearch('')} className="text-primary font-black mt-6 underline uppercase italic text-xs cursor-pointer">View Full Directory</button>
          </div>
        )}
      </main>

      {/* 6. DETAILED FOOTER (CORRECT ADDRESS) */}
      <footer className="bg-white pt-24 pb-12 px-6 text-left border-t border-slate-100 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 pb-16 border-b border-slate-100 text-left">
          <div className="space-y-10 text-left">
            <div className="flex items-center gap-3 justify-start">
              <Activity className="text-secondary w-12 h-12" />
              <div className="text-left leading-none">
                <h1 className="text-primary font-black text-2xl md:text-3xl uppercase italic tracking-tighter leading-none">Dr Raman</h1>
                <p className="text-secondary font-black text-[10px] tracking-[0.3em] uppercase">Diagnostic</p>
              </div>
            </div>
            <p className="text-slate-400 text-[10px] md:text-[11px] font-bold leading-relaxed uppercase tracking-tighter italic">
              Managed by Aman Pandey. Accurate diagnostics and professional medical care for the holy city of Ayodhya. Trusted health reports delivered with clinical precision.
            </p>
            <div className="flex gap-5 justify-start">
               <a href={`tel:${CONTACT.phone}`} className="bg-primary text-white p-5 rounded-[2.5rem] hover:bg-secondary shadow-xl transition-all"><Phone size={28}/></a>
               <button onClick={() => handleBooking('', true)} className="bg-accent text-white p-5 rounded-[2.5rem] hover:bg-green-700 shadow-xl cursor-pointer transition-all"><MessageCircle size={28}/></button>
            </div>
          </div>

          <div className="space-y-12 text-left">
            <h4 className="font-black text-[11px] uppercase tracking-[0.4em] text-secondary italic border-b border-slate-100 pb-2">Center Location</h4>
            <div className="flex gap-5">
              <MapPin className="text-primary shrink-0" size={32} />
              <p className="text-slate-600 font-black text-[12px] uppercase leading-tight tracking-tight italic">
                {CONTACT.address}<br/>
                <span className="text-primary bg-blue-50 px-3 py-1 rounded mt-4 inline-block italic tracking-tighter text-[10px] uppercase border border-blue-100 shadow-sm">✓ 15km Collection Radius</span>
              </p>
            </div>
            <div className="flex gap-5">
              <Clock className="text-primary shrink-0" size={32} />
              <p className="text-slate-600 font-black text-[12px] uppercase leading-tight tracking-tight italic">
                Operating Hours<br/>
                <span className="text-secondary italic">7:00 AM - 9:00 PM (Daily)</span>
              </p>
            </div>
          </div>

          <div className="space-y-12 text-left">
            <h4 className="font-black text-[11px] uppercase tracking-[0.4em] text-secondary italic border-b border-slate-100 pb-2">24/7 Helpline</h4>
            <div className="flex gap-6 items-center justify-start">
              <div className="bg-blue-50 p-5 rounded-[2rem] text-primary shadow-inner"><Phone size={36}/></div>
              <div className="text-left leading-none">
                <p className="text-primary font-black text-3xl md:text-4xl tracking-tighter italic leading-none">{CONTACT.display}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase mt-2 italic tracking-widest">Call for Appointment</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-12 text-[11px] font-black text-slate-300 uppercase tracking-widest italic">
          © 2026 Dr Raman Diagnostic | Aman Pandey Initiative | Ayodhya, UP | All Rights Reserved
        </p>
      </footer>

      {/* 7. FIXED RATE LIST MODAL (NO OVERFLOW + EXPERT CHAT) */}
      {viewRateList && (
        <div className="fixed inset-0 z-[500] bg-white overflow-y-auto">
          <div className="p-4 md:p-12">
            <div className="max-w-4xl mx-auto border-[12px] border-primary rounded-[4rem] md:rounded-[5rem] p-8 md:p-20 relative bg-white shadow-2xl">
              <button onClick={() => setViewRateList(false)} className="absolute top-8 right-8 bg-secondary text-white p-5 rounded-full shadow-2xl z-[510] cursor-pointer hover:scale-110 transition-all"><X size={32}/></button>
              
              <div className="text-center mb-16 md:mb-24">
                <div className="flex justify-center items-center gap-5 mb-8">
                  <Activity className="text-secondary w-16 h-16 md:w-24 md:h-24" />
                  <div className="text-left leading-none">
                    <h1 className="text-primary font-black text-4xl md:text-7xl uppercase italic tracking-tighter leading-none">DR RAMAN</h1>
                    <p className="text-secondary font-black text-2xl md:text-3xl tracking-[0.4em] uppercase leading-none">DIAGNOSTIC</p>
                  </div>
                </div>
                <div className="h-2 w-48 md:w-64 bg-secondary mx-auto mb-10 rounded-full"></div>
                <h2 className="text-slate-800 text-2xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">Official Rate List — 2026</h2>
                <p className="text-slate-400 font-bold uppercase text-[12px] md:text-[14px] mt-6 tracking-widest italic decoration-secondary underline underline-offset-4 decoration-2 text-center">Managed by Aman Pandey • Ayodhya 15KM Radius</p>
              </div>

              <div className="space-y-20 md:space-y-28">
                {/* Premium Health Packages Section */}
                <section>
                  <div className="flex items-center gap-5 mb-10 bg-slate-50 p-6 rounded-[2.5rem] border-l-8 border-secondary shadow-sm">
                    <PlusCircle className="text-accent" size={32}/>
                    <h3 className="text-primary font-black uppercase text-sm md:text-lg tracking-[0.2em] italic">Branded Health Packages</h3>
                  </div>
                  <div className="overflow-x-hidden">
                    <table className="w-full text-left border-collapse">
                      <tbody className="text-slate-800 font-bold">
                        {packages.map(p => (
                          <tr key={p.id} className="border-b border-slate-100 text-base md:text-2xl italic uppercase tracking-tighter">
                            <td className="py-8 px-4 align-top leading-tight">
                              {p.name}
                              <span className="block text-[10px] md:text-[12px] text-accent mt-2 tracking-widest font-black">+ FREE DOCTOR CONSULTANCY</span>
                            </td>
                            <td className="py-8 px-4 text-right text-primary text-3xl md:text-5xl font-black italic tracking-tighter leading-none">₹{p.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Individual Investigations Section */}
                <section>
                  <div className="flex items-center gap-5 mb-10 bg-slate-50 p-6 rounded-[2.5rem] border-l-8 border-secondary shadow-sm">
                    <ClipboardList className="text-secondary" size={32}/>
                    <h3 className="text-primary font-black uppercase text-sm md:text-lg tracking-[0.2em] italic">Investigation Pricing</h3>
                  </div>
                  <div className="overflow-x-hidden">
                    <table className="w-full text-left border-collapse">
                      <tbody className="text-slate-800 font-bold">
                        {tests.map(t => (
                          <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors text-[12px] md:text-lg italic uppercase tracking-tighter">
                            <td className="py-5 px-4 align-top leading-tight">{t.name}</td>
                            <td className="py-5 px-4 text-right text-primary text-2xl md:text-3xl font-black italic tracking-tighter leading-none">₹{t.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>

              {/* EXPERT CONTACT INTEGRATION (REPLACED DOWNLOAD) */}
              <div className="mt-24 md:mt-32 pt-16 border-t-4 border-slate-100 flex flex-col items-center gap-12">
                <button 
                  onClick={() => handleBooking('', true)} 
                  className="w-full bg-accent text-white py-8 md:py-10 rounded-[3.5rem] md:rounded-[5rem] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-6 hover:bg-green-700 transition-all shadow-2xl text-[14px] md:text-[18px] cursor-pointer"
                >
                  <Headset size={40}/> Contact Our Expert via WhatsApp
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left w-full mt-10">
                  <div>
                    <p className="text-[11px] font-black text-secondary uppercase mb-4 tracking-widest italic leading-none">Booking Support</p>
                    <p className="text-primary font-black text-4xl md:text-5xl italic leading-none tracking-tighter">{CONTACT.display}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-secondary uppercase mb-4 tracking-widest italic text-right">Physical Center Address</p>
                    <p className="text-primary font-black text-[13px] md:text-[15px] uppercase leading-tight tracking-tighter italic text-right max-w-sm ml-auto">{CONTACT.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. INVESTIGATION DETAILS MODAL */}
      {activeTest && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-md">
          <div className="bg-white rounded-[4rem] p-10 md:p-16 max-w-2xl w-full shadow-[0_0_120px_rgba(0,0,0,0.35)] relative animate-in zoom-in duration-300 text-left">
            <button onClick={() => setActiveTest(null)} className="absolute right-12 top-12 text-slate-300 hover:text-secondary cursor-pointer transition-colors"><X size={44}/></button>
            <div className="bg-blue-50 w-24 h-24 rounded-[2.5rem] flex items-center justify-center mb-12 shadow-inner"><Microscope className="text-primary" size={48}/></div>
            <h3 className="text-3xl md:text-4xl font-black text-primary uppercase mb-4 italic leading-tight tracking-tighter leading-none">{activeTest.name}</h3>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-12 font-medium italic">{activeTest.details}</p>
            <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 mb-12 shadow-sm">
              <h6 className="text-[12px] font-black text-primary uppercase mb-4 tracking-widest flex items-center gap-3 italic leading-none"><Clock size={20}/> Essential Preparation</h6>
              <p className="text-slate-500 text-[14px] md:text-[16px] font-bold leading-relaxed italic">{activeTest.preparation}</p>
            </div>
            <div className="grid grid-cols-2 gap-8 mb-14">
              <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 text-center">
                <p className="text-[11px] font-black text-slate-400 uppercase mb-2 italic">Standard Rate</p>
                <p className="text-2xl font-black text-slate-300 line-through tracking-tighter italic leading-none">₹{activeTest.mrp}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-[2rem] border border-primary/10 text-center">
                <p className="text-[11px] font-black text-primary uppercase mb-2 italic">Offer Price</p>
                <p className="text-4xl font-black text-primary italic leading-none tracking-tighter">₹{activeTest.price}</p>
              </div>
            </div>
            <button 
              onClick={() => { handleBooking(activeTest.name); setActiveTest(null); }} 
              className="w-full bg-accent text-white py-8 md:py-10 rounded-[3.5rem] font-black uppercase tracking-[0.5em] shadow-xl flex items-center justify-center gap-4 text-[12px] md:text-[14px] cursor-pointer hover:bg-green-700 transition-all transform hover:scale-[1.02]"
            >
              Book Now via WhatsApp <ArrowRight size={28}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;