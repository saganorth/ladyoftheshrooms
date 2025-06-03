

export interface Mushroom {
  id: string;
  name: string;
  description: string;
  images: string[];
  featured?: boolean;
  tags?: string[];
}

export const mushrooms: Mushroom[] = [
  {
    id: '1',
    name: 'Daisy',
    description: 'A rare red mushroom. Hand-sculpted Amanita muse',
    images: [
      '/mushroom/mushroom1.png',
      '/mushroom/mushroom1b.png',
      '/mushroom/mushroom1c.png',
    ],
    featured: true,
    tags: ['Amanita', 'Red', 'Unique'],
  },
  {
    id: '2',
    name: 'Willow',
    description: 'A white fly agaric with three breasts',
    images: [
      '/mushroom/mushroom2.png',
      '/mushroom/mushroom2b.png',
    ],
    tags: ['Golden', 'Sculpture'],
  },
  {
    id: '3',
    name: 'Electra',
    description: '',
    images: [
      '/mushroom/mushroom3.png',
    ],
    tags: ['Blue', 'Pattern'],
  },
   {
    id: '4',
    name: 'Gilbert',
    description: 'A blue mushroom with mysterious patterns. Limited edition, hand painted.',
    images: [
      '/mushroom/mushroom4.png',
    ],
    tags: ['Blue', 'Pattern'],
  },
    {
    id: '5',
    name: 'Perri',
    description: 'A blue mushroom with mysterious patterns. Limited edition, hand painted.',
    images: [
      '/mushroom/mushroom5.png',
    ],
    tags: ['Blue', 'Pattern'],
  },
    {
    id: '6',
    name: 'Aspen',
    description: 'A blue mushroom with mysterious patterns. Limited edition, hand painted.',
    images: [
      '/mushroom/mushroom6.png',
    ],
    tags: ['Blue', 'Pattern'],
  },
    {
    id: '7',
    name: 'Elles Dee',
    description: 'A blue mushroom with mysterious patterns. Limited edition, hand painted.',
    images: [
      '/mushroom/mushroom7.png',
    ],
    tags: ['Blue', 'Pattern'],
  },
];
