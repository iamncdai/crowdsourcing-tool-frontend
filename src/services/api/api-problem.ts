import { ApiResponse } from "apisauce";

export type GeneralApiProblem =
  /**
   * Times up.
   */
  | { kind: "timeout"; temporary: true }
  /**
   * Cannot connect to the server for some reason.
   */
  | { kind: "cannot-connect"; temporary: true }
  /**
   * The server experienced a problem. Any 5xx error.
   */
  | { kind: "server" }
  /**
   * We're not allowed because we haven't identified ourself. This is 401.
   */
  | { kind: "unauthorized" }
  /**
   * We don't have access to perform that request. This is 403.
   */
  | { kind: "forbidden" }
  /**
   * Unable to find that resource.  This is a 404.
   */
  | { kind: "not-found" }
  /**
   * All other 4xx series errors.
   */
  | { kind: "rejected" }
  /**
   * Something truly unexpected happened. Most likely can try again. This is a catch all.
   */
  | { kind: "unknown"; temporary: true }
  /**
   * The data we received is not in the expected format.
   */
  | { kind: "bad-data"; status: "error" | "success"; message: string }
  /**
   * The requests exceeded the maximum allowed by the application configuration
   */
  | { kind: "rate-limit" }
  | { kind: "conflict" };

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiProblem(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: ApiResponse<any>
): GeneralApiProblem | null {
  switch (response.problem) {
    case "CONNECTION_ERROR":
      return { kind: "cannot-connect", temporary: true };
    case "NETWORK_ERROR":
      return { kind: "cannot-connect", temporary: true };
    case "TIMEOUT_ERROR":
      return { kind: "timeout", temporary: true };
    case "SERVER_ERROR":
      return { kind: "server" };
    case "UNKNOWN_ERROR":
      return { kind: "unknown", temporary: true };
    case "CLIENT_ERROR":
      switch (response.status) {
        case 400:
          return {
            kind: "bad-data",
            status: response.data?.status,
            message: response.data?.message,
          };
        case 401:
          return { kind: "unauthorized" };
        case 403:
          return { kind: "forbidden" };
        case 404:
          return { kind: "not-found" };
        case 429:
          return { kind: "rate-limit" };
        case 409:
          return { kind: "conflict" };
        default:
          return { kind: "rejected" };
      }
    case "CANCEL_ERROR":
      return null;
  }
}
