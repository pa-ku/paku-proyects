export type Category = 'juegos' | 'programacion' | 'ai' | 'otros'

export interface Project {
  name: string
  description: string
  category: Category
  url: string
}

export const categories: { key: Category | 'all'; label: string }[] = [
  { key: 'all', label: 'Todos' },
  { key: 'juegos', label: 'Juegos' },
  { key: 'programacion', label: 'Programación' },
  { key: 'ai', label: 'AI' },
  { key: 'otros', label: 'Otros' },
]

export const projects: Project[] = [
  {
    name: 'PokeChess',
    description: 'Juego de autochess con temática Pokémon',
    category: 'juegos',
    url: 'https://pokechess.paku.com.ar/',
  },
/*   {
    name: 'Mapukimun',
    description: 'App de flora y fauna nativa',
    category: 'otros',
    url: '#',
  }, */
  {
    name: 'SiderAI',
    description: 'Análisis de carta astral con inteligencia artificial',
    category: 'ai',
    url: 'https://siderai.paku.com.ar/',
  },
  {
    name: 'Matatena',
    description: 'Juego de matatena clásico',
    category: 'juegos',
    url: 'https://matatena.paku.com.ar/',
  },
  {
    name: 'Farabute',
    description: 'Juego online de inventar respuestas falsas',
    category: 'juegos',
    url: 'https://farabute.paku.com.ar/',
  },
  {
    name: 'Layouts',
    description: 'Página para crear stickers personalizados',
    category: 'otros',
    url: 'https://layouts.paku.com.ar/',
  },
  {
    name: 'ShrinkFont',
    description: 'Herramienta para quitar caracteres de fuentes y hacerlas más ligeras',
    category: 'programacion',
    url: 'https://shrinkfont.paku.com.ar/',
  },
  {
    name: 'NextPSeInt',
    description: 'IDE online y desktop de PSeInt',
    category: 'programacion',
    url: 'https://pseint.paku.com.ar/',
  },
  {
    name: 'NextPython',
    description: 'IDE online y desktop de Python',
    category: 'programacion',
    url: 'https://python.paku.com.ar/',
  },
  {
    name: 'NextPython',
    description: 'IDE online y desktop de Python',
    category: 'programacion',
    url: 'https://mosquetutti.paku.com.ar/',
  },
/*   {
    name: 'Generala',
    description: 'Juego de Generala digital',
    category: 'juegos',
    url: 'https://generala.paku.com.ar/',
  }, */
]
