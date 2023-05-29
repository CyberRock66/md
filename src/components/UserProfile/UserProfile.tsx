import Link from 'next/link';
import Image from 'next/image';
import { useUserStore } from '@/store/useUser';

export const UserProfile: React.FC = () => {
  const { user } = useUserStore.getState();
  return (
    <Link className="nav-link" href="/profile">
      <Image
        className="user-pic"
        src={user?.user.image || ''}
        alt="avatar"
        width={26}
        height={26}
      />
      {user?.user.username}
    </Link>
  );
};
