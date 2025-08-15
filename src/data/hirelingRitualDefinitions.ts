import hirelingRituals from "@/definitions/rituals/hireling.json";
import { z } from "zod";
import HirelingRitualDefinition from "@/parsers/HirelingRitualDefinition.ts";
import DomainIdentifier from "@/parsers/identifiers/DomainIdentifier.ts";

export default z
    .record(DomainIdentifier, z.array(HirelingRitualDefinition))
    .parse(hirelingRituals);
