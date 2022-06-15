import { Dialog } from '../../../../@types/Dialog'

export const tavernInside: Dialog[] = [
  // enter tavern without ticket? that's cheating
  {
    id: 'HkyI6qor-ttkY3duopqwZ',
    entries: [
      {
        id: '_ZZEMq-qHt04dDpaeVLus',
        choice: '0CHxX2qmRzcYOf4IPnFOb',
        condition: inventory => inventory?.['WVLUnJDD0Nn30Brs23yP-'] !== true,
      },
    ],
    text: [
      "Hey! You enter tavern without a badge!? That's cheating",
      '*God removed you from existance*',
    ],
    ending: 'J',
  },
  // proceed normally
  {
    id: 'XkT9hIqgwkuifkZJ6osP4',
    entries: [
      {
        id: '_ZZEMq-qHt04dDpaeVLus',
        choice: '0CHxX2qmRzcYOf4IPnFOb',
        condition: inventory => inventory?.['WVLUnJDD0Nn30Brs23yP-'] === true,
      },
    ],
    text: [
      "You entered the taven, and there're a lot of elfs.",
      'What would you do?',
    ],
    options: [
      {
        id: 'B9FywybbPQ0k5eAD0LXfy',
        text: 'Ignore them',
      },
      {
        id: 'QOMQhaqtgzlwTCP6Mknsx',
        text: 'Join the harem',
      },
    ],
  },
  {
    id: 'UIW9pS3KPlSu7uQtvcsp3',
    entries: [
      {
        id: 'XkT9hIqgwkuifkZJ6osP4',
        choice: 'QOMQhaqtgzlwTCP6Mknsx',
      },
    ],
    text: [
      'You joined elf harem, and be happily forever.',
      '(but you forgot to find the god tho)',
    ],
    ending: 'E',
  },
  {
    id: 'o6vHejGToMwBUFP1_O0Yg',
    entries: [
      {
        id: 'XkT9hIqgwkuifkZJ6osP4',
        choice: 'B9FywybbPQ0k5eAD0LXfy',
      },
    ],
    text: [
      'You proceed to sit at the bar',
      'You found god drinking, what would you do?',
    ],
    options: [
      {
        id: 'GQ28837dVz5jTZln0HHRZ',
        text: 'Tell him your stupid idea',
      },
      {
        id: '2Btofn615C3S9jlpRNK3k',
        text: 'Steal ticket from him',
      },
    ],
  },
  {
    id: '26gdqE0DMUCLNtRjurf-p',
    entries: [
      {
        id: 'o6vHejGToMwBUFP1_O0Yg',
        choice: '2Btofn615C3S9jlpRNK3k',
      },
    ],
    text: "God caught you for stealing ticket! He's not pleased",
    ending: 'F',
  },
]
