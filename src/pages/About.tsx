import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Code2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Revtrance</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are a product-based software company dedicated to creating innovative solutions
            that empower businesses and transform industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Target className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver cutting-edge software solutions that drive business growth and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Users className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">
              A diverse group of talented professionals passionate about creating impactful solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Lightbulb className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be a global leader in innovative software solutions that shape the future of technology.
            </p>
          </motion.div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded with a vision to revolutionize the software industry, Revtrance has grown into
            a leading provider of innovative solutions. Our journey began with a simple idea: to create
            software that makes a difference.
          </p>
          <p className="text-gray-600">
            Today, we proudly serve clients worldwide with our suite of products including Nodemongo,
            PetUs, 1management, and CoOWN. Each product represents our commitment to excellence and
            innovation in software development.
          </p>
        </div>
      </div>
    </div>
  );
}