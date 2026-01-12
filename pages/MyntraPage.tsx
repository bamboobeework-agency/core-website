import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Camera, Crown, Tag } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

interface LayoutContext {
  openAudit: () => void;
}

const MyntraPage: React.FC = () => {
  const { openAudit } = useOutletContext<LayoutContext>();

  return (
    <div className="pt-20">
      <section className="relative bg-[#ff3f6c] text-white py-24 px-6 overflow-hidden">
         <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
               <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold uppercase mb-6 leading-none"
               >
                 Myntra <br /> <span className="text-white">Fashion</span>
               </motion.h1>
               <p className="text-xl md:text-2xl font-medium mb-8 max-w-lg text-white/90">
                 Build a premium fashion brand. We handle studio coordination, trend-based cataloging, and Myntra PPC.
               </p>
               <button onClick={openAudit} className="bg-white text-[#ff3f6c] px-8 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors shadow-xl">
                 Launch Your Brand
               </button>
            </div>
            <div className="hidden md:flex justify-center">
                <Crown size={240} className="text-white/20" />
            </div>
         </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 hover:bg-pink-50 transition-colors rounded-xl">
                    <Camera className="mx-auto text-[#ff3f6c] mb-6" size={48} />
                    <h3 className="text-xl font-bold uppercase mb-3">Catalog Quality</h3>
                    <p className="text-gray-600">Myntra rejects low-quality images. We ensure your catalog meets the strict studio guidelines and aesthetic standards.</p>
                </div>
                <div className="text-center p-8 hover:bg-pink-50 transition-colors rounded-xl">
                    <TrendingUp className="mx-auto text-[#ff3f6c] mb-6" size={48} />
                    <h3 className="text-xl font-bold uppercase mb-3">Trend Optimization</h3>
                    <p className="text-gray-600">We align your listings with current fashion trends and search terms to maximize visibility during EORS and other events.</p>
                </div>
                <div className="text-center p-8 hover:bg-pink-50 transition-colors rounded-xl">
                    <Tag className="mx-auto text-[#ff3f6c] mb-6" size={48} />
                    <h3 className="text-xl font-bold uppercase mb-3">Sale Participation</h3>
                    <p className="text-gray-600">Strategic discounting and slot booking for Myntra's mega sale events to clear inventory and spike revenue.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MyntraPage;