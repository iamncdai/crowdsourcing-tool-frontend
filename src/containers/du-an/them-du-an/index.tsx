import { Button, Col, Form, Input, message, Row, Select } from "antd";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { FormHeading } from "@/components/elements";
import { LOAI_NHAN_OPTIONS } from "@/constants";
import { useStores } from "@/models";
import { RequestThemDuAnBody } from "@/services/api/core-api/type";

export const ThemDuAnContainer: React.FC = observer(() => {
  const { coreApi } = useStores();

  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFinish = async (values: RequestThemDuAnBody) => {
    try {
      setIsSubmitting(true);

      const res = await coreApi.themDuAn(values);

      if (res.kind !== "ok") {
        throw new Error("Thêm dự án thất bại");
      }

      messageApi.success("Thêm dự án thành công");

      setTimeout(() => {
        router.push("/du-an");
      }, 500);

      console.log("Submit", values);
    } catch (error) {
      setIsSubmitting(false);
      messageApi.error(error.message);
    }
  };

  return (
    <>
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
              idLoaiNhan: LOAI_NHAN_OPTIONS[0].value,
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

              <Form.Item label="Loại nhãn" name="idLoaiNhan">
                <Select
                  style={{ width: "100%" }}
                  options={LOAI_NHAN_OPTIONS}
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
                Thêm dự án
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

      {contextHolder}
    </>
  );
});
