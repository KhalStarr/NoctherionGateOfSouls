import { z } from "zod";

const RankIdentifier = z.enum(["cerberus_stray"]);

type RankIdentifier = z.infer<typeof RankIdentifier>;

export default RankIdentifier;
