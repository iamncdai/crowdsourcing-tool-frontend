import envGlobal from "env";

type ApiConfigType = {
  gateway: string;
  auth: string;
  core: string;
};

export const ApiConfig = (): ApiConfigType => {
  const { GATEWAY, AUTH_SERVICE, CORE_SERVICE } = envGlobal();

  const gateway = GATEWAY;

  const getService = (service: string): string => {
    return [gateway, service].join("/");
  };

  const services = {
    gateway,
    auth: getService(AUTH_SERVICE),
    core: getService(CORE_SERVICE),
  };

  return services;
};
