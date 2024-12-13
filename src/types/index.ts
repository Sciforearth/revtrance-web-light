import { ReactNode } from 'react';

export interface Product {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

export interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}