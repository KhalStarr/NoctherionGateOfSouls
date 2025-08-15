import personalRituals from "@/definitions/rituals/personal.json";
import { z } from "zod";
import PersonalRitualDefinition from "@/parsers/PersonalRitualDefinition.ts";
import DomainIdentifier from "@/parsers/identifiers/DomainIdentifier.ts";

export default z
    .record(DomainIdentifier, z.array(PersonalRitualDefinition))
    .parse(personalRituals);
