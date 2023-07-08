import { Button } from "antd";
import Link from "next/link";

import { LayoutBase } from "@/components/layout";
import { DuAnContainer } from "@/containers";

export default function DsDuAnPage() {
  return (
    <LayoutBase
      menuActiveKey="PROJECTS"
      title="Dự án"
      headerTitle="Danh sách dự án"
      headerRight={
        <Link href="/du-an/them-du-an">
          <Button type="primary" icon={<i className="fas fa-plus-circle" />}>
            Thêm dự án
          </Button>
        </Link>
      }
    >
      <DuAnContainer />
    </LayoutBase>
  );
}
