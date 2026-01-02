import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, BarChart3, FileCheck, Target, Layout, Users } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 skew-x-12 translate-x-32 hidden lg:block" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="h-0.5 w-12 bg-red-600 inline-block"></span>
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">E-commerce Growth Partners</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold uppercase leading-[1.1] mb-8 text-black">
            Scale Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Online Empire
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
            Stop struggling with account health and stagnant sales. We manage, optimize, and scale your Amazon, Flipkart, and D2C brands with data-driven strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenAudit}
              className="bg-red-600 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-xl shadow-red-600/20"
            >
              Get Free Store Audit <ArrowRight size={20} />
            </button>
            <a
              href="#services"
              className="border-2 border-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors flex items-center justify-center"
            >
              Explore Services
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-gray-500 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-black" size={18} />
              <span>Account Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="text-black" size={18} />
              <span>Claims Management</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-black" size={18} />
              <span>Sales Growth</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
            <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-12">
                     {/* Box 1: Revenue Growth */}
                     <div className="bg-black text-white p-6 rounded-lg shadow-2xl relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-4">
                            <BarChart3 className="text-red-600" size={32} />
                            <div className="w-12 h-6 bg-red-600/20 rounded flex items-center justify-center">
                                <span className="text-xs text-red-500 font-bold">+24%</span>
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold mb-1">250%</h3>
                        <p className="text-sm text-gray-400">Avg. Revenue Growth</p>
                        
                        {/* Decorative Graphic: Sparkline */}
                        <svg className="absolute bottom-0 right-0 w-32 h-16 text-white/5 opacity-50 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 100 50" preserveAspectRatio="none">
                           <path d="M0 50 L20 30 L40 40 L60 10 L80 20 L100 0 V50 H0 Z" fill="currentColor" />
                        </svg>
                     </div>

                     {/* Box 2: A+ Content */}
                     <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-bl-full -z-10 transition-all group-hover:scale-125" />
                        <Layout className="text-red-600 mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2 text-black">A+ Content</h3>
                        <p className="text-sm text-gray-500 mb-4">Enhanced brand storytelling that converts.</p>
                        
                        {/* Decorative Graphic: Mini Layout */}
                        <div className="flex gap-1 opacity-50">
                            <div className="w-8 h-8 bg-gray-200 rounded-sm"></div>
                            <div className="flex-1 space-y-1">
                                <div className="h-2 bg-gray-200 rounded w-full"></div>
                                <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="space-y-4">
                     {/* Box 3: PPC Mastery */}
                     <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 h-64 flex flex-col justify-end bg-gradient-to-b from-transparent to-red-50 relative overflow-hidden group">
                        <div className="absolute top-6 left-6">
                            <Target className="text-red-600 mb-2" size={32} />
                        </div>
                        
                        {/* Decorative Graphic: Target Circles */}
                        <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                             <div className="w-16 h-16 rounded-full border-4 border-red-600 flex items-center justify-center">
                                 <div className="w-8 h-8 rounded-full bg-red-600"></div>
                             </div>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-xl font-bold mb-2 text-black">PPC Mastery</h3>
                            <p className="text-sm text-gray-500">Lower ACOS, Higher ROAS.</p>
                        </div>
                     </div>

                     {/* Box 4: Brands Managed */}
                     <div className="bg-red-600 text-white p-6 rounded-lg shadow-2xl relative overflow-hidden">
                        <div className="flex justify-between items-center mb-4">
                             <Users size={32} className="text-white/80" />
                             <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-red-600"></div>
                                <div className="w-8 h-8 rounded-full bg-white/40 border-2 border-red-600"></div>
                                <div className="w-8 h-8 rounded-full bg-white/60 border-2 border-red-600"></div>
                             </div>
                        </div>
                        <h3 className="text-xl font-bold mb-1">500+</h3>
                        <p className="text-sm text-white/80">Brands Managed</p>
                        
                        {/* Decorative Pattern */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                     </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-dashed border-gray-200 -z-10 rounded-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;