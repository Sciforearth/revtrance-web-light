import React from 'react';
import { Database, PawPrint, BarChart3, Users } from 'lucide-react';
import { Product } from '../types';

export const products: Product[] = [
  {
    title: 'Nodemongo',
    description: 'A powerful database management solution built on Node.js and MongoDB, offering seamless data handling and scalability.',
    icon: <Database className="h-6 w-6 text-blue-600" />,
    link: 'https://revtrance.com/nodemongo'
  },
  {
    title: 'PetUs',
    description: 'A comprehensive pet care platform connecting pet owners with veterinarians and pet care services.',
    icon: <PawPrint className="h-6 w-6 text-blue-600" />,
    link: 'https://petus.revtrance.com'
  },
  {
    title: '1management',
    description: 'An all-in-one business management solution for streamlining operations and improving efficiency.',
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    link: 'https://1management.in'
  },
  {
    title: 'CoOWN',
    description: 'Revolutionary platform for collaborative ownership and management of assets.',
    icon: <Users className="h-6 w-6 text-blue-600" />,
    link: 'https://coown.revtrance.com'
  }
];