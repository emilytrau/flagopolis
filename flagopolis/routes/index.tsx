import { PageProps } from "$fresh/server.ts";
import Page from "../components/Page.tsx";

export default function Home(pageProps: PageProps) {
  return (
    <Page pageProps={pageProps}>
      hello
    </Page>
  );
}
