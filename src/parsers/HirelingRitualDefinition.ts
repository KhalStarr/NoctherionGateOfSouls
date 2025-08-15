import { z } from "zod";
import { SoulCost } from "@/parsers/Cost.ts";
import RankIdentifier from "@/parsers/identifiers/RankIdentifier.ts";
import RewardDefinition from "@/parsers/RewardDefinition.ts";

const HirelingRitualDefinition = z.object({
    costs: z.array(SoulCost),
    description: z.string(),
    identifier: z.string(),
    name: z.string(),
    requiredRank: RankIdentifier,
    reward: RewardDefinition,
});

type HirelingRitualDefinition = z.infer<typeof HirelingRitualDefinition>;

export default HirelingRitualDefinition;
