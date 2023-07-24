import { useDispatch, useSelector } from 'react-redux';

// redux
import
{
  login,
  logout,
} from '../store/slices/auth';

import { IRootState } from '../store/rootReducer';

// ----------------------------------------------------------------------

export default function useAuth()
{
  const dispatch = useDispatch();
  const { user, isLoading, isAuthenticated } = useSelector(
    (state: IRootState) => state.auth
  );

  return {
    user,
    isLoading,
    isAuthenticated,

    login: (params: { userName: string, password: string }) =>
      dispatch<any>(
        login({
          userName: params.userName,
          password: params.password
        })
      ),

    logout: () => dispatch<any>(logout()),
  };
}
