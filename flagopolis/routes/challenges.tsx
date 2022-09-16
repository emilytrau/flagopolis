import { PageProps, RouteConfig } from "$fresh/server.ts";
import Page from "../components/Page.tsx";
import ChallengeCard, {
  ChallengeSchema,
} from "../components/ChallengeCard.tsx";

export const config: RouteConfig = {
  routeOverride: "/challenges{/:id}?",
};

const tempChallengeData: ChallengeSchema[] = [
  {
    id: 1,
    name: "Floormat",
    category: "misc",
    difficulty: "easy",
    points: 100,
    solves: 0,
    solved: false,
  },
  {
    id: 2,
    name: "Discord",
    category: "misc",
    difficulty: "easy",
    points: 100,
    solves: 0,
    solved: false,
  },
  {
    id: 3,
    name: "Flying Spaghetti Monster",
    category: "misc",
    difficulty: "hard",
    points: 100,
    solves: 0,
    solved: false,
  },
  {
    id: 4,
    name: "Treasure",
    category: "crypto",
    difficulty: "easy",
    points: 100,
    solves: 0,
    solved: false,
  },
  {
    id: 5,
    name: "Secuchat",
    category: "crypto",
    difficulty: "medium",
    points: 100,
    solves: 0,
    solved: false,
  },
  {
    id: 6,
    name: "Power Sign",
    category: "crypto",
    difficulty: "hard",
    points: 100,
    solves: 0,
    solved: false,
  },
  {
    id: 7,
    name: "YADLP",
    category: "crypto",
    difficulty: "hard",
    points: 100,
    solves: 0,
    solved: true,
  },
  {
    id: 8,
    name: "Easily Can Break",
    category: "crypto",
    difficulty: "easy",
    points: 100,
    solves: 0,
    solved: false,
  },
  {
    id: 9,
    name:
      "Easily Can Break this is a really long challenge title blah blah blah",
    category:
      "crypto dhjsiakldhsjaklbcjkcvhjklefhuifehwklnfm,xncjklanesjklfnesjal",
    difficulty: "easy",
    points: 100,
    solves: 0,
    solved: false,
  },
];

export default function Challenges(pageProps: PageProps) {
  const challengeID = parseInt(pageProps.params.id, 10);
  const isIndexPage = pageProps.params.id === "";

  const byCategory: Record<string, ChallengeSchema[]> = {};
  for (const chal of tempChallengeData) {
    if (!byCategory[chal.category]) {
      byCategory[chal.category] = [];
    }
    byCategory[chal.category].push(chal);
  }
  const sorted = Object.entries(byCategory).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  return (
    <Page pageProps={pageProps}>
      <div class="flex w-full h-full">
        <div
          class={`flex-1 min-w-0 px-8 pb-4 lg:overflow-auto ${
            !isIndexPage ? "hidden" : "block"
          } lg:block`}
        >
          {sorted.map(([category, challenges]) => (
            <Category
              name={category}
              challenges={challenges}
              activeChallenge={challengeID}
            />
          ))}
        </div>
        <div
          class={`flex-1 min-w-0 lg:bg-primary-50 lg:shadow ${
            isIndexPage ? "hidden" : "block"
          } lg:block`}
        >
          Challenge info: {challengeID}
        </div>
      </div>
    </Page>
  );
}

function Category(
  props: {
    name: string;
    challenges: ChallengeSchema[];
    activeChallenge: number;
  },
) {
  return (
    <>
      <h3
        class="py-4 font-bold text-4xl uppercase truncate"
        id={props.name}
      >
        {props.name}
      </h3>
      <div class="flex flex-wrap flex-col lg:flex-row gap-4 pb-4">
        {props.challenges.map((x) => (
          <a href={`/challenges/${x.id}#${props.name}`}>
            <ChallengeCard
              challenge={x}
              active={x.id === props.activeChallenge}
            />
          </a>
        ))}
      </div>
    </>
  );
}
