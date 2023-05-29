'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { HeaderProps } from './Header.props';

export const HeaderLink: React.FC<
  Pick<HeaderProps, 'href'> & PropsWithChildren
> = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      className={pathname === `${href}` ? 'nav-link active' : 'nav-link'}
      href={href}
    >
      {children}
    </Link>
  );
};
