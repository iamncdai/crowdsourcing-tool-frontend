import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import React, { useEffect, useMemo } from "react";

import { useStores } from "@/models";
import { IDuLieu } from "@/models/projects-store";

const getColumns = () => {
  const columns: ColumnsType<IDuLieu> = [
    {
      key: "vanBan",
      title: "Văn bản",
      dataIndex: "vanBan",
    },
    {
      key: "idLoaiNhan",
      title: "Loại nhãn",
      dataIndex: "idLoaiNhan",
      width: 300,
      render(value: string) {
        return <Tag>{value}</Tag>;
      },
    },
    {
      key: "dsPhanCong",
      title: "Phân công",
      dataIndex: "dsPhanCong",
      width: 300,
      render(value: string[]) {
        return (
          <div className="space-y-2">
            {value.map((item, index) => (
              <Tag key={index}>{item}</Tag>
            ))}
          </div>
        );
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
              href={`/du-lieu/${record.idDuLieu}/ct-du-lieu`}
              className="text-primary-400"
            >
              Xem chi tiết
            </Link>

            {/* <a href="/du-lieu" className="text-primary-400">
              Xem DS gán nhãn
            </a> */}
          </div>
        );
      },
    },
  ];

  return columns;
};

type IProps = {
  idDuAn: number;
};

export const DsDuLieuContainer: React.FC<IProps> = observer(({ idDuAn }) => {
  const { projectsStore } = useStores();

  useEffect(() => {
    projectsStore.getDsDuLieu(idDuAn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idDuAn]);

  const columns = useMemo(() => {
    return getColumns();
  }, []);

  return (
    <div>
      <Table
        rowKey="idDuLieu"
        dataSource={projectsStore.viewDsDuLieu}
        columns={columns}
      />
    </div>
  );
});
