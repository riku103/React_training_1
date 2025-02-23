declare module 'react-router-hash-link' {
  import { LinkProps } from 'react-router-dom';
  import { ComponentType } from 'react';

  export interface HashLinkProps extends LinkProps {
    smooth?: boolean;
  }

  export const HashLink: ComponentType<HashLinkProps>;
}
