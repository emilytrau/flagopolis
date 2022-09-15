import { PageProps } from "$fresh/server.ts";
import CreditsBadge from "./CreditsBadge.tsx";

export interface Props {
  pageProps: PageProps;
}

const Navigation = ({ pageProps }: Props) => {
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
    <nav class="hidden lg:block mobile-notch-left bg-primary-200 w-64 shadow flex-none">
      <div class="sticky top-0 h-full flex flex-col">
        <ul class="flex-1">
          {items.map((item) => (
            <li>
              <a
                href={item.href}
                class={`flex flex-row items-center w-full h-12 px-4 ring-8 ring-primary-200 ring-inset rounded-xl hover:bg-primary-300 ${
                  isActive(item.href, item.exact) && "bg-primary-300"
                }`}
                draggable={"false" as unknown as boolean}
              >
                <span class="pr-2 text-xl">{item.emoji}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <CreditsBadge />
      </div>
    </nav>
  );
};
export default Navigation;
