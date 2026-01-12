import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Target, PackageSearch, PenTool, BarChart3, ShieldCheck } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

interface LayoutContext {
  openAudit: () => void;
}

const AmazonPage: React.FC = () => {
  const { openAudit } = useOutletContext<LayoutContext>();

  const features = [
    { title: "Seller Central Management", desc: "Day-to-day operations, account health monitoring, and case log management.", icon: ShieldCheck },
    { title: "PPC Optimization (AMS)", desc: "Advanced keyword research, bid management, and ACOS reduction strategies.", icon: Target },
    { title: "FBA Inventory Planning", desc: "IPI score improvement, restocking recommendations, and stranded inventory fixes.", icon: PackageSearch },
    { title: "A+ Content & Storefront", desc: "High-converting EBC designs and brand store creation to boost brand equity.", icon: PenTool },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-[#FF9900] text-black py-24 px-6 overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 skew-x-12 translate-x-32" />
         <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
               <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold uppercase mb-6 leading-none"
               >
                 Amazon <br /> <span className="text-white">Growth Engine</span>
               </motion.h1>
               <p className="text-xl md:text-2xl font-medium mb-8 max-w-lg">
                 Scale your FBA business with data-driven PPC, premium A+ content, and expert account handling.
               </p>
               <button onClick={openAudit} className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors shadow-xl">
                 Audit My Amazon Store
               </button>
            </div>
            <div className="hidden md:flex justify-center">
                <ShoppingCart size={240} className="text-black/10" />
            </div>
         </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="mb-16">
                 <h2 className="text-4xl font-bold uppercase mb-4">Amazon Specific Services</h2>
                 <p className="text-gray-600 max-w-2xl">The Amazon marketplace is brutal. You need more than just listings; you need a strategy that covers every algorithm signal.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                {features.map((f, i) => (
                    <div key={i} className="p-8 border border-gray-200 hover:border-[#FF9900] transition-colors rounded-xl group">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF9900] group-hover:text-white transition-colors">
                            <f.icon size={24} />
                        </div>
                        <h3 className="text-2xl font-bold uppercase mb-3">{f.title}</h3>
                        <p className="text-gray-600">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Stat Strip */}
      <section className="bg-black text-white py-16">
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
             <div>
                <div className="text-5xl font-bold text-[#FF9900] mb-2">$50M+</div>
                <div className="text-sm uppercase tracking-widest text-gray-400">Ad Spend Managed</div>
             </div>
             <div>
                <div className="text-5xl font-bold text-[#FF9900] mb-2">35%</div>
                <div className="text-sm uppercase tracking-widest text-gray-400">Avg. ACOS Reduction</div>
             </div>
             <div>
                <div className="text-5xl font-bold text-[#FF9900] mb-2">3X</div>
                <div className="text-sm uppercase tracking-widest text-gray-400">Sales Growth (Yr 1)</div>
             </div>
          </div>
      </section>
    </div>
  );
};

export default AmazonPage;