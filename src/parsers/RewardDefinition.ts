import { z } from "zod";

const RewardDefinition = z.object({
    amount: z.int(),
    type: z.enum(["reputation", "souls_per_click", "souls_per_second"]),
});

type RewardDefinition = z.infer<typeof RewardDefinition>;

export default RewardDefinition;
