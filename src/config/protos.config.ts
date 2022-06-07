import { join } from 'path';

const resources = ['heroes'];

export const protoPaths = resources.map((resource) =>
  join(__dirname, '..', resource, 'proto', `${resource}.proto`),
);

export const protoPackages = resources.map(
  (resource) => `stac.${resource.replace(/-/g, '_')}`,
);

console.log(protoPaths);
