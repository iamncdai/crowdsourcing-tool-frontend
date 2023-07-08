import { observer } from "mobx-react-lite";
import { NextPage } from "next";

import { LayoutBase } from "@/components/layout";
import { CTGanNhanContainer } from "@/containers";
import { NextPageContextWithRootStore } from "@/types/next";
import { utilRedirectLocation } from "@/utils/router";

type IProps = {
  idDuLieu: number;
};

const ChiTietDuLieuPage: NextPage<IProps> = observer(({ idDuLieu }) => {
  return (
    <LayoutBase
      menuActiveKey="PROJECTS"
      title="Chi tiết dữ liệu"
      breadcrumbItems={[
        {
          title: "Dự án",
        },
        {
          title: `Dữ liệu #${idDuLieu}`,
          className: "cursor-pointer",
        },
        {
          title: "Chi tiết gán nhãn",
        },
      ]}
    >
      <CTGanNhanContainer idDuLieu={idDuLieu} />
    </LayoutBase>
  );
});

ChiTietDuLieuPage.getInitialProps = async (
  context: NextPageContextWithRootStore
) => {
  const idDuLieu = context.query.idDuLieu as string;

  if (!idDuLieu) {
    utilRedirectLocation("/", context);
  }

  return {
    idDuLieu: Number(idDuLieu),
  };
};

export default ChiTietDuLieuPage;
