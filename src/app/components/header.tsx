import { Component } from 'solid-js'
import { Link } from 'solid-app-router'

import { R } from './r'

export const Header: Component = () => {
  return (
    <header class="flex items-center mb-6">
      <Link href="/">
        <p class="text-gray-700 font-bold text-xl leading-none select-none">
          Stupid Adventure
        </p>
      </Link>
      <div class="mx-4 h-6 border-l-2 border-gray-300" />
      <a href="https://rayriffy.com" target="_blank" rel="noopener noreferrer">
        <R />
      </a>
    </header>
  )
}
