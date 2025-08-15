import souls from "@/definitions/souls.json";
import { z } from "zod";
import SoulDefinition from "@/parsers/SoulDefinition.ts";

export default z.array(SoulDefinition).parse(souls);
