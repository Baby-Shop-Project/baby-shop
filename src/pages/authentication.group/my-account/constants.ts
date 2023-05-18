import { joinPaths } from "@remix-run/router";

export const MY_ACCOUNT_PAGE = "my-account";
export const MY_ACCOUNT_PAGE_PATH = joinPaths(["/", MY_ACCOUNT_PAGE]);
