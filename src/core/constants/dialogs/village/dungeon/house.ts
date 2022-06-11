import { Dialog } from "../../../../@types/Dialog";

export const dungeonHouse: Dialog[] = [
  {
    id: 'p8jFrwBmwR89yWa3IU-Qk',
    entries: [
      {
        id: 'wX3PbrBZIQ0vxxlVebqSj',
        choice: 'DG-pqnQxlNXl8SmNjjzm1'
      },
    ],
    text: [
      'You look around the dungeon entrance, and found an abandon home',
      'It looks like this house has been abandoned for a long time, but it got **a gun** on the table.',
    ],
    options: [
      {
        id: 'W5IH4MDUcEY4wFoeQVLmW',
        text: '*Take the gun*'
      },
    ]
  },
  {
    id: 'sg6bLIgxRjqANfCkFegIS',
    entries: [
      {
        id: 'p8jFrwBmwR89yWa3IU-Qk',
        choice: 'W5IH4MDUcEY4wFoeQVLmW',
      }
    ],
    text: 'You picked up **.45 Colt**. It has been added to your inventory.',
    inventorySet: {
      'iC0-mDi0nztDbf-BPc-KS': true,
    },
    options: [
      {
        id: 'QPDbTZ9QS7gbBPpVKKWBi',
        text: 'Leave the house'
      }
    ],
  }
]