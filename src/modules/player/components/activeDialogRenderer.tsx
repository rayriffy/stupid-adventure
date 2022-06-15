import { Accessor, Component, createSignal, For, onMount } from 'solid-js'

import { SerializedDialog } from '../../../core/@types/SerializedDialog'
import { DotsHorizontal } from '../../../core/components/DotsHorizontal'
import { TextRenderer } from './dialogTextRenderer'

interface Props {
  process: Accessor<boolean>
  dialog: Accessor<SerializedDialog>
  onAllowOption?(allow: boolean): void
}

export const ActiveDialogRenderer: Component<Props> = props => {
  const { dialog, process, onAllowOption } = props

  return (
    <>
      {process() ? (
        <div class="flex">
          <div class="px-4 py-2 bg-gray-100 rounded-lg">
            <DotsHorizontal class="w-6 h-6 text-gray-700 animate-pulse" />
          </div>
        </div>
      ) : (
        <ActiveDialogContent dialog={dialog} onAllowOption={onAllowOption} />
      )}
    </>
  )
}

const ActiveDialogContent: Component<
  Pick<Props, 'dialog' | 'onAllowOption'>
> = props => {
  const { dialog, onAllowOption = () => {} } = props

  const [bubble, setBubble] = createSignal<boolean>(true)
  const [animatedText, setAnimatedText] = createSignal<string[]>([])

  onMount(async () => {
    onAllowOption(false)
    setBubble(true)
    setAnimatedText([])

    const rawDialogText = dialog().text
    const dialogTexts =
      typeof rawDialogText === 'string' ? [rawDialogText] : rawDialogText

    for await (const dialogText of dialogTexts) {
      setBubble(true)
      await new Promise(res =>
        setTimeout(res, 1000 + Math.floor((Math.random() * 100000) % 500))
      )
      setBubble(false)
      setAnimatedText(o => [...o, dialogText])
    }

    await new Promise(res =>
      setTimeout(res, Math.floor((Math.random() * 100000) % 500) + 200)
    )

    onAllowOption(true)
  })

  return (
    <>
      <div class="space-y-4">
        <For each={animatedText()}>{text => <TextRenderer text={text} />}</For>
      </div>
      {bubble() && (
        <div class="flex">
          <div class="px-4 py-2 bg-gray-100 rounded-lg">
            <DotsHorizontal class="w-6 h-6 text-gray-700 animate-pulse" />
          </div>
        </div>
      )}
    </>
  )
}
