import Link from 'next/link';
import { useUserStore } from '@/store/useUser';
import { UserProfile } from '@/components';
import { headerPrivateLinks, headerPublicLinks } from './Header.data';
import { HeaderProps } from './Header.props';
import { HeaderLink } from './HeaderLink';

export const Header = () => {
  const { user } = useUserStore.getState();

  return (
    <header>
      <nav className="navbar navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="/">
            conduit
          </Link>

          <ul className="nav navbar-nav pull-xs-right">
            {!user &&
              headerPublicLinks.map((item: HeaderProps) => (
                <li className="nav-item" key={item.id.toString()}>
                  <HeaderLink href={item.href}>{item.name}</HeaderLink>
                </li>
              ))}
            {user &&
              headerPrivateLinks.map((item: HeaderProps) => (
                <li className="nav-item" key={item.id.toString()}>
                  <HeaderLink icon={item.icon} href={item.href}>
                    {item.name}
                  </HeaderLink>
                </li>
              ))}
            {user && (
              <li className="nav-item">
                <UserProfile />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};
