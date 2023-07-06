/* eslint-disable @next/next/no-img-element */
import {
  AppstoreOutlined,
  CheckSquareOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { IMenuActiveKey } from "./types";

type IProps = {
  collapsed: boolean;
  menuActiveKey: IMenuActiveKey;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Sidebar: React.FC<IProps> = ({
  collapsed,
  menuActiveKey,
  setCollapsed,
}) => {
  const router = useRouter();

  const handleMenuClick = (key: string) => {
    switch (key) {
      case "PROJECTS":
        router.push("/");
        break;
      case "TASKS":
        router.push("/tasks");
        break;
      default:
        break;
    }
  };

  return (
    <Layout.Sider
      width={224}
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      //
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 9999,
      }}
    >
      <div className="flex h-full flex-col">
        <Link href="/">
          <div
            className={clsx(
              "flex h-[72px] cursor-pointer items-center space-x-4 border-b border-gray-800 px-4 transition-all duration-200",
              {
                "px-5": collapsed,
              }
            )}
          >
            <img
              src="/images/logo.png"
              className="h-10 w-10 rounded-lg"
              alt="Logo"
            />

            <div
              className={clsx(
                "flex w-full flex-1 flex-col space-y-1 overflow-hidden whitespace-nowrap text-lg font-bold leading-none text-white transition-all duration-200",
                {
                  "w-0": collapsed,
                }
              )}
            >
              <span>Crowdsourcing</span>
              <span>Tool</span>
            </div>
          </div>
        </Link>

        <Menu
          className="grow p-3"
          onClick={(e) => handleMenuClick(e.key)}
          theme="dark"
          items={[
            {
              key: "PROJECTS",
              icon: <AppstoreOutlined />,
              label: "Dự án",
            },
            {
              key: "TASKS",
              icon: <CheckSquareOutlined />,
              label: "Công việc",
            },
          ]}
          selectedKeys={[menuActiveKey]}
        />

        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="border-t border-gray-800 bg-transparent py-2 text-base text-gray-400"
        >
          {collapsed ? <RightOutlined /> : <LeftOutlined />}
        </button>
      </div>
    </Layout.Sider>
  );
};
