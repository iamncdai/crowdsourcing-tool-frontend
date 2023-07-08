import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import React, { useEffect } from "react";

import { Status } from "@/components/elements";
import { useStores } from "@/models";
import { ELevelUser } from "@/models/auth-store";
import { ICongViec } from "@/models/projects-store/cong-viec-model";

export const DsCongViecContainer: React.FC = observer(() => {
  const { authStore, projectsStore } = useStores();

  useEffect(() => {
    projectsStore.getDsCongViec();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns: ColumnsType<ICongViec> = [
    {
      key: "vanBan",
      title: "Văn bản",
      dataIndex: "vanBan",
    },
    {
      key: "phanCong",
      title: "Phân công",
      dataIndex: "phanCong",
      width: 300,
      render(value) {
        return <Tag>{value}</Tag>;
      },
    },
    {
      key: "trangThai",
      title: "Trạng thái",
      dataIndex: "trangThai",
      width: 300,
      render(value) {
        return <Status trangThai={value} />;
      },
    },
    {
      key: "action",
      title: "Công cụ",
      width: 240,

      render(_, record) {
        return (
          <div className="space-x-4">
            {authStore.user?.LevelUser === ELevelUser.NguoiGanNhanCap1 &&
              !["APPROVED", "DONE"].includes(record.trangThai) && (
                <Link
                  href={`/du-lieu/${record.idDuLieu}/gan-nhan`}
                  className="text-primary-400"
                >
                  {record.trangThai === "REJECTED"
                    ? "Gán nhãn lại"
                    : "Gán nhãn"}
                </Link>
              )}

            {authStore.user?.LevelUser === ELevelUser.NguoiGanNhanCap2 && (
              <Link
                href={`/du-lieu/${record.idDuLieu}/ct-gan-nhan`}
                className="text-primary-400"
              >
                Kiểm duyệt
              </Link>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table
        rowKey="_id"
        dataSource={projectsStore.viewDsCongViec}
        columns={columns}
      />
    </div>
  );
});
