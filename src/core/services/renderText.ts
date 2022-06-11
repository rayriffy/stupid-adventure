import remark from 'remark'
import html from 'remark-html'

export const renderText = async (markdown: string): Promise<string> => {
  const file = await remark()
    .use(html)
    .process(markdown)

  return String(file).split('\n').map(o => o.trim()).join('')
}
