import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyActions from './StickyActions';
import AuditModal from './AuditModal';
import ScrollToTop from './ScrollToTop';

const Layout: React.FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const openAudit = () => setIsAuditModalOpen(true);
  const closeAudit = () => setIsAuditModalOpen(false);

  return (
    <div className="bg-white">
      <ScrollToTop />
      <Navbar onOpenAudit={openAudit} />
      
      {/* 
        Main content wrapper with margin-bottom to allow Footer Reveal 
        The marginBottom matches the min-height of the footer (approx 100vh or less depending on design)
      */}
      <div className="relative z-10 bg-white shadow-2xl mb-[100vh]">
        <main>
            {/* Pass context to children (like Home) if they need to open the modal */}
            <Outlet context={{ openAudit }} />
            
            {/* Footer Revealer Buffer / Trusted Section */}
             <section className="py-20 bg-gray-100 text-center">
                 <div className="container mx-auto px-6">
                   <h3 className="text-3xl font-bold uppercase mb-6">Trusted by 100+ Brands</h3>
                   <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                      <div className="text-2xl font-black text-gray-400">AMAZON</div>
                      <div className="text-2xl font-black text-gray-400">FLIPKART</div>
                      <div className="text-2xl font-black text-gray-400">MEESHO</div>
                      <div className="text-2xl font-black text-gray-400">SHOPIFY</div>
                      <div className="text-2xl font-black text-gray-400">MYNTRA</div>
                   </div>
                 </div>
              </section>
        </main>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-screen z-0">
         <Footer />
      </div>

      <StickyActions onOpenAudit={openAudit} />
      <AuditModal isOpen={isAuditModalOpen} onClose={closeAudit} />
    </div>
  );
};

export default Layout;