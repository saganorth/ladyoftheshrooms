

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
    description: 'En sensuell skogsväktare med blomdetaljer och genomskinliga vingar. Hon bär naturens styrka med mystisk grace. 🍄✨',
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
    description: 'Fertila kurvor och stark närvaro. Denna skulptur hyllar skaparkraft, sensualitet och svampens uråldriga mystik. 🌕🍄',
    images: [
      '/mushroom/mushroom2.png',
      '/mushroom/mushroom2b.png',
    ],
    tags: ['Golden', 'Sculpture'],
  },
 
   {
    id: '4',
    name: 'Gilbert',
    description: 'En rå, minimalistisk tolkning av svampgudinnan. Enkel, ärlig och vacker i sin renhet. För samlaren som älskar det avskalade. 🌿',
    images: [
      '/mushroom/mushroom4.png',
    ],
    tags: ['Blue', 'Pattern'],
  },
    {
    id: '5',
    name: 'Perri',
    description: 'Konstnärlig och kraftfull – med noggrant knuten vit repdräkt. En flirtig hyllning till kroppens former och svampens magi. 🔥🍄',
    images: [
      '/mushroom/mushroom5.png',
    ],
    tags: ['Blue', 'Pattern'],
  },

    {
    id: '7',
    name: 'Elles Dee',
    description: 'Y2K möter skogsdröm! Denna figur bär orange makraméharness och handväska – redo för festival i skogens hjärta. 🌼🧶',
    images: [
      '/mushroom/mushroom7.png',
    ],
    tags: ['Blue', 'Pattern'],
  },
];
