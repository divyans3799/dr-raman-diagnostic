import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, Phone, MessageCircle, MapPin, FlaskConical, 
  ShieldCheck, Clock, Menu, ChevronRight, Activity,
  FileText, Home as HomeIcon, Zap, X, Star, ClipboardList,
  Info, ArrowRight, Download, HeartPulse, Microscope, 
  Stethoscope, Award, Users, PlusCircle
} from 'lucide-react';

const App = () => {
  const [search, setSearch] = useState('');
  const [viewRateList, setViewRateList] = useState(false);
  const [activeTest, setActiveTest] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CONTACT = {
    phone: "+919214037192",
    display: "+91 92140 37192",
    whatsapp: "919214037192",
    address: "Shop No. 129 Arundhati Complex Tedhibazar Chauraha-Ayodhya 224123"
  };

  const tests = [
    { 
      id: 1, 
      name: "Thyroid Profile Total (T3, T4, TSH)", 
      price: 399, 
      mrp: 800, 
      category: "Hormonal", 
      details: "Comprehensive evaluation of thyroid gland activity. Essential for detecting metabolic imbalances and energy issues.",
      preparation: "Fasting for 10-12 hours is highly recommended."
    },
    { 
      id: 2, 
      name: "Vitamin D (25-Hydroxy)", 
      price: 899, 
      mrp: 1800, 
      category: "Vitamin", 
      details: "Measures Vitamin D concentration. Crucial for bone density and immune function.",
      preparation: "No specific fasting required."
    },
    { 
      id: 3, 
      name: "Liver Function Test (LFT)", 
      price: 599, 
      mrp: 1000, 
      category: "Routine", 
      details: "Evaluates liver enzymes and bilirubin levels to assess liver health.",
      preparation: "Overnight fasting (8-10 hours) is mandatory."
    },
    { 
      id: 4, 
      name: "Kidney Function Test (KFT)", 
      price: 799, 
      mrp: 1100, 
      category: "Routine", 
      details: "Checks Urea, Creatinine, and Uric Acid levels for kidney filtration health.",
      preparation: "Fasting preferred."
    },
    { 
      id: 5, 
      name: "CBC (Complete Blood Count)", 
      price: 299, 
      mrp: 450, 
      category: "Routine", 
      details: "Fundamental screening test for anemia and infection.",
      preparation: "No fasting required."
    },
    { 
      id: 6, 
      name: "HbA1c (Diabetes Screening)", 
      price: 449, 
      mrp: 600, 
      category: "Diabetic", 
      details: "Tracks average blood sugar levels over the last 90 days.",
      preparation: "No fasting needed."
    }
  ];

  const packages = [
    { 
      name: "Essential Health Cover", 
      id: "Basic", 
      price: 999, 
      mrp: 2500, 
      off: "60%", 
      consultancy: true,
      details: "Includes 40+ Parameters: CBC, Blood Sugar Fasting, Kidney Basics, and Urine Routine.",
      perks: ["Home Collection", "1 Hr Report", "Doctor Consult"]
    },
    { 
      name: "Gold Health Shield", 
      id: "Advanced", 
      price: 1299, 
      mrp: 3500, 
      off: "63%", 
      consultancy: true,
      details: "Includes 65+ Parameters: Basic Cover + Thyroid Profile + Lipid Profile + LFT.",
      perks: ["Home Collection", "1 Hr Report", "Doctor Consult"]
    },
    { 
      name: "Platinum Full Body", 
      id: "Comprehensive", 
      price: 1999, 
      mrp: 5500, 
      off: "64%", 
      consultancy: true,
      details: "Includes 85+ Parameters: Gold Shield + Vitamin D + Vitamin B12 + Iron Studies.",
      perks: ["Home Collection", "1 Hr Report", "Doctor Consult"]
    }
  ];

  const filteredTests = useMemo(() => {
    return tests.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const handleBooking = (name) => {
    const msg = encodeURIComponent(`Hello Dr Raman Diagnostic, I want to book: ${name}. Please share available slots for Ayodhya home collection.`);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* 1. Header Identity Bar */}
      <div className="bg-primary text-white py-1.5 px-6 text-[10px] font-bold flex justify-between items-center sticky top-0 z-[110]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><MapPin size={12} className="text-secondary"/> Ayodhya 15km Radius</span>
          <div className="h-3 w-[1px] bg-white/20 hidden sm:block"></div>
          <span className="hidden sm:inline uppercase tracking-widest text-blue-100 italic font-medium">Aman Pandey Initiative</span>
        </div>
        <div className="flex gap-4">
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-1 hover:text-secondary transition-colors uppercase tracking-tighter"><Phone size={10}/> {CONTACT.display}</a>
        </div>
      </div>

      {/* 2. Main Navigation */}
      <nav className={`transition-all duration-300 border-b sticky top-[28px] z-[100] ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-secondary p-1.5 rounded-xl group-hover:rotate-12 transition-transform">
              <Activity className="text-white w-5 h-5" />
            </div>
            <div className="text-left leading-none">
              <h1 className="text-primary font-black text-xl uppercase italic tracking-tighter">Dr Raman</h1>
              <p className="text-secondary font-black text-[8px] tracking-[0.2em] uppercase">Diagnostic</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => document.getElementById('packages').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer"><HeartPulse size={14}/> Packages</button>
            <button onClick={() => document.getElementById('tests').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer"><Microscope size={14}/> Directory</button>
            <button onClick={() => setViewRateList(true)} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer"><FileText size={14}/> Rate List</button>
            <button onClick={() => handleBooking('Home Collection')} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer"><HomeIcon size={14}/> Home Collection</button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => handleBooking('Inquiry')} className="bg-accent text-white px-5 py-2.5 rounded-full font-black text-[10px] uppercase tracking-wider shadow-lg shadow-green-100 hover:bg-green-700 transition-all flex items-center gap-2 cursor-pointer">
              <MessageCircle size={16}/> WhatsApp Booking
            </button>
            <button className="lg:hidden text-primary"><Menu /></button>
          </div>
        </div>
      </nav>

      {/* 3. Hero Section */}
      <header className="bg-white pt-12 pb-14 px-6 text-center border-b border-slate-50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Star size={12} className="fill-primary"/> Trust the Experts
          </div>
          <h2 className="text-primary text-5xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tighter">
            Smart Diagnostics. <br/>
            <span className="text-secondary italic underline decoration-primary underline-offset-8 decoration-4">1 Hr Delivery.</span>
          </h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10">Premium Health Care — Ayodhya 15km Radius</p>
          
          <div className="relative max-w-md mx-auto group">
            <input 
              type="text" 
              value={search}
              placeholder="Search by investigation name..."
              className="w-full p-4 pl-12 rounded-2xl border-2 border-slate-100 focus:border-primary focus:ring-4 focus:ring-blue-50 outline-none shadow-xl transition-all text-sm font-medium"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-4 top-4 text-slate-300 group-focus-within:text-primary transition-colors" size={22} />
          </div>
        </div>
        <FlaskConical className="absolute top-10 right-0 text-primary/5 -rotate-12 hidden md:block" size={300}/>
      </header>

      {/* 4. Dr Raman Diagnostic Packages - WITH DOCTOR CONSULTANCY */}
      <section id="packages" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-12 border-l-4 border-secondary pl-4">
          <div>
            <h3 className="text-3xl font-black text-primary uppercase leading-none italic tracking-tighter">Dr Raman Diagnostic</h3>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-2 underline decoration-secondary">Premium Health Packages with Free Doctor Consultation</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <div key={pkg.name} className="bg-primary rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl flex flex-col justify-between package-card">
              {/* Discount Badge */}
              <div className="absolute top-6 right-6 bg-secondary text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-lg z-10">
                SAVE {pkg.off}
              </div>

              {/* Consultancy Badge */}
              <div className="bg-accent/20 border border-accent/30 text-accent text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-flex items-center gap-1.5 w-fit">
                <PlusCircle size={12}/> Free Doctor Consultancy
              </div>

              <div>
                <p className="text-[9px] font-black text-blue-200 uppercase mb-2 tracking-[0.2em]">{pkg.id} SHIELD</p>
                <h4 className="text-2xl font-black mb-4 leading-tight">{pkg.name}</h4>
                <p className="text-blue-100/60 text-xs mb-8 font-medium leading-relaxed italic">{pkg.details}</p>
                
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
                  <p className="text-xs text-white/40 line-through font-bold tracking-widest mb-1">₹{pkg.mrp}</p>
                  <p className="text-5xl font-black tracking-tighter italic">₹{pkg.price}</p>
                </div>
                <button 
                  onClick={() => handleBooking(pkg.name)}
                  className="bg-white text-primary p-5 rounded-[2rem] hover:bg-secondary hover:text-white transition-all shadow-xl shadow-blue-900 group-hover:-translate-y-2 cursor-pointer"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Service Features */}
      <section className="bg-slate-100 py-20 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="text-left">
            <div className="bg-white w-14 h-14 rounded-3xl flex items-center justify-center mb-6 shadow-sm"><ShieldCheck className="text-primary" size={28}/></div>
            <h5 className="font-black text-primary uppercase text-sm mb-4">Precision Labs</h5>
            <p className="text-slate-500 text-[11px] leading-relaxed font-bold uppercase tracking-tighter">Verified reports processed under clinical supervision.</p>
          </div>
          <div className="text-left">
            <div className="bg-white w-14 h-14 rounded-3xl flex items-center justify-center mb-6 shadow-sm"><Clock className="text-secondary" size={28}/></div>
            <h5 className="font-black text-primary uppercase text-sm mb-4">1 Hr Turnaround</h5>
            <p className="text-slate-500 text-[11px] leading-relaxed font-bold uppercase tracking-tighter">Fastest digital report delivery system in Ayodhya.</p>
          </div>
          <div className="text-left">
            <div className="bg-white w-14 h-14 rounded-3xl flex items-center justify-center mb-6 shadow-sm"><HomeIcon className="text-accent" size={28}/></div>
            <h5 className="font-black text-primary uppercase text-sm mb-4">Doorstep Care</h5>
            <p className="text-slate-500 text-[11px] leading-relaxed font-bold uppercase tracking-tighter">Painless home sample collection by expert phlebotomists.</p>
          </div>
          <div className="text-left">
            <div className="bg-white w-14 h-14 rounded-3xl flex items-center justify-center mb-6 shadow-sm"><Award className="text-slate-600" size={28}/></div>
            <h5 className="font-black text-primary uppercase text-sm mb-4">Aman Pandey Initiative</h5>
            <p className="text-slate-500 text-[11px] leading-relaxed font-bold uppercase tracking-tighter">Committed to providing premium diagnostics at the best rates.</p>
          </div>
        </div>
      </section>

      {/* 6. Test Directory Grid */}
      <main id="tests" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-l-4 border-secondary pl-6">
          <div className="text-left">
            <h3 className="text-3xl font-black text-primary uppercase tracking-tighter italic leading-none">Investigation Directory</h3>
            <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[8px] mt-2 italic">Standard Rates — No Hidden Costs</p>
          </div>
          {search && (
            <div className="mt-4 text-[10px] font-black bg-blue-50 text-primary px-4 py-1.5 rounded-full uppercase italic">
              Showing {filteredTests.length} Investigations
            </div>
          )}
        </div>

        {filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredTests.map((test) => (
              <div key={test.id} className="bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group text-left shadow-sm">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">{test.category}</span>
                    <div className="bg-slate-50 p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                      <Stethoscope size={18}/>
                    </div>
                  </div>
                  <h4 className="font-black text-xl text-slate-800 group-hover:text-primary transition-colors leading-tight mb-4 h-[3rem] overflow-hidden tracking-tighter">
                    {test.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-accent text-[9px] font-black uppercase italic mb-8">
                    <Zap size={12}/> 1 Hr Delivery
                  </div>
                </div>
                
                <div className="pt-6 border-t border-slate-50 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-slate-300 line-through font-black italic tracking-tighter leading-none mb-1">₹{test.mrp}</p>
                    <p className="text-3xl font-black text-primary tracking-tighter leading-none italic">₹{test.price}</p>
                  </div>
                  <div className="flex flex-col gap-3 items-end">
                    <button 
                      onClick={() => setActiveTest(test)}
                      className="text-primary text-[10px] font-black uppercase hover:text-secondary transition-colors underline underline-offset-4 cursor-pointer"
                    >
                      Details
                    </button>
                    <button 
                      onClick={() => handleBooking(test.name)}
                      className="bg-primary text-white p-4 rounded-2xl shadow-lg shadow-blue-100 hover:bg-secondary transition-all cursor-pointer"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
            <FlaskConical className="mx-auto text-slate-100 mb-6" size={64} />
            <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Investigation not found in directory</p>
            <button onClick={() => setSearch('')} className="text-primary font-black mt-6 underline uppercase italic text-[10px] cursor-pointer">Reset Search</button>
          </div>
        )}
      </main>

      {/* 7. FAQ Section */}
      <section className="bg-primary text-white py-24 px-6 overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10 text-left">
          <div className="flex items-center gap-4 mb-14">
            <div className="h-1.5 w-16 bg-secondary"></div>
            <h3 className="text-4xl font-black uppercase italic tracking-tighter">Health Guidelines</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h5 className="font-black text-secondary uppercase text-[12px] tracking-widest border-b border-white/10 pb-3 italic">Free Doctor Consultation</h5>
              <p className="text-blue-100 text-sm leading-relaxed font-medium italic">Available exclusively with our Top 3 Packages. Once your report is generated, our specialist will provide a free digital consultation session.</p>
            </div>
            <div className="space-y-4">
              <h5 className="font-black text-secondary uppercase text-[12px] tracking-widest border-b border-white/10 pb-3 italic">Preparation Tips</h5>
              <p className="text-blue-100 text-sm leading-relaxed font-medium italic">Fasting investigations (LFT, Lipid, Sugar) require 10-12 hours of overnight fast. You should only consume plain water during this time.</p>
            </div>
          </div>
        </div>
        <Award className="absolute -bottom-20 -right-20 text-white/5 rotate-12" size={400}/>
      </section>

      {/* 8. Detailed Footer */}
      <footer className="bg-white pt-24 pb-12 px-6 text-left border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20 pb-20 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Activity className="text-secondary w-10 h-10" />
              <h1 className="text-primary font-black text-2xl uppercase italic tracking-tighter leading-none">Dr Raman <br/><span className="text-secondary">Diagnostic</span></h1>
            </div>
            <p className="text-slate-400 text-[10px] font-bold leading-relaxed mb-12 uppercase tracking-tighter italic">
              Managed by Aman Pandey. Bringing diagnostic precision to the holy city of Ayodhya. Trusted health reports delivered with accuracy and care.
            </p>
            <div className="flex gap-4">
               <a href={`tel:${CONTACT.phone}`} className="bg-primary text-white p-5 rounded-3xl hover:bg-secondary transition-all shadow-xl shadow-blue-100"><Phone size={28}/></a>
               <button onClick={() => window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank')} className="bg-accent text-white p-5 rounded-3xl hover:bg-green-700 transition-all shadow-xl shadow-green-100 cursor-pointer"><MessageCircle size={28}/></button>
            </div>
          </div>
          
          <div className="space-y-12">
            <h4 className="font-black text-[11px] uppercase tracking-[0.4em] text-secondary italic">Physical Center</h4>
            <div className="space-y-10">
              <div className="flex gap-5">
                <MapPin className="text-primary shrink-0" size={28} />
                <p className="text-slate-600 font-black text-[11px] uppercase leading-tight tracking-tight">
                  {CONTACT.address}<br/>
                  <span className="text-primary bg-blue-50 px-3 py-1 rounded-lg mt-4 inline-block italic tracking-tighter text-[9px] uppercase">✓ 15km Collection Radius</span>
                </p>
              </div>
              <div className="flex gap-5">
                <Clock className="text-primary shrink-0" size={28} />
                <p className="text-slate-600 font-black text-[11px] uppercase leading-tight tracking-tight">
                  Operating Hours<br/>
                  <span className="text-secondary italic">7:00 AM - 9:00 PM (Every Day)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="font-black text-[11px] uppercase tracking-[0.4em] text-secondary italic underline underline-offset-8">24/7 Support</h4>
            <div className="flex gap-5 items-center">
              <div className="bg-blue-50 p-4 rounded-full text-primary"><Phone size={32}/></div>
              <div>
                <p className="text-primary font-black text-3xl tracking-tighter italic leading-none">{CONTACT.display}</p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2 italic">Official Contact Point</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 text-center opacity-30">
          <p className="text-[10px] uppercase font-black tracking-widest italic leading-relaxed">
            © 2026 Dr Raman Diagnostic | Aman Pandey | Ayodhya, UP | All Rights Reserved
          </p>
        </div>
      </footer>

      {/* 9. Branded Rate List Overlay */}
      {viewRateList && (
        <div className="fixed inset-0 z-[500] bg-white overflow-y-auto">
          <div className="p-4 md:p-12">
            <div className="max-w-4xl mx-auto border-[12px] border-primary rounded-[4.5rem] p-8 md:p-20 relative bg-white shadow-[0_0_120px_rgba(0,74,153,0.25)]">
              <button onClick={() => setViewRateList(false)} className="fixed top-10 right-10 bg-secondary text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-all z-[510] no-print cursor-pointer">
                <X size={32}/>
              </button>
              
              <div className="text-center mb-20">
                <div className="flex justify-center items-center gap-5 mb-6">
                  <Activity className="text-secondary w-16 h-16" />
                  <div className="text-left">
                    <h1 className="text-primary font-black text-5xl uppercase italic leading-none tracking-tighter">DR RAMAN</h1>
                    <p className="text-secondary font-black text-2xl tracking-[0.4em] uppercase">DIAGNOSTIC</p>
                  </div>
                </div>
                <div className="h-2 w-48 bg-secondary mx-auto mb-10 rounded-full"></div>
                <h2 className="text-slate-800 text-3xl font-black uppercase tracking-tighter italic leading-none">Investigation Rate List — 2026</h2>
                <p className="text-slate-400 font-bold uppercase text-[10px] mt-4 tracking-widest italic decoration-secondary underline underline-offset-4">Managed by Aman Pandey • Ayodhya 15KM Radius</p>
              </div>

              <div className="space-y-20">
                <section>
                  <div className="flex items-center gap-4 mb-10 bg-slate-50 p-5 rounded-[2rem]">
                    <PlusCircle className="text-accent" size={24}/>
                    <h3 className="text-primary font-black uppercase text-[12px] tracking-[0.2em] italic">Branded Packages (Includes Free Doctor Consult)</h3>
                  </div>
                  <table className="w-full text-left">
                    <tbody className="text-slate-800 font-bold">
                      {packages.map(p => (
                        <tr key={p.id} className="border-b border-slate-100 text-base">
                          <td className="py-8 px-5 font-black uppercase tracking-tighter leading-tight italic">{p.name} <span className="block text-[9px] text-accent mt-1 tracking-widest">+ FREE DOCTOR CONSULTANCY</span></td>
                          <td className="py-8 px-5 text-right text-primary text-4xl font-black italic tracking-tighter leading-none">₹{p.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-10 bg-slate-50 p-5 rounded-[2rem]">
                    <ClipboardList className="text-secondary" size={24}/>
                    <h3 className="text-primary font-black uppercase text-[12px] tracking-[0.2em] italic">Individual Diagnostics</h3>
                  </div>
                  <table className="w-full text-left">
                    <tbody className="text-slate-800 font-bold">
                      {tests.map(t => (
                        <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors text-base">
                          <td className="py-6 px-5 uppercase tracking-tighter italic">{t.name}</td>
                          <td className="py-6 px-5 text-right text-primary text-2xl font-black italic tracking-tighter leading-none">₹{t.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              </div>

              <div className="mt-28 pt-14 border-t-4 border-slate-100 text-center">
                <div className="grid md:grid-cols-2 gap-16 text-left">
                  <div>
                    <p className="text-[10px] font-black text-secondary uppercase mb-3 tracking-widest italic">Booking Helpline</p>
                    <p className="text-primary font-black text-4xl italic leading-none tracking-tighter">{CONTACT.display}</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase mt-6 leading-relaxed italic">✓ Professional Ayodhya-Wide Home Sample Collection<br/>✓ Digital Health Reports Delivered in 1 Hour</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-secondary uppercase mb-3 tracking-widest italic">Center Address</p>
                    <p className="text-primary font-black text-[12px] uppercase leading-relaxed tracking-tight italic">{CONTACT.address}</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => window.print()} 
                className="mt-24 w-full bg-primary text-white py-8 rounded-[3.5rem] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-5 hover:bg-secondary transition-all no-print text-[11px] shadow-2xl cursor-pointer"
              >
                <Download size={28}/> Print Digital Rate List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 10. Investigation Detail Modal */}
      {activeTest && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-md">
          <div className="bg-white rounded-[4rem] p-10 md:p-16 max-w-xl w-full shadow-[0_0_120px_rgba(0,0,0,0.35)] relative animate-in zoom-in duration-300">
            <button onClick={() => setActiveTest(null)} className="absolute right-12 top-12 text-slate-300 hover:text-secondary transition-colors cursor-pointer">
              <X size={40}/>
            </button>
            
            <div className="bg-blue-50 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-12">
              <Microscope className="text-primary" size={48}/>
            </div>

            <h3 className="text-3xl font-black text-primary uppercase mb-4 italic leading-tight tracking-tighter">{activeTest.name}</h3>
            <span className="text-[10px] font-black text-secondary bg-red-50 px-5 py-2 rounded-full uppercase tracking-widest mb-10 inline-block italic border border-secondary/10">Diagnostic Overview</span>

            <p className="text-slate-500 text-base leading-relaxed mb-12 font-medium italic">{activeTest.details}</p>
            
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 mb-12">
              <h6 className="text-[11px] font-black text-primary uppercase mb-4 tracking-[0.2em] flex items-center gap-2">
                <Clock size={16}/> Essential Preparation
              </h6>
              <p className="text-slate-500 text-[13px] font-bold leading-relaxed italic">{activeTest.preparation}</p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-14">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Market Value</p>
                <p className="text-2xl font-black text-slate-300 line-through tracking-tighter leading-none italic leading-none">₹{activeTest.mrp}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-3xl border border-primary/10 shadow-inner">
                <p className="text-[10px] font-black text-primary uppercase mb-2 tracking-widest italic">Dr Raman Price</p>
                <p className="text-4xl font-black text-primary italic leading-none tracking-tighter leading-none">₹{activeTest.price}</p>
              </div>
            </div>

            <button 
              onClick={() => { handleBooking(activeTest.name); setActiveTest(null); }}
              className="w-full bg-accent text-white py-8 rounded-[3rem] font-black uppercase tracking-[0.5em] hover:bg-green-700 transition-all shadow-[0_25px_60px_rgba(0,166,81,0.35)] flex items-center justify-center gap-4 text-[11px] cursor-pointer"
            >
              Confirm Appointment <ArrowRight size={24}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;