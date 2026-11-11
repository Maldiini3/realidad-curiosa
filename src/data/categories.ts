export interface CategoryInfo {
  slug: 'universo-y-ciencia' | 'naturaleza-y-vida' | 'historia-y-enigmas' | 'fenomenos-asombrosos' | 'curiosidades';
  name: string;
  shortName: string;
  icon: string;
  tag: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  accentColor: string;
}

export const categories: CategoryInfo[] = [
  {
    slug: 'universo-y-ciencia',
    name: 'Universo y ciencia',
    shortName: 'Universo',
    icon: '🌌',
    tag: 'Cosmología',
    description: 'El espacio profundo, astronomía, agujeros negros, la relatividad del tiempo y las misiones que desafían los límites del conocimiento.',
    metaTitle: 'Universo y Ciencia | Curiosidades del Cosmos — Realidad Curiosa',
    metaDescription: 'Descubre los enigmas del espacio profundo, astrofísica, planetas y los descubrimientos cósmicos más asombrosos en Realidad Curiosa.',
    accentColor: 'var(--color-morado-suave)'
  },
  {
    slug: 'naturaleza-y-vida',
    name: 'Naturaleza y vida',
    shortName: 'Naturaleza',
    icon: '🦋',
    tag: 'Biodiversidad',
    description: 'Criaturas insólitas, seres extremófilos, ecosistemas remotos y las adaptaciones biológicas más asombrosas del planeta.',
    metaTitle: 'Naturaleza y Vida | Maravillas del Reino Animal — Realidad Curiosa',
    metaDescription: 'Explora la biodiversidad, criaturas extrañas y las adaptaciones evolutivas más sorprendentes de nuestro planeta.',
    accentColor: 'var(--color-azul-cian)'
  },
  {
    slug: 'historia-y-enigmas',
    name: 'Historia y enigmas',
    shortName: 'Historia',
    icon: '🏛️',
    tag: 'Civilizaciones',
    description: 'Grandes preguntas de la antigüedad, hallazgos arqueológicos, mitos desmontados y los relatos que moldearon a la humanidad.',
    metaTitle: 'Historia y Enigmas | Misterios del Pasado — Realidad Curiosa',
    metaDescription: 'Preguntas sin resolver, mitos históricos investigados con rigor y hallazgos arqueológicos extraordinarios.',
    accentColor: '#fb923c'
  },
  {
    slug: 'fenomenos-asombrosos',
    name: 'Fenómenos asombrosos',
    shortName: 'Fenómenos',
    icon: '⚡',
    tag: 'Física y Hechos',
    description: 'Hechos científicos insólitos, leyes de la física que desafían la intuición y fenómenos ópticos de la realidad cotidiana.',
    metaTitle: 'Fenómenos Asombrosos | Hechos que Desafían la Intuición — Realidad Curiosa',
    metaDescription: 'Descubre fenómenos físicos, curiosidades perceptivas y hechos asombrosos explicados de forma clara y accesible.',
    accentColor: 'var(--color-amarillo-luminoso)'
  },
  {
    slug: 'curiosidades',
    name: 'Curiosidades',
    shortName: 'Curiosidades',
    icon: '💡',
    tag: 'Datos Breves',
    description: 'Preguntas del día a día, datos impactantes y respuestas entretenidas a esas dudas que todos nos hemos planteado alguna vez.',
    metaTitle: 'Curiosidades del Mundo | Preguntas y Datos Fascinantes — Realidad Curiosa',
    metaDescription: 'Respuestas a preguntas fascinantes sobre la vida cotidiana, ciencia rápida y datos curiosos para aprender todos los días.',
    accentColor: '#f472b6'
  }
];

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return categories.find(cat => cat.slug === slug);
}
