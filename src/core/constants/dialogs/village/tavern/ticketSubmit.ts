import axios from 'axios'

import { Dialog } from '../../../../@types/Dialog'

export const tavernTicketSubmit: Dialog = {
  id: 'nFVmrg8NIVDTlLePvUKC_',
  entries: [
    {
      id: 'o6vHejGToMwBUFP1_O0Yg',
      choice: 'GQ28837dVz5jTZln0HHRZ',
      condition: async inventory => {
        try {
          const response = await axios.post<string>(
            'https://stpd-dispenser.saltyaom.com/dispenser/stupid-adventure',
            {
              password: process.env.DISPENSER_PASSWORD,
              from: inventory.email,
            }
          )

          return response.data
        } catch (e) {
          // if ticket ran out, then return string 'no-more-ticket'
          if (e.response.data?.message === 'Tickets run out')
            return 'no-more-ticket'
          else throw e
        }
      },
    },
  ],
  text: context => {
    let payload: string[] = [
      'God think your idea is hilarious',
      '"Wow, nice idea!"',
      ...(context === 'no-more-ticket'
        ? [
            '"But I\'m afraid I don\'t have any more tickets"',
            "You're sad, so you drink at the bar to cope your sadness",
            "But don't worry! Follow for more challenge at [Facebook Page](https://www.facebook.com/StupidHackTH), we still have a lot of tickets left",
          ]
        : [
            '"You really have a potential, to be honest. Let me find something useful for you"',
            '...',
            '...',
            '"Ah! There it is. Here take this"',
            '*You recieved a ticket!!! Congratulations!*',
            `Enter code \`${context}\` at [Eventpop](https://www.eventpop.me/e/13089) (Don't forget to copy ticket code first!)`,
          ]),
      'Thanks for playing this stupid game 💖',
    ]

    return payload
  },
  ending: 'K',
}
