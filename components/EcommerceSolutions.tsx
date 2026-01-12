import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const platforms = [
  {
    id: 'amazon',
    name: 'Amazon',
    color: 'hover:bg-[#FF9900]',
    textColor: 'group-hover:text-white',
    description: 'Dominate the world’s largest marketplace with our end-to-end account management, A+ content, and PPC expertise.',
    image: 'https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg',
    path:'/amazon'

  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    color: 'hover:bg-[#2874F0]',
    textColor: 'group-hover:text-white',
    description: 'Capture the Indian market with strategic cataloging, Smart Fulfilment optimization, and Flipkart Ads management.',
    image: 'https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/flipkart-logo-app-icon.png',
    path:'/flipkart'
  },
  {
    id: 'meesho',
    name: 'Meesho',
    color: 'hover:bg-[#d81b60]', 
    textColor: 'group-hover:text-white',
    description: 'Tap into the next billion users. We optimize your pricing and bulk cataloging to win on India’s fastest-growing social commerce app.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Meesho_logo.png',
    path:'/meesho'
  },
  {
    id: 'myntra',
    name: 'Myntra',
    color: 'hover:bg-[#ff3f6c]',
    textColor: 'group-hover:text-white',
    description: 'Position your fashion brand for premium success. We handle trend-focused listing, studio-quality imagery, and participation in mega sale events.',
    image: 'https://i.pinimg.com/736x/68/6d/c5/686dc532a1d5ba6a70057b87815eb929.jpg',
    path: '/myntra'
  }
];

const EcommerceSolutions: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 text-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-red-600 font-bold uppercase tracking-widest text-sm block mb-4"
            >
              Where We Deliver
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold uppercase leading-tight"
            >
              E-commerce <span className="text-red-600">Solutions</span>
            </motion.h2>
          </div>
          
          <motion.p 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-gray-600 max-w-md text-sm md:text-base text-right md:text-left"
          >
              We provide specialized growth strategies tailored to the unique algorithms and audiences of each major marketplace.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${platform.color} flex flex-col`}
            >
            <Link to={platform.path}>
              <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center transition-colors duration-500 group-hover:bg-white/20`}>
                    {/* <platform.icon className={`text-black transition-colors duration-500 ${platform.textColor}`} size={24} /> */}
                    <img 
                      src={platform.image} 
                      alt={`${platform.name} logo`}
                      className="w-full h-full object-contain"
                    />
                </div>
                <ArrowRight className={`text-gray-300 transform group-hover:translate-x-1 transition-all duration-500 ${platform.textColor}`} size={24} />
              </div>

              <h3 className={`text-2xl font-bold uppercase mb-4 transition-colors duration-500 ${platform.textColor}`}>
                {platform.name}
              </h3>
              
              <p className={`text-gray-600 text-sm leading-relaxed mb-6 flex-grow transition-colors duration-500 ${platform.textColor} group-hover:text-white/90`}>
                {platform.description}
              </p>

              <div className={`mt-auto pt-6 border-t border-gray-100 group-hover:border-white/20 transition-colors duration-500`}>
                  <span className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors duration-500 ${platform.textColor}`}>
                      Explore Growth <ArrowRight size={14} />
                  </span>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceSolutions;