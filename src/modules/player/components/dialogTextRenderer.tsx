import { Component, For } from "solid-js"

interface Props {
  text: string | string[]
}

export const TextRenderer: Component<{ text: string }> = ({ text }) => (
  <div class="px-4 py-3 bg-gray-100 rounded-lg" innerHTML={text} />
)

export const DialogTextRenderer: Component<Props> = props => {
  const { text } = props

  if (typeof text === 'string')
    return <TextRenderer text={text} />
  else
    return <div class="space-y-4"><For each={text}>{text => <TextRenderer text={text} />}</For></div>
}
