// types/service.ts
// types/service.ts
import type { ReactNode } from 'react';

export interface ServiceImage {
  url: string;
  caption: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits?: string[];
  useCases?: string[];
  images?: ServiceImage[];
}