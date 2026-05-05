import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, Phone, MessageCircle, MapPin, FlaskConical, 
  ShieldCheck, Clock, Menu, ChevronRight, Activity,
  FileText, Home as HomeIcon, Zap, X, Star, ClipboardList,
  Info, ArrowRight, Download, HeartPulse, Microscope, 
  Stethoscope, Award, PlusCircle, Check
} from 'lucide-react';

const App = () => {
  // --- STATE MANAGEMENT ---
  const [search, setSearch] = useState('');
  const [viewRateList, setViewRateList] = useState(false);
  const [activeTest, setActiveTest] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- UI LOGIC ---
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CONTACT = {
    phone: "+919214037192",
    display: "+91 92140 37192",
    whatsapp: "919214037192",
    address: "Shop No. 129 Arundhati Complex Tedhi Bajar Chauraha - Ayodhya - 224123"
  };

  // --- DATA DIRECTORY ---
  const tests = [
    { 
      id: 1, 
      name: "Thyroid Profile Total (T3, T4, TSH)", 
      price: 399, 
      mrp: 800, 
      category: "Hormonal", 
      details: "Comprehensive analysis of thyroid activity to detect metabolic or energy imbalances.",
      preparation: "Fasting for 10-12 hours is recommended."
    },
    { 
      id: 2, 
      name: "Vitamin D (25-Hydroxy)", 
      price: 899, 
      mrp: 1800, 
      category: "Vitamin", 
      details: "Measures the essential Vitamin D levels for bone density and immune regulation.",
      preparation: "No specific fasting required."
    },
    { 
      id: 3, 
      name: "Liver Function Test (LFT)", 
      price: 599, 
      mrp: 1000, 
      category: "Routine", 
      details: "Evaluates liver enzymes, proteins, and bilirubin for overall liver health.",
      preparation: "Strict overnight fasting (8-10 hours) required."
    },
    { 
      id: 4, 
      name: "Kidney Function Test (KFT)", 
      price: 799, 
      mrp: 1100, 
      category: "Routine", 
      details: "Checks filtration markers like Urea and Creatinine for kidney performance.",
      preparation: "Fasting preferred; avoid high protein 24h before."
    },
    { 
      id: 5, 
      name: "CBC (Complete Blood Count)", 
      price: 299, 
      mrp: 450, 
      category: "Routine", 
      details: "Fundamental blood screen for infections, anemia, and general health.",
      preparation: "No preparation required."
    },
    { 
      id: 6, 
      name: "HbA1c (Diabetes Screening)", 
      price: 449, 
      mrp: 600, 
      category: "Diabetic", 
      details: "Average blood sugar levels for the last 3 months. Gold standard for diabetic monitoring.",
      preparation: "Can be done at any time."
    },
    { 
      id: 7, 
      name: "Lipid Profile (Cardiac Risk)", 
      price: 699, 
      mrp: 950, 
      category: "Routine", 
      details: "Measures Good/Bad cholesterol and triglycerides for heart health assessment.",
      preparation: "Strict 12 hours fasting essential."
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
      name: "Basic Health Shield", 
      id: "Essential", 
      price: 999, 
      mrp: 2500, 
      off: "60%", 
      consultancy: true,
      details: "Includes 40+ Parameters: CBC, Blood Sugar Fasting, Kidney Basics, and Urine Routine.",
      perks: ["Home Collection", "1 Hr Report", "Free Doctor Consult"]
    },
    { 
      name: "Gold Advanced Guard", 
      id: "Premium", 
      price: 1299, 
      mrp: 3500, 
      off: "63%", 
      consultancy: true,
      details: "Includes 65+ Parameters: Everything in Basic + Thyroid Profile + Heart Health + LFT.",
      perks: ["Home Collection", "1 Hr Report", "Free Doctor Consult"]
    },
    { 
      name: "Platinum Comprehensive", 
      id: "Ultimate", 
      price: 1999, 
      mrp: 5500, 
      off: "64%", 
      consultancy: true,
      details: "Includes 85+ Parameters: Gold Shield + Vitamin D + B12 + Iron Studies + Electrolytes.",
      perks: ["Home Collection", "1 Hr Report", "Free Doctor Consult"]
    }
  ];

  // --- FUNCTIONS ---
  const filteredTests = useMemo(() => {
    return tests.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const handleBooking = (name) => {
    const msg = encodeURIComponent(`Hello Dr Raman Diagnostic, I want to book the ${name}. Please share available slots for Ayodhya.`);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, '_blank');
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* 1. Header Identity Bar */}
      <div className="bg-primary text-white py-1.5 px-4 text-[9px] md:text-xs font-bold flex justify-between items-center sticky top-0 z-[110]">
        <div className="flex items-center gap-2">
          <MapPin size={10} className="text-secondary animate-pulse"/> 
          <span className="truncate max-w-[140px] md:max-w-none uppercase tracking-tighter">Ayodhya 15km Radius Collection</span>
        </div>
        <div className="flex gap-4">
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-1 hover:text-secondary whitespace-nowrap transition-colors">
            <Phone size={10}/> {CONTACT.display}
          </a>
        </div>
      </div>

      {/* 2. Navigation with Mobile Hamburger Menu */}
      <nav className={`transition-all duration-300 border-b sticky top-[27px] md:top-[33px] z-[100] ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-white/95 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => { window.scrollTo(0,0); setIsMenuOpen(false); }}>
            <div className="bg-secondary p-1 rounded-lg group-hover:rotate-12 transition-transform shadow-md">
              <Activity className="text-white w-5 h-5" />
            </div>
            <div className="text-left leading-none">
              <h1 className="text-primary font-black text-lg md:text-2xl uppercase italic tracking-tighter leading-none">Dr Raman</h1>
              <p className="text-secondary font-black text-[7px] md:text-[8px] tracking-[0.2em] uppercase">Diagnostic</p>
            </div>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            <button onClick={() => document.getElementById('packages').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer italic"><HeartPulse size={14}/> Packages</button>
            <button onClick={() => document.getElementById('tests').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer italic"><ClipboardList size={14}/> Test Directory</button>
            <button onClick={() => setViewRateList(true)} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer italic"><FileText size={14}/> Rate List</button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => handleBooking('Direct Inquiry')} className="hidden sm:flex bg-accent text-white px-5 py-2.5 rounded-full font-black text-[9px] uppercase tracking-wider shadow-lg shadow-green-100 hover:bg-green-700 transition-all items-center gap-2">
              <MessageCircle size={16}/> WhatsApp
            </button>
            {/* Hamburger Icon */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-primary p-2 focus:outline-none">
              {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Content */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300 z-[99]">
            <div className="flex flex-col p-6 gap-6 font-black uppercase text-[11px] tracking-widest text-slate-500">
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('packages').scrollIntoView(); }} className="flex items-center gap-4 hover:text-primary text-left"><HeartPulse size={20} className="text-secondary"/> Health Packages</button>
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('tests').scrollIntoView(); }} className="flex items-center gap-4 hover:text-primary text-left"><ClipboardList size={20} className="text-secondary"/> Investigation Directory</button>
              <button onClick={() => { setIsMenuOpen(false); setViewRateList(true); }} className="flex items-center gap-4 hover:text-primary text-left"><FileText size={20} className="text-secondary"/> Download Rate List</button>
              <div className="h-[1px] bg-slate-100 w-full"></div>
              <button onClick={() => handleBooking('General')} className="bg-accent text-white py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-green-100 italic"><MessageCircle size={20}/> Book via WhatsApp</button>
            </div>
          </div>
        )}
      </nav>

      {/* 3. Hero Section (Condensed Gaps) */}
      <header className="bg-white pt-8 md:pt-14 pb-12 px-6 text-center border-b border-slate-50 relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-4">
            <Star size={10} className="fill-primary"/> Aman Pandey Initiative
          </div>
          <h2 className="text-primary text-4xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tighter italic">
            Smart Care. <br/>
            <span className="text-secondary italic underline decoration-primary underline-offset-4 decoration-4">1 Hr Delivery.</span>
          </h2>
          
          <div className="relative max-w-md mx-auto group mt-8">
            <input 
              type="text" 
              value={search}
              placeholder="Search blood tests..."
              className="w-full p-4 pl-12 rounded-xl border-2 border-slate-100 focus:border-primary outline-none shadow-xl transition-all text-sm font-medium bg-white"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-4 top-4 text-slate-300 group-focus-within:text-primary transition-colors" size={22} />
          </div>
        </div>
        <div className="absolute top-10 right-0 text-primary/5 -rotate-12 hidden lg:block" style={{zIndex: 0}}><FlaskConical size={300}/></div>
      </header>

      {/* 4. Branded Packages - DR RAMAN DIAGNOSTIC UI */}
      <section id="packages" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-10 border-l-4 border-secondary pl-4">
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tighter italic leading-none">Diagnostic Packages</h3>
            <p className="text-slate-400 font-black uppercase tracking-widest text-[8px] md:text-[9px] mt-2 underline decoration-secondary underline-offset-4 italic">Premium Health Screening (Inc. Free Doctor Consult)</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {packages.map(pkg => (
            <div key={pkg.name} className="bg-primary rounded-[3rem] p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl transition-transform hover:-translate-y-2">
              <div className="absolute top-6 right-6 bg-secondary text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-lg z-10 animate-pulse">
                OFFER {pkg.off}
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/40 text-accent text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                  <PlusCircle size={12}/> Free Doctor Consultancy
                </div>
                <p className="text-[9px] font-black text-blue-200 uppercase mb-2 tracking-[0.2em]">{pkg.id} SHIELD</p>
                <h4 className="text-2xl font-black mb-4 leading-tight italic">{pkg.name}</h4>
                <p className="text-blue-100/60 text-xs mb-8 font-medium italic leading-relaxed">{pkg.details}</p>
                <ul className="space-y-3 mb-10">
                  {pkg.perks.map(perk => (
                    <li key={perk} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tighter">
                      <Zap size={12} className="text-secondary fill-secondary"/> {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-end justify-between border-t border-white/10 pt-8">
                <div>
                  <p className="text-xs text-white/40 line-through font-bold mb-1 italic">₹{pkg.mrp}</p>
                  <p className="text-5xl font-black tracking-tighter italic">₹{pkg.price}</p>
                </div>
                <button onClick={() => handleBooking(pkg.name)} className="bg-white text-primary p-5 rounded-[2rem] hover:bg-secondary hover:text-white transition-all shadow-xl shadow-blue-900 cursor-pointer">
                  <ArrowRight size={28} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Pathkind-Style Feature Grid */}
      <section className="bg-white py-16 px-6 border-y border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          <div className="space-y-4">
            <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto md:mx-0 shadow-sm"><ShieldCheck className="text-primary" size={24}/></div>
            <h5 className="font-black text-primary uppercase text-xs tracking-tighter italic">Expert Accuracy</h5>
            <p className="text-slate-500 text-[10px] leading-relaxed font-bold uppercase tracking-tighter italic">Reports verified by clinical professionals.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto md:mx-0 shadow-sm"><Clock className="text-secondary" size={24}/></div>
            <h5 className="font-black text-primary uppercase text-xs tracking-tighter italic">1 Hr Delivery</h5>
            <p className="text-slate-500 text-[10px] leading-relaxed font-bold uppercase tracking-tighter italic">Digital results via WhatsApp in 1 hour.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-green-50 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto md:mx-0 shadow-sm"><HomeIcon className="text-accent" size={24}/></div>
            <h5 className="font-black text-primary uppercase text-xs tracking-tighter italic">Home Collection</h5>
            <p className="text-slate-500 text-[10px] leading-relaxed font-bold uppercase tracking-tighter italic">Hassle-free sampling at your doorstep.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-50 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto md:mx-0 shadow-sm"><Award className="text-slate-400" size={24}/></div>
            <h5 className="font-black text-primary uppercase text-xs tracking-tighter italic">Premium Care</h5>
            <p className="text-slate-500 text-[10px] leading-relaxed font-bold uppercase tracking-tighter italic">Managed by the excellence of Aman Pandey.</p>
          </div>
        </div>
      </section>

      {/* 6. Test Directory */}
      <main id="tests" className="max-w-7xl mx-auto px-6 py-16 bg-white rounded-[3rem] md:rounded-[4rem] shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-l-4 border-secondary pl-6">
          <div className="text-left">
            <h3 className="text-3xl font-black text-primary uppercase tracking-tighter italic leading-none">Test Directory</h3>
            <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[8px] mt-2 italic">Official Diagnostic Pricing</p>
          </div>
          {search && (
            <div className="mt-4 text-[10px] font-black bg-blue-50 text-primary px-4 py-1.5 rounded-full uppercase italic">
              Showing {filteredTests.length} Investigations
            </div>
          )}
        </div>

        {filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {filteredTests.map((test) => (
              <div key={test.id} className="bg-white rounded-[2rem] border border-slate-100 p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group text-left relative shadow-sm">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">{test.category}</span>
                    <Stethoscope size={18} className="text-primary/20 group-hover:text-primary transition-colors"/>
                  </div>
                  <h4 className="font-black text-lg text-slate-800 group-hover:text-primary transition-colors leading-tight mb-4 h-[2.5rem] overflow-hidden tracking-tighter italic">
                    {test.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-accent text-[9px] font-black uppercase italic mb-8">
                    <Zap size={12} className="fill-accent"/> 1 Hr Delivery
                  </div>
                </div>
                
                <div className="pt-6 border-t border-slate-50 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-slate-300 line-through font-black italic mb-1 leading-none tracking-tighter">₹{test.mrp}</p>
                    <p className="text-3xl font-black text-primary tracking-tighter leading-none italic">₹{test.price}</p>
                  </div>
                  <div className="flex flex-col gap-3 items-end">
                    <button onClick={() => setActiveTest(test)} className="text-primary text-[10px] font-black uppercase hover:text-secondary underline underline-offset-4 cursor-pointer">Details</button>
                    <button onClick={() => handleBooking(test.name)} className="bg-primary text-white p-3 rounded-xl hover:bg-secondary transition-all cursor-pointer shadow-lg shadow-blue-50">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <Search className="mx-auto text-slate-100 mb-6" size={56} />
            <p className="text-slate-400 font-black uppercase tracking-widest text-xs italic">No results for "{search}"</p>
            <button onClick={() => setSearch('')} className="text-primary font-black mt-6 underline uppercase italic text-[10px] cursor-pointer">Reset All</button>
          </div>
        )}
      </main>

      {/* 7. Detailed Footer (Updated Address) */}
      <footer className="bg-white pt-24 pb-12 px-6 text-left border-t border-slate-100 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-slate-100">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Activity className="text-secondary w-10 h-10" />
              <h1 className="text-primary font-black text-2xl uppercase italic tracking-tighter leading-none">Dr Raman <br/><span className="text-secondary">Diagnostic</span></h1>
            </div>
            <p className="text-slate-400 text-[10px] font-bold leading-relaxed uppercase tracking-tighter italic">
              Managed by Aman Pandey. Premium Diagnostics for Ayodhya. Trust the experts for clinical excellence.
            </p>
            <div className="flex gap-4">
               <a href={`tel:${CONTACT.phone}`} className="bg-primary text-white p-5 rounded-[2.2rem] hover:bg-secondary shadow-xl transition-all"><Phone size={24}/></a>
               <button onClick={() => window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank')} className="bg-accent text-white p-5 rounded-[2.2rem] hover:bg-green-700 shadow-xl cursor-pointer transition-all"><MessageCircle size={24}/></button>
            </div>
          </div>
          <div className="space-y-10">
            <h4 className="font-black text-[11px] uppercase tracking-[0.4em] text-secondary italic">Physical Center</h4>
            <div className="flex gap-5">
              <MapPin className="text-primary shrink-0" size={28} />
              <p className="text-slate-600 font-black text-[11px] uppercase leading-tight tracking-tight italic">
                {CONTACT.address}<br/>
                <span className="text-primary bg-blue-50 px-3 py-1 rounded mt-4 inline-block italic tracking-tighter text-[9px] uppercase">✓ 15km Collection Radius</span>
              </p>
            </div>
          </div>
          <div className="space-y-10">
            <h4 className="font-black text-[11px] uppercase tracking-[0.4em] text-secondary italic">24/7 Helpline</h4>
            <div className="flex gap-5 items-center">
              <div className="bg-blue-50 p-4 rounded-full text-primary"><Phone size={32}/></div>
              <div>
                <p className="text-primary font-black text-3xl tracking-tighter italic leading-none">{CONTACT.display}</p>
                <p className="text-[9px] font-black text-slate-400 uppercase mt-2 italic tracking-widest">Call for Appointment</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10 text-[10px] font-black text-slate-300 uppercase tracking-widest italic">
          © 2026 Dr Raman Diagnostic | Aman Pandey | Ayodhya, UP | All Rights Reserved
        </p>
      </footer>

      {/* 8. Branded Rate List Overlay (Print-Stable) */}
      {viewRateList && (
        <div className="fixed inset-0 z-[500] bg-white overflow-y-auto">
          <div className="p-4 md:p-12">
            <div id="printable-area" className="max-w-4xl mx-auto border-[12px] border-primary rounded-[5rem] p-10 md:p-20 relative bg-white shadow-2xl">
              <button onClick={() => setViewRateList(false)} className="fixed top-10 right-10 bg-secondary text-white p-6 rounded-full shadow-2xl z-[510] no-print cursor-pointer hover:scale-110 transition-all"><X size={32}/></button>
              
              <div className="text-center mb-20">
                <div className="flex justify-center items-center gap-5 mb-6">
                  <Activity className="text-secondary w-20 h-20" />
                  <div className="text-left leading-none">
                    <h1 className="text-primary font-black text-6xl uppercase italic tracking-tighter">DR RAMAN</h1>
                    <p className="text-secondary font-black text-3xl tracking-[0.4em] uppercase">DIAGNOSTIC</p>
                  </div>
                </div>
                <div className="h-2 w-48 bg-secondary mx-auto mb-10 rounded-full"></div>
                <h2 className="text-slate-800 text-3xl font-black uppercase tracking-tighter italic">Investigation Rate List — 2026</h2>
                <p className="text-slate-400 font-bold uppercase text-[12px] mt-6 tracking-widest italic decoration-secondary underline underline-offset-4 decoration-2">Managed by Aman Pandey • Ayodhya 15KM Radius</p>
              </div>

              <div className="space-y-20">
                <section>
                  <div className="flex items-center gap-4 mb-10 bg-slate-50 p-6 rounded-[2.5rem]">
                    <PlusCircle className="text-accent" size={28}/>
                    <h3 className="text-primary font-black uppercase text-sm tracking-[0.2em] italic leading-none">Premium Health Packages (+ FREE Doctor Consult)</h3>
                  </div>
                  <table className="w-full text-left">
                    <tbody className="text-slate-800 font-black">
                      {packages.map(p => (
                        <tr key={p.id} className="border-b-2 border-slate-100 text-xl md:text-2xl italic">
                          <td className="py-8 px-6 uppercase tracking-tighter leading-tight italic">{p.name} <span className="block text-[10px] text-accent mt-2 tracking-[0.2em] uppercase">+ INCLUDES FREE DOCTOR CONSULTANCY</span></td>
                          <td className="py-8 px-6 text-right text-primary text-5xl font-black italic tracking-tighter leading-none">₹{p.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-10 bg-slate-50 p-6 rounded-[2.5rem]">
                    <ClipboardList className="text-secondary" size={28}/>
                    <h3 className="text-primary font-black uppercase text-sm tracking-[0.2em] italic leading-none">Individual Investigation Pricing</h3>
                  </div>
                  <table className="w-full text-left">
                    <tbody className="text-slate-800 font-bold">
                      {tests.map(t => (
                        <tr key={t.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-base md:text-lg italic uppercase">
                          <td className="py-6 px-6 tracking-tighter leading-none">{t.name}</td>
                          <td className="py-6 px-6 text-right text-primary text-2xl font-black italic tracking-tighter leading-none">₹{t.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              </div>

              <div className="mt-32 pt-16 border-t-4 border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
                <div>
                  <p className="text-[10px] font-black text-secondary uppercase mb-4 tracking-widest italic leading-none">Booking Assistance</p>
                  <p className="text-primary font-black text-4xl italic leading-none tracking-tighter">{CONTACT.display}</p>
                  <p className="text-slate-400 text-[10px] font-black uppercase mt-8 leading-relaxed italic tracking-widest decoration-primary underline underline-offset-4 decoration-2">✓ 15km Professional Home Collection Available</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-secondary uppercase mb-4 tracking-widest italic text-right">Physical Center Address</p>
                  <p className="text-primary font-black text-[14px] uppercase leading-relaxed tracking-tighter italic text-right">{CONTACT.address}</p>
                </div>
              </div>
              
              <button 
                onClick={() => window.print()} 
                className="mt-24 w-full bg-primary text-white py-10 rounded-[4rem] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-6 hover:bg-secondary transition-all no-print text-[14px] shadow-2xl cursor-pointer"
              >
                <Download size={32}/> Print Digital Copy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 9. Detailed Investigation Modal */}
      {activeTest && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-md">
          <div className="bg-white rounded-[4rem] p-10 md:p-16 max-w-xl w-full shadow-2xl relative animate-in zoom-in duration-300 text-left">
            <button onClick={() => setActiveTest(null)} className="absolute right-12 top-12 text-slate-300 hover:text-secondary cursor-pointer transition-colors"><X size={40}/></button>
            <div className="bg-blue-50 w-24 h-24 rounded-[2.5rem] flex items-center justify-center mb-10 shadow-inner"><Microscope className="text-primary" size={48}/></div>
            <h3 className="text-3xl font-black text-primary uppercase mb-4 italic leading-tight tracking-tighter">{activeTest.name}</h3>
            <p className="text-slate-500 text-base leading-relaxed mb-12 font-medium italic">{activeTest.details}</p>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 mb-12 shadow-sm">
              <h6 className="text-[11px] font-black text-primary uppercase mb-4 tracking-widest flex items-center gap-2 italic leading-none"><Clock size={16}/> Preparation Guidelines</h6>
              <p className="text-slate-500 text-[13px] font-bold leading-relaxed italic">{activeTest.preparation}</p>
            </div>
            <div className="grid grid-cols-2 gap-8 mb-14">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-2 italic">Standard Rate</p>
                <p className="text-2xl font-black text-slate-300 line-through tracking-tighter italic leading-none">₹{activeTest.mrp}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-3xl border border-primary/10 text-center">
                <p className="text-[10px] font-black text-primary uppercase mb-2 italic">Your Price</p>
                <p className="text-4xl font-black text-primary italic leading-none tracking-tighter">₹{activeTest.price}</p>
              </div>
            </div>
            <button onClick={() => { handleBooking(activeTest.name); setActiveTest(null); }} className="w-full bg-accent text-white py-8 rounded-[3rem] font-black uppercase tracking-[0.5em] shadow-xl flex items-center justify-center gap-4 text-[11px] cursor-pointer hover:bg-green-700 transition-all">
              Book Now <ArrowRight size={24}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;