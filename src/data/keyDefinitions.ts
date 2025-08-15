import keys from "@/definitions/keys.json";
import { z } from "zod";
import KeyDefinition from "@/parsers/KeyDefinition.ts";

export default z.array(KeyDefinition).parse(keys);
