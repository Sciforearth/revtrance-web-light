import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles } from 'lucide-react';
import ValuesSection from '../components/home/ValuesSection';
import ImpactSection from '../components/home/ImpactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Code2 className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Revtrance
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Building innovative software solutions with transparency and humanity at heart
            </p>
            <a
              href="#values"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Discover Our Values
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="h-8 w-8 text-blue-600" />
          </motion.div>
        </div>
      </div>

      <ValuesSection />
      <ImpactSection />

      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">
              Discover our suite of innovative software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product cards will be rendered here */}
          </div>
        </div>
      </section>
    </div>
  );
}