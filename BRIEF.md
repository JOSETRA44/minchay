# Minchay — Brief de construcción web v1

## Qué es
Minchay es una startup de alimentación por suscripción. El cliente paga una tarifa
semanal o mensual y recibe desayuno, almuerzo y cena todos los días, en horarios y
lugares programados (casa, universidad o trabajo), sin hacer pedidos a diario.
Comida casera a precio cerrado, posible por compras por volumen y rutas de entrega
programadas (no repartos sueltos bajo demanda).

Dato de marca verificado: en quechua, «mincha» es «pasado mañana». Minchay piensa
en tu pasado mañana: la comida de los próximos días queda resuelta hoy.

## Estado real (regla de honestidad)
Startup en fase de lanzamiento. La web NO debe inventar: precios cerrados, cifras
de clientes, testimonios, valoraciones, logos de empresas ni cobertura que no
exista. La conversión v1 es la **lista de espera / registro de interés** con
ciudad, zona y plan de interés. Los planes se describen por contenido, sin precio
inventado: se marca «precio de lanzamiento por confirmar» donde iría el precio.

## Referencia: designcanada.com — qué se toma y qué no
Se toma:
- Tipografía editorial enorme, titulares que ocupan la pantalla, jerarquía brutal.
- Ritmo documental: secciones a todo ancho, mucho aire, imágenes grandes.
- Paleta restringida y con carácter; un solo color de acento.
- Apariciones al hacer scroll (reveal sobrio), navegación mínima.
- Listas con nombres propios y datos concretos en vez de eslóganes vacíos.
No se toma: que sea una web de un documental/película, su paleta exacta, ni su
estructura de «entradas»; Minchay vende un servicio semanal, no un evento.

## Stack decidido (y por qué)
- **Astro 5 + TypeScript** (salida estática): SEO y Core Web Vitals superiores a
  un SPA; HTML semántico servido sin JavaScript salvo islas puntuales.
- **CSS propio con variables** (sin Tailwind): la estética utilitaria por defecto
  es una de las huellas que hacen que una web «parezca de IA».
- Fuentes: **Fraunces** (titulares, serif editorial con carácter casero) y
  **Archivo** (texto/UI), vía @fontsource para no depender de Google Fonts en runtime.
- Animaciones: IntersectionObserver propio (~30 líneas), `prefers-reduced-motion`
  respetado. Nada de librerías de animación pesadas.
- Imágenes: fotografía editorial real de comida casera (URLs de Unsplash con
  `?q=80&w=1600&auto=format&fit=crop`), siempre con `alt` descriptivo en español
  y dimensiones declaradas. Si una URL falla, fondo de color cálido, nunca rota visualmente.

## Arquitectura limpia (adaptada a un sitio Astro)
```
src/
  domain/        # datos y tipos puros, sin framework: planes.ts, menu.ts, faqs.ts, horarios.ts
  lib/           # seo.ts (metadatos + JSON-LD), site.ts (constantes de marca/contacto)
  components/
    layout/      # Header.astro, Footer.astro
    ui/          # Reveal.astro, SectionHeading.astro, WaitlistForm.astro
    sections/    # Hero, Horarios, ComoFunciona, MenuSemana, ParaQuien, Planes, PorQueFunciona, Nombre, Faq, CtaFinal
  layouts/       # BaseLayout.astro (head SEO completo)
  pages/         # index.astro, planes.astro, como-funciona.astro, preguntas-frecuentes.astro, 404.astro
  styles/        # global.css (tokens + base + utilidades mínimas)
public/          # robots.txt, favicon.svg, og.jpg (placeholder tipográfico), sitemap vía @astrojs/sitemap
```
Regla: las secciones no contienen datos; consumen `domain/`. Las páginas solo componen.

## Diseño
- Tokens: crema `#FAF5EE`, tinta cálida `#201713`, tomate quemado `#B3401E`
  (acento único), oliva apagado `#5B6236` solo como apoyo en etiquetas,
  línea `#E5DCCF`.
- Titulares Fraunces 600, tamaños fluidos con clamp(); cuerpo Archivo 17–18px.
- Nada de: degradados morados/azules, tarjetas idénticas con icono en círculo,
  emojis en la interfaz, «¡Descubre el poder de…!», insignias flotantes genéricas,
  contadores inventados, testimonios falsos.
- Detalles con oficio: numeración editorial (01, 02, 03), reglas finas entre
  secciones, horarios con hora exacta, menú de ejemplo con platos nombrados.

## Copy (es-ES, claro y concreto) — textos base obligatorios
- H1: «La comida de toda tu semana, resuelta hoy.»
- Sub: «Minchay es una suscripción de alimentación: pagas una tarifa semanal o
  mensual y recibes desayuno, almuerzo y cena cada día, a la hora y en el lugar
  que elijas. Sin pedir, sin cocinar, sin pensar qué toca hoy.»
- CTA principal: «Quiero entrar en la lista de espera». Secundario: «Ver cómo funciona».
- Horarios tipo: desayuno 7:00, almuerzo 13:00, cena 19:30 (programables).
- Pasos: 1 Elige plan y horarios. 2 Cocinamos por tandas. 3 Recibes sin pedir.
- Planes (sin precio inventado):
  - Universitario: almuerzo y cena en tu centro de estudios, pensado para semanas de clase.
  - Completo: desayuno, almuerzo y cena, los siete días, en casa o donde digas.
  - Laboral: almuerzo de lunes a viernes en tu trabajo, cena opcional.
- Menú de ejemplo (un día): desayuno «avena con fruta y huevo»; almuerzo
  «pollo al horno con arroz y ensalada»; cena «sopa de verduras y tortilla».
  Semana tipo en tabla editorial (lun–vie) con platos caseros nombrados, rotativos.
- Por qué puede costar menos: compra por volumen, menú único por tanda (menos
  desperdicio) y rutas programadas (una ruta, muchas entregas) — explicado como
  mecanismo, sin prometer cifras.
- Nombre: «Mincha, en quechua, es pasado mañana. Nosotros cocinamos pensando en
  tu pasado mañana para que tú no tengas que pensar en él.»
- FAQ reales: ¿puedo pausar una semana? ¿qué pasa si un día no estoy? ¿y si tengo
  una alergia? ¿puedo cambiar el lugar de entrega? ¿hay permanencia? ¿cuándo
  empieza el servicio en mi ciudad? Respuestas prudentes, sin prometer lo no definido:
  formular como compromiso de diseño del servicio («podrás pausar desde tu cuenta»)
  y, donde no haya decisión, decirlo: «lo cerraremos antes del lanzamiento y
  constará en las condiciones».

## SEO técnico (obligatorio)
- Un solo `h1` por página, jerarquía h2/h3 correcta, HTML semántico
  (header/main/section/article/footer, listas reales).
- `title` y `meta description` únicos por página, en español, con intención:
  home: «Minchay — Comida por suscripción: desayuno, almuerzo y cena sin pedir cada día».
- Canonical, Open Graph y Twitter Card, `lang="es"`, robots.txt, sitemap,
  JSON-LD: Organization + WebSite (home), FAQPage (preguntas), ItemList de planes.
- Rendimiento: sin JS en cliente salvo el reveal y el formulario; imágenes con
  loading lazy salvo la del hero (eager + fetchpriority high).
- Accesibilidad: contraste AA, foco visible, etiquetas en el formulario,
  `aria-expanded` en el acordeón FAQ si lo hubiera.

## Formulario de lista de espera
Solo frontend en v1: nombre, correo, ciudad, plan de interés (select con los tres
planes), botón «Apuntarme». Al enviar: validación nativa + mensaje de confirmación
en la propia página («Recibido. Te escribiremos antes del lanzamiento en tu
ciudad.») sin enviar datos a ningún servidor; dejar un `TODO` claro en el código
para conectarlo a un endpoint. Nada de servicios externos inventados.

## Verificación exigida
- `npm run build` en verde y `npm run preview` sirviendo.
- Revisar el HTML generado: un h1, metadatos presentes, JSON-LD válido.
- Responsive verificado en anchos 360, 768 y 1280 (sin desbordes horizontales).
- Sin coautores de IA en commits. Autor git: JOSETRA44.
