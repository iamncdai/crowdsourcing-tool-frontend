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

type IProps = {
  idDuLieu: number;
  idLoaiNhan: string;
};

export const SubmitTaskContainer: React.FC<IProps> = ({
  idDuLieu,
  idLoaiNhan,
}) => {
  const [type, setType] = useState(idLoaiNhan);

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
            disabled
          />
        </Form.Item>

        {type === "Phan_Loai_Van_Ban" && (
          <FormPhanLoaiVanBan
            data={{
              vanBan: `Hạt dẻ có chân
          - Con: Mẹ ơi, hạt dẻ có chân không ạ?
          - Mẹ: ???
          - Con: Thế mà con vừa ăn một hạt dẻ có chân đó mẹ.
          - Mẹ: Trời,mày chưa thấy con gián bao giờ hả????`,
            }}
            initialValues={{ idDuLieu }}
            onFinish={handleSubmitPhanLoaiVanBan}
          />
        )}

        {type === "Hoi_Dap" && (
          <FormHoiDap
            data={{
              cauHoi: "Mẹ ơi, hạt dẻ có chân không ạ?",
              vanBan: "Thế mà con vừa ăn một hạt dẻ có chân đó mẹ.",
            }}
            initialValues={{ idDuLieu }}
            onFinish={handleSubmitHoiDap}
          />
        )}

        {type == "Gan_Nhan_Thuc_The" && (
          <FormGanNhanThucThe
            data={{
              vanBan:
                "Hóa đơn là một loại văn bản được sử dụng hàng ngày trong hoạt động kinh doanh, mua bán hàng hóa, dịch vụ. Hóa đơn được người bán lập, ghi nhận thông tin bán hàng hóa hoặc cung ứng dịch vụ theo quy định của pháp luật.",
            }}
            initialValues={{ idDuLieu }}
            onFinish={handleSubmitGanNhanThucThe}
          />
        )}

        {type === "Dich_May" && (
          <FormDichMay
            data={{ vanBan: "Mẹ ơi, hạt dẻ có chân không ạ?", idNgonNgu: 1 }}
            initialValues={{ idDuLieu }}
            onFinish={handleSubmitDichMay}
          />
        )}

        {type === "Gan_Nhan_Cap_Van_Ban" && (
          <FormGanNhanCapVanBan
            data={{
              vanBan1: "Mẹ ơi, hạt dẻ có chân không ạ?",
              vanBan2: "Thế mà con vừa ăn một hạt dẻ có chân đó mẹ.",
            }}
            initialValues={{ idDuLieu }}
            onFinish={handleSubmitGanNhanCapVanBan}
          />
        )}

        {type === "Cap_Cau_Hoi_Van_Ban" && (
          <FormCapCauHoiVanBan
            data={{
              vanBan:
                "Hóa đơn là một loại văn bản được sử dụng hàng ngày trong hoạt động kinh doanh, mua bán hàng hóa, dịch vụ. Hóa đơn được người bán lập, ghi nhận thông tin bán hàng hóa hoặc cung ứng dịch vụ theo quy định của pháp luật.",
              cauHoi: "Hoá đơn là gì?",
            }}
            initialValues={{ idDuLieu }}
            onFinish={handleSubmitCapCauHoiVanBan}
          />
        )}

        {type === "Tim_Cau_Hoi_Dong_Nghia" && (
          <FormCauHoiDongNghia
            data={{ cauHoi: "Mẹ ơi, hạt dẻ có chân không ạ?" }}
            initialValues={{ idDuLieu, dsCauHoiDongNghia: [] }}
            onFinish={handleSubmitCauHoiDongNghia}
          />
        )}
      </Col>
    </Row>
  );
};
