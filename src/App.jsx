import React, { useState, useMemo } from 'react';
import { 
  Search, Phone, MessageCircle, MapPin, FlaskConical, 
  ShieldCheck, Clock, Menu, ChevronRight, Activity,
  Info, Home as HomeIcon, Zap, X
} from 'lucide-react';

const App = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTest, setActiveTest] = useState(null); // For Details Modal

  const CONTACT = {
    phone: "+919214037192",
    display: "+91 92140 37192",
    whatsapp: "919214037192",
    address: "Shop No. 129 Arundhati Complex Tedhibazar Chauraha-Ayodhya 224123"
  };

  // Professional Pricing & Categories
  const tests = [
    { id: 1, name: "CBC (Complete Blood Count)", mrp: 450, price: 299, disc: "33% OFF", category: "Routine", details: "Includes Hemoglobin, WBC, Platelets, and 20+ other parameters." },
    { id: 2, name: "Thyroid Profile Total (T3, T4, TSH)", mrp: 800, price: 599, disc: "25% OFF", category: "Hormonal", details: "Screening for Hyperthyroidism and Hypothyroidism." },
    { id: 3, name: "HbA1c (Diabetes Screening)", mrp: 600, price: 449, disc: "25% OFF", category: "Diabetic", details: "3-month average blood sugar level for diabetes management." },
    { id: 4, name: "Vitamin D (25-Hydroxy)", mrp: 1800, price: 1299, disc: "28% OFF", category: "Vitamin", details: "Essential for bone health and immunity." },
    { id: 5, name: "Lipid Profile (Heart Health)", mrp: 950, price: 699, disc: "26% OFF", category: "Routine", details: "Measures Cholesterol, HDL, LDL, and Triglycerides." },
    { id: 6, name: "Liver Function Test (LFT)", mrp: 1000, price: 799, disc: "20% OFF", category: "Routine", details: "Checks protein levels, liver enzymes, and bilirubin." },
    { id: 7, name: "Kidney Function Test (KFT)", mrp: 1100, price: 849, disc: "23% OFF", category: "Routine", details: "Measures Urea, Creatinine, and Electrolytes." },
    { id: 8, name: "Vitamin B12", mrp: 1200, price: 899, disc: "25% OFF", category: "Vitamin", details: "Vital for nerve tissue health and brain function." },
  ];

  const filteredTests = useMemo(() => {
    return tests.filter(test => {
      const matchesSearch = test.name.toLowerCase().includes(search.toLowerCase());
      const matchesCat = selectedCategory === 'All' || test.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [search, selectedCategory]);

  const handleBooking = (testName) => {
    const msg = encodeURIComponent(`Hello Dr Raman Diagnostic, I want to book the ${testName} test.`);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Header Bar */}
      <div className="bg-primary text-white py-1.5 px-4 text-[10px] font-bold flex justify-between items-center sticky top-0 z-[100]">
        <span className="flex items-center gap-1"><MapPin size={10}/> Ayodhya Radius</span>
        <div className="flex gap-4">
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-1 hover:text-accent transition-colors"><Phone size={10}/> {CONTACT.display}</a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-[28px] z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-secondary p-1 rounded-lg">
              <Activity className="text-white w-5 h-5" />
            </div>
            <div className="text-left">
              <h1 className="text-primary font-black text-lg uppercase italic leading-none">Dr Raman</h1>
              <p className="text-secondary font-bold text-[8px] tracking-[0.2em] uppercase">Diagnostic</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => { setSelectedCategory('All'); document.getElementById('directory').scrollIntoView(); }}
              className={`text-[10px] font-black uppercase tracking-widest transition-all ${selectedCategory === 'All' ? 'text-primary underline underline-offset-4' : 'text-slate-400 hover:text-primary'}`}
            >
              Test Directory
            </button>
            <button 
              onClick={() => handleBooking('Home Collection')}
              className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-all flex items-center gap-1"
            >
              <HomeIcon size={12}/> Home Collection
            </button>
          </div>

          <button onClick={() => handleBooking('General Inquiry')} className="bg-accent text-white px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-tighter hover:bg-green-700 transition-all shadow-lg shadow-green-100">
            WhatsApp Booking
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-12 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-primary text-4xl md:text-6xl font-black leading-tight mb-4 tracking-tighter">
            Accurate. Affordable. <br/>
            <span className="text-secondary italic underline decoration-primary underline-offset-4">1 Hr Delivery.</span>
          </h2>
          
          <div className="relative mt-8 max-w-lg mx-auto group">
            <input 
              type="text" 
              value={search}
              placeholder="Search for blood tests..."
              className="w-full p-4 pl-12 rounded-2xl border-2 border-slate-100 focus:border-primary focus:outline-none shadow-xl shadow-blue-50 transition-all text-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-4 top-4 text-slate-300 group-focus-within:text-primary transition-colors" size={20} />
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <main id="directory" className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-l-4 border-secondary pl-6">
          <div className="text-left">
            <h2 className="text-2xl font-black text-primary uppercase">Test Directory</h2>
            <p className="text-slate-400 font-bold text-[9px] uppercase tracking-widest">Verified by Aman Pandey</p>
          </div>
          <div className="flex gap-2 mt-4">
            {['All', 'Routine', 'Hormonal', 'Diabetic'].map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-md text-[9px] font-black uppercase transition-all ${selectedCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-white text-slate-400 hover:bg-slate-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTests.map((test) => (
            <div key={test.id} className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group p-6 flex flex-col justify-between text-left">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">{test.category}</span>
                  <span className="bg-secondary text-white text-[9px] px-2 py-0.5 rounded-full font-black shadow-md shadow-red-100 animate-pulse">{test.disc}</span>
                </div>
                <h4 className="font-black text-lg group-hover:text-primary transition-colors leading-tight mb-2 min-h-[2.5rem]">
                  {test.name}
                </h4>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-accent flex items-center gap-1 text-[9px] font-bold uppercase italic"><Zap size={10}/> 1 Hr Delivery</span>
                </div>
              </div>
              
              <div className="border-t border-slate-50 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-[10px] text-slate-300 line-through font-black italic tracking-tighter">₹{test.mrp}</p>
                    <p className="text-3xl font-black text-primary tracking-tighter leading-none">₹{test.price}</p>
                  </div>
                  <button 
                    onClick={() => setActiveTest(test)}
                    className="flex items-center gap-1 text-primary text-[10px] font-black uppercase hover:underline"
                  >
                    <Info size={12}/> Details
                  </button>
                </div>
                <button 
                  onClick={() => handleBooking(test.name)}
                  className="w-full bg-primary text-white py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary transition-all flex items-center justify-center gap-2"
                >
                  Book Now <ChevronRight size={14}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Details Modal (Dynamic Visibility) */}
      {activeTest && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
          <div className="bg-white rounded-[2.5rem] p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button onClick={() => setActiveTest(null)} className="absolute right-6 top-6 text-slate-400 hover:text-secondary"><X/></button>
            <h3 className="text-2xl font-black text-primary uppercase mb-2 leading-tight">{activeTest.name}</h3>
            <span className="text-[10px] font-black text-secondary bg-red-50 px-3 py-1 rounded-full uppercase mb-6 inline-block tracking-widest">Test Information</span>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">{activeTest.details}</p>
            <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-4 mb-8">
              <div className="bg-green-100 p-2 rounded-lg text-accent"><ShieldCheck size={20}/></div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Samples are processed under expert supervision.</p>
            </div>
            <button 
              onClick={() => { handleBooking(activeTest.name); setActiveTest(null); }}
              className="w-full bg-accent text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl shadow-green-100"
            >
              Confirm Booking via WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-10 px-4 text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          <div>
            <h1 className="text-xl font-black uppercase italic mb-4">Dr Raman <span className="text-secondary">Diagnostic</span></h1>
            <p className="text-blue-100/50 text-xs font-medium mb-6 leading-relaxed italic">"Trust the Experts" — A premium initiative by Aman Pandey.</p>
            <div className="flex gap-2">
              <a href={`tel:${CONTACT.phone}`} className="bg-white/5 p-3 rounded-xl hover:bg-secondary transition-all"><Phone size={18}/></a>
              <button onClick={() => window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank')} className="bg-white/5 p-3 rounded-xl hover:bg-accent transition-all"><MessageCircle size={18}/></button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-secondary">Office Address</h4>
            <div className="flex gap-3">
              <MapPin className="text-secondary shrink-0" size={18} />
              <p className="text-blue-100/80 font-bold text-[11px] leading-tight tracking-tight uppercase">
                {CONTACT.address}
              </p>
            </div>
          </div>
          <div className="text-right">
             <p className="text-[9px] uppercase font-black tracking-widest opacity-30 leading-loose">
              © 2026 Dr Raman Diagnostic | Aman Pandey<br/>Ayodhya, Uttar Pradesh
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;