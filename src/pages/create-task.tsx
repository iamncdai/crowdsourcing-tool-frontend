import { LayoutBase } from "@/components/layout";
import { CreateTaskContainer } from "@/containers";

export default function CreateTaskPage() {
  return (
    <LayoutBase
      title="Thêm công việc"
      headerTitle="Thêm công việc"
      menuActiveKey="TASKS"
    >
      <CreateTaskContainer />
    </LayoutBase>
  );
}
