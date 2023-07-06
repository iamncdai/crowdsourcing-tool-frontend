import { Button } from "antd";
import Link from "next/link";

import { LayoutBase } from "@/components/layout";
import { ProjectsContainer } from "@/containers";

export default function HomePage() {
  return (
    <LayoutBase
      menuActiveKey="PROJECTS"
      title="Dự án"
      headerTitle="Danh sách dự án"
      headerRight={
        <Link href="/create-project">
          <Button type="primary" icon={<i className="fas fa-plus-circle" />}>
            Thêm dự án
          </Button>
        </Link>
      }
    >
      <ProjectsContainer />
    </LayoutBase>
  );
}
