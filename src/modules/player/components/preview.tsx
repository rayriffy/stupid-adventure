import { Component, createMemo, createSignal } from 'solid-js'
import { getInventory } from '../services/getInventory'
import { setInventory } from '../services/setInventory'

interface Props {
  start(): void
}

export const Preview: Component<Props> = props => {
  const { start } = props

  const [stage, setStage] = createSignal(1)
  const [email, setEmail] = createSignal<string>(getInventory().email as string ?? '')

  const onContinue = e => {
    e.preventDefault()

    setInventory('email', email())
    start()
  }

  return (
    <div class="w-full h-full flex justify-center items-center flex-col space-y-4">
      {stage() === 1 ? (
        <>
          <div>
            <h1 class="font-bold text-2xl text-gray-800">Stupid Adventure</h1>
            <p class="text-gray-700">StupidHack #៦ mini adventure</p>
          </div>
          <button
            type="button"
            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => setStage(2)}
          >
            Start
          </button>
        </>
      ) : stage() === 2 ? (
        <>
          <div class="max-w-xs">
            <h1 class="font-bold text-2xl text-gray-800">Before you begin</h1>
            <p class="text-gray-700">
              We need your email address in case you found a ticket for extra
              verification.
            </p>
          </div>
          <form class="w-full flex flex-col space-y-4" onSubmit={onContinue}>
            <div class="px-6 w-full">
              <input
                type="email"
                name="email"
                id="email"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
                value={email()}
                onChange={e => setEmail(e.currentTarget.value)}
                required
              />
            </div>
            <div class="flex justify-center">
            <button
              type="submit"
              class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue
            </button>
            </div>
          </form>
        </>
      ) : null}
    </div>
  )
}
