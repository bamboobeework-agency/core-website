import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <div
      className="relative z-0 min-h-screen flex items-center justify-center bg-black text-white p-6 py-20"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Links & Info */}
        <div className="flex flex-col justify-center h-full">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold uppercase leading-none mb-8"
          >
            Ready to <br />
            <span className="text-red-600">Scale Up?</span>
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div>
                <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    Core Services
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-red-600 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/> Amazon Account Management</a></li>
                    <li><a href="#" className="hover:text-red-600 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/> Flipkart Account Management</a></li>
                    <li><a href="#" className="hover:text-red-600 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/> Meesho Account Management</a></li>
                    <li><a href="#" className="hover:text-red-600 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/> Quick Commerce (Blinkit/Zepto)</a></li>
                    <li><a href="#" className="hover:text-red-600 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/> D2C & Shopify Growth</a></li>
                    <li><a href="#" className="hover:text-red-600 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/> PPC & Performance Marketing</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                     <span className="w-2 h-2 bg-white rounded-full"></span>
                     Company
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li><a href="#about" className="hover:text-white transition-colors">About Agency</a></li>
                    <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                    <li><a href="#process" className="hover:text-white transition-colors">Process & Methodology</a></li>
                    <li><a href="#case-studies" className="hover:text-white transition-colors">Success Stories</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                </ul>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 pt-8 border-t border-white/10">
             <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <Phone size={18} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Call Us</p>
                    <p className="text-lg font-bold">+91 91402 15411</p>
                </div>
             </div>
             
             <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <Mail size={18} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Email Us</p>
                    <p className="text-lg font-bold">bamboobee.work@gmail.com</p>
                </div>
             </div>

             <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <MapPin size={18} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Visit Us</p>
                    <p className="text-lg font-bold">Kanpur, Uttar Pradesh, IN</p>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: Links and Form */}
        <div className="bg-[#111] p-8 md:p-12 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold uppercase mb-6">Quick Connect</h3>
            <form className="space-y-4 mb-8">
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-black border border-white/20 p-4 text-white focus:border-red-600 focus:outline-none transition-colors"
                />
                 <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-black border border-white/20 p-4 text-white focus:border-red-600 focus:outline-none transition-colors"
                />
                <textarea 
                    placeholder="Message" 
                    rows={4}
                    className="w-full bg-black border border-white/20 p-4 text-white focus:border-red-600 focus:outline-none transition-colors"
                ></textarea>
                <button className="w-full bg-white text-black font-bold uppercase py-4 hover:bg-red-600 hover:text-white transition-colors">
                    Send Message
                </button>
            </form>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
                <p className="text-sm text-gray-500 text-center md:text-left">&copy; 2026 BambooBee. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Twitter size={20} /></a>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;