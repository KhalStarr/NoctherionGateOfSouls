import { z } from "zod";
import BoxResultDefinition from "@/parsers/BoxResultDefinition.ts";
import { KeyCost } from "@/parsers/Cost.ts";

const BoxDefinition = z.object({
    cost: KeyCost,
    description: z.string(),
    identifier: z.string(),
    name: z.string(),
    results: z.array(BoxResultDefinition),
});

type BoxDefinition = z.infer<typeof BoxDefinition>;

export default BoxDefinition;
