import { PageProps } from "$fresh/server.ts";
import { FunctionComponent } from "preact";

const Navigation: FunctionComponent<{ pageProps: PageProps }> = (
  { pageProps },
) => {
  const items = [
    {
      name: "Home",
      href: "/",
      exact: true,
    },
    {
      name: "Scoreboard",
      href: "/scoreboard",
    },
    {
      name: "Challenges",
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
    <nav class="bg-primary-400 w-64">
      <ul>
        {items.map((item) => (
          <NavItem
            active={isActive(item.href, item.exact)}
            {...item}
          />
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;

const NavItem: FunctionComponent<
  { name: string; href: string; active: boolean }
> = (
  { name, href, active },
) => {
  return (
    <li class="flex">
      <a
        href={href}
        class={`flex flex-row items-center w-full h-12 px-4 ring-8 ring-primary-400 ring-inset rounded-xl hover:bg-primary-500 ${
          active && "bg-primary-500"
        }`}
      >
        {name}
      </a>
    </li>
  );
};
