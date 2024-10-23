import { SerializeOptions } from 'cookie';
import { IncomingMessage, ServerResponse } from 'http';
import type { NextRequest, NextResponse } from 'next/server';
import type { cookies } from 'next/headers';

export type OptionsType = DefaultOptions | AppRouterOptions;
export interface DefaultOptions extends SerializeOptions {
  res?: ServerResponse;
  req?: IncomingMessage & {
    cookies?: TmpCookiesObj;
  };
  cookies?: CookiesFn;
}

export type CookiesFn = () => ReturnType<typeof cookies>;
export type AppRouterOptions = {
  res?: Response | NextResponse;
  req?: Request | NextRequest;
  cookies?: CookiesFn;
};
export type AppRouterCookies = NextResponse['cookies'] | NextRequest['cookies'];
export type TmpCookiesObj = { [key: string]: string } | Partial<{ [key: string]: string }>;
export type CookieValueTypes = string | undefined;

export interface SyncFunctions {
  getCookies: (options?: OptionsType) => TmpCookiesObj;
  getCookie: (key: string, options?: OptionsType) => CookieValueTypes;
  setCookie: (key: string, data: any, options?: OptionsType) => void;
  deleteCookie: (key: string, options?: OptionsType) => void;
  hasCookie: (key: string, options?: OptionsType) => boolean;
}
