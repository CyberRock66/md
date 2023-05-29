import { Register } from '@/features/auth';
import Link from 'next/link';

const RegisterPage = () => (
  <div className="auth-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign up</h1>
          <p className="text-xs-center">
            <Link href="/auth/login">Have an account?</Link>
          </p>
          <Register />
        </div>
      </div>
    </div>
  </div>
);

export default RegisterPage;
