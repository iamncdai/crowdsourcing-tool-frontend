import { Button, Form, Input, Select } from "antd";
import { observer } from "mobx-react-lite";
import React from "react";

import { FormHeading } from "@/components/elements";
import { useStores } from "@/models";
import { RequestThemDLGanNhanCapVanBanBody } from "@/services/api/core-api/type";

type IProps = {
  initialValues?: Partial<RequestThemDLGanNhanCapVanBanBody>;
  isSubmitting?: boolean;
  onFinish?: (values: RequestThemDLGanNhanCapVanBanBody) => void;
};

export const FormGanNhanCapVanBan: React.FC<IProps> = observer(
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
          <FormHeading title="Gán nhãn cặp văn bản (đồng nghĩa)" />

          <Form.Item
            label="ID dự án"
            name="idDuAn"
            rules={[{ required: true, message: "Vui lòng nhập ID dự án" }]}
          >
            <Input type="text" placeholder="ID dự án" size="large" disabled />
          </Form.Item>

          <Form.Item
            label="Văn bản 1"
            name="vanBan1"
            rules={[{ required: true, message: "Vui lòng nhập văn bản 1" }]}
          >
            <Input.TextArea placeholder="Nhập văn bản 1" size="large" />
          </Form.Item>

          <Form.Item
            label="Văn bản 2"
            name="vanBan2"
            rules={[{ required: true, message: "Vui lòng nhập văn bản 2" }]}
          >
            <Input.TextArea placeholder="Nhập văn bản 2" size="large" />
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
