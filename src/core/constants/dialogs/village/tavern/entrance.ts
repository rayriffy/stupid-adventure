import { Dialog } from '../../../../@types/Dialog'

export const tavernEntrance: Dialog[] = [
  {
    id: '_ZZEMq-qHt04dDpaeVLus',
    entries: [
      {
        id: 'flgrzMogBIEokRIENsgyc',
        choice: 'QRo4dO-DM5V3dx4iDlUmL',
      },
    ],
    text: 'You enter a tavern, the manager asked for an entry pass.',
    options: [
      {
        id: '0CHxX2qmRzcYOf4IPnFOb',
        text: 'Show him a badge',
        hidden: inventory => inventory?.['WVLUnJDD0Nn30Brs23yP-'] === true,
      },
      {
        id: 'mcm73R5QzchpvsQbtP9kz',
        text: 'Show him a middle finger',
      },
      {
        id: 'QevrTkBEU8yV9mV3E3xdB',
        text: 'Use creative mode to get a badge',
      },
      {
        id: 'l62WHGUnaSOLzEWdLEDPW',
        text: 'Bribe (Back to the village)',
      },
    ],
  },
  {
    id: '2dy7QZ7RD374T6jbvZQVz',
    entries: [
      {
        id: '_ZZEMq-qHt04dDpaeVLus',
        choice: 'mcm73R5QzchpvsQbtP9kz',
      },
    ],
    text: 'You were beaten to death',
    ending: 'C',
  },
  {
    id: 'zLSydxR51-9lVMn8xD0_W',
    entries: [
      {
        id: '_ZZEMq-qHt04dDpaeVLus',
        choice: 'QevrTkBEU8yV9mV3E3xdB',
      },
    ],
    text: "God seen you're abusing, forcing you to end the game",
    ending: 'D',
  },
  {
    id: 'g-FM4Q3ZRXeb4pjvSA04Y',
    entries: [
      {
        id: '_ZZEMq-qHt04dDpaeVLus',
        choice: 'l62WHGUnaSOLzEWdLEDPW',
      },
    ],
    text: '*"Haha, nice try"* said the manager, and you got kicked out of the tavern',
    options: [
      {
        id: 'jdiqXgh6ysErEJWEXuIKF',
        text: 'Aw mannn',
      },
    ],
  },
]
