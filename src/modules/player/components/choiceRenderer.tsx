import { Accessor, Component, For } from 'solid-js'
import { SerializedDialog } from '../../../core/@types/SerializedDialog'
import { SerializedOption } from '../../../core/@types/SerializedOption'
import { DotsHorizontal } from '../../../core/components/DotsHorizontal'
import { classNames } from '../../../core/services/classNames'

interface Props {
  process: Accessor<boolean>
  dialog: Accessor<SerializedDialog | null>
  allowChoicePicker: Accessor<boolean>
  onOption(dialogId: string, serializedOption: SerializedOption): void
  restart(): void
}

export const ChoiceRenderer: Component<Props> = props => {
  const { process, dialog, onOption, restart, allowChoicePicker } = props

  return (
    <>
      {dialog() === null || !allowChoicePicker() ? (
        <div class="w-full h-full flex justify-center items-center">
          <DotsHorizontal class="w-8 h-8 text-gray-700 animate-pulse" />
        </div>
      ) : dialog().ending !== undefined ? (
        <div class="h-full flex flex-col items-center justify-center space-y-2">
          <p>
            You reached ending <b>{dialog().ending}</b>
          </p>
          <button
            type="button"
            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={restart}
          >
            Restart
          </button>
        </div>
      ) : (
        <div class="flex flex-col space-y-2">
          <For each={dialog().options}>
            {option => (
              <button
                class={classNames(
                  process()
                    ? 'cursor-wait bg-blue-400 hover:bg-blue-500'
                    : 'bg-blue-600 hover:bg-blue-700',
                  'inline-flex justify-center items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition'
                )}
                disabled={process()}
                onClick={() => onOption(dialog().id, option)}
                innerHTML={option.text}
              />
            )}
          </For>
        </div>
      )}
    </>
  )
}
