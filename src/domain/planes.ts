export interface Plan {
  id: string;
  nombre: string;
  descripcion: string;
  lugar: string;
}

export const planes: readonly Plan[] = [
  { id: 'universitario', nombre: 'Universitario', lugar: 'Centro de estudios', descripcion: 'Almuerzo y cena en tu centro de estudios, pensado para semanas de clase.' },
  { id: 'completo', nombre: 'Completo', lugar: 'Casa u otro lugar', descripcion: 'Desayuno, almuerzo y cena, los siete días, en casa o donde digas.' },
  { id: 'laboral', nombre: 'Laboral', lugar: 'Trabajo', descripcion: 'Almuerzo de lunes a viernes en tu trabajo, cena opcional.' },
];
