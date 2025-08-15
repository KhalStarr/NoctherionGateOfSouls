import { z } from "zod";
import RewardDefinition from "@/parsers/RewardDefinition.ts";

const BoxResultDefinition = z.object({
    description: z.string(),
    name: z.string(),
    reward: RewardDefinition,
});

type BoxResultDefinition = z.infer<typeof BoxResultDefinition>;

export default BoxResultDefinition;
