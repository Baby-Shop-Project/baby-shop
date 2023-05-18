import { joinPaths } from "@remix-run/router";

export const RESET_PASSWORD_PAGE = `reset-password`;
export const RESET_PASSWORD_PAGE_PATH = joinPaths(["/", RESET_PASSWORD_PAGE]);
