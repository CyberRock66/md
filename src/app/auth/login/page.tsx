import Link from 'next/link';
import { Login } from '@/features/auth';

const LoginPage = () => (
  <div className="auth-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign in</h1>
          <p className="text-xs-center">
            <Link href="/auth/register"> Need an account?</Link>
          </p>
          <Login />
        </div>
      </div>
    </div>
  </div>
);

export default LoginPage;
