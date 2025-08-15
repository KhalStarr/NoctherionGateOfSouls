import { z } from "zod";

const DomainIdentifier = z.enum(["cerberus"]);

type DomainIdentifier = z.infer<typeof DomainIdentifier>;

export default DomainIdentifier;
