import { z } from "zod";

const KeyIdentifier = z.enum([
    "unbound_key",
    "bound_key",
    "spiteful_key",
    "hollow_key",
    "forged_key",
    "husked_key",
]);

type KeyIdentifier = z.infer<typeof KeyIdentifier>;

export default KeyIdentifier;
