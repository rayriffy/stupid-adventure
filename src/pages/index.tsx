import { Link } from 'solid-app-router'
import { Component } from 'solid-js'
import { useTitle } from '../core/services/useTitle'
import { GamePlayer } from '../modules/player/components'

const Page: Component = () => {
  useTitle('Home')

  return <GamePlayer />
}

export default Page
