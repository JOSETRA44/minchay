export interface DiaMenu {
  dia: string;
  desayuno: string;
  almuerzo: string;
  cena: string;
}

export const menu: readonly DiaMenu[] = [
  { dia: 'Lunes', desayuno: 'Avena con fruta y huevo', almuerzo: 'Pollo al horno con arroz y ensalada', cena: 'Sopa de verduras y tortilla' },
  { dia: 'Martes', desayuno: 'Tostadas con tomate y queso fresco', almuerzo: 'Lentejas guisadas con verduras', cena: 'Merluza con patatas y judías verdes' },
  { dia: 'Miércoles', desayuno: 'Yogur con manzana y avena', almuerzo: 'Albóndigas en salsa con puré de patata', cena: 'Crema de calabaza y tostada de queso' },
  { dia: 'Jueves', desayuno: 'Tortilla francesa y pan con tomate', almuerzo: 'Garbanzos con espinacas y huevo', cena: 'Pollo guisado con verduras' },
  { dia: 'Viernes', desayuno: 'Pan integral con requesón y pera', almuerzo: 'Pescado al horno con patatas y ensalada', cena: 'Pisto de verduras con huevo' },
];
