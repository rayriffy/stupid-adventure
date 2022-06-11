import { Component } from 'solid-js'
import { useParams, useRouteData } from 'solid-app-router'

import { useTitle } from '../../core/services/useTitle'

const Page: Component = () => {
  const data = useRouteData<() => string>()
  const { dynamicId } = useParams()
  useTitle('Dynamic route')

  return (
    <div class="space-y-2">
      <p class="text-gray-700">dynamicId from useParams: {dynamicId}</p>
      <p class="text-gray-700">data results: {data()}</p>
    </div>
  )
}

export default Page
