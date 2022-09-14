import { PageProps } from "$fresh/server.ts";
import { FunctionComponent } from "preact";
import Navigation from "./Navigation.tsx";

const Page: FunctionComponent<{ pageProps: PageProps }> = (
  { children, pageProps },
) => {
  return (
    <div class="flex flex-row min-h-screen bg-slate-50">
      <Navigation pageProps={pageProps} />
      <div class="flex-1">
        {children}
      </div>
    </div>
  );
};
export default Page;
