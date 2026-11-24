// Fotografía editorial servida desde el propio dominio: sin dependencias
// externas en tiempo de carga, con dimensiones reales para evitar saltos
// de maquetación. Origen: Unsplash (photo-1546069901 y photo-1541519227354).
const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export const fotos = {
  hero: { src: `${basePath}/images/hero.jpg`, srcset: `${basePath}/images/hero-800.webp 800w, ${basePath}/images/hero.jpg 1600w`, sizes: '(max-width: 54rem) 100vw, 44rem', alt: 'Cuenco de ensalada con verduras variadas visto desde arriba', width: 1600, height: 1600 },
  menu: { src: `${basePath}/images/menu.jpg`, srcset: `${basePath}/images/menu-800.webp 900w, ${basePath}/images/menu.jpg 1600w`, sizes: '(max-width: 54rem) 100vw, 60rem', alt: 'Tostadas de aguacate con semillas servidas en un plato', width: 1600, height: 1064 },
  plato: { src: `${basePath}/images/plato.jpg`, srcset: `${basePath}/images/plato-800.webp 800w, ${basePath}/images/plato.jpg 1600w`, sizes: '(max-width: 54rem) 100vw, 44rem', alt: 'Bol de verduras asadas con granos y hojas verdes', width: 1600, height: 1067 },
} as const;

export const heroSlides = [fotos.hero, fotos.plato, fotos.menu] as const;
