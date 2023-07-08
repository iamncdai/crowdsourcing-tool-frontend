import { Button, Form, Input, Select } from "antd";
import React from "react";

import { FormHeading } from "@/components/elements";
import { TaskContent } from "@/components/tasks";
import { RequestGanNhanPhanLoaiVanBanBody } from "@/services/api/core-api/type";

type IData = {
  vanBan: string;
};

type IProps = {
  data: IData;
  initialValues?: Partial<RequestGanNhanPhanLoaiVanBanBody>;
  isSubmitting?: boolean;
  onFinish?: (values: RequestGanNhanPhanLoaiVanBanBody) => void;
};

export const FormPhanLoaiVanBan: React.FC<IProps> = ({
  data,
  initialValues,
  isSubmitting,
  onFinish,
}) => {
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
          label="ID dữ liệu"
          name="idDuLieu"
          rules={[{ required: true, message: "Vui lòng nhập ID dự liệu" }]}
        >
          <Input type="text" placeholder="ID dữ liệu" size="large" disabled />
        </Form.Item>

        <Form.Item label="Văn bản">
          <TaskContent text={data.vanBan} />
        </Form.Item>

        <Form.Item
          label="Loại văn bản"
          name="noiDung"
          rules={[{ required: true, message: "Vui lòng nhập loại văn bản" }]}
        >
          <Select
            allowClear
            style={{ width: "100%" }}
            placeholder="Chọn loại văn bản"
            options={[
              { label: "User 1", value: 1 },
              { label: "User 2", value: 2 },
              { label: "User 3", value: 3 },
            ]}
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
          Hoàn thành
        </Button>
      </div>
    </Form>
  );
};
