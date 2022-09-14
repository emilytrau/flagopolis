import { PageProps } from "$fresh/server.ts";
import { FunctionComponent } from "preact";

const Navigation: FunctionComponent<{ pageProps: PageProps }> = (
  { pageProps },
) => {
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
    <nav class="bg-primary-300 w-64 shadow">
      <div class="sticky top-0 h-full flex flex-col">
        <ul class="flex-1">
          {items.map((item) => (
            <NavItem
              active={isActive(item.href, item.exact)}
              {...item}
            />
          ))}
        </ul>
        <div class="h-12 flex items-center justify-center">
          <a href="/" class="flex items-center opacity-50 hover:opacity-100">
            <span class="text-xl">🌆</span>
            <span class="mx-1 text-sm">flagopolis</span>
            <span class="rounded-full bg-yellow-300 px-2 py-1 text-xs">
              Beta
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;

const NavItem: FunctionComponent<
  { name: string; href: string; emoji: string; active: boolean }
> = (
  { name, href, emoji, active },
) => {
  return (
    <li class="flex">
      <a
        href={href}
        class={`flex flex-row items-center w-full h-12 px-4 ring-8 ring-primary-300 ring-inset rounded-xl hover:bg-primary-400 ${
          active && "bg-primary-400"
        }`}
        draggable={"false" as unknown as boolean}
      >
        <span class="pr-2 text-xl">{emoji}</span>
        <span>{name}</span>
      </a>
    </li>
  );
};
