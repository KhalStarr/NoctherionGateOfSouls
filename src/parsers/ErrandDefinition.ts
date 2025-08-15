import { z } from "zod";
import ErrandIdentifier from "@/parsers/identifiers/ErrandIdentifier.ts";
import RankIdentifier from "@/parsers/identifiers/RankIdentifier.ts";
import RewardDefinition from "@/parsers/RewardDefinition.ts";
import { SoulCost } from "@/parsers/Cost.ts";

const ErrandDefinition = z.object({
    costs: z.array(SoulCost),
    description: z.string(),
    identifier: ErrandIdentifier,
    name: z.string(),
    requiredRank: RankIdentifier,
    reward: RewardDefinition,
});

type ErrandDefinition = z.infer<typeof ErrandDefinition>;

export default ErrandDefinition;
