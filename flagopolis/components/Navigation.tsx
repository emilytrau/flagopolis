import { PageProps } from "$fresh/server.ts";
import NavItem from "./NavItem.tsx";
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
        <CreditsBadge />
      </div>
    </nav>
  );
};
export default Navigation;
