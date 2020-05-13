import React, { memo } from 'react'

import ServiceOption from './ServiceOption'

import './ServiceOptions.scss'

const options = [
  {
    id: 'essential',
    title: 'Essential',
    copy: 'Perfect for clean, light, and interactive websites.',
    features: ['Lightweight and Clean', 'Basic SEO', '1-4 pages', null]
  },
  {
    id: 'balanced',
    title: 'Balanced',
    copy:
      'Perfect for more complicated websites with more content and rich interactions.',
    features: ['Clean Design', 'Interactive', 'Basic SEO', '5-10 pages']
  },
  {
    id: 'advanced',
    title: 'Advanced',
    copy: 'Perfect for more complicated products, like e-commerce or web apps.',
    features: [
      'Fast and Dynamic',
      'API/Database Integration',
      'Social Media API',
      'Unlimited Pages'
    ]
  }
]

const ServiceOptions = memo(() => (
  <section className="services">
    {options.map((option: any) => (
      <ServiceOption key={option.id} {...option} />
    ))}
  </section>
))

export default ServiceOptions
