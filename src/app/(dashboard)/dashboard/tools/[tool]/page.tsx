import { tools, ToolType } from "@/config/tools";
import { notFound } from "next/navigation";
import PageContainer from "@/components/dashboard/page-container";
import PageHeader from "@/components/dashboard/page-header";

async function ToolPage({ params }: { params: Promise<{ tool: string }> }) {
  const toolType = (await params).tool as ToolType;
  const tool = tools[toolType];

  if (!tool) {
    return notFound();
  }

  const ToolComponet = tool.component;

  return (
    <PageContainer>
      <PageHeader title={tool.title} description={tool.description} />
      <div className="max-w-2xl">
        <ToolComponet />
      </div>
    </PageContainer>
  );
}

export default ToolPage;
