import { PageProps } from "$fresh/server.ts";

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
    <nav class="md:hidden bg-primary-200 shadow flex-none">
      <ul class="sticky bottom-0 flex flex-row">
        {items.map((item) => (
          <li class="flex-1">
            <a
              href={item.href}
              class={`flex flex-col items-center justify-center h-16 ${
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
  );
};
export default MobileNavigation;
