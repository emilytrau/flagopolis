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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @supports(padding:max(0px)) {
                .pad-mobile-notch {
                  padding-left: max(0px, env(safe-area-inset-left));
                  padding-right: max(0px, env(safe-area-inset-right));
                }
                .pad-mobile-notch-bottom {
                  padding-bottom: max(0px, env(safe-area-inset-bottom));
                }
              }
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.bunny.net" />
      </Head>
      <div class="flex flex-col lg:flex-row w-screen min-h-[100svh] lg:h-screen">
        <Navigation pageProps={pageProps} />
        <div class="pad-mobile-notch flex-1 min-h-0 min-w-0">
          {children}
        </div>
        <MobileNavigation pageProps={pageProps} />
      </div>
    </>
  );
};
export default Page;
