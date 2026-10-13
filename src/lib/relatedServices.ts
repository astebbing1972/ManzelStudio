export type RelatedService = { label: string; href: string; blurb: string };

const services: Record<string, RelatedService> = {
  residential: {
    label: "Residential Building Design",
    href: "/residential-building-design",
    blurb: "Bespoke homes, extensions and renovations designed around the way you live.",
  },
  commercial: {
    label: "Commercial Building Design",
    href: "/commercial-building-design",
    blurb: "Offices, retail and industrial spaces across Melbourne and Victoria.",
  },
  grannyFlat: {
    label: "Granny Flat Building Design",
    href: "/granny-flat-building-design",
    blurb: "Custom small second dwelling design shaped around your property and budget.",
  },
  roomingHouse: {
    label: "Rooming House Building Design",
    href: "/rooming-house-building-design",
    blurb: "Practical rooming house design from site assessment to permit-ready documentation.",
  },
  buildingPermit: {
    label: "Building Permit Drawings",
    href: "/building-permit-drawings",
    blurb: "Clear, coordinated drawings to support your building permit application.",
  },
};

export const relatedServices = (...keys: (keyof typeof services)[]): RelatedService[] =>
  keys.map((k) => services[k]);
