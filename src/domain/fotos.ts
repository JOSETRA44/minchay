// Fotografía editorial servida desde el propio dominio: sin dependencias
// externas en tiempo de carga, con dimensiones reales para evitar saltos
// de maquetación. Origen: Unsplash (photo-1546069901 y photo-1541519227354).
const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export const fotos = {
  hero: { src: `${basePath}/images/hero.jpg`, alt: 'Cuenco de ensalada con verduras variadas visto desde arriba', width: 1600, height: 1600 },
  menu: { src: `${basePath}/images/menu.jpg`, alt: 'Tostadas de aguacate con semillas servidas en un plato', width: 1600, height: 1064 },
  plato: { src: `${basePath}/images/plato.jpg`, alt: 'Bol de verduras asadas con granos y hojas verdes', width: 1600, height: 1067 },
} as const;

export const heroSlides = [fotos.hero, fotos.plato, fotos.menu] as const;
