import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        primary: colors.lime,
        secondary: colors.blueGray,
      },
      fontFamily: {
        sans: "Cabin, sans-serif",
      },
    },
  },
  preflight: {
    "@import": "url(https://fonts.bunny.net/css?family=cabin:400,500,600,700)",
  },
} as Options;
