import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        primary: colors.lime,
        slate: colors.blueGray,
      },
    },
  },
} as Options;
