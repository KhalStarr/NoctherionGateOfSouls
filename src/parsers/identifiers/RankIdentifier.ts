import { z } from "zod";

const RankIdentifier = z.enum([
    "cerberus_stray",
    "cerberus_fangmarked",
    "cerberus_gateforged",
    "cerberus_voidfang",
    "cerberus_mawbound",
]);

type RankIdentifier = z.infer<typeof RankIdentifier>;

export default RankIdentifier;
