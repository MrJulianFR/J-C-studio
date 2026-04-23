import type { APIRoute } from 'astro';

const routes = [
  '/',
  '/servicios',
  '/como-funciona',
  '/casos-de-uso',
  '/blog',
  '/blog/chatbot-whatsapp-colombia-clinicas-esteticas',
  '/blog/automatizacion-whatsapp-clinicas-medellin',
  '/blog/citas-automaticas-clinicas-whatsapp',
  '/contacto'
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://automatizacionwhatsappmedellin.com';
  const now = new Date().toISOString();

  const urls = routes
    .map((route) => {
      return [
        '<url>',
        `  <loc>${base}${route}</loc>`,
        `  <lastmod>${now}</lastmod>`,
        '  <changefreq>weekly</changefreq>',
        route === '/' ? '  <priority>1.0</priority>' : '  <priority>0.8</priority>',
        '</url>'
      ].join('\n');
    })
    .join('\n');

  const xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', urls, '</urlset>'].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
