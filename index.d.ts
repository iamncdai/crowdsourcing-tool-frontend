/* eslint-disable @typescript-eslint/no-explicit-any */
declare interface ENVIRONMENT {
  GATEWAY: string;
  AUTH_SERVICE: string;
  CORE_SERVICE: string;
}

declare interface Window {
  __ENV__: ENVIRONMENT;
}

declare module "*.svg" {
  const content: React.ComponentType<
    React.SVGProps<SVGSVGElement> | CustomIconComponentProps
  >;
  export default content;
}
