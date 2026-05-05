import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, Phone, MessageCircle, MapPin, FlaskConical, 
  ShieldCheck, Clock, Menu, ChevronRight, Activity,
  FileText, Home as HomeIcon, Zap, X, Star, ClipboardList,
  Info, ArrowRight, Download, CheckCircle2, Thermometer, 
  HeartPulse, Microscope, Droplets, Stethoscope
} from 'lucide-react';

const App = () => {
  const [search, setSearch] = useState('');
  const [viewRateList, setViewRateList] = useState(false);
  const [activeTest, setActiveTest] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
      details: "This profile measures the levels of thyroid hormones in your blood. It is essential for diagnosing hyperthyroidism or hypothyroidism, which can affect metabolism, energy levels, and heart rate.",
      preparation: "10-12 hours fasting recommended."
    },
    { 
      id: 2, 
      name: "Vitamin D (25-Hydroxy)", 
      price: 899, 
      mrp: 1800, 
      category: "Vitamin", 
      details: "Measures the concentration of Vitamin D in the blood. Critical for bone health, calcium absorption, and supporting the immune system. Low levels are common and can lead to fatigue and bone pain.",
      preparation: "No specific fasting required."
    },
    { 
      id: 3, 
      name: "Liver Function Test (LFT)", 
      price: 599, 
      mrp: 1000, 
      category: "Routine", 
      details: "A group of blood tests that measure enzymes, proteins, and bilirubin levels. It helps evaluate the health of your liver and detect inflammation or damage.",
      preparation: "Overnight fasting (8-10 hours) is required."
    },
    { 
      id: 4, 
      name: "Kidney Function Test (KFT)", 
      price: 799, 
      mrp: 1100, 
      category: "Routine", 
      details: "Evaluates how well your kidneys are working by measuring levels of substances like urea, creatinine, and uric acid. Vital for patients with hypertension or diabetes.",
      preparation: "Fasting not mandatory but preferred."
    },
    { 
      id: 5, 
      name: "CBC (Complete Blood Count)", 
      price: 299, 
      mrp: 450, 
      category: "Routine", 
      details: "One of the most common blood tests. It measures different components of your blood, including red blood cells, white blood cells, and platelets. Used to detect anemia and infections.",
      preparation: "No fasting required."
    },
    { 
      id: 6, 
      name: "HbA1c (Diabetes Screening)", 
      price: 449, 
      mrp: 600, 
      category: "Diabetic", 
      details: "Provides an average of your blood sugar levels over the past 2 to 3 months. It is the gold standard for diagnosing and monitoring long-term diabetes management.",
      preparation: "Can be done anytime, no fasting needed."
    },
    { 
      id: 7, 
      name: "Lipid Profile (Cholesterol)", 
      price: 699, 
      mrp: 950, 
      category: "Routine", 
      details: "Measures the amount of 'good' and 'bad' cholesterol and triglycerides in your blood. High levels are a major risk factor for heart disease.",
      preparation: "Strict 12 hours fasting required."
    },
    { 
      id: 8, 
      name: "Vitamin B12", 
      price: 899, 
      mrp: 1200, 
      category: "Vitamin", 
      details: "Checks the level of Vitamin B12, which is necessary for making red blood cells and maintaining a healthy nervous system.",
      preparation: "Fasting preferred."
    }
  ];

  const packages = [
    { 
      name: "Basic Health Cover", 
      id: "DRP-Basic", 
      price: 999, 
      mrp: 2500, 
      off: "60%", 
      details: "Includes 40+ Parameters: CBC, Blood Sugar Fasting, Kidney Function (Urea, Creatinine), and Urine Routine.",
      bestFor: "Ideal for regular quarterly health tracking."
    },
    { 
      name: "Gold Health Shield", 
      id: "DRP-Gold", 
      price: 1299, 
      mrp: 3500, 
      off: "63%", 
      details: "Includes 65+ Parameters: Basic Cover + Thyroid Profile Total + Lipid Profile (Heart Health) + Liver Function Test.",
      bestFor: "Best for adults above 30 years."
    },
    { 
      name: "Platinum Full Body", 
      id: "DRP-Platinum", 
      price: 1999, 
      mrp: 5500, 
      off: "64%", 
      details: "Includes 85+ Parameters: Gold Shield + Vitamin D + Vitamin B12 + Iron Studies + Detailed Electrolytes.",
      bestFor: "Comprehensive annual health assessment."
    }
  ];

  const filteredTests = useMemo(() => {
    return tests.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const handleBooking = (name) => {
    const msg = encodeURIComponent(`Hello Dr Raman Pathology, I want to book the ${name} investigation. Please share the available slots for home collection.`);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* 1. Header Bar */}
      <div className="bg-primary text-white py-1.5 px-6 text-[10px] font-bold flex justify-between items-center sticky top-0 z-[110]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><MapPin size={12} className="text-secondary"/> Ayodhya 15km Radius</span>
          <div className="h-3 w-[1px] bg-white/20 hidden sm:block"></div>
          <span className="hidden sm:inline uppercase tracking-widest text-blue-100 italic">Managed by Aman Pandey</span>
        </div>
        <div className="flex gap-4">
          <a href={`tel:${CONTACT.phone}`} className="hover:text-secondary transition-colors uppercase tracking-tighter">Emergency: {CONTACT.display}</a>
        </div>
      </div>

      {/* 2. Main Navigation */}
      <nav className={`transition-all duration-300 border-b sticky top-[28px] z-[100] ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-secondary p-1.5 rounded-xl">
              <Activity className="text-white w-5 h-5" />
            </div>
            <div className="text-left leading-none">
              <h1 className="text-primary font-black text-xl uppercase italic tracking-tighter">Dr Raman</h1>
              <p className="text-secondary font-black text-[8px] tracking-[0.2em] uppercase">Diagnostic</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => document.getElementById('packages').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5">
              <HeartPulse size={14}/> Packages
            </button>
            <button onClick={() => document.getElementById('tests').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5">
              <Microscope size={14}/> Test Directory
            </button>
            <button onClick={() => setViewRateList(true)} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5">
              <FileText size={14}/> Rate List
            </button>
            <button onClick={() => handleBooking('Home Collection')} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5">
              <HomeIcon size={14}/> Home Collection
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => handleBooking('Direct Inquiry')} className="bg-accent text-white px-5 py-2.5 rounded-full font-black text-[10px] uppercase tracking-wider shadow-lg shadow-green-100 hover:bg-green-700 transition-all flex items-center gap-2">
              <MessageCircle size={16}/> WhatsApp
            </button>
            <button className="lg:hidden text-primary"><Menu /></button>
          </div>
        </div>
      </nav>

      {/* 3. Hero Section */}
      <header className="bg-white pt-12 pb-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Star size={12} className="fill-primary"/> Trust the Experts
          </div>
          <h2 className="text-primary text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tighter">
            Accurate Results. <br/>
            <span className="text-secondary italic underline decoration-primary underline-offset-8">1 Hr Delivery.</span>
          </h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10">Premium Diagnostic Care in Ayodhya</p>
          
          <div className="relative max-w-md mx-auto group">
            <input 
              type="text" 
              value={search}
              placeholder="Search 100+ investigations..."
              className="w-full p-4 pl-12 rounded-2xl border-2 border-slate-100 focus:border-primary focus:ring-4 focus:ring-blue-50/50 outline-none shadow-xl transition-all text-sm font-medium"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-4 top-4 text-slate-300 group-focus-within:text-primary transition-colors" size={22} />
          </div>
        </div>
      </header>

      {/* 4. Pathology Packages Section */}
      <section id="packages" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-10 border-l-4 border-secondary pl-4">
          <div>
            <h3 className="text-2xl font-black text-primary uppercase leading-none">Dr Raman Pathology</h3>
            <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1">Curated Health Packages</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <div key={pkg.name} className="bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-2xl flex flex-col justify-between">
              <div className="absolute top-6 right-6 bg-secondary text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-lg z-10 animate-pulse">
                SAVE {pkg.off}
              </div>
              <div>
                <p className="text-[9px] font-black text-blue-200 uppercase mb-2 tracking-[0.2em]">PATHOLOGY EXCELLENCE</p>
                <h4 className="text-2xl font-black mb-4 leading-tight pr-10">{pkg.name}</h4>
                <p className="text-blue-100/60 text-xs mb-6 font-medium leading-relaxed">{pkg.details}</p>
                <div className="flex gap-2 mb-10">
                  <span className="bg-white/10 text-[9px] font-bold px-2 py-1 rounded-md uppercase">Home Collection</span>
                  <span className="bg-white/10 text-[9px] font-bold px-2 py-1 rounded-md uppercase">1 Hr Reports</span>
                </div>
              </div>
              <div className="flex items-end justify-between border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs text-white/40 line-through font-bold">₹{pkg.mrp}</p>
                  <p className="text-4xl font-black tracking-tighter italic">₹{pkg.price}</p>
                </div>
                <button 
                  onClick={() => handleBooking(pkg.name)}
                  className="bg-white text-primary p-4 rounded-2xl hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="bg-slate-100/50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm mx-auto md:mx-0">
                <ShieldCheck className="text-primary" size={24}/>
              </div>
              <h5 className="font-black text-primary uppercase text-sm mb-2 tracking-tighter">Quality Checks</h5>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">Every investigation is double-verified by specialists.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm mx-auto md:mx-0">
                <Zap className="text-secondary" size={24}/>
              </div>
              <h5 className="font-black text-primary uppercase text-sm mb-2 tracking-tighter">Fastest Delivery</h5>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">Digital reports delivered to your phone in just 1 hour.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm mx-auto md:mx-0">
                <HomeIcon className="text-accent" size={24}/>
              </div>
              <h5 className="font-black text-primary uppercase text-sm mb-2 tracking-tighter">Home Collection</h5>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">Professional technicians available for 15km radius.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm mx-auto md:mx-0">
                <Droplets className="text-red-500" size={24}/>
              </div>
              <h5 className="font-black text-primary uppercase text-sm mb-2 tracking-tighter">Painless Sampling</h5>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">Advanced vacuum tubes for a hassle-free experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Test Directory */}
      <main id="tests" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-l-4 border-secondary pl-4">
          <div className="text-left">
            <h3 className="text-3xl font-black text-primary uppercase tracking-tighter italic leading-none">Test Directory</h3>
            <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[8px] mt-1">Ayodhya Digital Rate List</p>
          </div>
          {search && (
            <div className="mt-4 text-[10px] font-black bg-blue-50 text-primary px-4 py-1.5 rounded-full uppercase">
              {filteredTests.length} matches found
            </div>
          )}
        </div>

        {filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTests.map((test) => (
              <div key={test.id} className="bg-white rounded-[2rem] border border-slate-100 p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group text-left">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">{test.category}</span>
                    <div className="bg-slate-50 p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                      <FlaskConical size={16}/>
                    </div>
                  </div>
                  <h4 className="font-black text-lg text-slate-800 group-hover:text-primary transition-colors leading-tight mb-4 h-[2.5rem] overflow-hidden">
                    {test.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-accent text-[9px] font-black uppercase italic mb-6">
                    <Zap size={12}/> 1 Hr Delivery
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-50 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-slate-300 line-through font-black italic tracking-tighter">₹{test.mrp}</p>
                    <p className="text-3xl font-black text-primary tracking-tighter leading-none italic">₹{test.price}</p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <button 
                      onClick={() => setActiveTest(test)}
                      className="text-primary text-[9px] font-black uppercase hover:text-secondary transition-colors underline underline-offset-2"
                    >
                      Details
                    </button>
                    <button 
                      onClick={() => handleBooking(test.name)}
                      className="bg-primary text-white p-3 rounded-xl shadow-lg shadow-blue-100 hover:bg-secondary transition-all"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-3xl border-2 border-dashed border-slate-100">
            <Search className="mx-auto text-slate-200 mb-4" size={48} />
            <p className="text-slate-400 font-black uppercase tracking-widest text-xs">No investigations found</p>
            <button onClick={() => setSearch('')} className="text-primary font-black mt-4 underline uppercase italic text-[10px]">View All</button>
          </div>
        )}
      </main>

      {/* 7. FAQ / Info Section */}
      <section className="bg-primary text-white py-20 px-6 overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10 text-left">
          <h3 className="text-3xl font-black uppercase italic mb-10 tracking-tighter border-b-4 border-secondary inline-block">Frequently Asked</h3>
          <div className="space-y-8">
            <div>
              <h5 className="font-black text-secondary uppercase text-xs tracking-widest mb-2">How do I book?</h5>
              <p className="text-blue-100 text-sm leading-relaxed font-medium">Simply click the WhatsApp button on any test card or package. Our team will coordinate your address and preferred time slot for sample collection.</p>
            </div>
            <div>
              <h5 className="font-black text-secondary uppercase text-xs tracking-widest mb-2">Is Home Collection Free?</h5>
              <p className="text-blue-100 text-sm leading-relaxed font-medium">We offer complimentary home collection within a 15km radius of Arundhati Complex, Ayodhya for all bookings above ₹500.</p>
            </div>
            <div>
              <h5 className="font-black text-secondary uppercase text-xs tracking-widest mb-2">When will I get my report?</h5>
              <p className="text-blue-100 text-sm leading-relaxed font-medium">For most routine tests, we provide a digital report via WhatsApp or Email within 1 hour of the sample reaching our laboratory.</p>
            </div>
          </div>
        </div>
        <Microscope className="absolute -bottom-20 -right-20 text-white/5" size={400}/>
      </section>

      {/* 8. Detailed Footer */}
      <footer className="bg-white pt-20 pb-10 px-6 text-left border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 pb-16 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Activity className="text-secondary w-8 h-8" />
              <h1 className="text-primary font-black text-2xl uppercase italic tracking-tighter">Dr Raman <span className="text-secondary">Diagnostic</span></h1>
            </div>
            <p className="text-slate-400 text-xs font-medium leading-relaxed mb-10 uppercase tracking-tighter italic">
              "Trust the Experts" — A premium initiative managed by Aman Pandey. Providing high-tech diagnostic excellence across the holy city of Ayodhya.
            </p>
            <div className="flex gap-4">
               <a href={`tel:${CONTACT.phone}`} className="bg-primary text-white p-4 rounded-2xl hover:bg-secondary transition-all shadow-xl shadow-blue-100"><Phone size={24}/></a>
               <button onClick={() => window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank')} className="bg-accent text-white p-4 rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-100"><MessageCircle size={24}/></button>
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-secondary">Visit Our Center</h4>
            <div className="flex gap-4">
              <MapPin className="text-primary shrink-0" size={24} />
              <p className="text-slate-600 font-black text-[11px] uppercase leading-tight tracking-tight">
                {CONTACT.address}<br/>
                <span className="text-primary bg-blue-50 px-2 py-0.5 rounded mt-2 inline-block italic tracking-tighter">✓ 15km Collection Radius</span>
              </p>
            </div>
            <div className="flex gap-4">
              <Clock className="text-primary shrink-0" size={24} />
              <p className="text-slate-600 font-black text-[11px] uppercase leading-tight tracking-tight">
                7:00 AM - 9:00 PM<br/>
                <span className="text-secondary italic">Open All 7 Days</span>
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-secondary">Helpline</h4>
            <div className="flex gap-4 items-center">
              <div className="bg-blue-50 p-3 rounded-full text-primary"><Phone size={28}/></div>
              <div>
                <p className="text-primary font-black text-2xl tracking-tighter italic">{CONTACT.display}</p>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Call for Home Collection</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 text-center opacity-30">
          <p className="text-[9px] uppercase font-black tracking-widest">
            © 2026 Dr Raman Diagnostic | Aman Pandey | All Rights Reserved
          </p>
        </div>
      </footer>

      {/* 9. Rate List Modal (Fixed Stability) */}
      {viewRateList && (
        <div className="fixed inset-0 z-[200] bg-white overflow-y-auto">
          <div className="p-4 md:p-12">
            <div className="max-w-4xl mx-auto border-[8px] border-primary rounded-[3rem] p-8 md:p-16 relative bg-white shadow-2xl">
              <button onClick={() => setViewRateList(false)} className="fixed top-10 right-10 bg-secondary text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-[210] no-print">
                <X size={32}/>
              </button>
              
              <div className="text-center mb-16">
                <div className="flex justify-center items-center gap-3 mb-4">
                  <Activity className="text-secondary w-12 h-12" />
                  <div className="text-left">
                    <h1 className="text-primary font-black text-4xl uppercase italic leading-none">DR RAMAN</h1>
                    <p className="text-secondary font-black text-xl tracking-[0.4em] uppercase">PATHOLOGY</p>
                  </div>
                </div>
                <div className="h-2 w-32 bg-secondary mx-auto mb-8 rounded-full"></div>
                <h2 className="text-slate-800 text-2xl font-black uppercase tracking-widest italic">Investigation Rate List - 2026</h2>
              </div>

              <div className="space-y-12">
                <section>
                  <h3 className="bg-slate-100 p-4 text-primary font-black uppercase text-xs tracking-widest mb-6 rounded-xl">Premium Packages</h3>
                  <table className="w-full text-left">
                    <tbody className="text-slate-800 font-bold">
                      {packages.map(p => (
                        <tr key={p.id} className="border-b border-slate-100 text-sm">
                          <td className="py-6 px-4">{p.name}</td>
                          <td className="py-6 px-4 text-right text-primary text-2xl font-black italic">₹{p.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>

                <section>
                  <h3 className="bg-slate-100 p-4 text-primary font-black uppercase text-xs tracking-widest mb-6 rounded-xl">Individual Tests</h3>
                  <table className="w-full text-left">
                    <tbody className="text-slate-800 font-bold">
                      {tests.map(t => (
                        <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors text-sm">
                          <td className="py-5 px-4">{t.name}</td>
                          <td className="py-5 px-4 text-right text-primary text-xl font-black italic">₹{t.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              </div>

              <div className="mt-20 pt-10 border-t border-slate-100 text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-10">Sample Collection Coverage: 15KM Radius from Arundhati Complex</p>
                <div className="flex flex-col md:flex-row justify-center gap-10">
                  <div className="text-center">
                    <p className="text-[10px] font-black text-secondary uppercase mb-1 tracking-widest">Helpline</p>
                    <p className="text-primary font-black text-xl italic">{CONTACT.display}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-black text-secondary uppercase mb-1 tracking-widest">Address</p>
                    <p className="text-primary font-bold text-[10px] max-w-[250px] uppercase leading-tight mx-auto">{CONTACT.address}</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => window.print()} 
                className="mt-16 w-full bg-primary text-white py-6 rounded-[2.5rem] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-secondary transition-all no-print text-xs"
              >
                <Download size={24}/> Print Rate List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 10. Detail Modal */}
      {activeTest && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-primary/30 backdrop-blur-md">
          <div className="bg-white rounded-[3rem] p-10 max-w-lg w-full shadow-2xl relative animate-in zoom-in duration-300">
            <button onClick={() => setActiveTest(null)} className="absolute right-8 top-8 text-slate-300 hover:text-secondary"><X size={32}/></button>
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8"><Stethoscope className="text-primary" size={32}/></div>
            <h3 className="text-2xl font-black text-primary uppercase mb-2 italic leading-tight">{activeTest.name}</h3>
            <span className="text-[9px] font-black text-secondary bg-red-50 px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">Investigation Overview</span>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium italic">{activeTest.details}</p>
            
            <div className="bg-slate-50 p-5 rounded-2xl mb-8">
              <h6 className="text-[10px] font-black text-primary uppercase mb-2 tracking-widest flex items-center gap-1.5"><Clock size={12}/> Patient Preparation</h6>
              <p className="text-slate-500 text-[11px] font-bold">{activeTest.preparation}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Standard Price</p>
                <p className="text-xl font-black text-slate-300 line-through">₹{activeTest.mrp}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-primary/10">
                <p className="text-[9px] font-black text-primary uppercase mb-1 tracking-tighter">Your Special Price</p>
                <p className="text-2xl font-black text-primary italic leading-none">₹{activeTest.price}</p>
              </div>
            </div>

            <button 
              onClick={() => { handleBooking(activeTest.name); setActiveTest(null); }}
              className="w-full bg-accent text-white py-6 rounded-3xl font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-2 text-xs"
            >
              Book Now <ArrowRight size={20}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;