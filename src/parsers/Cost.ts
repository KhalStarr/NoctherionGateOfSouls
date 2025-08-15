import { z } from "zod";
import KeyIdentifier from "@/parsers/identifiers/KeyIdentifier.ts";
import SoulIdentifier from "@/parsers/identifiers/SoulIdentifier.ts";

const baseCost = z.object({
    amount: z.int(),
});

export const KeyCost = baseCost.extend({
    keyType: KeyIdentifier,
    type: z.literal("key"),
});

export type KeyCost = z.infer<typeof KeyCost>;

export const SoulCost = baseCost.extend({
    soulType: SoulIdentifier,
    type: z.literal("soul"),
});

const Cost = z.discriminatedUnion("type", [KeyCost, SoulCost]);

type Cost = z.infer<typeof Cost>;

export default Cost;
