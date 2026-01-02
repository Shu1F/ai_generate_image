import { tools, ToolType } from '@/config/tools'

function ToolPage({params}: {params: {tool: string}}) {
    const toolType = params.tool as ToolType
    const tool = tools[toolType]
  return (
    <div><h2>{tool.title}</h2></div>
  )
}

export default ToolPage