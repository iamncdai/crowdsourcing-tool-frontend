import { Button, Form, Input, Select } from "antd";
import { observer } from "mobx-react-lite";
import React from "react";

import { FormHeading } from "@/components/elements";
import { useStores } from "@/models";

export type IFormDataPhanLoaiVanBan = {
  idDuAn: number;
  vanBan: string;
  dsPhanCong: string[];
};

type IProps = {
  initialValues?: Partial<IFormDataPhanLoaiVanBan>;
  onFinish?: (values: IFormDataPhanLoaiVanBan) => void;
};

export const FormPhanLoaiVanBan: React.FC<IProps> = observer(
  ({ initialValues, onFinish }) => {
    const { commonStore } = useStores();

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
          <FormHeading title="Phân loại văn bản" />

          <Form.Item
            label="ID dự án"
            name="idDuAn"
            rules={[{ required: true, message: "Vui lòng nhập ID dự án" }]}
          >
            <Input type="text" placeholder="ID dự án" size="large" disabled />
          </Form.Item>

          <Form.Item
            label="Văn bản"
            name="vanBan"
            rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
          >
            <Input.TextArea placeholder="Nhập nội dung" size="large" />
          </Form.Item>

          <Form.Item label="Phân công" name="dsPhanCong">
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Chọn người gán nhãn"
              options={commonStore.viewDsPhanCongOptions}
              size="large"
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" block size="large">
            Thêm
          </Button>
        </div>
      </Form>
    );
  }
);
