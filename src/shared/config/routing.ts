export const ROUTES = {
  HOME: "/",
  SHOP: (categories: string[]) => {
    const categoriesPath = categories.join("/");
    return `/shop/${categoriesPath}`;
  },
  ACCOUNT: "/account",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
};

export const DEFAULT_REDIRECT_ROUTE = ROUTES.ACCOUNT;
export const LOGIN_ROUTE = ROUTES.SIGNIN;
export const PROTECTED_ROUTES = [ROUTES.ACCOUNT];
export const GUEST_ROUTES = [ROUTES.SIGNIN, ROUTES.SIGNUP];
