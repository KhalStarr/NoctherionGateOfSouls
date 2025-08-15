import { z } from "zod";
import KeyIdentifier from "@/parsers/identifiers/KeyIdentifier.ts";
import { SoulCost } from "@/parsers/Cost.ts";

const KeyDefinition = z.object({
    cost: SoulCost,
    icon: z.string(),
    identifier: KeyIdentifier,
    name: z.string(),
});

type KeyDefinition = z.infer<typeof KeyDefinition>;

export default KeyDefinition;
