import { z } from "zod";
import RankDefinition from "@/parsers/RankDefinition.ts";

const DomainDefinition = z.object({
    gateCall: z.string(),
    identifier: z.string(),
    name: z.string(),
    ranks: z.array(RankDefinition),
});

type DomainDefinition = z.infer<typeof DomainDefinition>;

export default DomainDefinition;
