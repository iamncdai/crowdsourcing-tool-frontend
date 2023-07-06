import { Button, Form, Input, Radio } from "antd";
import React from "react";

import { FormHeading } from "@/components/elements";
import { TaskContent } from "@/components/tasks";

type IData = {
  vanBan1: string;
  vanBan2: string;
};

export type IFormDataGanNhanCapVanBan = {
  idDuLieu: number;
  noiDung: string;
};

type IProps = {
  data: IData;
  initialValues?: Partial<IFormDataGanNhanCapVanBan>;
  onFinish?: (values: IFormDataGanNhanCapVanBan) => void;
};

export const FormGanNhanCapVanBan: React.FC<IProps> = ({
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
        <FormHeading title="Gán nhãn cặp văn bản (đồng nghĩa)" />

        <Form.Item
          label="ID dữ liệu"
          name="idDuLieu"
          rules={[{ required: true, message: "Vui lòng nhập ID dữ liệu" }]}
        >
          <Input type="text" placeholder="ID dữ liệu" size="large" disabled />
        </Form.Item>

        <Form.Item label="Văn bản 1">
          <TaskContent text={data?.vanBan1} />
        </Form.Item>

        <Form.Item label="Văn bản 2">
          <TaskContent text={data?.vanBan2} />
        </Form.Item>

        <Form.Item
          label="Cặp văn bản có đồng nghĩa hay không?"
          name="noiDung"
          rules={[{ required: true, message: "Vui lòng chọn Có/Không" }]}
        >
          <Radio.Group>
            <Radio value="YES">Có</Radio>
            <Radio value="NO">Không</Radio>
          </Radio.Group>
        </Form.Item>

        <Button type="primary" htmlType="submit" block size="large">
          Hoàn thành
        </Button>
      </div>
    </Form>
  );
};
