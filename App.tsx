// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import EcommerceSolutions from './components/EcommerceSolutions';
// import Services from './components/Services';
// import Process from './components/Process';
// import CaseStudies from './components/CaseStudies';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';
// import AuditModal from './components/AuditModal';
// import StickyActions from './components/StickyActions';

// function App() {
//   const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

//   const openAudit = () => setIsAuditModalOpen(true);
//   const closeAudit = () => setIsAuditModalOpen(false);

//   return (
//     <div className="bg-white">
//       <Navbar onOpenAudit={openAudit} />
      
//       {/* 
//         Main content wrapper with margin-bottom to allow Footer Reveal 
//         The marginBottom matches the min-height of the footer (approx 100vh or less depending on design)
//         For a true reveal, the footer is fixed at bottom with z-index -1.
//         The content needs a background to cover the footer until the end.
//       */}
//       <div className="relative z-10 bg-white shadow-2xl mb-[100vh]">
//         <main>
//           <Hero onOpenAudit={openAudit} />
//           <EcommerceSolutions />
//           <Services />
//           <Process />
//           <CaseStudies />
//           <FAQ />
          
//           {/* A callout section before the footer reveal starts */}
//           <section className="py-20 bg-gray-100 text-center">
//              <div className="container mx-auto px-6">
//                <h3 className="text-3xl font-bold uppercase mb-6">Trusted by 100+ Brands</h3>
//                <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
//                   {/* Placeholders for brand logos */}
//                   <div className="text-2xl font-black text-gray-400">AMAZON</div>
//                   <div className="text-2xl font-black text-gray-400">FLIPKART</div>
//                   <div className="text-2xl font-black text-gray-400">MEESHO</div>
//                   <div className="text-2xl font-black text-gray-400">SHOPIFY</div>
//                   <div className="text-2xl font-black text-gray-400">MYNTRA</div>
//                </div>
//              </div>
//           </section>
//         </main>
//       </div>

//       {/* The Footer is Fixed at the bottom, revealed when the above div scrolls up */}
//       <div className="fixed bottom-0 left-0 w-full h-screen z-0">
//          <Footer />
//       </div>

//       <StickyActions onOpenAudit={openAudit} />
//       <AuditModal isOpen={isAuditModalOpen} onClose={closeAudit} />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AmazonPage from './pages/AmazonPage';
import FlipkartPage from './pages/FlipkartPage';
import MeeshoPage from './pages/MeeshoPage';
import MyntraPage from './pages/MyntraPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="amazon" element={<AmazonPage />} />
          <Route path="flipkart" element={<FlipkartPage />} />
          <Route path="meesho" element={<MeeshoPage />} />
          <Route path="myntra" element={<MyntraPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;