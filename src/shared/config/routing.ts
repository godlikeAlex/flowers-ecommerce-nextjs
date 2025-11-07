export const ROUTES = {
  HOME: "/",
  ACCOUNT: "/account",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
};

export const DEFAULT_REDIRECT_ROUTE = ROUTES.ACCOUNT;
export const LOGIN_ROUTE = ROUTES.SIGNIN;
export const PROTECTED_ROUTES = [ROUTES.ACCOUNT];
export const GUEST_ROUTES = [ROUTES.SIGNIN, ROUTES.SIGNUP];
