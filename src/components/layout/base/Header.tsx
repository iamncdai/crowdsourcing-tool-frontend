import { Breadcrumb, Dropdown } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import clsx from "clsx";
import React from "react";

import { UserAvatar } from "@/components/elements";
import { IUser } from "@/models/auth-store";

type IProps = {
  title?: string;
  breadcrumbItems?: BreadcrumbItemType[];
  right?: JSX.Element;
  user: IUser;
  collapsed: boolean;

  onLogoutClick: React.MouseEventHandler<HTMLAnchorElement>;
};

export const Header: React.FC<IProps> = ({
  title,
  breadcrumbItems,
  right,
  user,
  collapsed,

  onLogoutClick,
}) => {
  return (
    <>
      <header className="fixed right-0 top-0 z-50 w-full">
        <div
          className={clsx(
            "flex h-[72px] items-center space-x-4 border-b bg-white px-4 transition-all duration-200",
            {
              "ml-[80px]": collapsed,
              "ml-[224px]": !collapsed,
            }
          )}
        >
          <div className="flex flex-1 items-center space-x-2">
            {title && <span className="text-xl font-semibold">{title}</span>}

            {Array.isArray(breadcrumbItems) && breadcrumbItems?.length > 0 && (
              <Breadcrumb items={breadcrumbItems} />
            )}
          </div>

          {right && <div>{right}</div>}
          <Dropdown
            menu={{
              items: [
                {
                  key: "LOGOUT",
                  label: (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a href="#" onClick={onLogoutClick}>
                      Logout
                    </a>
                  ),
                },
              ],
            }}
            trigger={["click"]}
            getPopupContainer={(trigger) => trigger.parentElement}
          >
            <div className="flex cursor-pointer items-center space-x-4">
              <UserAvatar name={user.Hoten} />

              <div className="flex flex-col">
                <span className="text-base font-medium">{user.Hoten}</span>
                <span className="text-gray-400">@{user.UserName}</span>
              </div>

              <i className="fas fa-caret-down text-gray-400" />
            </div>
          </Dropdown>
        </div>
      </header>

      <div className="h-[72px]"></div>
    </>
  );
};
