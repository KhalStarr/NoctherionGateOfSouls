import { z } from "zod";
import { SoulCost } from "@/parsers/Cost.ts";

const SoulDefinition = z.object({
    cost: z.nullable(SoulCost),
    icon: z.string(),
    identifier: z.string(),
    name: z.string(),
});

type SoulDefinition = z.infer<typeof SoulDefinition>;

export default SoulDefinition;
