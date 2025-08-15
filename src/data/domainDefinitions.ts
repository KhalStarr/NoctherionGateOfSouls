import domains from "@/definitions/domains.json";
import { z } from "zod";
import DomainDefinition from "@/parsers/DomainDefinition.ts";

export default z.array(DomainDefinition).parse(domains);
