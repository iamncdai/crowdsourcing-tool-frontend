import { observer } from "mobx-react-lite";

import { LayoutBase } from "@/components/layout";
import { DsCongViecContainer } from "@/containers";

const DsCongViec = observer(() => {
  return (
    <LayoutBase
      menuActiveKey="TASKS"
      title="Danh sách công việc"
      headerTitle="Danh sách công việc"
    >
      <DsCongViecContainer />
    </LayoutBase>
  );
});

export default DsCongViec;
