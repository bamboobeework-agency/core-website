import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What does your Free Store Audit include?",
    answer: "Our 15-point audit covers listing quality, keyword ranking, PPC performance, account health, and inventory efficiency. We provide a detailed report with actionable insights to immediately improve your sales."
  },
  {
    question: "Do you work with new sellers?",
    answer: "Yes! We specialize in launching brands on Amazon and Flipkart. From account setup and brand registry to your first sale, we handle the entire launch process."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including a fixed monthly retainer or a performance-based % of revenue model, depending on your current scale and goals."
  },
  {
    question: "How long does it take to see results?",
    answer: "While some optimizations (like listing fixes) show results in weeks, sustainable growth typically takes 3-6 months. Our PPC strategies usually show improved ROAS within the first month."
  },
  {
    question: "Do you handle suspension cases?",
    answer: "Absolutely. Our expert team drafts customized Plans of Action (POA) to reinstate suspended accounts and listings efficiently."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
           <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-600 font-bold uppercase tracking-widest text-sm block mb-4"
          >
            Common Queries
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold uppercase mb-4"
          >
            Frequently Asked <span className="text-red-600">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
                key={index} 
                className="border-b border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
              >
                <span className={`text-lg font-bold uppercase tracking-wide transition-colors ${activeIndex === index ? 'text-red-600' : 'text-black group-hover:text-red-600'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-red-600 text-white' : 'bg-gray-100 text-black group-hover:bg-red-600 group-hover:text-white'}`}>
                  {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;