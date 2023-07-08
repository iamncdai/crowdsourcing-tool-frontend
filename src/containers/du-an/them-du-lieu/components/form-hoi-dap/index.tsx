import { Button, Form, Input, Select } from "antd";
import { observer } from "mobx-react-lite";
import React from "react";

import { FormHeading } from "@/components/elements";
import { useStores } from "@/models";
import { RequestThemDLHoiDapBody } from "@/services/api/core-api/type";

type IProps = {
  initialValues?: Partial<RequestThemDLHoiDapBody>;
  isSubmitting?: boolean;
  onFinish?: (values: RequestThemDLHoiDapBody) => void;
};

export const FormHoiDap: React.FC<IProps> = observer(
  ({ initialValues, isSubmitting, onFinish }) => {
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
              options={commonStore.viewDsPhanCongOptions}
              size="large"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            loading={isSubmitting}
          >
            Thêm
          </Button>
        </div>
      </Form>
    );
  }
);
