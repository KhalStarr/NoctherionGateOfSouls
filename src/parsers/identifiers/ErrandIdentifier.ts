import { z } from "zod";

const ErrandIdentifier = z.enum(["errand_a"]);

type ErrandIdentifier = z.infer<typeof ErrandIdentifier>;

export default ErrandIdentifier;
