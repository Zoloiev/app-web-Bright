import { ReactNode } from "react";
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
// hooks
import useAuth from '../hooks/useAuth';

// ----------------------------------------------------------------------

type ChildrenProps = {
  children: ReactNode;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default function AuthGuard({ children }: ChildrenProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    router.push('/signin');
  }

  return <>{children}</>;
}
