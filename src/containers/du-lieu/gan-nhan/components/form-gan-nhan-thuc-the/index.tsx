import { Button, Form, Input, Select } from "antd";
import React from "react";

import { FormHeading } from "@/components/elements";
import { TaskContent } from "@/components/tasks";
import { RequestGanNhanThucTheBody } from "@/services/api/core-api/type";

type IData = {
  vanBan: string;
};

type IProps = {
  data: IData;
  initialValues?: Partial<RequestGanNhanThucTheBody>;
  isSubmitting?: boolean;
  onFinish?: (values: RequestGanNhanThucTheBody) => void;
};

export const FormGanNhanThucThe: React.FC<IProps> = ({
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
        <FormHeading title="Gán nhãn thực thể" />

        <Form.Item
          label="ID dữ liệu"
          name="idDuLieu"
          rules={[{ required: true, message: "Vui lòng nhập ID dữ liệu" }]}
        >
          <Input type="text" placeholder="ID dữ liệu" size="large" disabled />
        </Form.Item>

        <Form.Item label="Văn bản">
          <TaskContent text={data?.vanBan} />
        </Form.Item>

        <Form.Item
          label="Danh sách tên thực thể trong văn bản"
          name="dsTenThucThe"
        >
          <Select
            mode="tags"
            allowClear
            style={{ width: "100%" }}
            placeholder="Nhập tên thực thể"
            options={[]}
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
