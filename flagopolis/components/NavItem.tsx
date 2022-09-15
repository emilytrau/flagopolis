export interface Props {
  name: string;
  href: string;
  emoji: string;
  active: boolean;
}

const NavItem = ({ name, href, emoji, active }: Props) => {
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
export default NavItem;
