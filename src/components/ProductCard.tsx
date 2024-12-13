import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export default function ProductCard({ title, description, icon, link }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          {icon}
        </div>
        <ArrowRight className="h-5 w-5 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
}