import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  color: string;
}

const cases: CaseStudy[] = [
  {
    id: '1',
    category: 'Fashion & Apparel',
    title: 'Scaling a D2C Streetwear Brand',
    metric: '+240%',
    metricLabel: 'YoY Revenue',
    description: 'Optimized A+ content and implemented aggressive PPC strategies to capture market share in a saturated niche.',
    color: 'bg-red-600',
  },
  {
    id: '2',
    category: 'Home & Kitchen',
    title: 'Kitchenware Giant Amazon Launch',
    metric: '5x',
    metricLabel: 'ROAS Achieved',
    description: 'From zero to ₹50L monthly revenue in 3 months through strategic cataloging and Vine program enrollment.',
    color: 'bg-black',
  },
  {
    id: '3',
    category: 'Health & Supplements',
    title: 'Reviving a Stagnant Supplement Brand',
    metric: '-45%',
    metricLabel: 'ACOS Reduction',
    description: 'Audit revealed wasted ad spend. We restructured campaigns and focused on high-intent keywords.',
    color: 'bg-zinc-800',
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-red-600 font-bold uppercase tracking-widest text-sm block mb-4"
              >
                Proven Results
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold uppercase text-black"
              >
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">Stories</span>
              </motion.h2>
           </div>
           <motion.a 
             href="#contact" 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest hover:text-red-600 transition-colors mt-6 md:mt-0"
           >
             View All Cases <ArrowUpRight size={20} />
           </motion.a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Fake Image Placeholder Area */}
              <div className={`h-48 ${study.color} relative overflow-hidden shrink-0`}>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 <div className="absolute bottom-6 left-6 text-white z-10">
                    <p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">{study.category}</p>
                    <h3 className="text-xl font-bold leading-tight max-w-[90%]">{study.title}</h3>
                 </div>
                 {/* Hover effect element */}
                 <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 
                 <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="text-white" size={20} />
                 </div>
              </div>

              <div className="p-8 flex flex-col grow">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-red-600">{study.metric}</span>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">{study.metricLabel}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 grow">
                  {study.description}
                </p>
                <div className="w-full h-0.5 bg-gray-100 group-hover:bg-red-600 transition-colors duration-300" />
                <div className="mt-6">
                    <span className="text-sm font-bold uppercase tracking-widest text-black group-hover:text-red-600 transition-colors flex items-center gap-2 cursor-pointer">
                        Read Case Study <ArrowUpRight size={16} />
                    </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="#contact" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest hover:text-red-600 transition-colors">
             View All Cases <ArrowUpRight size={20} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;