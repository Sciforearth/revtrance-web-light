import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe } from 'lucide-react';

export default function ImpactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8" />
              <Globe className="h-8 w-8" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Making a Difference Through Technology</h2>
            <p className="text-lg text-blue-100 mb-8">
              Our commitment to transparency and humanity isn't just a statement – it's woven into every product we create. From helping pet owners find care to enabling collaborative ownership, we're building technology that brings people together.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">10K+</div>
                <div className="text-blue-100">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4+</div>
                <div className="text-blue-100">Impact Products</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative pt-[56.25%]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration"
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}