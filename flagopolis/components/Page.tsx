import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { RenderableProps } from "preact";
import Navigation from "./Navigation.tsx";
import MobileNavigation from "./MobileNavigation.tsx";

export type Props = RenderableProps<{
  pageProps: PageProps;
}>;

const Page = ({ children, pageProps }: Props) => {
  return (
    <>
      <Head>
      </Head>
      <div class="flex flex-col md:flex-row bg-secondary-50 w-screen w-[100svw] h-screen h-[100svh]">
        <Navigation pageProps={pageProps} />
        <div class="flex-1 min-h-0 min-w-0">
          {children}
        </div>
        <MobileNavigation pageProps={pageProps} />
      </div>
    </>
  );
};
export default Page;
