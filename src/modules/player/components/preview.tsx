import { Component } from 'solid-js'

interface Props {
  start(): void
}

export const Preview: Component<Props> = props => {
  return (
    <div class="w-full h-full flex justify-center items-center flex-col space-y-4">
      <div>
        <h1 class="font-bold text-2xl text-gray-800">Stupid Adventure</h1>
        <p class="text-gray-700">StupidHack #๖ mini adventure</p>
      </div>
      <button
        type="button"
        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={props.start}
      >
        Start
      </button>
    </div>
  )
}
