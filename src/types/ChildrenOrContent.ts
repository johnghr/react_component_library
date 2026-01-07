import { ReactElement, ReactNode } from 'react';

export type ChildrenOrContent<T = Record<string, never>, U = ReactNode> =
    | ({
          children: ReactElement<U> | ReactElement<U>[] | ReactNode | ReactNode[];
          content?: never;
      } & T)
    | ({ children?: never; content: ReactElement<U> | ReactElement<U>[] | ReactNode | ReactNode[] } & T);
