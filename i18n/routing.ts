import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ua", "en", "ro"],
  defaultLocale: "ua",
  localePrefix: "always",
});
