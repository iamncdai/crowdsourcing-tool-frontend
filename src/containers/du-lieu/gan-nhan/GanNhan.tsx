import { Col, Form, message, Row, Select } from "antd";
import React, { useEffect, useState } from "react";

import { LOAI_NHAN_OPTIONS } from "@/constants";
import { useStores } from "@/models";
import {
  GetDuLieuResult,
  RequestGanNhanCapCauHoiVanBanBody,
  RequestGanNhanCapVanBanBody,
  RequestGanNhanCauHoiDongNghiaBody,
  RequestGanNhanDichMayBody,
  RequestGanNhanHoiDapBody,
  RequestGanNhanPhanLoaiVanBanBody,
  RequestGanNhanResult,
  RequestGanNhanThucTheBody,
} from "@/services/api/core-api/type";
import { utilRedirectLocation } from "@/utils/router";

import {
  FormCapCauHoiVanBan,
  FormCauHoiDongNghia,
  FormDichMay,
  FormGanNhanCapVanBan,
  FormGanNhanThucThe,
  FormHoiDap,
  FormPhanLoaiVanBan,
} from "./components";

type IProps = {
  idDuLieu: number;
};

export const GanNhanContainer: React.FC<IProps> = ({ idDuLieu }) => {
  const { coreApi } = useStores();

  const [messageApi, contextHolder] = message.useMessage();
  const [duLieu, setDuLieu] = useState<GetDuLieuResult>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    coreApi.getDuLieu(idDuLieu).then((res) => {
      if (res.kind === "ok") {
        setDuLieu(res.result);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idDuLieu]);

  const handleResult = (res: RequestGanNhanResult) => {
    if (res.kind === "bad-data") {
      messageApi.error(res?.message);
      setIsSubmitting(false);
      return;
    }

    if (res.kind !== "ok") {
      messageApi.error("Thêm dữ liệu thất bại");
      setIsSubmitting(false);
      return;
    }

    messageApi.success("Thêm dữ liệu thành công");

    setTimeout(() => {
      utilRedirectLocation("/du-lieu/ds-cong-viec");
    }, 500);
  };

  const handleSubmitPhanLoaiVanBan = (
    values: RequestGanNhanPhanLoaiVanBanBody
  ) => {
    setIsSubmitting(true);
    coreApi.ganNhanPhanLoaiVanBan(values).then(handleResult);
  };

  const handleSubmitHoiDap = (values: RequestGanNhanHoiDapBody) => {
    setIsSubmitting(true);
    coreApi.ganNhanHoiDap(values).then(handleResult);
  };

  const handleSubmitGanNhanThucThe = (values: RequestGanNhanThucTheBody) => {
    setIsSubmitting(true);
    coreApi.ganNhanThucThe(values).then(handleResult);
  };

  const handleSubmitDichMay = (values: RequestGanNhanDichMayBody) => {
    setIsSubmitting(true);
    coreApi.ganNhanDichMay(values).then(handleResult);
  };

  const handleSubmitGanNhanCapVanBan = (
    values: RequestGanNhanCapVanBanBody
  ) => {
    setIsSubmitting(true);
    coreApi.ganNhanCapVanBan(values).then(handleResult);
  };

  const handleSubmitCapCauHoiVanBan = (
    values: RequestGanNhanCapCauHoiVanBanBody
  ) => {
    setIsSubmitting(true);
    coreApi.ganNhanCapCauHoiVanBan(values).then(handleResult);
  };

  const handleSubmitCauHoiDongNghia = (
    values: RequestGanNhanCauHoiDongNghiaBody
  ) => {
    setIsSubmitting(true);
    coreApi.ganNhanCauHoiDongNghia(values).then(handleResult);
  };

  if (!duLieu) {
    return <></>;
  }

  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Form.Item
            label="Loại nhãn"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Select
              style={{ width: "100%" }}
              options={LOAI_NHAN_OPTIONS}
              value={duLieu.idLoaiNhan}
              size="large"
              disabled
            />
          </Form.Item>

          {duLieu.idLoaiNhan === "Phan_Loai_Van_Ban" && (
            <FormPhanLoaiVanBan
              data={{
                vanBan: duLieu.vanBan,
              }}
              initialValues={{ idDuLieu }}
              isSubmitting={isSubmitting}
              onFinish={handleSubmitPhanLoaiVanBan}
            />
          )}

          {duLieu.idLoaiNhan === "Hoi_Dap" && (
            <FormHoiDap
              data={{
                cauHoi: duLieu.cauHoi,
                vanBan: duLieu.vanBan,
              }}
              initialValues={{ idDuLieu }}
              isSubmitting={isSubmitting}
              onFinish={handleSubmitHoiDap}
            />
          )}

          {duLieu.idLoaiNhan == "Gan_Nhan_Thuc_The" && (
            <FormGanNhanThucThe
              data={{
                vanBan: duLieu.vanBan,
              }}
              initialValues={{ idDuLieu }}
              isSubmitting={isSubmitting}
              onFinish={handleSubmitGanNhanThucThe}
            />
          )}

          {duLieu.idLoaiNhan === "Dich_May" && (
            <FormDichMay
              data={{
                vanBan: duLieu.vanBanGoc,
                idNgonNgu: duLieu.idNgonNguGoc,
              }}
              initialValues={{ idDuLieu }}
              isSubmitting={isSubmitting}
              onFinish={handleSubmitDichMay}
            />
          )}

          {duLieu.idLoaiNhan === "Gan_Nhan_Cap_Van_Ban" && (
            <FormGanNhanCapVanBan
              data={{
                vanBan1: duLieu.vanBan1,
                vanBan2: duLieu.vanBan2,
              }}
              initialValues={{ idDuLieu }}
              isSubmitting={isSubmitting}
              onFinish={handleSubmitGanNhanCapVanBan}
            />
          )}

          {duLieu.idLoaiNhan === "Cap_Cau_Hoi_Van_Ban" && (
            <FormCapCauHoiVanBan
              data={{
                vanBan: duLieu.vanBan,
                cauHoi: duLieu.cauHoi,
              }}
              initialValues={{ idDuLieu }}
              isSubmitting={isSubmitting}
              onFinish={handleSubmitCapCauHoiVanBan}
            />
          )}

          {duLieu.idLoaiNhan === "Tim_Cau_Hoi_Dong_Nghia" && (
            <FormCauHoiDongNghia
              data={{ cauHoi: duLieu.cauHoi }}
              initialValues={{ idDuLieu, dsCauHoiDongNghia: [] }}
              isSubmitting={isSubmitting}
              onFinish={handleSubmitCauHoiDongNghia}
            />
          )}
        </Col>
      </Row>

      {contextHolder}
    </>
  );
};
