import { NextPageContext } from "next";
import Router from "next/router";

import { ROUTES_NO_AUTH } from "@/constants";
import { ETypeUser } from "@/models/auth-store";

export function utilRedirectLocation(location: string, ctx?: NextPageContext) {
  if (typeof window === "undefined") {
    ctx?.res?.writeHead(301, { Location: location });
    ctx?.res?.end();
    return {
      pageProps: {},
    };
  } else {
    Router.replace(location);
  }
}

type ParamsRedirectAuth = {
  isAuth: boolean;
  typeUser: number;
  ctx?: NextPageContext;
};

export function redirectAuth(params: ParamsRedirectAuth) {
  const { ctx, typeUser, isAuth } = params;
  console.log("🚀 ~ file: router.ts:27 ~ redirectAuth ~ typeUser:", typeUser);

  const url = ctx?.pathname;

  const routeAuth = ROUTES_NO_AUTH.indexOf(url) < 0;

  if (!isAuth && routeAuth) {
    return utilRedirectLocation("/login", ctx);
  }

  if (isAuth && !routeAuth) {
    const url =
      typeUser === ETypeUser.QuanLi
        ? "/du-an"
        : typeUser === ETypeUser.NguoiGanNhan
        ? "/du-lieu/ds-cong-viec"
        : "/";

    console.log("🚀 ~ file: router.ts:39 ~ redirectAuth ~ url:", url);

    console.log(typeUser);
    return utilRedirectLocation(url, ctx);
  }
}
