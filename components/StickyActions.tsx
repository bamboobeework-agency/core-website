import React from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface StickyActionsProps {
  onOpenAudit: () => void;
}

const StickyActions: React.FC<StickyActionsProps> = ({ onOpenAudit }) => {
  return (
    <div className="fixed right-4 bottom-8 z-50 flex flex-col gap-4 items-end">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.link/sg6q0s" // Replace with real number
        target="_blank"
        rel="noopener noreferrer"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="group flex items-center gap-2 p-3 bg-[#25D366] text-white rounded-full shadow-lg hover:pr-6 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <span className="hidden group-hover:inline-block font-medium whitespace-nowrap">Chat with Us</span>
        <MessageCircle size={24} />
      </motion.a>

      {/* Phone Call */}
      <motion.a
        href="tel:+91 9140215411" // Replace with real number
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring' }}
        className="group flex items-center gap-2 p-3 bg-black text-white rounded-full shadow-lg hover:pr-6 transition-all duration-300 border border-gray-800"
        aria-label="Call Us"
      >
        <span className="hidden group-hover:inline-block font-medium whitespace-nowrap">Call Now</span>
        <Phone size={24} />
      </motion.a>

      {/* Book Audit */}
      <motion.button
        onClick={onOpenAudit}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: 'spring' }}
        className="group flex items-center gap-2 p-3 bg-red-600 text-white rounded-full shadow-lg hover:pr-6 transition-all duration-300 shadow-red-600/30"
        aria-label="Book Audit"
      >
        <span className="hidden group-hover:inline-block font-medium whitespace-nowrap">Free Audit</span>
        <CalendarCheck size={24} />
      </motion.button>
    </div>
  );
};

export default StickyActions;