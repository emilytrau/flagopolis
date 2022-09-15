import { PageProps } from "$fresh/server.ts";
import CreditsBadge from "./CreditsBadge.tsx";

export interface Props {
  pageProps: PageProps;
}

const MobileNavigation = ({ pageProps }: Props) => {
  const items = [
    {
      name: "Home",
      emoji: "🖼️",
      href: "/",
      exact: true,
    },
    {
      name: "Scoreboard",
      emoji: "👑",
      href: "/scoreboard",
    },
    {
      name: "Challenges",
      emoji: "🏁",
      href: "/challenges",
    },
  ];

  function isActive(href: string, exact = false) {
    const path = pageProps.url.pathname;
    if (exact) {
      return path === href;
    }
    return path.startsWith(href);
  }

  return (
    <>
      <div class="lg:hidden h-12">
        {/* lil easter egg in the overscroll */}
        <CreditsBadge />
      </div>
      <nav class="fixed bottom-0 w-screen pad-mobile-notch lg:hidden bg-primary-200 shadow flex-none">
        <ul class="flex flex-row">
          {items.map((item) => (
            <li class="flex-1">
              <a
                href={item.href}
                class={`flex flex-col items-center justify-center min-h-20 pad-mobile-notch-bottom ${
                  isActive(item.href, item.exact) && "bg-primary-300"
                }`}
                draggable={"false" as unknown as boolean}
              >
                <span class="text-3xl">{item.emoji}</span>
                <span class="text-xs">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default MobileNavigation;
