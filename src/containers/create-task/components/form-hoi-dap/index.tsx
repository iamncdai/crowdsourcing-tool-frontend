import { Button, Form, Input, Select } from "antd";
import React from "react";

import { FormHeading } from "@/components/elements";

export type IFormDataHoiDap = {
  idDuAn: number;
  cauHoi: string;
  vanBan: string;
  dsPhanCong: string[];
};

type IProps = {
  initialValues?: Partial<IFormDataHoiDap>;
  onFinish?: (values: IFormDataHoiDap) => void;
};

export const FormHoiDap: React.FC<IProps> = ({ initialValues, onFinish }) => {
  return (
    <Form
      name="basic"
      layout="vertical"
      autoComplete="off"
      requiredMark={false}
      //
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <div className="form-box">
        <FormHeading title="Hỏi đáp" />

        <Form.Item
          label="ID dự án"
          name="idDuAn"
          rules={[{ required: true, message: "Vui lòng nhập ID dự án" }]}
        >
          <Input type="text" placeholder="ID dự án" size="large" disabled />
        </Form.Item>

        <Form.Item
          label="Câu hỏi"
          name="cauHoi"
          rules={[{ required: true, message: "Vui lòng nhập câu hỏi" }]}
        >
          <Input.TextArea placeholder="Nhập câu hỏi" size="large" />
        </Form.Item>

        <Form.Item
          label="Văn bản"
          name="vanBan"
          rules={[{ required: true, message: "Vui lòng nhập văn bản" }]}
        >
          <Input.TextArea placeholder="Nhập văn bản" size="large" />
        </Form.Item>

        <Form.Item label="Phân công" name="dsPhanCong">
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Chọn người gán nhãn"
            options={[
              { label: "User 1", value: 1 },
              { label: "User 2", value: 2 },
              { label: "User 3", value: 3 },
            ]}
            size="large"
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" block size="large">
          Thêm
        </Button>
      </div>
    </Form>
  );
};
