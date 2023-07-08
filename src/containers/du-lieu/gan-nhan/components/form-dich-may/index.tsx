import { Button, Form, Input, Select } from "antd";
import { observer } from "mobx-react-lite";
import React from "react";

import { FormHeading } from "@/components/elements";
import { TaskContent } from "@/components/tasks";
import { useStores } from "@/models";
import { RequestGanNhanDichMayBody } from "@/services/api/core-api/type";

type IData = {
  vanBan: string;
  idNgonNgu: number;
};

type IProps = {
  data: IData;
  initialValues?: Partial<RequestGanNhanDichMayBody>;
  isSubmitting?: boolean;
  onFinish?: (values: RequestGanNhanDichMayBody) => void;
};

export const FormDichMay: React.FC<IProps> = observer(
  ({ data, initialValues, isSubmitting, onFinish }) => {
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
          <FormHeading title="Dịch máy" />

          <Form.Item
            label="ID dữ liệu"
            name="idDuLieu"
            rules={[{ required: true, message: "Vui lòng nhập ID dữ liệu" }]}
          >
            <Input type="text" placeholder="ID dữ liệu" size="large" disabled />
          </Form.Item>

          <Form.Item label={`Văn bản (${data.idNgonNgu})`}>
            <TaskContent text={data.vanBan} />
          </Form.Item>

          <Form.Item label="Ngôn ngữ dịch" name="idNgonNguDich">
            <Select
              allowClear
              style={{ width: "100%" }}
              placeholder="Chọn ngôn ngữ dịch"
              options={commonStore.viewDsNgonNguOptions}
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Bản dịch"
            name="noiDung"
            rules={[{ required: true, message: "Vui lòng nhập bản dịch" }]}
          >
            <Input.TextArea placeholder="Nhập bản dịch" size="large" />
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
  }
);
