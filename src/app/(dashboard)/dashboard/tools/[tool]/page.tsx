import { tools, ToolType } from "@/config/tools";
import { notFound } from "next/navigation";

async function ToolPage({ params }: { params: Promise<{ tool: string }> }) {
  const toolType = (await params).tool as ToolType;
  const tool = tools[toolType];

  if (!tool) {
    return notFound();
  }

  return (
    <div>
      <h2>{tool.title}</h2>
    </div>
  );
}

export default ToolPage;
