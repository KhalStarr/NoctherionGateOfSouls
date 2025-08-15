import errands from "@/definitions/errands.json";
import { z } from "zod";
import ErrandDefinition from "@/parsers/ErrandDefinition.ts";
import DomainIdentifier from "@/parsers/identifiers/DomainIdentifier.ts";

export default z
    .record(DomainIdentifier, z.array(ErrandDefinition))
    .parse(errands);
