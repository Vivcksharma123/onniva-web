import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/assets/',
          '/images/',
          '/css/',
          '/js/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/login/',
          '/dashboard/',
          '/private/',
          '/search',
        ],
      },
    ],
    sitemap: 'https://oniva.app/sitemap.xml',
  }
}