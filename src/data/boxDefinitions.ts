import boxes from "@/definitions/boxes.json";
import { z } from "zod";
import BoxDefinition from "@/parsers/BoxDefinition.ts";

export default z.array(BoxDefinition).parse(boxes);
