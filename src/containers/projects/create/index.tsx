import { Button, Col, Form, Input, Row, Select } from "antd";
import React from "react";

import { FormHeading } from "@/components/elements";
import { LOAI_NHAN_OPTIONS } from "@/constants";

type IFormData = {
  tenDuAn: string;
  idNhanDuLieu: string;
};

export const CreateProjectContainer: React.FC = () => {
  const handleFinish = (values: IFormData) => {
    console.log("Submit", values);
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        <Form
          name="basic"
          layout="vertical"
          autoComplete="off"
          requiredMark={false}
          //
          initialValues={{
            tenDuAn: "",
            idNhanDuLieu: LOAI_NHAN_OPTIONS[0].value,
          }}
          onFinish={handleFinish}
        >
          <div className="form-box">
            <FormHeading
              title="Thêm dự án"
              icon={<i className="fas fa-plus-circle text-primary-500" />}
            />

            <Form.Item
              label="Tên dự án"
              name="tenDuAn"
              rules={[{ required: true, message: "Vui lòng nhập tên dự án" }]}
            >
              <Input type="text" placeholder="Tên dự án" size="large" />
            </Form.Item>

            <Form.Item label="Loại nhãn" name="idNhanDuLieu">
              <Select
                style={{ width: "100%" }}
                options={LOAI_NHAN_OPTIONS}
                size="large"
              />
            </Form.Item>

            <Button type="primary" htmlType="submit" block size="large">
              Thêm dự án
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};
