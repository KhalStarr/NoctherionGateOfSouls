import { z } from "zod";

const RelicDefinition = z.object({
    description: z.string(),
    effect: z.object({
        type: z.literal("multiplier"),
        value: z.number(),
    }),
    identifier: z.string(),
    name: z.string(),
});

type RelicDefinition = z.infer<typeof RelicDefinition>;

export default RelicDefinition;
