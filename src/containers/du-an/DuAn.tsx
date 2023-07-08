import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import React, { useEffect } from "react";

import { useStores } from "@/models";
import { IProject } from "@/models/projects-store";

export const DuAnContainer: React.FC = observer(() => {
  const { projectsStore } = useStores();

  useEffect(() => {
    projectsStore.getDsDuAn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns: ColumnsType<IProject> = [
    {
      key: "TenDA",
      title: "Tên dự án",
      dataIndex: "TenDA",
    },
    {
      key: "LoaiNhan",
      title: "Loại nhãn",
      dataIndex: "LoaiNhan",
      width: 400,
      render(value: string) {
        return <Tag>{value}</Tag>;
      },
    },
    {
      key: "action",
      title: "Công cụ",
      width: 240,

      render(_, record) {
        return (
          <div className="space-x-4">
            <Link
              href={`/du-an/${record.idDuAn}/them-du-lieu`}
              className="text-primary-400"
            >
              Thêm dữ liệu
            </Link>

            <Link
              href={`/du-an/${record.idDuAn}/ds-du-lieu`}
              className="text-primary-400"
            >
              Xem dữ liệu
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table
        rowKey="idDuAn"
        dataSource={projectsStore.viewDsDuAn}
        columns={columns}
      />
    </div>
  );
});
