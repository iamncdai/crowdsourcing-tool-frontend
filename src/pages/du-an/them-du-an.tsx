import { LayoutBase } from "@/components/layout";
import { ThemDuAnContainer } from "@/containers";

export default function ThemDuAnPage() {
  return (
    <LayoutBase
      menuActiveKey="PROJECTS"
      title="Thêm dự án"
      headerTitle="Thêm dự án"
    >
      <ThemDuAnContainer />
    </LayoutBase>
  );
}
