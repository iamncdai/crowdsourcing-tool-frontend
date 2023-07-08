import { Button, Form, Input } from "antd";
import React from "react";

import { FormHeading } from "@/components/elements";
import { TaskContent } from "@/components/tasks";
import { RequestGanNhanCapCauHoiVanBanBody } from "@/services/api/core-api/type";

type IData = {
  vanBan: string;
  cauHoi: string;
};

type IProps = {
  data: IData;
  initialValues?: Partial<RequestGanNhanCapCauHoiVanBanBody>;
  isSubmitting?: boolean;
  onFinish?: (values: RequestGanNhanCapCauHoiVanBanBody) => void;
};

export const FormCapCauHoiVanBan: React.FC<IProps> = ({
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
        <FormHeading title="Gán nhãn câu trả lời của cặp câu hỏi và văn bản" />

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

        <Form.Item label="Câu hỏi">
          <TaskContent text={data?.cauHoi} />
        </Form.Item>

        <Form.Item
          label="Câu trả lời chính xác"
          name="noiDung"
          rules={[
            { required: true, message: "Vui lòng nhập câu trả lời chính xác" },
          ]}
        >
          <Input.TextArea
            placeholder="Nhập câu trả lời chính xác"
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
