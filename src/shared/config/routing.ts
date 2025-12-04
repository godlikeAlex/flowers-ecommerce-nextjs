export const ROUTES = {
  HOME: "/",
  SHOP: (categories: string[]) => {
    const categoriesPath = categories.join("/");
    return `/shop/${categoriesPath}`;
  },
  CONTACT_US: () => "/contact-us",
  PRODUCT: (productSlug: string) => `/product/${productSlug}`,
  ACCOUNT: "/account",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  CART: "/cart",
  CHECKOUT: "/cart/checkout",
  PAY: (orderUUID: string) => `/cart/checkout/pay/${orderUUID}`,
  POST_SHOW: (postSlug: string) => `/post/${postSlug}`,
  BLOG: (categorySlug: string = "") => `/blog/${categorySlug}`,
};

export const DEFAULT_REDIRECT_ROUTE = ROUTES.ACCOUNT;
export const LOGIN_ROUTE = ROUTES.SIGNIN;
export const PROTECTED_ROUTES = [ROUTES.ACCOUNT];
export const GUEST_ROUTES = [ROUTES.SIGNIN, ROUTES.SIGNUP];
