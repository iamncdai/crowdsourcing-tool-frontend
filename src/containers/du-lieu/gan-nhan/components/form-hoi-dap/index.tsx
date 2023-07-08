import { Button, Form, Input, Radio } from "antd";
import React from "react";

import { FormHeading } from "@/components/elements";
import { TaskContent } from "@/components/tasks";
import { RequestGanNhanHoiDapBody } from "@/services/api/core-api/type";

type IData = {
  cauHoi: string;
  vanBan: string;
};

type IProps = {
  data: IData;
  initialValues?: Partial<RequestGanNhanHoiDapBody>;
  isSubmitting?: boolean;
  onFinish?: (values: RequestGanNhanHoiDapBody) => void;
};

export const FormHoiDap: React.FC<IProps> = ({
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
        <FormHeading title="Hỏi đáp" />

        <Form.Item
          label="ID dữ liệu"
          name="idDuLieu"
          rules={[{ required: true, message: "Vui lòng nhập ID dữ liệu" }]}
        >
          <Input type="text" placeholder="ID dữ liệu" size="large" disabled />
        </Form.Item>

        <Form.Item label="Câu hỏi">
          <TaskContent text={data.cauHoi} />
        </Form.Item>

        <Form.Item label="Văn bản">
          <TaskContent text={data.vanBan} />
        </Form.Item>

        <Form.Item
          label="Văn bản có phải là trả lời cho câu hỏi không?"
          name="noiDung"
          rules={[{ required: true, message: "Vui lòng chọn Có/Không" }]}
        >
          <Radio.Group>
            <Radio value="YES">Có</Radio>
            <Radio value="NO">Không</Radio>
          </Radio.Group>
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
