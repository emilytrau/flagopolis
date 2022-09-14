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
    category: "crypto",
    difficulty: "easy",
    points: 100,
    solves: 0,
    solved: false,
  },
];

export default function Challenges(pageProps: PageProps) {
  const challengeID = parseInt(pageProps.params.id, 10);

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
      <div class="flex w-full">
        <div class="flex-1 px-8 pb-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 overflow-auto h-screen">
          {sorted.map(([category, challenges], id) => (
            <Category
              categoryID={id}
              name={category}
              challenges={challenges}
              activeChallenge={challengeID}
            />
          ))}
        </div>
        <div class="flex-1 bg-primary-50 shadow">
          Challenge info: {challengeID}
        </div>
      </div>
    </Page>
  );
}

function Category(
  props: {
    categoryID: number;
    name: string;
    challenges: ChallengeSchema[];
    activeChallenge: number;
  },
) {
  return (
    <>
      <h3
        class="pt-4 col-span-full font-semibold text-xl uppercase"
        id={`${props.categoryID}`}
      >
        {props.name}
      </h3>
      {props.challenges.map((x) => (
        <a href={`/challenges/${x.id}#${props.categoryID}`}>
          <ChallengeCard
            challenge={x}
            active={x.id === props.activeChallenge}
          />
        </a>
      ))}
    </>
  );
}
