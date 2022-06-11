import { Component, ParentProps } from 'solid-js'

import { Footer } from './footer'
import { Header } from './header'

export const Layout: Component<ParentProps> = props => {
  return (
    <div class="mx-auto max-w-md py-12 px-6 h-screen flex flex-col">
      <Header />
      <div class="border-[5px] rounded-xl border-gray-500 h-full overflow-y-scroll no-scrollbar">{props.children}</div>
      <Footer />
    </div>
  )
}
