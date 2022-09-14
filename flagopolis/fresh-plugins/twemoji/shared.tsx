import { ComponentChild, options as preactOptions } from "preact";
import parser from "twemoji-parser";

export const stylesheet = `
  img.twemoji {
    display: inline;
    height: 1em;
    width: 1em;
    margin: 0 .05em 0 .1em;
    vertical-align: -0.1em;
  }
`;

function replaceTextWithNode(
  text: string,
): ComponentChild[] {
  const emojis = parser.parse(text);
  if (emojis.length === 0) {
    return [text];
  }
  const children = [];
  let pointer = 0;
  for (const emoji of emojis) {
    const [start, end] = emoji.indices;
    children.push(text.slice(pointer, start));
    children.push(
      <img
        className="twemoji"
        src={emoji.url}
        alt={emoji.text}
        crossOrigin="anonymous"
        referrerpolicy="no-referrer"
        // hack to make preact-render-to-string keep this value
        draggable={"false" as unknown as boolean}
      />,
    );
    pointer = end;
  }
  children.push(text.slice(pointer));
  return children;
}

export function setup() {
  const oldHook = preactOptions.vnode;

  preactOptions.vnode = (vnode) => {
    const children = vnode.props.children;
    if (typeof children === "string") {
      vnode.props.children = replaceTextWithNode(children);
    } else if (Array.isArray(children)) {
      vnode.props.children = children.flatMap((child) => {
        if (typeof child === "string") {
          return replaceTextWithNode(child);
        }
        return [child];
      });
    }

    oldHook?.(vnode);
  };
}
