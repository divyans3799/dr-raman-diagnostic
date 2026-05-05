import React, { useState, useMemo } from 'react';
import { 
  Search, Phone, MessageCircle, MapPin, FlaskConical, 
  ShieldCheck, Clock, Menu, ChevronRight, Activity,
  FileText, Home as HomeIcon, Zap, X, Download, Star
} from 'lucide-react';

const App = () => {
  const [search, setSearch] = useState('');
  const [viewRateList, setViewRateList] = useState(false);

  const CONTACT = {
    phone: "+919214037192",
    display: "+91 92140 37192",
    whatsapp: "919214037192",
    address: "Shop No. 129 Arundhati Complex Tedhibazar Chauraha-Ayodhya 224123"
  };

  // Updated Data with your specific prices
  const tests = [
    { id: 1, name: "Thyroid Profile Total (T3, T4, TSH)", price: 399, mrp: 800, category: "Hormonal", popular: true },
    { id: 2, name: "Vitamin D (25-Hydroxy)", price: 899, mrp: 1800, category: "Vitamin", popular: true },
    { id: 3, name: "Liver Function Test (LFT)", price: 599, mrp: 1000, category: "Routine" },
    { id: 4, name: "Kidney Function Test (KFT)", price: 799, mrp: 1100, category: "Routine" },
    { id: 5, name: "CBC (Complete Blood Count)", price: 299, mrp: 450, category: "Routine" },
    { id: 6, name: "HbA1c (Diabetes Screening)", price: 449, mrp: 600, category: "Diabetic" },
  ];

  const packages = [
    { id: 'rd1.1', name: "RD 1.1 - Essential Health", price: 999, mrp: 2500, details: "Basic screening including CBC, Sugar, and Kidney basics." },
    { id: 'rd1.2', name: "RD 1.2 - Advanced Care", price: 1299, mrp: 3500, details: "Full Routine + Thyroid + Lipid Profile." },
    { id: 'rd1.3', name: "RD 1.3 - Comprehensive Full Body", price: 1999, mrp: 5500, details: "Our most premium package. 80+ parameters covered." }
  ];

  const filteredTests = useMemo(() => {
    return tests.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const handleBooking = (name) => {
    const msg = encodeURIComponent(`Hello Dr Raman Diagnostic, I want to book: ${name}`);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-secondary selection:text-white">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-[10px] font-bold flex justify-between items-center sticky top-0 z-[100]">
        <span className="flex items-center gap-1"><MapPin size={10}/> Ayodhya 15km Radius Collection</span>
        <a href={`tel:${CONTACT.phone}`} className="hover:text-accent transition-colors uppercase tracking-tighter">Emergency: {CONTACT.display}</a>
      </div>

      {/* Glass Navbar */}
      <nav className="glass-nav border-b border-slate-100 sticky top-[28px] z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-secondary p-1.5 rounded-xl animate-pulse">
              <Activity className="text-white w-5 h-5" />
            </div>
            <div className="text-left">
              <h1 className="text-primary font-black text-xl tracking-tighter uppercase italic leading-none">Dr Raman</h1>
              <p className="text-secondary font-bold text-[8px] tracking-[0.2em] uppercase">Diagnostic</p>
            </div>
          </div>
          
          <div className="hidden md:flex gap-8">
            <button onClick={() => setViewRateList(true)} className="flex items-center gap-1 text-[10px] font-black text-slate-500 uppercase hover:text-primary transition-all">
              <FileText size={14}/> Download Rate List
            </button>
            <button onClick={() => handleBooking('Home Collection')} className="flex items-center gap-1 text-[10px] font-black text-slate-500 uppercase hover:text-primary transition-all">
              <HomeIcon size={14}/> Home Collection
            </button>
          </div>

          <button onClick={() => handleBooking('Inquiry')} className="bg-accent text-white px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl shadow-green-100 hover:scale-105 active:scale-95 transition-all">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero with Modern Search */}
      <section className="bg-white pt-16 pb-20 px-4 text-center overflow-hidden relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-block bg-blue-50 text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Aman Pandey Initiative
          </div>
          <h2 className="text-primary text-5xl md:text-7xl font-black leading-none mb-6 tracking-tighter">
            Smart Care. <br/>
            <span className="text-secondary italic underline decoration-primary underline-offset-8">1 Hr Delivery.</span>
          </h2>
          
          <div className="relative mt-12 max-w-lg mx-auto group">
            <input 
              type="text" 
              value={search}
              placeholder="Search tests (e.g. Thyroid, Vitamin)..."
              className="w-full p-5 pl-14 rounded-2xl border-2 border-slate-100 focus:border-primary focus:outline-none shadow-2xl shadow-blue-50 transition-all text-sm group-hover:border-slate-200"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-5 top-5 text-slate-300 group-focus-within:text-primary transition-colors" size={24} />
          </div>
        </div>
        <div className="absolute top-20 right-0 opacity-[0.03] rotate-12 animate-float"><FlaskConical size={300}/></div>
      </section>

      {/* Health Packages (New RD Packages) */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-black text-primary uppercase mb-10 text-left border-l-4 border-secondary pl-4">Exclusive RD Packages</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <div key={pkg.id} className="bg-gradient-to-br from-primary to-blue-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group hover:scale-[1.02] transition-all shadow-2xl">
              <Star className="absolute -top-4 -right-4 text-white/10 group-hover:text-white/20 transition-all" size={120} />
              <p className="text-[10px] font-black text-blue-200 uppercase mb-2 tracking-[0.2em]">{pkg.id}</p>
              <h4 className="text-2xl font-black mb-4 leading-tight">{pkg.name}</h4>
              <p className="text-blue-100/60 text-xs mb-8 font-medium">{pkg.details}</p>
              <div className="flex items-end justify-between border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs text-white/40 line-through">₹{pkg.mrp}</p>
                  <p className="text-4xl font-black tracking-tighter italic">₹{pkg.price}</p>
                </div>
                <button onClick={() => handleBooking(pkg.name)} className="bg-white text-primary p-4 rounded-2xl hover:bg-secondary hover:text-white transition-all">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Test Directory Grid */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-12 border-l-4 border-secondary pl-4">
          <h3 className="text-2xl font-black text-primary uppercase">Individual Tests</h3>
          {search && <span className="text-[10px] font-black text-slate-400">Found {filteredTests.length} matches</span>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTests.map((test) => (
            <div key={test.id} className="bg-white rounded-[2rem] border border-slate-100 p-8 flex flex-col justify-between hover:shadow-2xl transition-all group text-left relative">
              {test.popular && <span className="absolute top-4 right-4 bg-accent/10 text-accent text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest">Popular</span>}
              <div>
                <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-2">{test.category}</p>
                <h4 className="font-black text-lg group-hover:text-primary transition-colors leading-tight mb-6 h-[3rem]">{test.name}</h4>
                <div className="flex items-center gap-1 text-accent text-[9px] font-black uppercase italic mb-6">
                  <Zap size={10}/> 1 Hr Delivery
                </div>
              </div>
              <div className="flex justify-between items-end border-t border-slate-50 pt-6">
                <div>
                  <p className="text-[10px] text-slate-300 line-through font-black italic">₹{test.mrp}</p>
                  <p className="text-4xl font-black text-primary tracking-tighter">₹{test.price}</p>
                </div>
                <button onClick={() => handleBooking(test.name)} className="bg-slate-50 text-primary p-4 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Rate List View (The "PDF" Content) */}
      {viewRateList && (
        <div className="fixed inset-0 z-[200] bg-white overflow-y-auto p-4 md:p-10 animate-in fade-in slide-in-from-bottom-10">
          <div className="max-w-4xl mx-auto border-4 border-primary p-8 md:p-16 rounded-[3rem] relative shadow-2xl">
            <button onClick={() => setViewRateList(false)} className="fixed top-10 right-10 bg-secondary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-[210]"><X/></button>
            
            <div className="text-center mb-16">
              <div className="flex justify-center items-center gap-2 mb-4">
                <Activity className="text-secondary w-10 h-10" />
                <h1 className="text-primary font-black text-4xl uppercase italic tracking-tighter">DR RAMAN <span className="text-secondary">DIAGNOSTICS</span></h1>
              </div>
              <p className="text-slate-400 font-black text-xs uppercase tracking-[0.4em]">Official Rate List - 2026</p>
              <div className="h-1 w-20 bg-secondary mx-auto mt-6 rounded-full"></div>
            </div>

            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <th className="py-4 px-4">Investigation Name</th>
                  <th className="py-4 px-4 text-right">Special Rate (₹)</th>
                </tr>
              </thead>
              <tbody className="text-sm font-bold text-primary">
                {tests.map(t => (
                  <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-4">{t.name}</td>
                    <td className="py-5 px-4 text-right">₹{t.price}</td>
                  </tr>
                ))}
                {packages.map(p => (
                  <tr key={p.id} className="border-b border-slate-50 bg-blue-50/50">
                    <td className="py-5 px-4 font-black">{p.name}</td>
                    <td className="py-5 px-4 text-right font-black">₹{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-16 pt-10 border-t border-slate-100 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Samples collected across Ayodhya within 15KM radius</p>
              <div className="flex justify-center gap-10">
                <div className="text-left">
                  <p className="text-[10px] font-black text-secondary uppercase mb-1">Contact</p>
                  <p className="text-primary font-black">{CONTACT.display}</p>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-secondary uppercase mb-1">Address</p>
                  <p className="text-primary font-black text-[10px] max-w-[200px] leading-tight">{CONTACT.address}</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => window.print()} 
              className="mt-12 w-full bg-primary text-white py-6 rounded-[2rem] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-secondary transition-all no-print"
            >
              <Download size={20}/> Download as PDF / Print
            </button>
          </div>
        </div>
      }

      {/* Footer */}
      <footer className="bg-primary text-white py-20 px-4 text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20 border-b border-white/10 pb-20">
          <div>
            <h1 className="text-2xl font-black uppercase italic mb-8">Dr Raman <span className="text-secondary">Diagnostic</span></h1>
            <p className="text-blue-100/50 text-sm font-medium leading-relaxed mb-10 italic">Ayodhya's premium diagnostic experience by Aman Pandey.</p>
            <div className="flex gap-4">
              <a href={`tel:${CONTACT.phone}`} className="bg-white/10 p-5 rounded-[2rem] hover:bg-secondary transition-all"><Phone size={24}/></a>
              <button onClick={() => handleBooking('General Inquiry')} className="bg-white/10 p-5 rounded-[2rem] hover:bg-accent transition-all"><MessageCircle size={24}/></button>
            </div>
          </div>
          <div className="space-y-8">
            <h4 className="font-black text-xs uppercase tracking-[0.4em] text-secondary">Arundhati Complex</h4>
            <p className="text-blue-100/80 font-bold text-xs uppercase leading-tight tracking-tighter">
              {CONTACT.address}
            </p>
          </div>
          <div className="text-right">
             <p className="text-[10px] uppercase font-black tracking-widest opacity-20">
              © 2026 Dr Raman Diagnostic | Aman Pandey
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;