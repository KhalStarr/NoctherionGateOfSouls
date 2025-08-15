import { z } from "zod";

const BoxIdentifier = z.enum(["box_a"]);

type BoxIdentifier = z.infer<typeof BoxIdentifier>;

export default BoxIdentifier;
