import { Col, Row } from "antd";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";

import { FormHeading } from "@/components/elements";
import { TaskContent } from "@/components/tasks";
import { useStores } from "@/models";
import { GetDuLieuResult } from "@/services/api/core-api/type";

type IProps = {
  idDuLieu: number;
};

export const CTDuLieuContainer: React.FC<IProps> = observer(({ idDuLieu }) => {
  const { coreApi } = useStores();

  const [duLieu, setDuLieu] = useState<GetDuLieuResult>(null);

  useEffect(() => {
    coreApi.getDuLieu(idDuLieu).then((res) => {
      if (res.kind === "ok") {
        setDuLieu(res.result);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idDuLieu]);

  if (!duLieu) {
    return <></>;
  }

  return (
    <Row>
      <Col span={12} offset={6}>
        <div className="form-box">
          <FormHeading title={duLieu.tenLoaiNhan} />

          {duLieu.idLoaiNhan === "Phan_Loai_Van_Ban" && (
            <div>
              <div className="mb-1 font-medium">Văn bản</div>
              <TaskContent text={duLieu.vanBan} />
            </div>
          )}

          {duLieu.idLoaiNhan === "Hoi_Dap" && (
            <div className="space-y-4">
              <div>
                <div className="mb-1 font-medium">Câu hỏi</div>
                <TaskContent text={duLieu.cauHoi} />
              </div>

              <div>
                <div className="mb-1 font-medium">Văn bản</div>
                <TaskContent text={duLieu.vanBan} />
              </div>
            </div>
          )}

          {duLieu.idLoaiNhan === "Dich_May" && (
            <div>
              <div className="mb-1 font-medium">
                Văn bản ({duLieu.tenNgonNguGoc})
              </div>
              <TaskContent text={duLieu.vanBanGoc} />
            </div>
          )}

          {duLieu.idLoaiNhan === "Gan_Nhan_Thuc_The" && (
            <div>
              <div className="mb-1 font-medium">Văn bản</div>
              <TaskContent text={duLieu.vanBan} />
            </div>
          )}

          {duLieu.idLoaiNhan === "Gan_Nhan_Cap_Van_Ban" && (
            <div className="space-y-4">
              <div>
                <div className="mb-1 font-medium">Văn bản 1</div>
                <TaskContent text={duLieu.vanBan1} />
              </div>

              <div>
                <div className="mb-1 font-medium">Văn bản 2</div>
                <TaskContent text={duLieu.vanBan2} />
              </div>
            </div>
          )}

          {duLieu.idLoaiNhan === "Cap_Cau_Hoi_Van_Ban" && (
            <div className="space-y-4">
              <div>
                <div className="mb-1 font-medium">Văn bản</div>
                <TaskContent text={duLieu.vanBan} />
              </div>

              <div>
                <div className="mb-1 font-medium">Câu hỏi</div>
                <TaskContent text={duLieu.cauHoi} />
              </div>
            </div>
          )}

          {duLieu.idLoaiNhan === "Tim_Cau_Hoi_Dong_Nghia" && (
            <div>
              <div className="mb-1 font-medium">Câu hỏi</div>
              <TaskContent text={duLieu.cauHoi} />
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
});
