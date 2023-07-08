import { Button, Col, message, Row, Tag } from "antd";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";

import { FormHeading, Status } from "@/components/elements";
import { TaskContent } from "@/components/tasks";
import { useStores } from "@/models";
import { GetDuLieuResult } from "@/services/api/core-api/type";

type IProps = {
  idDuLieu: number;
};

export const CTGanNhanContainer: React.FC<IProps> = observer(({ idDuLieu }) => {
  const { coreApi } = useStores();

  const [duLieu, setDuLieu] = useState<GetDuLieuResult>(null);
  const [messageApi, contextHolder] = message.useMessage();

  const getCTGanNhan = (idDuLieu: number) => {
    coreApi.getCTGanNhan(idDuLieu).then((res) => {
      if (res.kind === "ok") {
        setDuLieu(res.result);
      }
    });
  };

  useEffect(() => {
    getCTGanNhan(idDuLieu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idDuLieu]);

  const handleDuyetGanNhanClick = async (status: "APPROVED" | "REJECTED") => {
    const res = await coreApi.duyetGanNhan(
      duLieu.idDuLieu,
      duLieu.idNguoiGanNhan,
      status
    );

    if (res.kind !== "ok") {
      messageApi.error(
        status === "APPROVED"
          ? "Duyệt gán nhãn thất bại"
          : "Từ chối gán nhãn thất bại"
      );
      return;
    }

    if (res.result.status === "error") {
      messageApi.error(
        status === "APPROVED"
          ? "Duyệt gán nhãn thất bại"
          : "Từ chối gán nhãn thất bại"
      );
      return;
    }

    messageApi.success(
      status === "APPROVED"
        ? "Duyệt gán nhãn thành công"
        : "Từ chối gán nhãn thành công"
    );
    getCTGanNhan(duLieu.idDuLieu);
  };

  if (!duLieu) {
    return <></>;
  }

  const trangThai = duLieu?.trangThai;

  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <div className="form-box">
            <FormHeading title={duLieu.tenLoaiNhan} />

            {duLieu.idLoaiNhan === "Phan_Loai_Van_Ban" && (
              <div>
                <div>
                  <div className="mb-1 font-medium">Văn bản</div>
                  <TaskContent text={duLieu.vanBan} />
                </div>

                <div>
                  <div className="mb-1 font-medium">Loại văn bản</div>
                  <Tag>{duLieu.noiDung}</Tag>
                </div>
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

                <div>
                  <div className="mb-1 font-medium">
                    Văn bản có phải là trả lời cho câu hỏi không?
                  </div>
                  <Tag>{duLieu.noiDung}</Tag>
                </div>
              </div>
            )}

            {duLieu.idLoaiNhan === "Dich_May" && (
              <div className="space-y-4">
                <div>
                  <div className="mb-1 font-medium">
                    Văn bản ({duLieu.tenNgonNguGoc})
                  </div>
                  <TaskContent text={duLieu.vanBanGoc} />
                </div>

                <div>
                  <div className="mb-1 font-medium">
                    Bản dịch ({duLieu.tenNgonNguDich})
                  </div>
                  <TaskContent text={duLieu.vanBanDich} />
                </div>
              </div>
            )}

            {duLieu.idLoaiNhan === "Gan_Nhan_Thuc_The" && (
              <div>
                <div>
                  <div className="mb-1 font-medium">Văn bản</div>
                  <TaskContent text={duLieu.vanBan} />
                </div>

                <div>
                  <div className="mb-1 font-medium">
                    Danh sách tên thực thể trong văn bản
                  </div>
                  <div className="space-y-2">
                    {duLieu.dsThucThe.map((item, index) => (
                      <TaskContent key={index} text={item} />
                    ))}
                  </div>
                </div>
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

                <div>
                  <div className="mb-1 font-medium">
                    Cặp văn bản có đồng nghĩa hay không?
                  </div>
                  <Tag>{duLieu.noiDung}</Tag>
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

                <div>
                  <div className="mb-1 font-medium">Câu trả lời chính xác</div>
                  <TaskContent text={duLieu.noiDung} />
                </div>
              </div>
            )}

            {duLieu.idLoaiNhan === "Tim_Cau_Hoi_Dong_Nghia" && (
              <div className="space-y-4">
                <div>
                  <div className="mb-1 font-medium">Câu hỏi</div>
                  <TaskContent text={duLieu.cauHoi} />
                </div>

                <div>
                  <div className="mb-1 font-medium">
                    Danh sách câu hỏi đồng nghĩa
                  </div>
                  <div className="space-y-2">
                    {duLieu.dsCauHoiDongNghia.map((item, index) => (
                      <TaskContent key={index} text={item} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4">
              <div className="mb-1 font-medium">Trạng thái</div>
              <Status trangThai={trangThai} />
            </div>

            {["DONE"].includes(duLieu.trangThai) && (
              <div className="mt-4 flex items-center space-x-4">
                <Button
                  type="primary"
                  danger
                  className="flex-1"
                  onClick={() => handleDuyetGanNhanClick("REJECTED")}
                >
                  Từ chối
                </Button>

                <Button
                  type="primary"
                  className="flex-1"
                  onClick={() => handleDuyetGanNhanClick("APPROVED")}
                >
                  Duyệt
                </Button>
              </div>
            )}
          </div>
        </Col>
      </Row>

      {contextHolder}
    </>
  );
});
