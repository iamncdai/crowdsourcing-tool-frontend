import { AuthApi } from "@/services/api/auth-api";

export class Environment {
  public authApi: typeof AuthApi;
}
