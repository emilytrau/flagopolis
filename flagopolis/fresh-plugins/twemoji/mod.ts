import { Plugin } from "$fresh/server.ts";

import { setup, stylesheet } from "./shared.tsx";

export default function twemojiPlugin(): Plugin {
  setup();

  const main = `data:application/javascript,import hydrate from "${
    new URL("./client.ts", import.meta.url).href
  }";
export default function() { hydrate(); }`;

  return {
    name: "twemoji",
    entrypoints: { "main": main },
    render(ctx) {
      const res = ctx.render();

      const scripts = [];
      if (res.requiresHydration) {
        scripts.push({ entrypoint: "main", state: undefined });
      }

      return {
        scripts,
        styles: [{ cssText: stylesheet }],
      };
    },
  };
}
