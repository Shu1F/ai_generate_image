import ImageGenerator from "@/components/dashboard/tools/image-generator";

export const tools = {
  "image-generator": {
    title: "画像生成",
    description: "AI を使用してお好みの画像を生成してみよう",
    component: ImageGenerator,
  },
  "remove-bg": {
    title: "背景削除",
    description: "画像から背景を自動で削除",
    component: ImageGenerator,
  },
  optimize: {
    title: "画像圧縮",
    description: "画像を最適化して画像を縮小",
    component: ImageGenerator,
  },
};

export type ToolType = keyof typeof tools;
