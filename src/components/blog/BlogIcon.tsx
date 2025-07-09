import { Code, Paintbrush, Smartphone, Box, Cpu } from "lucide-react";
import type { JSX } from "react";

interface BlogIconProps {
  name: string;
  className?: string;
}

const BlogIcon = ({ name, className = "w-6 h-6" }: BlogIconProps) => {
  const icons: Record<string, JSX.Element> = {
    code: <Code className={`${className} text-blue-400`} />,
    paintbrush: <Paintbrush className={`${className} text-purple-400`} />,
    smartphone: <Smartphone className={`${className} text-yellow-400`} />,
    box3d: <Box className={`${className} text-green-400`} />,
    cpu: <Cpu className={`${className} text-red-400`} />
  };

  return icons[name] || <Code className={className} />;
};

export default BlogIcon;