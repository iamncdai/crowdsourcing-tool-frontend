import { LayoutBase } from "@/components/layout";
import { CreateProjectContainer } from "@/containers";

export default function SubmitTaskPage() {
  return (
    <LayoutBase
      title="Thêm dự án"
      headerTitle="Thêm dự án"
      menuActiveKey="PROJECTS"
    >
      <CreateProjectContainer />
    </LayoutBase>
  );
}
