import { injectedStyle } from '../../shared/@types/types';

export function ObjectToString(obj: injectedStyle): string {
  return Object.entries(obj)
    .map(([k, v]) => `${k}: ${v}`)
    .join(', ');
}
