import { faqs } from '../domain/faqs';
import { planes } from '../domain/planes';
import { site, ruta } from './site';

export const metadata = {
  home: {
    title: 'Minchay — Comida por suscripción: desayuno, almuerzo y cena sin pedir cada día',
    description: 'Programa tu desayuno, almuerzo y cena con Minchay, una suscripción de comida casera semanal o mensual. En fase de lanzamiento.',
    path: '/',
  },
  planes: {
    title: 'Planes de comida por suscripción | Minchay',
    description: 'Compara los planes Universitario, Completo y Laboral de Minchay según las comidas, los días y el lugar de entrega.',
    path: '/planes/',
  },
  funcionamiento: {
    title: 'Cómo funciona la suscripción de comida | Minchay',
    description: 'Conoce cómo elegir tus horarios, cómo cocinamos por tandas y cómo se programan las entregas de comida casera.',
    path: '/como-funciona/',
  },
  preguntas: {
    title: 'Preguntas frecuentes sobre la suscripción | Minchay',
    description: 'Consulta qué sabemos sobre pausas, ausencias, alergias, cambios de dirección, permanencia y lanzamiento de Minchay.',
    path: '/preguntas-frecuentes/',
  },
  error: {
    title: 'Página no encontrada | Minchay',
    description: 'Esta página no está disponible. Vuelve al inicio de Minchay para consultar los planes y la lista de espera.',
    path: '/404.html',
  },
} as const;

export type Page = keyof typeof metadata;

export function structuredData(page: Page, base: URL) {
  const url = (path: string) => new URL(ruta(path), base).href;
  const context = 'https://schema.org';
  const organizationId = url('/#organizacion');

  switch (page) {
    case 'home':
      return {
        '@context': context,
        '@graph': [
          { '@type': 'Organization', '@id': organizationId, name: site.name, url: url('/'), logo: url('/favicon.svg') },
          { '@type': 'WebSite', name: site.name, url: url('/'), inLanguage: site.language, publisher: { '@id': organizationId } },
        ],
      };
    case 'preguntas':
      return {
        '@context': context,
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ pregunta, respuesta }) => ({
          '@type': 'Question', name: pregunta, acceptedAnswer: { '@type': 'Answer', text: respuesta },
        })),
      };
    case 'planes':
      return {
        '@context': context,
        '@type': 'ItemList',
        name: 'Planes de Minchay',
        itemListElement: planes.map(({ id, nombre, descripcion }, index) => ({
          '@type': 'ListItem', position: index + 1, name: nombre, description: descripcion, url: url('/planes/#' + id),
        })),
      };
  }
}
