import { z } from "zod";

const PersonalRitualIdentifier = z.enum(["stack_crates"]);

type PersonalRitualIdentifier = z.infer<typeof PersonalRitualIdentifier>;

export default PersonalRitualIdentifier;
