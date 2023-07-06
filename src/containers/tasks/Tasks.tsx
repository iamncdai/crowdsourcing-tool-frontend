import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";

type IRow = {
  idDuLieu: number;
  vanBan: string;
  trangThai: string;
  userName: string;
};

const dataSource: IRow[] = [
  {
    idDuLieu: 1,
    vanBan:
      "Hãy phân biệt các chất sau 3 lọ mất nhãn đựng dung dịch NaOH; H2SO4; Na2SO4",
    trangThai: "PENDING",
    userName: "@ncdai",
  },
];

const columns: ColumnsType<IRow> = [
  {
    key: "vanBan",
    title: "Văn bản",
    dataIndex: "vanBan",
  },
  {
    key: "trangThai",
    title: "Trạng thái",
    dataIndex: "trangThai",
    width: 300,
    render(value) {
      return <Tag>{value}</Tag>;
    },
  },
  {
    key: "userName",
    title: "Phân công",
    dataIndex: "userName",
    width: 200,
  },
  {
    key: "action",
    title: "Action",
    width: 200,

    render(_, record) {
      return (
        <div className="space-x-4">
          <a href={`/projects/${record.idDuLieu}`} className="text-primary-400">
            Thực hiện
          </a>

          <a href={`/projects/${record.idDuLieu}`} className="text-primary-400">
            Chi tiết
          </a>
        </div>
      );
    },
  },
];

export const TasksContainer: React.FC = () => {
  return (
    <div>
      <Table rowKey="idDuLieu" dataSource={dataSource} columns={columns} />
    </div>
  );
};
