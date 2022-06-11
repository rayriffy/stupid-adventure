import { Dialog } from "../../../@types/Dialog";

export const villageHouse: Dialog[] = [
  {
    id: 'GJ9eCQ7BSdW-gMAospFlX',
    entries: [
      {
        id: 'flgrzMogBIEokRIENsgyc',
        choice: 'B59xJ0nLQpLPnUu24FfXn'
      }
    ],
    text: [
      'You entered the house',
      'There\'s an old man sitting inside the house, and he has a **tavern badge**'
    ],
    options: [
      {
        id: 'oVlLCY7Ov8aXGDBCuPgSG',
        text: 'Rob him'
      },
      {
        id: 'pnw2V3IaePc_-9GMQY-B8',
        text: 'Back to the village'
      }
    ]
  },
  {
    id: 'VswT8gLLBLO4bV-4-Ukuz',
    entries: [
      {
        id: 'GJ9eCQ7BSdW-gMAospFlX',
        choice: 'oVlLCY7Ov8aXGDBCuPgSG',
        condition: inventory => inventory?.["iC0-mDi0nztDbf-BPc-KS"] === true
      }
    ],
    text: [
      'You used your gun to steal his badge.',
      'It worked! **Taven badge** has been added to your inventory.'
    ],
    inventorySet: {
      'WVLUnJDD0Nn30Brs23yP-': true
    },
    options: [
      {
        id: 'bcuf-nh6xS3gryBH7RNjE',
        text: 'Leave the house'
      },
    ]
  },
  {
    id: 'YHkb0hVOWwT5e9RsCr_t1',
    entries: [
      {
        id: 'GJ9eCQ7BSdW-gMAospFlX',
        choice: 'oVlLCY7Ov8aXGDBCuPgSG',
        condition: inventory => inventory?.["iC0-mDi0nztDbf-BPc-KS"] !== true
      }
    ],
    text: [
      'You robbing him, but you don\'t have any weapons.',
      'He beaten you, and you has been sent to jail for your crimes.',
    ],
    ending: 'I'
  }
]
