import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission
    alert("Thanks! We'll be in touch shortly for your audit.");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-lg p-8 rounded-xl shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold uppercase mb-2">Claim Your Free Audit</h3>
              <p className="text-gray-500 text-sm">
                Get a comprehensive 15-point inspection of your seller account health, listings, and ad performance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Business Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="john@yourbrand.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Store URL</label>
                   <input
                     type="url"
                     className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:outline-none focus:border-red-600 transition-colors"
                     placeholder="amazon.in/..."
                   />
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Platform</label>
                   <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:outline-none focus:border-red-600 transition-colors">
                     <option>Amazon</option>
                     <option>Flipkart</option>
                     <option>Shopify</option>
                     <option>Multiple</option>
                   </select>
                </div>
              </div>

              <div className="bg-red-50 p-3 rounded text-xs text-red-800 flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                <span>Our AI-powered tool will also run a preliminary check on your public listings during the manual audit.</span>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold uppercase py-4 hover:bg-black transition-colors"
              >
                Schedule My Audit
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuditModal;