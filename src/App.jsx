import React, { useState, useMemo } from 'react';
import { 
  Search, Phone, MessageCircle, MapPin, FlaskConical, 
  ShieldCheck, Clock, Menu, ChevronRight, Activity,
  FileText, Home as HomeIcon, Zap, X, Star, ClipboardList,
  Info, ArrowRight, HeartPulse, Microscope
} from 'lucide-react';

const App = () => {
  const [search, setSearch] = useState('');
  const [viewRateList, setViewRateList] = useState(false);
  const [activeTest, setActiveTest] = useState(null);

  const CONTACT = {
    phone: "+919214037192",
    display: "+91 92140 37192",
    whatsapp: "919214037192",
    address: "Shop No. 129 Arundhati Complex Tedhibazar Chauraha-Ayodhya 224123"
  };

  // Updated Data Logic
  const tests = [
    { id: 1, name: "Thyroid Profile Total (T3, T4, TSH)", price: 399, mrp: 800, category: "Hormonal", details: "Comprehensive evaluation of thyroid hormones to detect hyperthyroidism or hypothyroidism." },
    { id: 2, name: "Vitamin D (25-Hydroxy)", price: 899, mrp: 1800, category: "Vitamin", details: "Essential test to monitor bone health, calcium absorption, and immune system strength." },
    { id: 3, name: "Liver Function Test (LFT)", price: 599, mrp: 1000, category: "Routine", details: "Checks for liver inflammation, damage, and measures enzymes, proteins, and bilirubin." },
    { id: 4, name: "Kidney Function Test (KFT)", price: 799, mrp: 1100, category: "Routine", details: "Evaluates how well your kidneys are filtering waste, including Urea and Creatinine levels." },
    { id: 5, name: "CBC (Complete Blood Count)", price: 299, mrp: 450, category: "Routine", details: "Screening for anemia, infection, and many other diseases through blood cell analysis." },
    { id: 6, name: "HbA1c (Diabetes Screening)", price: 449, mrp: 600, category: "Diabetic", details: "Measures average blood sugar levels over the past 3 months for effective diabetes control." },
    { id: 7, name: "Lipid Profile (Heart Health)", price: 699, mrp: 950, category: "Routine", details: "Checks Total Cholesterol, HDL, LDL, and Triglycerides for cardiovascular risk assessment." },
    { id: 8, name: "Vitamin B12", price: 899, mrp: 1200, category: "Vitamin", details: "Vital for nerve tissue health, brain function, and the production of red blood cells." }
  ];

  const packages = [
    { id: 'RD 1.1', name: "Essential Health Package", price: 999, mrp: 2500, details: "Basic checkup including CBC, Fasting Sugar, and Kidney basics. Perfect for routine monitoring." },
    { id: 'RD 1.2', name: "Advanced Care Package", price: 1299, mrp: 3500, details: "Includes Routine screening + Thyroid Profile + Lipid Profile. Recommended for ages 30+." },
    { id: 'RD 1.3', name: "Comprehensive Body Package", price: 1999, mrp: 5500, details: "Our most premium package. Includes 80+ parameters: Full Body, LFT, KFT, Vitamins, and Heart." }
  ];

  const filteredTests = useMemo(() => {
    return tests.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const handleBooking = (name) => {
    const msg = encodeURIComponent(`Hello Dr Raman Diagnostic, I am interested in booking the ${name}. Please guide me with the slot availability.`);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Top Identity Bar */}
      <div className="bg-primary text-white py-2 px-6 text-[10px] md:text-xs font-bold flex justify-between items-center sticky top-0 z-[110]">
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1.5"><MapPin size={14} className="text-secondary"/> Ayodhya 15km Radius Collection</span>
          <div className="h-4 w-[1px] bg-white/20 hidden sm:block"></div>
          <span className="hidden sm:inline uppercase tracking-widest text-blue-100">Aman Pandey Initiative</span>
        </div>
        <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-accent transition-all">
          <Phone size={14} className="text-secondary"/> {CONTACT.display}
        </a>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/90 backdrop-blur-xl border-b border-slate-100 sticky top-[32px] md:top-[36px] z-[100] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-secondary p-2 rounded-2xl shadow-lg shadow-red-200 group-hover:rotate-12 transition-transform">
              <Activity className="text-white w-6 h-6" />
            </div>
            <div className="text-left">
              <h1 className="text-primary font-black text-2xl uppercase italic leading-none tracking-tighter">Dr Raman</h1>
              <p className="text-secondary font-black text-[9px] tracking-[0.3em] uppercase">Diagnostic</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <button onClick={() => document.getElementById('tests').scrollIntoView()} className="text-[11px] font-black uppercase text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
              <ClipboardList size={16}/> Test Directory
            </button>
            <button onClick={() => setViewRateList(true)} className="text-[11px] font-black uppercase text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
              <FileText size={16}/> Download Rate List
            </button>
            <button onClick={() => handleBooking('Home Collection')} className="text-[11px] font-black uppercase text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
              <HomeIcon size={16}/> Home Collection
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => handleBooking('Direct Inquiry')} className="bg-accent text-white px-6 py-3 rounded-full font-black text-[11px] uppercase tracking-wider shadow-xl shadow-green-100 hover:bg-green-700 transition-all transform active:scale-95 flex items-center gap-2">
              <MessageCircle size={18}/> WhatsApp Booking
            </button>
            <button className="lg:hidden text-primary"><Menu /></button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <header className="hero-gradient pt-20 pb-28 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-8 animate-pulse-soft">
            <Star size={14} className="fill-primary"/> Trust the Experts
          </div>
          <h2 className="text-primary text-5xl md:text-8xl font-black leading-none mb-8 tracking-tighter">
            Health First. <br/>
            <span className="text-secondary italic underline decoration-primary underline-offset-[12px] decoration-8">1 Hr Delivery.</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Premium diagnostic care managed by Aman Pandey. Accurate results, expert supervision, and home collection across Ayodhya.
          </p>
          
          <div className="relative max-w-xl mx-auto group">
            <input 
              type="text" 
              value={search}
              placeholder="Search by test name (e.g. Blood, Sugar)..."
              className="w-full p-6 pl-16 rounded-[2rem] border-2 border-slate-100 focus:border-primary focus:ring-4 focus:ring-blue-50 outline-none shadow-2xl transition-all text-sm font-medium bg-white"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-6 top-6 text-slate-300 group-focus-within:text-primary transition-colors" size={28} />
          </div>
        </div>
        
        {/* Floating Icons for Rich Styling */}
        <div className="absolute top-20 right-[5%] text-primary/5 -rotate-12 animate-float hidden md:block"><FlaskConical size={280}/></div>
        <div className="absolute bottom-10 left-[5%] text-secondary/5 rotate-12 animate-float hidden md:block" style={{animationDelay: '1s'}}><ShieldCheck size={220}/></div>
      </header>

      {/* Exclusive Health Packages */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-10 w-2 bg-secondary rounded-full"></div>
          <h3 className="text-3xl font-black text-primary uppercase tracking-tighter">RD Premium Packages</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {packages.map(pkg => (
            <div key={pkg.id} className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-6 -right-6 bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center font-black text-xs pt-4 pr-4">
                {pkg.id}
              </div>
              <div>
                <h4 className="text-2xl font-black text-primary mb-4 leading-tight pr-10">{pkg.name}</h4>
                <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium">{pkg.details}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="bg-blue-50 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">80+ Parameters</span>
                  <span className="bg-green-50 text-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Home Collection</span>
                </div>
              </div>
              <div className="flex items-end justify-between pt-8 border-t border-slate-50">
                <div>
                  <p className="text-xs text-slate-300 line-through font-bold tracking-widest mb-1">₹{pkg.mrp}</p>
                  <p className="text-5xl font-black text-primary tracking-tighter italic">₹{pkg.price}</p>
                </div>
                <button 
                  onClick={() => handleBooking(pkg.name)}
                  className="bg-primary text-white p-5 rounded-2xl hover:bg-secondary transition-all shadow-xl shadow-blue-100 group-hover:-translate-y-2"
                >
                  <ArrowRight size={28} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Individual Test Directory */}
      <main id="tests" className="max-w-7xl mx-auto px-6 py-24 bg-white rounded-[4rem] shadow-sm border border-slate-50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
          <div className="text-left">
            <h3 className="text-4xl font-black text-primary uppercase tracking-tighter mb-3 italic">Test Directory</h3>
            <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px]">Real-time Digital Rate List</p>
          </div>
          {search && (
            <div className="mt-6 text-[11px] font-black bg-blue-50 text-primary px-5 py-2 rounded-full uppercase">
              {filteredTests.length} tests matching your search
            </div>
          )}
        </div>

        {filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTests.map((test) => (
              <div key={test.id} className="bg-slate-50/50 rounded-[2.5rem] border border-transparent hover:border-primary hover:bg-white p-8 flex flex-col justify-between transition-all duration-300 group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{test.category}</span>
                    <div className="bg-secondary/10 text-secondary p-2 rounded-xl group-hover:bg-secondary group-hover:text-white transition-all">
                      <Microscope size={18}/>
                    </div>
                  </div>
                  <h4 className="font-black text-xl text-slate-800 group-hover:text-primary transition-colors leading-tight mb-4 h-[3.5rem] overflow-hidden">
                    {test.name}
                  </h4>
                  <div className="flex items-center gap-2 mb-8">
                    <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-[9px] font-black uppercase flex items-center gap-1.5 italic">
                      <Zap size={12}/> 1 Hr Delivery
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <p className="text-[11px] text-slate-300 line-through font-black italic tracking-tighter">₹{test.mrp}</p>
                      <p className="text-4xl font-black text-primary tracking-tighter leading-none">₹{test.price}</p>
                    </div>
                    <button 
                      onClick={() => setActiveTest(test)}
                      className="flex items-center gap-1.5 text-primary text-[11px] font-black uppercase hover:text-secondary transition-colors"
                    >
                      <Info size={14}/> Details
                    </button>
                  </div>
                  <button 
                    onClick={() => handleBooking(test.name)}
                    className="w-full bg-white text-primary border-2 border-primary/10 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search className="text-slate-200" size={40} />
            </div>
            <p className="text-slate-400 font-black uppercase tracking-widest text-sm">No tests found matching your search</p>
            <button onClick={() => setSearch('')} className="text-primary font-black mt-6 underline uppercase italic text-xs hover:text-secondary">View All Investigations</button>
          </div>
        )}
      </main>

      {/* Modern Detailed Modal */}
      {activeTest && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-md">
          <div className="bg-white rounded-[3rem] p-10 max-w-lg w-full shadow-2xl relative animate-in zoom-in duration-300">
            <button onClick={() => setActiveTest(null)} className="absolute right-8 top-8 text-slate-300 hover:text-secondary transition-colors">
              <X size={32}/>
            </button>
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <HeartPulse className="text-primary" size={32}/>
            </div>
            <h3 className="text-3xl font-black text-primary uppercase mb-4 leading-tight">{activeTest.name}</h3>
            <div className="flex gap-4 mb-10">
              <span className="bg-secondary/5 text-secondary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-secondary/10">Clinical Detail</span>
            </div>
            <p className="text-slate-500 text-base leading-relaxed mb-12 font-medium">{activeTest.details}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-slate-50 p-4 rounded-2xl">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Standard Rate</p>
                <p className="text-xl font-black text-slate-300 line-through">₹{activeTest.mrp}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-2xl">
                <p className="text-[10px] font-black text-primary uppercase mb-1">Your Price</p>
                <p className="text-2xl font-black text-primary italic">₹{activeTest.price}</p>
              </div>
            </div>

            <button 
              onClick={() => { handleBooking(activeTest.name); setActiveTest(null); }}
              className="w-full bg-accent text-white py-6 rounded-3xl font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-2xl shadow-green-100 flex items-center justify-center gap-3"
            >
              Book via WhatsApp <ArrowRight size={20}/>
            </button>
          </div>
        </div>
      )}

      {/* Official Digital Rate List (PDF Replacement) */}
      {viewRateList && (
        <div className="fixed inset-0 z-[400] bg-white overflow-y-auto p-4 md:p-12 animate-in slide-in-from-bottom-20 duration-500">
          <div className="max-w-4xl mx-auto border-[12px] border-primary p-8 md:p-16 rounded-[4rem] relative shadow-2xl">
            <button onClick={() => setViewRateList(false)} className="fixed top-10 right-10 bg-secondary text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-[410] no-print">
              <X size={32}/>
            </button>
            
            <header className="text-center mb-20">
              <div className="flex justify-center items-center gap-4 mb-6">
                <Activity className="text-secondary w-16 h-16" />
                <div className="text-left">
                  <h1 className="text-primary font-black text-5xl uppercase italic tracking-tighter leading-none">DR RAMAN</h1>
                  <p className="text-secondary font-black text-xl tracking-[0.4em] uppercase">DIAGNOSTICS</p>
                </div>
              </div>
              <div className="h-2 w-32 bg-secondary mx-auto mb-8 rounded-full"></div>
              <h2 className="text-slate-800 text-2xl font-black uppercase tracking-widest">Official Investigation Rate List - 2026</h2>
            </header>

            <div className="space-y-12">
              <section>
                <h3 className="bg-slate-100 p-4 text-primary font-black uppercase text-sm tracking-[0.2em] mb-6 rounded-xl">Premium Packages</h3>
                <table className="w-full text-left">
                  <tbody className="text-slate-800 font-bold">
                    {packages.map(p => (
                      <tr key={p.id} className="border-b border-slate-100">
                        <td className="py-6 px-4">{p.name} ({p.id})</td>
                        <td className="py-6 px-4 text-right text-primary text-2xl font-black italic">₹{p.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <section>
                <h3 className="bg-slate-100 p-4 text-primary font-black uppercase text-sm tracking-[0.2em] mb-6 rounded-xl">Individual Investigations</h3>
                <table className="w-full text-left">
                  <tbody className="text-slate-800 font-bold">
                    {tests.map(t => (
                      <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="py-5 px-4">{t.name}</td>
                        <td className="py-5 px-4 text-right text-primary text-xl font-black italic">₹{t.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>

            <footer className="mt-24 pt-12 border-t-4 border-slate-100 grid md:grid-cols-2 gap-12">
              <div className="text-left">
                <h4 className="text-secondary font-black uppercase text-xs tracking-widest mb-4">Contact Center</h4>
                <p className="text-primary font-black text-2xl mb-1">{CONTACT.display}</p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Ayodhya 15KM Home Sample Collection Available</p>
              </div>
              <div className="text-left md:text-right">
                <h4 className="text-secondary font-black uppercase text-xs tracking-widest mb-4">Office Address</h4>
                <p className="text-primary font-bold text-xs max-w-[300px] md:ml-auto uppercase tracking-tighter leading-tight">
                  {CONTACT.address}
                </p>
              </div>
            </footer>
            
            <button 
              onClick={() => window.print()} 
              className="mt-20 w-full bg-primary text-white py-8 rounded-[2.5rem] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-secondary transition-all shadow-2xl no-print text-sm"
            >
              <Download size={24}/> Generate Printable PDF
            </button>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <footer className="bg-primary text-white pt-28 pb-12 px-6 text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-24 border-b border-white/10 pb-24">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Activity className="text-secondary w-10 h-10" />
              <h1 className="text-3xl font-black uppercase italic tracking-tighter leading-none">
                Dr Raman <span className="text-secondary">Diagnostic</span>
              </h1>
            </div>
            <p className="text-blue-100/60 text-base leading-relaxed mb-12 font-medium italic">
              Premium diagnostics managed by Aman Pandey. Bringing healthcare precision to Ayodhya with high-tech investigations.
            </p>
            <div className="flex gap-6">
               <a href={`tel:${CONTACT.phone}`} className="bg-white/10 p-6 rounded-[2rem] hover:bg-secondary transition-all border border-white/5 shadow-lg"><Phone size={28}/></a>
               <button onClick={() => window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank')} className="bg-white/10 p-6 rounded-[2rem] hover:bg-accent transition-all border border-white/5 shadow-lg"><MessageCircle size={28}/></button>
            </div>
          </div>
          
          <div className="space-y-10">
            <h4 className="font-black text-sm uppercase tracking-[0.4em] text-secondary border-b border-secondary/20 pb-2 inline-block">Quick Navigation</h4>
            <ul className="space-y-6 text-blue-100/80 text-sm font-black uppercase tracking-widest">
              <li onClick={() => setViewRateList(true)} className="hover:text-white cursor-pointer transition-all flex items-center gap-3"><ChevronRight size={16} className="text-secondary"/> Download Rate List</li>
              <li onClick={() => handleBooking('Home Collection')} className="hover:text-white cursor-pointer transition-all flex items-center gap-3"><ChevronRight size={16} className="text-secondary"/> Home Sample Collection</li>
              <li onClick={() => document.getElementById('tests').scrollIntoView()} className="hover:text-white cursor-pointer transition-all flex items-center gap-3"><ChevronRight size={16} className="text-secondary"/> Test Directory</li>
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="font-black text-sm uppercase tracking-[0.4em] text-secondary border-b border-secondary/20 pb-2 inline-block">Find Us</h4>
            <div className="space-y-10 text-sm">
              <div className="flex gap-6">
                <MapPin className="text-secondary shrink-0" size={32} />
                <p className="text-blue-100/80 font-black uppercase leading-tight tracking-tighter">
                  {CONTACT.address}<br/>
                  <span className="text-white bg-secondary/20 px-3 py-1 rounded-lg mt-4 inline-block italic text-[11px]">✓ 15KM Coverage Radius</span>
                </p>
              </div>
              <div className="flex gap-6">
                <Phone className="text-secondary shrink-0" size={32} />
                <p className="text-white font-black text-3xl tracking-tighter italic leading-none">{CONTACT.display}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <p className="text-[11px] uppercase font-black tracking-[0.3em]">
            © 2026 Dr Raman Diagnostic | Aman Pandey | All Rights Reserved
          </p>
          <div className="flex gap-10 text-[11px] font-black uppercase tracking-widest">
            <span>Privacy Protocol</span>
            <span>Service Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;