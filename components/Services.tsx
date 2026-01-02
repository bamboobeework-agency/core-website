import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Megaphone, FileCheck, PackageSearch, PenTool, LayoutDashboard } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Account Management',
    description: 'Complete end-to-end management of your Seller Central accounts on Amazon & Flipkart. We handle health, cases, and daily operations.',
    icon: LayoutDashboard,
  },
  {
    id: '2',
    title: 'Performance Marketing (PPC)',
    description: 'Data-driven ad campaigns designed to lower ACOS and skyrocket your ROAS. We optimize keywords continuously.',
    icon: Megaphone,
  },
  {
    id: '3',
    title: 'Cataloging & Listing',
    description: 'SEO-optimized product listings with high-volume keywords, crisp titles, and persuasive bullet points.',
    icon: ShoppingBag,
  },
  {
    id: '4',
    title: 'A+ Content / EBC',
    description: 'Premium visual storytelling. Custom designed A+ content modules that improve brand affinity and conversion rates.',
    icon: PenTool,
  },
  {
    id: '5',
    title: 'Reconciliation & Audits',
    description: 'We track every penny. Payment reconciliation, refund tracking, and inventory audits to prevent leakage.',
    icon: FileCheck,
  },
  {
    id: '6',
    title: 'Inventory Planning',
    description: 'Smart forecasting to prevent stockouts and overstocking. Keep your IPI score healthy.',
    icon: PackageSearch,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black text-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-transparent to-red-600 opacity-50"></div>
        
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 font-bold uppercase tracking-widest text-sm block mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold uppercase mb-6"
          >
            Comprehensive <br/> <span className="text-red-600">E-commerce Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400"
          >
            We don't just maintain accounts; we accelerate growth. From listing optimization to complex ad strategies, we cover it all.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111] p-8 border border-white/10 hover:border-red-600 hover:bg-[#1a1a1a] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <service.icon className="text-red-500 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;