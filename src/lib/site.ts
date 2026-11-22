// Prefijo de despliegue: '/' en dominio propio, '/minchay-web' en la
// preview de GitHub Pages (variable BASE_PATH en el workflow).
const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
export const ruta = (path: string) => `${basePath}${path}`;

export const site = {
  name: 'Minchay',
  locale: 'es_ES',
  language: 'es',
  waitlist: ruta('/#lista-de-espera'),
  cta: 'Quiero entrar en la lista de espera',
  subtitle: 'Minchay es una suscripción de alimentación: pagas una tarifa semanal o mensual y recibes desayuno, almuerzo y cena cada día, a la hora y en el lugar que elijas. Sin pedir, sin cocinar, sin pensar qué toca hoy.',
  navigation: [
    { href: ruta('/como-funciona/'), label: 'Cómo funciona' },
    { href: ruta('/planes/'), label: 'Planes' },
    { href: ruta('/preguntas-frecuentes/'), label: 'Preguntas frecuentes' },
  ],
} as const;
