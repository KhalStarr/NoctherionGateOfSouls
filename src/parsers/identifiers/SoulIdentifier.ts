import { z } from "zod";

const SoulIdentifier = z.enum([
    "unbound",
    "bound",
    "spiteful",
    "hollow",
    "forged",
    "husked",
]);

type SoulIdentifier = z.infer<typeof SoulIdentifier>;

export default SoulIdentifier;
