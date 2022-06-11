import { Dialog } from "../../@types/Dialog"

export const beginningEntries: Dialog[] = [
  {
    id: 'PNFZoVLvrpFu1Vxi_w6b8',
    entries: [
      {
        id: 'start',
        choice: 'start'
      }
    ],
    text: 'You had been hit by a truck, and sent to isekai.',
    options: [
      {
        id: '4DQY93WKMK4LfwZ8cTB-y',
        text: 'Ok, cool.'
      },
    ]
  },
  {
    id: 'sbD4fH8u_QxYvDkItpJfU',
    entries: [
      {
        id: 'PNFZoVLvrpFu1Vxi_w6b8',
        choice: '4DQY93WKMK4LfwZ8cTB-y',
      }
    ],
    text: "There's a voice said *\"You must find a god in tavern to get a thing that you need\"*",
    options: [
      {
        id: 'faSpI-keIJ2JAI6TgXXmh',
        text: '\"...\"'
      }
    ]
  },
  {
    id: '0EKdmnij0qj6ZR8ChUSEd',
    entries: [
      {
        id: 'sbD4fH8u_QxYvDkItpJfU',
        choice: 'faSpI-keIJ2JAI6TgXXmh',
      },
    ],
    text: [
      'You confused where the voice came from, but you must find a tavern first.',
      'There\'s a path to choose from. If you go to the **left** you will go into *deep forest*, if you go to the **right** you will go up to the *mountain*.',
      'Which path you will choose?',
    ],
    options: [
      {
        id: 'oHOeWtFhxXYt51aWkwGPy',
        text: 'Left'
      },
      {
        id: 'UyTdCjTlzuouf7tkFncLi',
        text: 'Right'
      },
    ]
  }
]