import { z } from "zod";

const RankDefinition = z.object({
    identifier: z.string(),
    name: z.string(),
    targetReputation: z.int(),
});

type RankDefinition = z.infer<typeof RankDefinition>;

export default RankDefinition;
