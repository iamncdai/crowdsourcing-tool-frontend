import { Button } from "antd";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import Link from "next/link";

import { LayoutBase } from "@/components/layout";
import { DsDuLieuContainer } from "@/containers";
import { NextPageContextWithRootStore } from "@/types/next";
import { utilRedirectLocation } from "@/utils/router";

type IProps = {
  idDuAn: number;
  tenDuAn: string;
};

const DsDuLieuPage: NextPage<IProps> = observer(({ idDuAn, tenDuAn }) => {
  return (
    <LayoutBase
      menuActiveKey="PROJECTS"
      title="Danh sách dữ liệu"
      breadcrumbItems={[
        {
          title: "Dự án",
          className: "cursor-pointer",
          onClick: () => utilRedirectLocation("/"),
        },
        {
          title: tenDuAn,
        },
        {
          title: "Danh sách dữ liệu",
        },
      ]}
      headerRight={
        <Link href={`/du-an/${idDuAn}/them-du-lieu`}>
          <Button type="primary" icon={<i className="fas fa-plus-circle" />}>
            Thêm dữ liệu
          </Button>
        </Link>
      }
    >
      <DsDuLieuContainer idDuAn={idDuAn} />
    </LayoutBase>
  );
});

DsDuLieuPage.getInitialProps = async (
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
  };
};

export default DsDuLieuPage;
