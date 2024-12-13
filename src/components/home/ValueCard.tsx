import React from 'react';
import { motion } from 'framer-motion';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

export default function ValueCard({ icon, title, description, delay }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
    >
      <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}