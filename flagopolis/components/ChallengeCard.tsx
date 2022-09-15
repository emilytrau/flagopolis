export interface ChallengeSchema {
  id: number;
  name: string;
  category: string;
  difficulty: "beginner" | "easy" | "medium" | "hard" | string | undefined;
  points: number;
  solves: number;
  solved: boolean;
}

export interface Props {
  challenge: ChallengeSchema;
  active: boolean;
}

const ChallengeCard = ({ challenge, active }: Props) => {
  return (
    <div
      class={`flex flex-col h-32 md:w-44 p-4 shadow-md rounded-2xl ring-primary-200 ${
        active && "ring-4"
      } ${challenge.solved ? "bg-primary-400" : "bg-secondary-300"}`}
    >
      <div class="flex-1 overflow-ellipsis overflow-hidden">
        {challenge.name}
      </div>
      <div class="slashed-zero tabular-nums">
        {challenge.solves === 1
          ? `${challenge.solves} solve`
          : `${challenge.solves} solves`}
      </div>
      <div class="flex items-end justify-between">
        <span>{challenge.points}</span>
        <span class="overflow-ellipsis overflow-hidden">
          {challenge.difficulty}
        </span>
      </div>
    </div>
  );
};
export default ChallengeCard;
