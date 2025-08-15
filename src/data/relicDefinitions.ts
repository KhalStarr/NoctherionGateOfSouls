import relics from "@/definitions/relics.json";
import { z } from "zod";
import RelicDefinition from "@/parsers/RelicDefinition.ts";

export default z.array(RelicDefinition).parse(relics);
