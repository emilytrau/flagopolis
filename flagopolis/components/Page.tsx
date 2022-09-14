import { PageProps } from "$fresh/server.ts";
import { FunctionComponent } from "preact";
import Navigation from "./Navigation.tsx";

const Page: FunctionComponent<{ pageProps: PageProps }> = (
  { children, pageProps },
) => {
  return (
    <div class="flex flex-row min-h-screen bg-primary-50">
      <Navigation pageProps={pageProps} />
      {children}
    </div>
  );
};
export default Page;
