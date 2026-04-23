export const SITE = {
  brand: 'J&C Studio',
  siteUrl: 'https://automatizacionwhatsappmedellin.com',
  city: 'Medellin, Colombia',
  whatsappNumber: '573001112233',
  whatsappText: 'Hola J&C Studio, quiero automatizar el WhatsApp de mi clinica estetica para generar mas citas.',
  email: 'hola@jycstudio.co',
  phone: '+57 300 111 2233'
} as const;

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappText)}`;

export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/como-funciona', label: 'Como funciona' },
  { href: '/casos-de-uso', label: 'Casos de uso' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' }
] as const;
