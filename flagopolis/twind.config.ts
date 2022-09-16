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
        sans:
          "'Encode Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      },
    },
  },
  preflight: {
    "@import":
      "url(https://fonts.bunny.net/css?family=encode-sans:100,200,300,400,500,600,700,800,900)",
  },
} as Options;
