export type injectedStyle = {
  [key: string]:
    | string
    | number
    | undefined
    | { scale: number }[]
    | { width: number; height: number };
};
