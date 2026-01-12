// import React from 'react';
// import { motion } from 'framer-motion';
// import { Store, Percent, Users, TrendingDown } from 'lucide-react';
// import { useOutletContext } from 'react-router-dom';

// interface LayoutContext {
//   openAudit: () => void;
// }

// const MeeshoPage: React.FC = () => {
//   const { openAudit } = useOutletContext<LayoutContext>();

//   return (
//     <div className="pt-20">
//       <section className="relative bg-[#d81b60] text-white py-24 px-6 overflow-hidden">
//          <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
//             <div>
//                <motion.h1 
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-5xl md:text-7xl font-bold uppercase mb-6 leading-none"
//                >
//                  Scale on <br /> <span className="text-white">Meesho</span>
//                </motion.h1>
//                <p className="text-xl md:text-2xl font-medium mb-8 max-w-lg text-white/90">
//                  Tap into Bharat. High volume, low margin, massive scale. We define the right pricing and cataloging strategy for social commerce.
//                </p>
//                <button onClick={openAudit} className="bg-white text-[#d81b60] px-8 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors shadow-xl">
//                  Get Started
//                </button>
//             </div>
//             <div className="hidden md:flex justify-center">
//                 <Store size={240} className="text-white/20" />
//             </div>
//          </div>
//       </section>

//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6">
//             <div className="grid md:grid-cols-2 gap-12">
//                 <div>
//                     <h3 className="text-3xl font-bold uppercase mb-6 text-[#d81b60]">Why Meesho?</h3>
//                     <p className="text-lg text-gray-700 mb-6">
//                         Meesho requires a completely different mindset than Amazon. It's about price discovery and unbranded search visibility.
//                     </p>
//                     <ul className="space-y-4">
//                         <li className="flex items-center gap-3">
//                             <Percent className="text-[#d81b60]" />
//                             <span className="font-bold">0% Commission Strategy</span>
//                         </li>
//                         <li className="flex items-center gap-3">
//                             <TrendingDown className="text-[#d81b60]" />
//                             <span className="font-bold">Price Recommendation Tooling</span>
//                         </li>
//                         <li className="flex items-center gap-3">
//                             <Users className="text-[#d81b60]" />
//                             <span className="font-bold">Reseller Network Optimization</span>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="bg-gray-100 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
//                     <h4 className="text-2xl font-bold uppercase mb-2">Zero Commission</h4>
//                     <p className="text-gray-600 mb-6">We help you pass the benefits to customers while maintaining healthy net margins.</p>
//                     <button onClick={openAudit} className="text-[#d81b60] font-bold uppercase border-b-2 border-[#d81b60]">Book Free Consultation</button>
//                 </div>
//             </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MeeshoPage;


import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Store, 
  Percent, 
  Users, 
  TrendingDown, 
  PackageCheck, 
  Megaphone, 
  ShieldCheck, 
  BarChart3 
} from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

interface LayoutContext {
  openAudit: () => void;
}

const MeeshoPage: React.FC = () => {
  const { openAudit } = useOutletContext<LayoutContext>();

  return (
    <div className="pt-20 font-sans text-gray-900">
      {/* --- SEO Configuration (Based on Competitor Analysis) --- */}
      <Helmet>
        <title>Meesho Seller Account Management Services | Scale Sales & ROI | Bamboobee</title>
        <meta 
          name="description" 
          content="Expert Meesho Account Management Services to 10x your sales. We handle Product Listing, Cataloging, Meesho Ads, and Inventory Management. Maximize profits on India's 0% commission platform." 
        />
        <meta 
          name="keywords" 
          content="Meesho Seller Account Management, Meesho Product Listing Services, Meesho Advertisement Management, Meesho Cataloging Charges, Reduce Meesho Returns, Gonukkad Alternative, Arvian Competitor" 
        />
        <link rel="canonical" href="https://yourdomain.com/meesho-services" />
        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Scale Your Business on Meesho | Expert Seller Management" />
        <meta property="og:description" content="Unlock Brand's potential. We optimize pricing, cataloging, and ads for high-volume sales on Meesho." />
      </Helmet>

      {/* --- Hero Section --- */}
      <section className="relative bg-[#d81b60] text-white py-24 px-6 overflow-hidden">
         <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
               <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold uppercase mb-6 leading-none"
               >
                 Scale on <br /> <span className="text-white">Meesho</span>
               </motion.h1>
               <p className="text-xl md:text-2xl font-medium mb-8 max-w-lg text-white/90">
                 Tap into Bharat. High volume, low margin, massive scale. We define the right pricing and cataloging strategy for social commerce success.
               </p>
               <button onClick={openAudit} className="bg-white text-[#d81b60] px-8 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors shadow-xl rounded-sm">
                 Get Free Account Audit
               </button>
            </div>
            <div className="hidden md:flex justify-center relative">
                <Store size={240} className="text-white/20" />
                {/* Contextual image tag for visual reinforcement of growth */}
                <div className="absolute -bottom-10 -right-10 opacity-50">
                   
                </div>
            </div>
         </div>
      </section>

      {/* --- Strategic Value Props (SEO: "Why Meesho" & "Commission") --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase mb-6 text-[#d81b60]">
                        Why Meesho Requires a Different Strategy
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Meesho requires a completely different mindset than Amazon or Flipkart. It is a discovery-led platform driven by unbranded search visibility and reseller networks. 
                        We help you navigate the <strong>Tier 2 & Tier 3 market</strong> nuances.
                    </p>
                    
                    <div className="my-8">
                        
                    </div>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="bg-[#d81b60]/10 p-3 rounded-full">
                                <Percent className="text-[#d81b60] w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl">0% Commission Strategy</h4>
                                <p className="text-gray-600">We restructure your pricing to maximize net margins, taking full advantage of the zero-commission model.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-[#d81b60]/10 p-3 rounded-full">
                                <TrendingDown className="text-[#d81b60] w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl">Price Recommendation Tooling</h4>
                                <p className="text-gray-600">Beat the "Cheapest Price" algorithm without bleeding money. We use data-driven pricing intelligence.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-[#d81b60]/10 p-3 rounded-full">
                                <Users className="text-[#d81b60] w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl">Reseller Network Optimization</h4>
                                <p className="text-gray-600">Make your catalog "share-friendly" for millions of resellers on WhatsApp and Facebook.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                
                {/* CTA Card */}
                <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-lg flex flex-col justify-center items-center text-center h-full">
                    <h4 className="text-2xl font-bold uppercase mb-4">Zero Commission = Higher Profit</h4>
                    <p className="text-gray-600 mb-8">
                        Most sellers miscalculate their settlement value. We help you pass benefits to customers while maintaining healthy net margins.
                    </p>
                    <button onClick={openAudit} className="text-[#d81b60] font-bold uppercase border-b-2 border-[#d81b60] pb-1 hover:text-black hover:border-black transition-all">
                        Book Free Consultation
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* --- Comprehensive Services (SEO: Detailed Keywords for Ranking) --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-900 mb-4">
                    End-to-End <span className="text-[#d81b60]">Account Management</span>
                </h2>
                <p className="text-gray-600 text-lg">
                    From brand approval to daily order processing, we handle the operational heavy lifting so you can focus on sourcing.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Service 1 */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <PackageCheck className="text-[#d81b60] w-10 h-10 mb-4" />
                    <h4 className="font-bold text-lg mb-2">Listing & Cataloging</h4>
                    <p className="text-sm text-gray-600">
                        SEO-optimized titles and descriptions to ensure your products appear in regional search queries. We handle bulk catalog uploads.
                    </p>
                </div>

                {/* Service 2 */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <Megaphone className="text-[#d81b60] w-10 h-10 mb-4" />
                    <h4 className="font-bold text-lg mb-2">Meesho Ads Management</h4>
                    <p className="text-sm text-gray-600">
                        Strategic ad spends to boost visibility. We monitor ROI daily to ensure you aren't burning cash on low-intent clicks.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <ShieldCheck className="text-[#d81b60] w-10 h-10 mb-4" />
                    <h4 className="font-bold text-lg mb-2">Brand & Compliance</h4>
                    <p className="text-sm text-gray-600">
                        Get Brand Approval and protect your listings from mapping. We handle trademark registry disputes and account health.
                    </p>
                </div>

                {/* Service 4 */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <BarChart3 className="text-[#d81b60] w-10 h-10 mb-4" />
                    <h4 className="font-bold text-lg mb-2">Returns Reduction</h4>
                    <p className="text-sm text-gray-600">
                        Analysis of RTO (Return to Origin) data to improve packaging and descriptions, saving you significant logistics costs.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- SEO Content Block (Hidden from main visual flow but crucial for indexing) --- */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold uppercase mb-6">Common Challenges We Solve</h3>
            <div className="grid md:grid-cols-2 gap-12 text-sm text-gray-600">
                <div>
                    <h4 className="font-bold text-gray-900 mb-2">Struggling with Listing Rejections?</h4>
                    <p className="mb-4">
                        Meesho's QC process can be tricky. Our experts understand the specific image guidelines and attribute requirements to get your catalog live in 24 hours.
                    </p>
                    <h4 className="font-bold text-gray-900 mb-2">High RTO & Returns?</h4>
                    <p>
                        Returns on Meesho can eat into profits. We implement specific packaging inserts and accurate sizing charts to align customer expectations and reduce return rates.
                    </p>
                </div>
                <div>
                     

[Image of supply chain logistics flowchart]

                    <p className="mt-4 italic">
                        "We don't just list products; we build a sustainable supply chain strategy."
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MeeshoPage;