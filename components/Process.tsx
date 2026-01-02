import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  { 
    num: '01', 
    title: 'Audit & Analysis', 
    desc: 'We dive deep into your account health, listing quality, and competitor landscape.',
    icon: Search
  },
  { 
    num: '02', 
    title: 'Strategy Formation', 
    desc: 'A custom roadmap is created focusing on low-hanging fruits and long-term scaling.',
    icon: Compass
  },
  { 
    num: '03', 
    title: 'Execution', 
    desc: 'Our experts optimize listings, launch ads, and fix backend issues.',
    icon: Rocket
  },
  { 
    num: '04', 
    title: 'Scale & Report', 
    desc: 'We monitor KPIs daily, optimize for ROI, and provide weekly transparent reports.',
    icon: TrendingUp
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-red-600 font-bold uppercase tracking-widest text-sm block mb-4"
            >
              Our Methodology
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">How We Work</h2>
            <p className="text-gray-600">A proven framework for e-commerce success.</p>
          </div>
          <button className="hidden md:block text-red-600 font-bold uppercase tracking-widest hover:text-black transition-colors">
            View Case Studies &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-6 pt-8 border-l-2 border-gray-200 hover:border-red-600 transition-colors duration-300 group"
            >
              {/* Background Number */}
              <span className="text-7xl font-bold text-gray-100 absolute -top-6 right-4 -z-10 select-none group-hover:text-red-50 transition-colors">
                {step.num}
              </span>
              
              {/* Icon Container */}
              <div className="w-14 h-14 bg-red-600 text-white rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform duration-300">
                <step.icon size={28} />
              </div>

              <h3 className="text-xl font-bold uppercase mb-3">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;