import { Layout } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { observer } from "mobx-react-lite";
import Head from "next/head";
import { useRouter } from "next/router";
import Nookies from "nookies";
import React, { PropsWithChildren, useState } from "react";

import { APP_CONSTANTS } from "@/constants";
import { useInitData } from "@/hooks";
import { useStores } from "@/models";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { IMenuActiveKey } from "./types";

type IProps = PropsWithChildren<{
  title: string;
  headerTitle?: string;
  menuActiveKey?: IMenuActiveKey;
  headerRight?: JSX.Element;

  breadcrumbItems?: BreadcrumbItemType[];
}>;

export const LayoutBase: React.FC<IProps> = observer(
  ({
    title,
    headerTitle,
    menuActiveKey,
    headerRight,
    breadcrumbItems,
    children,
  }) => {
    const [collapsed, setCollapsed] = useState(false);

    const { authStore } = useStores();

    const router = useRouter();

    useInitData();

    const handleLogoutClick: React.MouseEventHandler<HTMLAnchorElement> = (
      e
    ) => {
      e.preventDefault();

      Nookies.destroy(null, APP_CONSTANTS.AUTH, {
        path: "/",
      });

      router.replace("/login", undefined).then((success) => {
        if (success) {
          authStore.logout();
        }
      });
    };

    return (
      <>
        <Head>
          <title>{[title, "CrowdsourcingTool"].join(" | ")}</title>
        </Head>

        <Layout hasSider>
          <Sidebar
            collapsed={collapsed}
            menuActiveKey={menuActiveKey}
            setCollapsed={setCollapsed}
          />

          <Layout
            style={{ marginLeft: collapsed ? 80 : 224, transition: "all 0.2s" }}
          >
            <Header
              title={headerTitle}
              user={authStore.user}
              collapsed={collapsed}
              right={headerRight}
              breadcrumbItems={breadcrumbItems}
              onLogoutClick={handleLogoutClick}
            />

            <main className="p-4">{children}</main>
          </Layout>
        </Layout>
      </>
    );
  }
);
