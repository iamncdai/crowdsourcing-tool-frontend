import { NextPage } from "next";

import { LayoutBase } from "@/components/layout";
import { ThemDuLieuContainer } from "@/containers";
import { NextPageContextWithRootStore } from "@/types/next";
import { utilRedirectLocation } from "@/utils/router";

type IProps = {
  idDuAn: number;
  idLoaiNhan: string;
  tenDuAn: string;
};

const ThemDuLieuPage: NextPage<IProps> = ({ idDuAn, idLoaiNhan, tenDuAn }) => {
  return (
    <LayoutBase
      menuActiveKey="PROJECTS"
      title="Thêm dữ liệu"
      breadcrumbItems={[
        {
          title: "Dự án",
        },
        {
          title: tenDuAn,
        },
        {
          title: "Thêm dữ liệu",
        },
      ]}
    >
      <ThemDuLieuContainer idDuAn={idDuAn} idLoaiNhan={idLoaiNhan} />
    </LayoutBase>
  );
};

ThemDuLieuPage.getInitialProps = async (
  context: NextPageContextWithRootStore
) => {
  const idDuAn = context.query.idDuAn as string;

  if (!idDuAn) {
    utilRedirectLocation("/", context);
  }

  const duAn = await context.store.projectsStore.getDuAn(Number(idDuAn));

  if (!duAn) {
    utilRedirectLocation("/", context);
  }

  return {
    idDuAn: Number(idDuAn),
    tenDuAn: duAn.TenDA,
    idLoaiNhan: duAn.idLoaiNhan,
  };
};

export default ThemDuLieuPage;
