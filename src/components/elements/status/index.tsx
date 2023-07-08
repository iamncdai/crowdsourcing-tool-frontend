import { Tag } from "antd";
import React from "react";

import { STATUS_COLOR_MAPS, STATUS_MAPS } from "@/constants";

type IProps = {
  trangThai: string;
};

export const Status: React.FC<IProps> = ({ trangThai }) => {
  return (
    <Tag color={STATUS_COLOR_MAPS[trangThai]}>
      {STATUS_MAPS[trangThai] || trangThai}
    </Tag>
  );
};
