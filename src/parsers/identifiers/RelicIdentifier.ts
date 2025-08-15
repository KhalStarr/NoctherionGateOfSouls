import { z } from "zod";

const RelicIdentifier = z.enum(["relic_a"]);

type RelicIdentifier = z.infer<typeof RelicIdentifier>;

export default RelicIdentifier;
