import { injectedStyle } from '../../shared/@types/types';

export function ObjectStyleToString(obj: injectedStyle): string {
  return Object.entries(obj)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join(', ');
}
