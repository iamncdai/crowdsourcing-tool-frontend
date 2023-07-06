import { NextPage } from "next";
import Router from "next/router";

import { LayoutBase } from "@/components/layout";
import { ProjectDataContainer } from "@/containers";
import { NextPageContextWithRootStore } from "@/types/next";

type IProps = {
  idDuAn: number;
  idLoaiNhan: string;
};

const ProjectDataPage: NextPage<IProps> = ({ idDuAn, idLoaiNhan }) => {
  return (
    <LayoutBase
      title="Quản lí dự án"
      headerTitle="Quản lí dự án"
      menuActiveKey="PROJECTS"
    >
      <ProjectDataContainer idDuAn={idDuAn} idLoaiNhan={idLoaiNhan} />
    </LayoutBase>
  );
};

ProjectDataPage.getInitialProps = async (
  context: NextPageContextWithRootStore
) => {
  const idDuAn = context.query?.idDuAn as string;
  const idLoaiNhan = context.query?.idLoaiNhan as string;

  if (!idDuAn || !idLoaiNhan) {
    if (context.res) {
      context.res.writeHead(307, { Location: "/" });
      context.res.end();
    } else {
      Router.replace("/");
    }
  }

  return {
    idDuAn: Number(idDuAn),
    idLoaiNhan,
  };
};

export default ProjectDataPage;
