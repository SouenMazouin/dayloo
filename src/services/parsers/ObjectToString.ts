import { injectedStyle } from '../../shared/@types/types';

export function ObjectStyleToString(obj: injectedStyle): string {
  return (
    Object.entries(obj)
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ')
  );
}
