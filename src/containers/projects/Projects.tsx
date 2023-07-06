import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Link from "next/link";
import React from "react";

type IRow = {
  idDuAn: number;
  tenDuAn: string;
  idLoaiNhan: string;
  tenLoaiNhan: string;
};

const dataSource: IRow[] = [
  {
    idDuAn: 1,
    tenDuAn: "Dự Án Ứng Dụng Phân Tán",
    idLoaiNhan: "Tim_Cau_Hoi_Dong_Nghia",
    tenLoaiNhan: "Tìm câu hỏi đồng nghĩa",
  },
  {
    idDuAn: 2,
    tenDuAn: "Dự Án AI",
    idLoaiNhan: "Cap_Cau_Hoi_Van_Ban",
    tenLoaiNhan: "Gán nhãn câu trả lời của cặp câu hỏi và văn bản",
  },
];

const columns: ColumnsType<IRow> = [
  {
    key: "tenDuAn",
    title: "Tên dự án",
    dataIndex: "tenDuAn",
  },
  {
    key: "tenLoaiNhan",
    title: "Loại nhãn",
    dataIndex: "tenLoaiNhan",
  },
  {
    key: "action",
    title: "Action",
    width: 200,

    render(_, record) {
      return (
        <div className="space-x-4">
          <Link
            href={`/projects/${record.idDuAn}?idLoaiNhan=${record.idLoaiNhan}`}
            className="text-primary-400"
          >
            Quản lí
          </Link>

          <a href="#update" className="text-primary-400">
            Sửa
          </a>
        </div>
      );
    },
  },
];

export const ProjectsContainer: React.FC = () => {
  return (
    <div>
      <Table rowKey="idDuAn" dataSource={dataSource} columns={columns} />
    </div>
  );
};
