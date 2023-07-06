import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";

import { FormHeading } from "@/components/elements";
import { TaskContent } from "@/components/tasks";

type IData = {
  cauHoi: string;
};

export type IFormDataCauHoiDongNghia = {
  idDuLieu: number;
  dsCauHoiDongNghia: string[];
};

type IProps = {
  data: IData;
  initialValues?: Partial<IFormDataCauHoiDongNghia>;
  onFinish?: (values: IFormDataCauHoiDongNghia) => void;
};

export const FormCauHoiDongNghia: React.FC<IProps> = ({
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
      initialValues={{
        dsCauHoiDongNghia: [""],
        ...initialValues,
      }}
      onFinish={onFinish}
    >
      <div className="form-box">
        <FormHeading title="Tìm câu hỏi đồng nghĩa" />

        <Form.Item
          label="ID dữ liệu"
          name="idDuLieu"
          rules={[{ required: true, message: "Vui lòng nhập ID dữ liệu" }]}
        >
          <Input type="text" placeholder="ID dữ liệu" size="large" disabled />
        </Form.Item>

        <Form.Item label="Câu hỏi">
          <TaskContent text={data?.cauHoi} />
        </Form.Item>

        <Form.Item label="Danh sách câu hỏi đồng nghĩa">
          <Form.List
            name="dsCauHoiDongNghia"
            rules={[
              {
                validator(_, value, callback) {
                  if (!value || value.length < 1) {
                    callback("Vui lòng nhập ít nhất 1 câu hỏi");
                  } else {
                    callback();
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Form.Item key={key} wrapperCol={{ span: 24 }}>
                    <div className="flex space-x-4">
                      <Form.Item
                        {...restField}
                        name={name}
                        rules={[
                          { required: true, message: "Vui lòng nhập câu hỏi" },
                        ]}
                        style={{ width: "100%" }}
                        noStyle
                      >
                        <Input placeholder={`Nhập câu hỏi ${name + 1}`} />
                      </Form.Item>

                      <MinusCircleOutlined
                        onClick={() => remove(name)}
                        className="text-red-400"
                      />
                    </div>
                  </Form.Item>
                ))}

                <Form.ErrorList errors={errors} className="mb-2" />

                <Form.Item noStyle>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Thêm câu hỏi
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>

        <Button type="primary" htmlType="submit" block size="large">
          Hoàn thành
        </Button>
      </div>
    </Form>
  );
};
