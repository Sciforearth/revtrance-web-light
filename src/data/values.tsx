import React from 'react';
import { Heart, Shield, Users, Lightbulb } from 'lucide-react';
import { ValueCardProps } from '../types';

export const values: ValueCardProps[] = [
  {
    icon: <Heart className="h-6 w-6 text-blue-600" />,
    title: "Human-Centric Approach",
    description: "We believe in creating solutions that prioritize human needs and experiences, making technology more accessible and meaningful.",
    delay: 0.2
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: "Transparency",
    description: "Our commitment to transparency ensures trust and open communication with our clients and within our products.",
    delay: 0.4
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Community Focus",
    description: "We build products that foster collaboration and strengthen communities, from pet care to asset management.",
    delay: 0.6
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-blue-600" />,
    title: "Innovation with Purpose",
    description: "Every innovation we pursue is guided by our mission to create positive social impact through technology.",
    delay: 0.8
  }
];