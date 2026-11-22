import { fotos } from './fotos';

export const horarios = [
  { comida: 'Desayuno', hora: '7:00', datetime: '07:00', foto: fotos.menu },
  { comida: 'Almuerzo', hora: '13:00', datetime: '13:00', foto: fotos.plato },
  { comida: 'Cena', hora: '19:30', datetime: '19:30', foto: fotos.hero },
] as const;
