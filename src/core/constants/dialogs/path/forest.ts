import { Dialog } from '../../../@types/Dialog'

export const pathForest: Dialog[] = [
  {
    id: 'Cqq4KZXrA7cwr8m9G_OFw',
    entries: [
      {
        id: '0EKdmnij0qj6ZR8ChUSEd',
        choice: 'oHOeWtFhxXYt51aWkwGPy',
      },
    ],
    text: [
      'You goes deep into the forest until the night.',
      'You encountered *Tim Apple* and he said "Good evening, and welcome to the forest"',
      'He offered you **an apple** or **ice-cream sandwich**. Which one you choose?',
    ],
    options: [
      {
        id: 'tl6CSRwyfOUkF_6m_ssHb',
        text: 'Apple',
      },
      {
        id: '21w3TRn3Bf_SZPdFvtIvQ',
        text: 'Ice-cream sandwich',
      },
    ],
  },
  {
    id: 'jIpNMxgTKKjLKYxG1DdQe',
    entries: [
      {
        id: 'Cqq4KZXrA7cwr8m9G_OFw',
        choice: 'tl6CSRwyfOUkF_6m_ssHb',
      },
    ],
    text: [
      'You take a bite of the apple.',
      'You fell into *Tim Apple* wall garden, and never recovered',
    ],
    ending: 'B',
  },
  {
    id: 'IYlekH6rr3-02jcQFcgtG',
    entries: [
      {
        id: 'Cqq4KZXrA7cwr8m9G_OFw',
        choice: '21w3TRn3Bf_SZPdFvtIvQ',
      },
    ],
    text: [
      'You try to eat ice-cream sandwich, but it already melted.',
      'You ask *Tim Apple* for a direction for a village instead.',
    ],
    options: [
      {
        id: 'c2ztMLvK58cN2j-jcyGUD',
        text: '*Proceed to follow directions from Tim Apple*',
      },
    ],
  },
]
