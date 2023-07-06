import { Col, Form, Row, Select } from "antd";
import React, { useState } from "react";

import { LOAI_NHAN_OPTIONS } from "@/constants";

import {
  FormCapCauHoiVanBan,
  FormCauHoiDongNghia,
  FormDichMay,
  FormGanNhanCapVanBan,
  FormGanNhanThucThe,
  FormHoiDap,
  FormPhanLoaiVanBan,
  IFormDataCapCauHoiVanBan,
  IFormDataCauHoiDongNghia,
  IFormDataDichMay,
  IFormDataGanNhanCapVanBan,
  IFormDataGanNhanThucThe,
  IFormDataHoiDap,
  IFormDataPhanLoaiVanBan,
} from "./components";

export const CreateTaskContainer: React.FC = () => {
  const [type, setType] = useState("Phan_Loai_Van_Ban");

  const handleTypeChange = (value: string) => {
    setType(value);
  };

  const handleSubmitPhanLoaiVanBan = (values: IFormDataPhanLoaiVanBan) => {
    console.log(values);
  };

  const handleSubmitHoiDap = (values: IFormDataHoiDap) => {
    console.log(values);
  };

  const handleSubmitGanNhanThucThe = (values: IFormDataGanNhanThucThe) => {
    console.log(values);
  };

  const handleSubmitDichMay = (values: IFormDataDichMay) => {
    console.log(values);
  };

  const handleSubmitGanNhanCapVanBan = (values: IFormDataGanNhanCapVanBan) => {
    console.log(values);
  };

  const handleSubmitCapCauHoiVanBan = (values: IFormDataCapCauHoiVanBan) => {
    console.log(values);
  };

  const handleSubmitCauHoiDongNghia = (values: IFormDataCauHoiDongNghia) => {
    console.log(values);
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        <Form.Item
          label="Loại nhãn"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Select
            style={{ width: "100%" }}
            onChange={handleTypeChange}
            options={LOAI_NHAN_OPTIONS}
            value={type}
            size="large"
          />
        </Form.Item>

        {type === "Phan_Loai_Van_Ban" && (
          <FormPhanLoaiVanBan
            initialValues={{ idDuAn: 2 }}
            onFinish={handleSubmitPhanLoaiVanBan}
          />
        )}

        {type === "Hoi_Dap" && (
          <FormHoiDap
            initialValues={{ idDuAn: 2 }}
            onFinish={handleSubmitHoiDap}
          />
        )}

        {type == "Gan_Nhan_Thuc_The" && (
          <FormGanNhanThucThe
            initialValues={{ idDuAn: 2 }}
            onFinish={handleSubmitGanNhanThucThe}
          />
        )}

        {type === "Dich_May" && (
          <FormDichMay
            initialValues={{ idDuAn: 2 }}
            onFinish={handleSubmitDichMay}
          />
        )}

        {type === "Gan_Nhan_Cap_Van_Ban" && (
          <FormGanNhanCapVanBan
            initialValues={{ idDuAn: 2 }}
            onFinish={handleSubmitGanNhanCapVanBan}
          />
        )}

        {type === "Cap_Cau_Hoi_Van_Ban" && (
          <FormCapCauHoiVanBan
            initialValues={{ idDuAn: 2 }}
            onFinish={handleSubmitCapCauHoiVanBan}
          />
        )}

        {type === "Tim_Cau_Hoi_Dong_Nghia" && (
          <FormCauHoiDongNghia
            initialValues={{ idDuAn: 2 }}
            onFinish={handleSubmitCauHoiDongNghia}
          />
        )}
      </Col>
    </Row>
  );
};
