import { NextPage } from "next";
import Router from "next/router";

import { LayoutBase } from "@/components/layout";
import { SubmitTaskContainer } from "@/containers";
import { NextPageContextWithRootStore } from "@/types/next";

type IProps = {
  idDuLieu: number;
  idLoaiNhan: string;
};

const SubmitTaskPage: NextPage<IProps> = ({ idDuLieu, idLoaiNhan }) => {
  return (
    <LayoutBase
      title="Thực hiện công việc"
      headerTitle="Thực hiện công việc"
      menuActiveKey="TASKS"
    >
      <SubmitTaskContainer idDuLieu={idDuLieu} idLoaiNhan={idLoaiNhan} />
    </LayoutBase>
  );
};

SubmitTaskPage.getInitialProps = async (
  context: NextPageContextWithRootStore
) => {
  const idDuLieu = context.query?.idDuLieu as string;
  const idLoaiNhan = context.query?.idLoaiNhan as string;

  if (!idDuLieu || !idLoaiNhan) {
    if (context.res) {
      context.res.writeHead(307, { Location: "/" });
      context.res.end();
    } else {
      Router.replace("/");
    }
  }

  return {
    idDuLieu: Number(idDuLieu),
    idLoaiNhan,
  };
};

export default SubmitTaskPage;
