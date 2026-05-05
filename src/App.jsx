import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, Phone, MessageCircle, MapPin, FlaskConical, 
  ShieldCheck, Clock, Menu, ChevronRight, Activity,
  FileText, Home as HomeIcon, Zap, X, Star, ClipboardList,
  Info, ArrowRight, Download, HeartPulse, Microscope, 
  Droplets, Stethoscope, Award, Users
} from 'lucide-react';

const App = () => {
  const [search, setSearch] = useState('');
  const [viewRateList, setViewRateList] = useState(false);
  const [activeTest, setActiveTest] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for navbar styling
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
      details: "Comprehensive evaluation of thyroid gland activity. Essential for detecting metabolic imbalances, energy issues, and unexplained weight changes.",
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
      details: "A fundamental screening test that analyzes red cells, white cells, and platelets to detect anemia, infection, and more.",
      preparation: "No fasting required."
    },
    { 
      id: 6, 
      name: "HbA1c (Diabetes Screening)", 
      price: 449, 
      mrp: 600, 
      category: "Diabetic", 
      details: "Tracks average blood sugar levels over the last 90 days. The gold standard for diabetes monitoring and diagnosis.",
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
      name: "Basic Health Cover", 
      id: "Essential", 
      price: 999, 
      mrp: 2500, 
      off: "60%", 
      details: "Includes 40+ Parameters: CBC, Blood Sugar Fasting, Kidney Basics (Urea, Creatinine), and Urine Routine Analysis.",
      bestFor: "Ideal for quarterly health monitoring."
    },
    { 
      name: "Gold Health Shield", 
      id: "Advanced", 
      price: 1299, 
      mrp: 3500, 
      off: "63%", 
      details: "Includes 65+ Parameters: Everything in Basic + Thyroid Profile + Lipid Profile + Liver Function Test.",
      bestFor: "Recommended for adults above 30."
    },
    { 
      name: "Platinum Full Body", 
      id: "Comprehensive", 
      price: 1999, 
      mrp: 5500, 
      off: "64%", 
      details: "Our most complete assessment. Includes 85+ Parameters: Gold Shield + Vitamin D + B12 + Iron Studies + Electrolytes.",
      bestFor: "Complete annual health evaluation."
    }
  ];

  const filteredTests = useMemo(() => {
    return tests.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const handleBooking = (name) => {
    const msg = encodeURIComponent(`Hello Dr Raman Diagnostic, I want to book the ${name} investigation. Please coordinate the home collection.`);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* 1. Header Identity Bar */}
      <div className="bg-primary text-white py-1.5 px-6 text-[10px] font-bold flex justify-between items-center sticky top-0 z-[110]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><MapPin size={12} className="text-secondary"/> Ayodhya 15km Radius Collection</span>
          <div className="h-3 w-[1px] bg-white/20 hidden sm:block"></div>
          <span className="hidden sm:inline uppercase tracking-widest text-blue-100 italic font-medium">Aman Pandey Initiative</span>
        </div>
        <div className="flex gap-4">
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-1 hover:text-secondary transition-colors"><Phone size={10}/> {CONTACT.display}</a>
        </div>
      </div>

      {/* 2. Main Navigation */}
      <nav className={`transition-all duration-300 border-b sticky top-[28px] z-[100] ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-secondary p-1.5 rounded-xl group-hover:scale-110 transition-transform">
              <Activity className="text-white w-5 h-5" />
            </div>
            <div className="text-left leading-none">
              <h1 className="text-primary font-black text-xl uppercase italic tracking-tighter">Dr Raman</h1>
              <p className="text-secondary font-black text-[8px] tracking-[0.2em] uppercase">Diagnostic</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => document.getElementById('packages').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer">
              <HeartPulse size={14}/> Packages
            </button>
            <button onClick={() => document.getElementById('tests').scrollIntoView()} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer">
              <Microscope size={14}/> Directory
            </button>
            <button onClick={() => setViewRateList(true)} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer">
              <FileText size={14}/> Rate List
            </button>
            <button onClick={() => handleBooking('Home Collection')} className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer">
              <HomeIcon size={14}/> Home Collection
            </button>
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
      <header className="bg-white pt-12 pb-14 px-6 text-center border-b border-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Star size={12} className="fill-primary"/> Trust the Experts
          </div>
          <h2 className="text-primary text-4xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tighter">
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
            {search && <button onClick={() => setSearch('')} className="absolute right-4 top-4 text-[10px] font-black text-slate-400 hover:text-secondary uppercase">Clear</button>}
          </div>
        </div>
      </header>

      {/* 4. Dr Raman Diagnostic Packages */}
      <section id="packages" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-10 border-l-4 border-secondary pl-4">
          <div>
            <h3 className="text-2xl font-black text-primary uppercase leading-none italic">Dr Raman Diagnostic</h3>
            <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1">Specialized Health Packages</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <div key={pkg.name} className="bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-2xl flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div className="absolute top-6 right-6 bg-secondary text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-lg z-10 animate-pulse">
                SAVE {pkg.off}
              </div>
              <div>
                <p className="text-[9px] font-black text-blue-200 uppercase mb-2 tracking-[0.2em]">{pkg.id}</p>
                <h4 className="text-2xl font-black mb-4 leading-tight pr-10">{pkg.name}</h4>
                <p className="text-blue-100/60 text-xs mb-6 font-medium leading-relaxed italic">{pkg.details}</p>
                <div className="flex gap-2 mb-8">
                  <span className="bg-white/10 text-[9px] font-bold px-2 py-1 rounded-md uppercase">Home Collection</span>
                  <span className="bg-white/10 text-[9px] font-bold px-2 py-1 rounded-md uppercase italic">1 Hr Report</span>
                </div>
              </div>
              <div className="flex items-end justify-between border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs text-white/40 line-through font-bold">₹{pkg.mrp}</p>
                  <p className="text-4xl font-black tracking-tighter italic">₹{pkg.price}</p>
                </div>
                <button 
                  onClick={() => handleBooking(pkg.name)}
                  className="bg-white text-primary p-4 rounded-2xl hover:bg-secondary hover:text-white transition-all shadow-lg cursor-pointer"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Professional Service Grid */}
      <section className="bg-white py-16 px-6 border-y border-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="text-left">
            <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-5"><ShieldCheck className="text-primary" size={24}/></div>
            <h5 className="font-black text-primary uppercase text-sm mb-3">Expert Verification</h5>
            <p className="text-slate-500 text-xs leading-relaxed font-medium">All reports are strictly monitored and verified by senior diagnostic professionals.</p>
          </div>
          <div className="text-left">
            <div className="bg-red-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-5"><Clock className="text-secondary" size={24}/></div>
            <h5 className="font-black text-primary uppercase text-sm mb-3">Express Delivery</h5>
            <p className="text-slate-500 text-xs leading-relaxed font-medium">Digital results delivered within 1 hour of sample processing to your WhatsApp.</p>
          </div>
          <div className="text-left">
            <div className="bg-green-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-5"><HomeIcon className="text-accent" size={24}/></div>
            <h5 className="font-black text-primary uppercase text-sm mb-3">Home Collection</h5>
            <p className="text-slate-500 text-xs leading-relaxed font-medium">Highly trained technicians for a painless sampling experience at your doorstep.</p>
          </div>
          <div className="text-left">
            <div className="bg-slate-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-5"><Award className="text-slate-600" size={24}/></div>
            <h5 className="font-black text-primary uppercase text-sm mb-3">Affordable Care</h5>
            <p className="text-slate-500 text-xs leading-relaxed font-medium">Providing the best investigation rates in Ayodhya without compromising quality.</p>
          </div>
        </div>
      </section>

      {/* 6. Test Directory Grid */}
      <main id="tests" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-l-4 border-secondary pl-6">
          <div className="text-left">
            <h3 className="text-3xl font-black text-primary uppercase tracking-tighter italic leading-none">Test Directory</h3>
            <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[8px] mt-1 italic">Real-time digital pricing</p>
          </div>
          {search && (
            <div className="mt-4 text-[10px] font-black bg-blue-50 text-primary px-4 py-1.5 rounded-full uppercase italic">
              Showing {filteredTests.length} Investigations
            </div>
          )}
        </div>

        {filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTests.map((test) => (
              <div key={test.id} className="bg-white rounded-[2rem] border border-slate-100 p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group text-left test-card-shadow">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">{test.category}</span>
                    <div className="bg-slate-50 p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                      <Stethoscope size={16}/>
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
                    <p className="text-[10px] text-slate-300 line-through font-black italic tracking-tighter leading-none mb-1">₹{test.mrp}</p>
                    <p className="text-3xl font-black text-primary tracking-tighter leading-none italic">₹{test.price}</p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <button 
                      onClick={() => setActiveTest(test)}
                      className="text-primary text-[9px] font-black uppercase hover:text-secondary transition-colors underline underline-offset-2 cursor-pointer"
                    >
                      Details
                    </button>
                    <button 
                      onClick={() => handleBooking(test.name)}
                      className="bg-primary text-white p-3 rounded-xl shadow-lg shadow-blue-100 hover:bg-secondary transition-all cursor-pointer"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
            <FlaskConical className="mx-auto text-slate-100 mb-4" size={56} />
            <p className="text-slate-400 font-black uppercase tracking-widest text-xs">No matching investigation found</p>
            <button onClick={() => setSearch('')} className="text-primary font-black mt-6 underline uppercase italic text-[10px] cursor-pointer">View All Tests</button>
          </div>
        )}
      </main>

      {/* 7. FAQ / Health Guidelines */}
      <section className="bg-primary text-white py-20 px-6 overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10 text-left">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-12 bg-secondary"></div>
            <h3 className="text-3xl font-black uppercase italic tracking-tighter">Common Questions</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h5 className="font-black text-secondary uppercase text-[11px] tracking-widest border-b border-white/10 pb-2">Sample Collection</h5>
              <p className="text-blue-100 text-sm leading-relaxed font-medium italic">Our technician will arrive at your location in Ayodhya (15km radius) with a sterile kit. Results are processed immediately upon arrival at the lab.</p>
            </div>
            <div className="space-y-4">
              <h5 className="font-black text-secondary uppercase text-[11px] tracking-widest border-b border-white/10 pb-2">Fasting Requirements</h5>
              <p className="text-blue-100 text-sm leading-relaxed font-medium italic">Tests like LFT, KFT, and Lipid Profile require 8-12 hours of fasting. You can drink plain water during this period.</p>
            </div>
            <div className="space-y-4">
              <h5 className="font-black text-secondary uppercase text-[11px] tracking-widest border-b border-white/10 pb-2">Digital Reports</h5>
              <p className="text-blue-100 text-sm leading-relaxed font-medium italic">We deliver high-resolution PDF reports directly to your WhatsApp number within 1 hour of sample processing.</p>
            </div>
            <div className="space-y-4">
              <h5 className="font-black text-secondary uppercase text-[11px] tracking-widest border-b border-white/10 pb-2">Booking Slots</h5>
              <p className="text-blue-100 text-sm leading-relaxed font-medium italic">Slots are available from 7:00 AM to 9:00 PM every day. We recommend morning slots for all fasting investigations.</p>
            </div>
          </div>
        </div>
        <Users className="absolute -bottom-10 -right-10 text-white/5" size={300}/>
      </section>

      {/* 8. Detailed Footer */}
      <footer className="bg-white pt-20 pb-10 px-6 text-left border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 pb-16 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Activity className="text-secondary w-8 h-8" />
              <h1 className="text-primary font-black text-2xl uppercase italic tracking-tighter leading-none">Dr Raman <br/><span className="text-secondary">Diagnostic</span></h1>
            </div>
            <p className="text-slate-400 text-[10px] font-bold leading-relaxed mb-10 uppercase tracking-tighter italic">
              Managed by Aman Pandey. <br/>Bringing clinical excellence to the heart of Ayodhya with accurate diagnostics and expert care.
            </p>
            <div className="flex gap-4">
               <a href={`tel:${CONTACT.phone}`} className="bg-primary text-white p-4 rounded-2xl hover:bg-secondary transition-all shadow-xl shadow-blue-100"><Phone size={24}/></a>
               <button onClick={() => window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank')} className="bg-accent text-white p-4 rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-100 cursor-pointer"><MessageCircle size={24}/></button>
            </div>
          </div>
          
          <div className="space-y-10">
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-secondary">Visit Center</h4>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-primary shrink-0" size={24} />
                <p className="text-slate-600 font-black text-[11px] uppercase leading-tight tracking-tight">
                  {CONTACT.address}<br/>
                  <span className="text-primary bg-blue-50 px-2 py-0.5 rounded mt-3 inline-block italic tracking-tighter text-[9px]">✓ 15km Sample Collection Radius</span>
                </p>
              </div>
              <div className="flex gap-4">
                <Clock className="text-primary shrink-0" size={24} />
                <p className="text-slate-600 font-black text-[11px] uppercase leading-tight tracking-tight">
                  Operating Hours<br/>
                  <span className="text-secondary italic">7:00 AM - 9:00 PM (Daily)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-secondary italic">24/7 Helpline</h4>
            <div className="flex gap-4 items-center">
              <div className="bg-blue-50 p-3 rounded-full text-primary animate-bounce"><Phone size={28}/></div>
              <div>
                <p className="text-primary font-black text-3xl tracking-tighter italic leading-none">{CONTACT.display}</p>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Book Your Home Collection Now</p>
              </div>
            </div>
            <div className="pt-4">
              <h5 className="font-black text-[9px] uppercase text-slate-300 tracking-widest mb-2">Social Hub</h5>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer"><Star size={14}/></div>
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer"><Activity size={14}/></div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 text-center opacity-30">
          <p className="text-[9px] uppercase font-black tracking-widest italic">
            © 2026 Dr Raman Diagnostic | Aman Pandey | Ayodhya, UP
          </p>
        </div>
      </footer>

      {/* 9. Branded Rate List Overlay (PDF Mode) */}
      {viewRateList && (
        <div className="fixed inset-0 z-[500] bg-white overflow-y-auto">
          <div className="p-4 md:p-12">
            <div className="max-w-4xl mx-auto border-[10px] border-primary rounded-[4rem] p-8 md:p-20 relative bg-white shadow-[0_0_100px_rgba(0,74,153,0.2)]">
              <button onClick={() => setViewRateList(false)} className="fixed top-10 right-10 bg-secondary text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-[510] no-print cursor-pointer">
                <X size={32}/>
              </button>
              
              <div className="text-center mb-16">
                <div className="flex justify-center items-center gap-4 mb-4">
                  <Activity className="text-secondary w-16 h-16" />
                  <div className="text-left">
                    <h1 className="text-primary font-black text-5xl uppercase italic leading-none tracking-tighter">DR RAMAN</h1>
                    <p className="text-secondary font-black text-2xl tracking-[0.4em] uppercase">DIAGNOSTIC</p>
                  </div>
                </div>
                <div className="h-2 w-48 bg-secondary mx-auto mb-10 rounded-full"></div>
                <h2 className="text-slate-800 text-3xl font-black uppercase tracking-tighter italic">Investigation Rate List — 2026</h2>
                <p className="text-slate-400 font-bold uppercase text-[10px] mt-2 tracking-widest underline underline-offset-4 decoration-secondary">Managed by Aman Pandey • Ayodhya 15KM Radius</p>
              </div>

              <div className="space-y-16">
                <section>
                  <div className="flex items-center gap-3 mb-8 bg-slate-50 p-4 rounded-2xl">
                    <Star className="text-secondary" size={20}/>
                    <h3 className="text-primary font-black uppercase text-sm tracking-widest">Premium Branded Packages</h3>
                  </div>
                  <table className="w-full text-left">
                    <tbody className="text-slate-800 font-bold">
                      {packages.map(p => (
                        <tr key={p.id} className="border-b border-slate-100 text-base">
                          <td className="py-6 px-4">{p.name} ({p.id})</td>
                          <td className="py-6 px-4 text-right text-primary text-3xl font-black italic tracking-tighter">₹{p.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-8 bg-slate-50 p-4 rounded-2xl">
                    <ClipboardList className="text-secondary" size={20}/>
                    <h3 className="text-primary font-black uppercase text-sm tracking-widest">Individual Investigations</h3>
                  </div>
                  <table className="w-full text-left">
                    <tbody className="text-slate-800 font-bold">
                      {tests.map(t => (
                        <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors text-base">
                          <td className="py-5 px-4">{t.name}</td>
                          <td className="py-5 px-4 text-right text-primary text-xl font-black italic tracking-tighter">₹{t.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              </div>

              <div className="mt-24 pt-12 border-t-2 border-slate-100 text-center">
                <div className="grid md:grid-cols-2 gap-12 text-left">
                  <div>
                    <p className="text-[10px] font-black text-secondary uppercase mb-2 tracking-widest">Customer Helpline</p>
                    <p className="text-primary font-black text-3xl italic leading-none">{CONTACT.display}</p>
                    <p className="text-slate-400 text-[9px] font-bold uppercase mt-4">✓ Professional Home Sample Collection</p>
                    <p className="text-slate-400 text-[9px] font-bold uppercase mt-1">✓ Digital Reports in 1 Hour</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-secondary uppercase mb-2 tracking-widest">Office Address</p>
                    <p className="text-primary font-black text-[11px] uppercase leading-tight tracking-tight italic">{CONTACT.address}</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => window.print()} 
                className="mt-20 w-full bg-primary text-white py-8 rounded-[3rem] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-secondary transition-all no-print text-sm shadow-2xl cursor-pointer"
              >
                <Download size={24}/> Print Official List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 10. Investigation Detail Modal */}
      {activeTest && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-md">
          <div className="bg-white rounded-[3.5rem] p-10 md:p-14 max-w-xl w-full shadow-[0_0_100px_rgba(0,0,0,0.3)] relative animate-in zoom-in duration-300">
            <button onClick={() => setActiveTest(null)} className="absolute right-10 top-10 text-slate-300 hover:text-secondary transition-colors cursor-pointer">
              <X size={36}/>
            </button>
            
            <div className="bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center mb-10">
              <Microscope className="text-primary" size={40}/>
            </div>

            <h3 className="text-3xl font-black text-primary uppercase mb-3 italic leading-tight tracking-tighter">{activeTest.name}</h3>
            <div className="flex gap-4 mb-10">
              <span className="text-[10px] font-black text-secondary bg-red-50 px-4 py-1.5 rounded-full uppercase tracking-widest border border-secondary/10 italic">Technical Overview</span>
            </div>

            <p className="text-slate-500 text-base leading-relaxed mb-10 font-medium italic">{activeTest.details}</p>
            
            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 mb-10">
              <h6 className="text-[10px] font-black text-primary uppercase mb-3 tracking-[0.2em] flex items-center gap-2">
                <Clock size={14}/> Patient Preparation
              </h6>
              <p className="text-slate-500 text-[12px] font-bold leading-relaxed">{activeTest.preparation}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Market Price</p>
                <p className="text-2xl font-black text-slate-300 line-through tracking-tighter leading-none italic">₹{activeTest.mrp}</p>
              </div>
              <div className="bg-blue-50 p-5 rounded-2xl border border-primary/10">
                <p className="text-[10px] font-black text-primary uppercase mb-2 tracking-widest">Offer Price</p>
                <p className="text-3xl font-black text-primary italic leading-none tracking-tighter">₹{activeTest.price}</p>
              </div>
            </div>

            <button 
              onClick={() => { handleBooking(activeTest.name); setActiveTest(null); }}
              className="w-full bg-accent text-white py-7 rounded-[2.5rem] font-black uppercase tracking-[0.4em] hover:bg-green-700 transition-all shadow-[0_20px_50px_rgba(0,166,81,0.3)] flex items-center justify-center gap-3 text-xs cursor-pointer"
            >
              Confirm Booking <ArrowRight size={20}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;