import { Button, Form, Input, Select } from "antd";
import React from "react";

import { FormHeading } from "@/components/elements";
import { TaskContent } from "@/components/tasks";

type IData = {
  vanBan: string;
};

export type IFormDataGanNhanThucThe = {
  idDuLieu: number;
  dsTenThucThe: string[];
};

type IProps = {
  data: IData;
  initialValues?: Partial<IFormDataGanNhanThucThe>;
  onFinish?: (values: IFormDataGanNhanThucThe) => void;
};

export const FormGanNhanThucThe: React.FC<IProps> = ({
  data,
  initialValues,
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

        <Button type="primary" htmlType="submit" block size="large">
          Hoàn thành
        </Button>
      </div>
    </Form>
  );
};
