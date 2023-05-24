'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { headerPublicLinks } from './Header.data';
import { HeaderProps } from './Header.props';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="navbar navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="/">
            conduit
          </Link>
          <ul className="nav navbar-nav pull-xs-right">
            {headerPublicLinks.map((item: HeaderProps) => (
              <li className="nav-item" key={item.id.toString()}>
                <Link
                  className={
                    pathname === `${item.href}` ? 'nav-link active' : 'nav-link'
                  }
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
