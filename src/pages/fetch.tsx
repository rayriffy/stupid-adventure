import { Component, For } from 'solid-js'
import { useRouteData } from 'solid-app-router'

import { Data } from './fetch.data'
import { useTitle } from '../core/services/useTitle'

const Page: Component = () => {
  const data = useRouteData<() => Data>()
  useTitle('Fetch')

  return (
    <>
      <h1 class="text-2xl font-bold text-gray-900">Blogs</h1>
      <div class="mt-4 space-y-4">
        <For
          each={data()?.blogs}
          fallback={
            data() === undefined ? <div>loading</div> : <div>no data</div>
          }
        >
          {blog => (
            <div class="bg-white border shadow rounded-lg overflow-hidden">
              <img class="w-full h-auto" src={blog.image} />
              <div class="px-5 py-4">
                <h1 class="text-xl font-semibold">{blog.name}</h1>
              </div>
            </div>
          )}
        </For>
      </div>
    </>
  )
}

export default Page
