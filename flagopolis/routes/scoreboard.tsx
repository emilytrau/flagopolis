import { PageProps } from "$fresh/server.ts";
import Page from "../components/Page.tsx";

export default function Scoreboard(pageProps: PageProps) {
  return (
    <Page pageProps={pageProps}>
      scoreboard
    </Page>
  );
}
