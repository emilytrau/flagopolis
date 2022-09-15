import { PageProps } from "$fresh/server.ts";
import { RenderableProps } from "preact";
import Navigation from "./Navigation.tsx";

export type Props = RenderableProps<{
  pageProps: PageProps;
}>;

const Page = ({ children, pageProps }: Props) => {
  return (
    <div class="flex flex-row min-h-screen bg-secondary-50">
      <Navigation pageProps={pageProps} />
      <div class="flex-1">
        {children}
      </div>
    </div>
  );
};
export default Page;
