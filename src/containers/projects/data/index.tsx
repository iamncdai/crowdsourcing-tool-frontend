import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import Link from "next/link";
import React, { useMemo } from "react";

type IRow = {
  idDuLieu: number;
  idLoaiNhan?: string;
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

const getColumns = () => {
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
      width: 160,
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
      width: 240,

      render(_, record) {
        return (
          <div className="space-x-4">
            <Link
              href={`/submit-task/${record.idDuLieu}?idLoaiNhan=${record.idLoaiNhan}`}
              className="text-primary-400"
            >
              Gán nhãn
            </Link>

            <a href="#details" className="text-primary-400">
              Xem gán nhãn
            </a>
          </div>
        );
      },
    },
  ];

  return columns;
};

type IProps = {
  idDuAn: number;
  idLoaiNhan: string;
};

export const ProjectDataContainer: React.FC<IProps> = ({
  idDuAn,
  idLoaiNhan,
}) => {
  const columns = useMemo(() => {
    return getColumns();
  }, []);

  const xxx = dataSource.map((e) => {
    return { ...e, idLoaiNhan };
  });

  return (
    <div itemID={`${idDuAn}`}>
      <Table rowKey="idDuLieu" dataSource={xxx} columns={columns} />
    </div>
  );
};
