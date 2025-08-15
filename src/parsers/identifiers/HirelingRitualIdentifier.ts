import { z } from "zod";

const HirelingRitualIdentifier = z.enum(["stack_crates"]);

type HirelingRitualIdentifier = z.infer<typeof HirelingRitualIdentifier>;

export default HirelingRitualIdentifier;
