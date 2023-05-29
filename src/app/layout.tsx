import '@/styles/global.css';
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';
import { BaseLayout } from '@/layouts/baseLayout/BaseLayout';
import { userApi } from '@/services/user.api';
import { useUserStore } from '@/store/useUser';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'start',
  description: 'brain gym',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const userToken = cookies().get('token')?.value as string;
  if (userToken) {
    const dataUser = await userApi(userToken);
    useUserStore.setState({ user: dataUser });
  }

  if (!userToken) {
    useUserStore.setState({ user: null });
  }

  return (
    <html lang="en">
      <head>
        <link
          href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="//demo.productionready.io/main.css" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
