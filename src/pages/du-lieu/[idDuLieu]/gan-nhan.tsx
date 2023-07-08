import { NextPage } from "next";

import { LayoutBase } from "@/components/layout";
import { GanNhanContainer } from "@/containers";
import { NextPageContextWithRootStore } from "@/types/next";
import { utilRedirectLocation } from "@/utils/router";

type IProps = {
  idDuLieu: number;
};

const GanNhanDuLieuPage: NextPage<IProps> = ({ idDuLieu }) => {
  return (
    <LayoutBase
      title="Gán nhãn dữ liệu"
      headerTitle="Gán nhãn dữ liệu"
      menuActiveKey="TASKS"
    >
      <GanNhanContainer idDuLieu={idDuLieu} />
    </LayoutBase>
  );
};

GanNhanDuLieuPage.getInitialProps = async (
  context: NextPageContextWithRootStore
) => {
  const idDuLieu = context.query?.idDuLieu as string;

  if (!idDuLieu) {
    utilRedirectLocation("/", context);
  }

  return {
    idDuLieu: Number(idDuLieu),
  };
};

export default GanNhanDuLieuPage;
