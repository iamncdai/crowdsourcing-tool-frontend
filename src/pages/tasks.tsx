import { LayoutBase } from "@/components/layout";
import { TasksContainer } from "@/containers";

export default function TasksPage() {
  return (
    <LayoutBase
      title="Công việc"
      headerTitle="Danh sách công việc"
      menuActiveKey="TASKS"
    >
      <TasksContainer />
    </LayoutBase>
  );
}
