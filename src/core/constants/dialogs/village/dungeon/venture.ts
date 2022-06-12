import { Dialog } from '../../../../@types/Dialog'

export const dungeonVenture: Dialog[] = [
  {
    id: '0jEmXmtOm16VRUPBW_Uhg',
    entries: [
      {
        id: 'wX3PbrBZIQ0vxxlVebqSj',
        choice: 'URSKYpKkp7kC3bUCJOz_F',
        condition: inventory => inventory?.['iC0-mDi0nztDbf-BPc-KS'] === true,
      },
    ],
    text: [
      'You fired .45 Colt at monsters.',
      "There's no bullet",
      "You've been beaten to death",
    ],
    ending: 'H',
  },
  {
    id: 'SGpg6bsurj5Yj-VhlaGYC',
    entries: [
      {
        id: 'wX3PbrBZIQ0vxxlVebqSj',
        choice: 'URSKYpKkp7kC3bUCJOz_F',
        condition: inventory => inventory?.['iC0-mDi0nztDbf-BPc-KS'] !== true,
      },
    ],
    text: [
      "You don't have any weapon in your inventory, and get beaten to death by monsters.",
    ],
    ending: 'G',
  },
]
