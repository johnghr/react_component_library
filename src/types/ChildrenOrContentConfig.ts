import { ReactElement, ReactNode } from 'react';

export type ChildrenOrContentConfig<T = Record<string, never>, U = ReactNode> =
    | ({
          children: ReactElement<U> | ReactElement<U>[] | ReactNode | ReactNode[];
          content?: never;
      } & T)
    | ({ children?: never; content: U[] } & T);
