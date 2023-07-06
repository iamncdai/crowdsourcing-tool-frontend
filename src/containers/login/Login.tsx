import { Alert, Button, Checkbox, Form, Input, notification } from "antd";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { useStores } from "@/models";

type IFormValues = {
  UserName: string;
  Password: string;
  isRememberMe: boolean;
};

const LoginContainerCom: React.FC = () => {
  const { authStore } = useStores();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFinish = async (values: IFormValues) => {
    try {
      setIsLoading(true);

      const success = await authStore.login(
        { UserName: values.UserName, Password: values.Password },
        values.isRememberMe
      );

      if (!success) {
        throw new Error(
          "The email address or password is incorrect. Please check and try again."
        );
      }

      notification.success({
        message: "Login successfully",
        description: "You have been logged in successfully.",
        duration: 2000,
        placement: "bottom",
      });

      await router.push("/");
      notification.destroy();
      //
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex">
      <div
        className="relative hidden h-screen bg-gray-200 bg-cover bg-right-bottom lg:block lg:w-1/2 xl:w-2/3"
        style={{ backgroundImage: `url('/images/auth-bg.jpg')` }}
      />

      <div className="z-1 flex h-screen w-full items-center bg-white p-8 shadow-xl lg:w-1/2 xl:w-1/3">
        <div className="flex-1">
          <div className="mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              className="mb-4 h-20 w-20 rounded-xl"
              alt="Logo"
            />

            <h2 className="mb-2 text-2xl font-semibold">Xin Chào 👋</h2>
            <p className="text-gray-500">
              {/* Enter your email and password to login. */}
              Nhập tên đăng nhập và mật khẩu để đăng nhập.
            </p>
          </div>

          <Form
            name="basic"
            layout="vertical"
            autoComplete="off"
            requiredMark={false}
            //
            initialValues={{ isRememberMe: true }}
            onFinish={handleFinish}
          >
            {error && (
              <Alert
                message={error}
                type="error"
                showIcon
                closable
                //
                className="animate__animated animate__fadeIn mb-6"
              />
            )}

            <Form.Item
              label="Tên đăng nhập"
              name="UserName"
              rules={[
                { required: true, message: "Vui lòng nhập tên đăng nhập" },
              ]}
            >
              <Input placeholder="Nhập tên đăng nhập" size="large" />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="Password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
            >
              <Input.Password placeholder="Nhập mật khẩu" size="large" />
            </Form.Item>

            <Form.Item name="isRememberMe" valuePropName="checked">
              <Checkbox>Ghi nhớ tài khoản</Checkbox>
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={isLoading}
            >
              Đăng nhập
            </Button>
          </Form>
        </div>
      </div>
    </main>
  );
};

export const LoginContainer = observer(LoginContainerCom);
