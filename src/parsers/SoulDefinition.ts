import { z } from "zod";
import { SoulCost } from "@/parsers/Cost.ts";
import SoulIdentifier from "@/parsers/identifiers/SoulIdentifier.ts";

const SoulDefinition = z.object({
    cost: z.nullable(SoulCost),
    icon: z.string(),
    identifier: SoulIdentifier,
    name: z.string(),
});

type SoulDefinition = z.infer<typeof SoulDefinition>;

export default SoulDefinition;
