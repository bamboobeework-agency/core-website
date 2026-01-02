import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface AuditFormData {
  name: string;
  email: string;
  phone: string;
  storeUrl: string;
  platform: 'Amazon' | 'Flipkart' | 'Shopify' | 'Other';
}