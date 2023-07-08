import { Col, Form, message, Row, Select } from "antd";
import React, { useState } from "react";

import { LOAI_NHAN_OPTIONS } from "@/constants";
import { useStores } from "@/models";
import {
  RequestThemDLCapCauHoiVanBanBody,
  RequestThemDLCauHoiDongNghiaBody,
  RequestThemDLDichMayBody,
  RequestThemDLGanNhanCapVanBanBody,
  RequestThemDLGanNhanThucTheBody,
  RequestThemDLHoiDapBody,
  RequestThemDLPhanLoaiVanBanBody,
  RequestThemDuLieuResult,
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
  idDuAn: number;
  idLoaiNhan: string;
};

export const ThemDuLieuContainer: React.FC<IProps> = ({
  idDuAn,
  idLoaiNhan,
}) => {
  const { coreApi } = useStores();
  const [messageApi, contextHolder] = message.useMessage();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleResult = (res: RequestThemDuLieuResult) => {
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
      utilRedirectLocation(`/du-an/${idDuAn}/ds-du-lieu`);
    }, 500);
  };

  const handleSubmitPhanLoaiVanBan = async (
    values: RequestThemDLPhanLoaiVanBanBody
  ) => {
    setIsSubmitting(true);
    const res = await coreApi.themDLPhanLoaiVanBan(values);
    handleResult(res);
  };

  const handleSubmitHoiDap = async (values: RequestThemDLHoiDapBody) => {
    setIsSubmitting(true);
    const res = await coreApi.themDLHoiDap(values);
    handleResult(res);
  };

  const handleSubmitGanNhanThucThe = async (
    values: RequestThemDLGanNhanThucTheBody
  ) => {
    setIsSubmitting(true);
    const res = await coreApi.themDLGanNhanThucThe(values);
    handleResult(res);
  };

  const handleSubmitDichMay = async (values: RequestThemDLDichMayBody) => {
    setIsSubmitting(true);
    const res = await coreApi.themDLDichMay(values);
    handleResult(res);
  };

  const handleSubmitGanNhanCapVanBan = async (
    values: RequestThemDLGanNhanCapVanBanBody
  ) => {
    setIsSubmitting(true);
    const res = await coreApi.themDLGanNhanCapVanBan(values);
    handleResult(res);
  };

  const handleSubmitCapCauHoiVanBan = async (
    values: RequestThemDLCapCauHoiVanBanBody
  ) => {
    setIsSubmitting(true);
    const res = await coreApi.themDLCapCauHoiVanBan(values);
    handleResult(res);
  };

  const handleSubmitCauHoiDongNghia = async (
    values: RequestThemDLCauHoiDongNghiaBody
  ) => {
    setIsSubmitting(true);
    const res = await coreApi.themDLCauHoiDongNghia(values);
    handleResult(res);
  };

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
              defaultValue={idLoaiNhan}
              size="large"
              disabled
            />
          </Form.Item>

          {idLoaiNhan === "Phan_Loai_Van_Ban" && (
            <FormPhanLoaiVanBan
              initialValues={{ idDuAn }}
              isSubmitting={isSubmitting}
              onFinish={handleSubmitPhanLoaiVanBan}
            />
          )}

          {idLoaiNhan === "Hoi_Dap" && (
            <FormHoiDap
              initialValues={{ idDuAn }}
              isSubmitting={isSubmitting}
              onFinish={handleSubmitHoiDap}
            />
          )}

          {idLoaiNhan == "Gan_Nhan_Thuc_The" && (
            <FormGanNhanThucThe
              initialValues={{ idDuAn }}
              isSubmitting={isSubmitting}
              onFinish={handleSubmitGanNhanThucThe}
            />
          )}

          {idLoaiNhan === "Dich_May" && (
            <FormDichMay
              initialValues={{ idDuAn }}
              isSubmitting={isSubmitting}
              onFinish={handleSubmitDichMay}
            />
          )}

          {idLoaiNhan === "Gan_Nhan_Cap_Van_Ban" && (
            <FormGanNhanCapVanBan
              initialValues={{ idDuAn }}
              isSubmitting={isSubmitting}
              onFinish={handleSubmitGanNhanCapVanBan}
            />
          )}

          {idLoaiNhan === "Cap_Cau_Hoi_Van_Ban" && (
            <FormCapCauHoiVanBan
              initialValues={{ idDuAn }}
              isSubmitting={isSubmitting}
              onFinish={handleSubmitCapCauHoiVanBan}
            />
          )}

          {idLoaiNhan === "Tim_Cau_Hoi_Dong_Nghia" && (
            <FormCauHoiDongNghia
              initialValues={{ idDuAn }}
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
