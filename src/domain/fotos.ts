const photo = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop`;

export const fotos = {
  hero: { src: photo('photo-1546069901-ba9599a7e63c'), alt: 'Cuenco de ensalada con verduras variadas visto desde arriba', width: 1600, height: 1067 },
  menu: { src: photo('photo-1541519227354-08fa5d50c44d'), alt: 'Tostadas de aguacate con semillas servidas en un plato', width: 1600, height: 1067 },
} as const;
