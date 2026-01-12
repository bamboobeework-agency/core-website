import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Truck, Zap, Star, TrendingUp } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

interface LayoutContext {
  openAudit: () => void;
}

const FlipkartPage: React.FC = () => {
  const { openAudit } = useOutletContext<LayoutContext>();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-[#2874F0] text-white py-24 px-6 overflow-hidden">
         <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
               <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold uppercase mb-6 leading-none"
               >
                 Win on <br /> <span className="text-[#FFE500]">Flipkart</span>
               </motion.h1>
               <p className="text-xl md:text-2xl font-medium mb-8 max-w-lg text-white/90">
                 Unlock the potential of India's homegrown giant. We help you secure the Assured badge and dominate search results.
               </p>
               <button onClick={openAudit} className="bg-white text-[#2874F0] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#FFE500] hover:text-[#2874F0] transition-colors shadow-xl">
                 Start Selling More
               </button>
            </div>
            <div className="hidden md:flex justify-center">
                <ShoppingBag size={240} className="text-white/20" />
            </div>
         </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow border-t-4 border-[#2874F0]">
                    <Star className="text-[#2874F0] mb-4" size={32} />
                    <h3 className="text-xl font-bold uppercase mb-3">Flipkart Assured</h3>
                    <p className="text-gray-600">We optimize your inventory and fulfillment (Smart Fulfillment) to get the coveted F-Assured badge, boosting trust and visibility.</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow border-t-4 border-[#2874F0]">
                    <Zap className="text-[#2874F0] mb-4" size={32} />
                    <h3 className="text-xl font-bold uppercase mb-3">Flipkart Ads (PLA/PCA)</h3>
                    <p className="text-gray-600">Expert management of Product Listing Ads and PCA to ensure your products appear in the top slots for high-intent queries.</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow border-t-4 border-[#2874F0]">
                    <Truck className="text-[#2874F0] mb-4" size={32} />
                    <h3 className="text-xl font-bold uppercase mb-3">Inventory Sync</h3>
                    <p className="text-gray-600">Seamless management of regional inventory to ensure faster delivery times and lower cancellation rates.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default FlipkartPage;