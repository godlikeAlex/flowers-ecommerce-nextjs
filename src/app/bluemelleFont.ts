import localFont from "next/font/local";

export const bluemelleFont = localFont({
  src: [
    {
      path: "../../public/fonts/bluemelle-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/bluemelle-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/bluemelle-black.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
