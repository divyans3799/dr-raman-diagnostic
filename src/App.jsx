import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, Phone, MessageCircle, MapPin, FlaskConical, 
  ShieldCheck, Clock, Menu, ChevronRight, Activity,
  FileText, Home as HomeIcon, Zap, X, Star, ClipboardList,
  Info, ArrowRight, Download, HeartPulse, Microscope, 
  Stethoscope, Award, PlusCircle, Headset
} from 'lucide-react';

const App = () => {
  // --- UI STATES ---
  const [search, setSearch] = useState('');
  const [viewRateList, setViewRateList] = useState(false);
  const [activeTest, setActiveTest] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- SCROLL OBSERVER ---
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CONTACT = {
    phone: "+919214037192",
    display: "+91 92140 37192",
    whatsapp: "919214037192",
    address: "Shop No. 129 Arundhati Complex Tedhi Bajar Chauraha - Ayodhya - 224123"
  };

  // --- DATA SOURCE ---
  const tests = [
    { 
      id: 1, 
      name: "Thyroid Profile Total (T3, T4, TSH)", 
      price: 399, 
      mrp: 800, 
      category: "Hormonal", 
      details: "Comprehensive evaluation of thyroid gland activity. Essential for detecting metabolic imbalances.",
      preparation: "10-12 hours fasting is highly recommended."
    },
    { 
      id: 2, 
      name: "Vitamin D (25-Hydroxy)", 
      price: 899, 
      mrp: 1800, 
      category: "Vitamin", 
      details: "Measures Vitamin D for bone density, immune function, and overall cell health.",
      preparation: "No specific fasting required."
    },
    { 
      id: 3, 
      name: "Liver Function Test (LFT)", 
      price: 599, 
      mrp: 1000, 
      category: "Routine", 
      details: "Evaluates liver enzymes and bilirubin levels to assess liver health and damage.",
      preparation: "Overnight fasting (8-10 hours) is mandatory."
    },
    { 
      id: 4, 
      name: "Kidney Function Test (KFT)", 
      price: 799, 
      mrp: 1100, 
      category: "Routine", 
      details: "Checks Urea and Creatinine levels to monitor kidney filtration efficiency.",
      preparation: "Fasting preferred; avoid high protein 24h before."
    },
    { 
      id: 5, 
      name: "CBC (Complete Blood Count)", 
      price: 299, 
      mrp: 450, 
      category: "Routine", 
      details: "Fundamental screening for anemia, infection, and various blood cell disorders.",
      preparation: "No preparation required."
    },
    { 
      id: 6, 
      name: "HbA1c (Diabetes Screening)", 
      price: 449, 
      mrp: 600, 
      category: "Diabetic", 
      details: "Measures average blood sugar levels over the past 3 months for diabetes control.",
      preparation: "Can be performed at any time of the day."
    },
    { 
      id: 7, 
      name: "Lipid Profile (Heart Health)", 
      price: 699, 
      mrp: 950, 
      category: "Routine", 
      details: "Assesses cholesterol and triglycerides to evaluate cardiovascular risk.",
      preparation: "Strict 12 hours fasting is essential."
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
      perks: ["Home Collection", "1 Hr Report", "Doctor Consult"]
    },
    { 
      name: "Gold Advanced Guard", 
      id: "Premium", 
      price: 1299, 
      mrp: 3500, 
      off: "63%", 
      consultancy: true,
      details: "Includes 65+ Parameters: Everything in Basic + Thyroid Profile + Lipid Profile + LFT.",
      perks: ["Home Collection", "1 Hr Report", "Doctor Consult"]
    },
    { 
      name: "Platinum Comprehensive", 
      id: "Ultimate", 
      price: 1999, 
      mrp: 5500, 
      off: "64%", 
      consultancy: true,
      details: "Includes 85+ Parameters: Gold Guard + Vitamin D + B12 + Iron Studies + Electrolytes.",
      perks: ["Home Collection", "1 Hr Report", "Free Doctor Consult"]
    }
  ];

  // --- LOGIC HELPERS ---
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
      <div className="bg-primary text-white py-1.5 px-4 text-[9px] md:text-xs font-bold flex justify-between items-center sticky top-0 z-[110]">
        <div className="flex items-center gap-2">
          <MapPin size={10} className="text-secondary animate-pulse"/> 
          <span className="truncate max-w-[150px] md:max-w-none uppercase tracking-tighter italic">Ayodhya 15km Radius Collection</span>
        </div>
        <div className="flex gap-4">
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-1 hover:text-secondary whitespace-nowrap transition-colors">
            <Phone size={10}/> {CONTACT.display}
          </a>
        </div>
      </div>

      {/* 2. NAVIGATION & MOBILE HAMBURGER */}
      <nav className={`transition-all duration-300 border-b sticky top-[27px] md:top-[33px] z-[100] ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-white/95 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => { window.scrollTo(0,0); setIsMenuOpen(false); }}>
            <div className="bg-secondary p-1 rounded-lg group-hover:rotate-12 transition-transform shadow-md">
              <Activity className="text-white w-5 h-5" />
            </div>
            <div className="text-left leading-none">
              <h1 className="text-primary font-black text-lg md:text-2xl uppercase italic tracking-tighter leading-none">Dr Raman</h1>
              <p className="text-secondary font-black text-[7px] md:text-[8px] tracking-[0.2em] uppercase leading-none">Diagnostic</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <button onClick={() => document.getElementById('packages').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer italic"><HeartPulse size={14}/> Packages</button>
            <button onClick={() => document.getElementById('tests').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer italic"><ClipboardList size={14}/> Directory</button>
            <button onClick={() => setViewRateList(true)} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer italic"><FileText size={14}/> View Rate List</button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => handleBooking('', true)} className="hidden sm:flex bg-accent text-white px-5 py-2.5 rounded-full font-black text-[9px] uppercase tracking-wider shadow-lg shadow-green-100 hover:bg-green-700 transition-all items-center gap-2">
              <MessageCircle size={16}/> Chat with Expert
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-primary p-2 focus:outline-none">
              {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300 z-[99]">
            <div className="flex flex-col p-6 gap-6 font-black uppercase text-[11px] tracking-widest text-slate-500">
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('packages').scrollIntoView(); }} className="flex items-center gap-4 text-left"><HeartPulse size={20} className="text-secondary"/> Health Packages</button>
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('tests').scrollIntoView(); }} className="flex items-center gap-4 text-left"><ClipboardList size={20} className="text-secondary"/> Test Directory</button>
              <button onClick={() => { setIsMenuOpen(false); setViewRateList(true); }} className="flex items-center gap-4 text-left"><FileText size={20} className="text-secondary"/> View Rate List</button>
              <div className="h-[1px] bg-slate-100 w-full"></div>
              <button onClick={() => handleBooking('', true)} className="bg-accent text-white py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg italic"><Headset size={20}/> Contact Our Expert</button>
            </div>
          </div>
        )}
      </nav>

      {/* 3. HERO SECTION */}
      <header className="bg-white pt-10 md:pt-16 pb-12 px-6 text-center border-b border-slate-50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-4">
            <Star size={10} className="fill-primary"/> Aman Pandey Initiative
          </div>
          <h2 className="text-primary text-4xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tighter italic">
            Smart Care. <br/>
            <span className="text-secondary italic underline decoration-primary underline-offset-4 decoration-4">1 Hr Delivery.</span>
          </h2>
          
          <div className="relative max-w-sm mx-auto group mt-8">
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
      </header>

      {/* 4. PACKAGES SECTION */}
      <section id="packages" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-10 border-l-4 border-secondary pl-4 text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tighter italic leading-none">Diagnostic Packages</h3>
            <p className="text-slate-400 font-black uppercase tracking-widest text-[8px] md:text-[9px] mt-2 underline decoration-secondary underline-offset-4 italic">Free Doctor Consultancy Included</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <div key={pkg.name} className="bg-primary rounded-[3rem] p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl transition-transform hover:-translate-y-2">
              <div className="absolute top-6 right-6 bg-secondary text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-lg z-10 animate-pulse">
                SAVE {pkg.off}
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/40 text-accent text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                  <PlusCircle size={12}/> Free Doctor Consultancy
                </div>
                <h4 className="text-2xl font-black mb-4 leading-tight italic">{pkg.name}</h4>
                <p className="text-blue-100/60 text-xs mb-8 font-medium italic leading-relaxed">{pkg.details}</p>
                <ul className="space-y-3 mb-10 text-left">
                  {pkg.perks.map(perk => (
                    <li key={perk} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tighter">
                      <Zap size={12} className="text-secondary fill-secondary"/> {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-end justify-between border-t border-white/10 pt-8">
                <div className="text-left">
                  <p className="text-xs text-white/40 line-through font-bold mb-1 italic mrp-text leading-none tracking-tighter">₹{pkg.mrp}</p>
                  <p className="text-5xl font-black tracking-tighter italic leading-none price-text">₹{pkg.price}</p>
                </div>
                <button onClick={() => handleBooking(pkg.name)} className="bg-white text-primary p-5 rounded-[2rem] hover:bg-secondary hover:text-white transition-all shadow-xl shadow-blue-900 cursor-pointer">
                  <ArrowRight size={28} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TEST DIRECTORY (FLUID MOBILE UI) */}
      <main id="tests" className="max-w-7xl mx-auto px-4 md:px-6 py-16 bg-white rounded-[3rem] md:rounded-[4rem] shadow-sm mt-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-l-4 border-secondary pl-6 text-left">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-2 md:px-4">
            {filteredTests.map((test) => (
              <div key={test.id} className="bg-white rounded-[2rem] border border-slate-100 p-6 md:p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group text-left relative shadow-sm overflow-hidden">
                <div>
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest leading-none">{test.category}</span>
                    <Stethoscope size={18} className="text-primary/20 group-hover:text-primary transition-colors"/>
                  </div>
                  <h4 className="font-black text-lg text-slate-800 group-hover:text-primary transition-colors leading-tight mb-4 h-[2.5rem] md:h-[3rem] overflow-hidden tracking-tighter italic">
                    {test.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-accent text-[9px] font-black uppercase italic mb-8">
                    <Zap size={12} className="fill-accent"/> 1 Hr Delivery
                  </div>
                </div>
                
                <div className="pt-6 border-t border-slate-50 flex justify-between items-end gap-2">
                  <div className="text-left overflow-hidden">
                    <p className="text-[10px] text-slate-300 line-through font-black italic mb-1 leading-none tracking-tighter mrp-text">₹{test.mrp}</p>
                    <p className="text-3xl font-black text-primary tracking-tighter leading-none italic price-text">₹{test.price}</p>
                  </div>
                  <div className="flex flex-col gap-3 items-end shrink-0">
                    <button onClick={() => setActiveTest(test)} className="text-primary text-[10px] font-black uppercase hover:text-secondary underline underline-offset-4 cursor-pointer">Details</button>
                    <button onClick={() => handleBooking(test.name)} className="bg-primary text-white p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-secondary transition-all cursor-pointer shadow-lg">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <FlaskConical className="mx-auto text-slate-100 mb-6" size={56} />
            <p className="text-slate-400 font-black uppercase tracking-widest text-xs italic">No matching results</p>
          </div>
        )}
      </main>

      {/* 6. FOOTER */}
      <footer className="bg-white pt-24 pb-12 px-6 text-left border-t border-slate-100 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-slate-100 text-left">
          <div className="space-y-8 text-left">
            <div className="flex items-center gap-2 justify-start">
              <Activity className="text-secondary w-10 h-10" />
              <h1 className="text-primary font-black text-2xl uppercase italic tracking-tighter leading-none">Dr Raman <br/><span className="text-secondary">Diagnostic</span></h1>
            </div>
            <p className="text-slate-400 text-[10px] font-bold leading-relaxed uppercase tracking-tighter italic">
              Managed by Aman Pandey. Premium Diagnostics and health excellence in Ayodhya.
            </p>
            <div className="flex gap-4 justify-start">
               <a href={`tel:${CONTACT.phone}`} className="bg-primary text-white p-5 rounded-[2.2rem] hover:bg-secondary shadow-xl transition-all"><Phone size={24}/></a>
               <button onClick={() => handleBooking('', true)} className="bg-accent text-white p-5 rounded-[2.2rem] hover:bg-green-700 shadow-xl cursor-pointer transition-all"><MessageCircle size={24}/></button>
            </div>
          </div>
          <div className="space-y-10 text-left">
            <h4 className="font-black text-[11px] uppercase tracking-[0.4em] text-secondary italic">Visit Center</h4>
            <div className="flex gap-5">
              <MapPin className="text-primary shrink-0" size={28} />
              <p className="text-slate-600 font-black text-[11px] uppercase leading-tight tracking-tight italic">
                {CONTACT.address}<br/>
                <span className="text-primary bg-blue-50 px-3 py-1 rounded mt-4 inline-block italic tracking-tighter text-[9px] uppercase">✓ 15km Collection Radius</span>
              </p>
            </div>
          </div>
          <div className="space-y-10 text-left">
            <h4 className="font-black text-[11px] uppercase tracking-[0.4em] text-secondary italic">24/7 Helpline</h4>
            <div className="flex gap-5 items-center justify-start">
              <div className="bg-blue-50 p-4 rounded-full text-primary"><Phone size={32}/></div>
              <div className="text-left">
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

      {/* 7. RATE LIST MODAL (REPLACED DOWNLOAD WITH EXPERT CHAT) */}
      {viewRateList && (
        <div className="fixed inset-0 z-[500] bg-white overflow-y-auto">
          <div className="p-4 md:p-12">
            <div className="max-w-4xl mx-auto border-[10px] border-primary rounded-[3rem] md:rounded-[4.5rem] p-6 md:p-20 relative bg-white shadow-2xl">
              <button onClick={() => setViewRateList(false)} className="absolute top-6 right-6 bg-secondary text-white p-4 rounded-full shadow-2xl z-[510] cursor-pointer hover:scale-110 transition-all"><X size={24}/></button>
              
              <div className="text-center mb-12 md:mb-20">
                <div className="flex justify-center items-center gap-3 md:gap-5 mb-4">
                  <Activity className="text-secondary w-12 h-12 md:w-20 md:h-20" />
                  <div className="text-left leading-none">
                    <h1 className="text-primary font-black text-4xl md:text-6xl uppercase italic tracking-tighter leading-none">DR RAMAN</h1>
                    <p className="text-secondary font-black text-xl md:text-2xl tracking-[0.4em] uppercase leading-none">DIAGNOSTIC</p>
                  </div>
                </div>
                <div className="h-1.5 w-32 md:w-48 bg-secondary mx-auto mb-8 rounded-full"></div>
                <h2 className="text-slate-800 text-2xl md:text-3xl font-black uppercase tracking-tighter italic leading-none">Investigation Rate List — 2026</h2>
                <p className="text-slate-400 font-bold uppercase text-[9px] md:text-[11px] mt-4 tracking-widest italic decoration-secondary underline underline-offset-4 decoration-2 text-center">Managed by Aman Pandey • Ayodhya 15KM Radius</p>
              </div>

              <div className="space-y-12 md:space-y-20">
                <section>
                  <div className="flex items-center gap-4 mb-8 bg-slate-50 p-5 rounded-[2rem]">
                    <PlusCircle className="text-accent" size={24}/>
                    <h3 className="text-primary font-black uppercase text-[12px] tracking-[0.2em] italic">Health Packages</h3>
                  </div>
                  <table className="w-full text-left">
                    <tbody className="text-slate-800 font-bold">
                      {packages.map(p => (
                        <tr key={p.id} className="border-b border-slate-100 text-sm md:text-lg italic uppercase">
                          <td className="py-6 px-3">{p.name} <span className="block text-[8px] text-accent mt-1 tracking-widest">+ FREE DOCTOR CONSULTANCY</span></td>
                          <td className="py-6 px-3 text-right text-primary text-2xl md:text-4xl font-black italic tracking-tighter leading-none">₹{p.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-8 bg-slate-50 p-5 rounded-[2rem]">
                    <ClipboardList className="text-secondary" size={24}/>
                    <h3 className="text-primary font-black uppercase text-[12px] tracking-[0.2em] italic">Individual Pricing</h3>
                  </div>
                  <table className="w-full text-left">
                    <tbody className="text-slate-800 font-bold">
                      {tests.map(t => (
                        <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors text-[11px] md:text-base italic uppercase tracking-tighter">
                          <td className="py-4 px-3">{t.name}</td>
                          <td className="py-4 px-3 text-right text-primary text-xl md:text-2xl font-black italic tracking-tighter leading-none">₹{t.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              </div>

              {/* CONTACT EXPERT SECTION (REPLACED DOWNLOAD) */}
              <div className="mt-16 md:mt-24 pt-10 border-t border-slate-100 flex flex-col items-center gap-10">
                <button 
                  onClick={() => handleBooking('', true)} 
                  className="w-full bg-accent text-white py-6 md:py-8 rounded-[2.5rem] md:rounded-[4rem] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-green-700 transition-all shadow-2xl text-xs md:text-sm cursor-pointer"
                >
                  <Headset size={28}/> Contact Our Expert via WhatsApp
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full">
                  <div>
                    <p className="text-[10px] font-black text-secondary uppercase mb-2 tracking-widest italic leading-none">Booking Support</p>
                    <p className="text-primary font-black text-3xl italic leading-none tracking-tighter">{CONTACT.display}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-secondary uppercase mb-2 tracking-widest italic text-right">Office Address</p>
                    <p className="text-primary font-black text-[11px] uppercase leading-tight tracking-tighter italic text-right">{CONTACT.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. TEST MODAL */}
      {activeTest && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-md">
          <div className="bg-white rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 max-w-xl w-full shadow-2xl relative animate-in zoom-in duration-300 text-left">
            <button onClick={() => setActiveTest(null)} className="absolute right-12 top-12 text-slate-300 hover:text-secondary cursor-pointer transition-colors"><X size={36}/></button>
            <div className="bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center mb-10"><Microscope className="text-primary" size={32}/></div>
            <h3 className="text-2xl md:text-3xl font-black text-primary uppercase mb-4 italic leading-tight tracking-tighter leading-none">{activeTest.name}</h3>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 font-medium italic">{activeTest.details}</p>
            <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 mb-10 shadow-sm">
              <h6 className="text-[11px] font-black text-primary uppercase mb-4 tracking-widest flex items-center gap-2 italic leading-none"><Clock size={16}/> Preparation Guide</h6>
              <p className="text-slate-500 text-[13px] font-bold leading-relaxed italic">{activeTest.preparation}</p>
            </div>
            <button onClick={() => { handleBooking(activeTest.name); setActiveTest(null); }} className="w-full bg-accent text-white py-6 md:py-8 rounded-[3rem] font-black uppercase tracking-[0.5em] shadow-xl flex items-center justify-center gap-4 text-[11px] cursor-pointer hover:bg-green-700 transition-all">
              Book Appointment <ArrowRight size={24}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;