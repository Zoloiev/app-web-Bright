import PropTypes from "prop-types";
import { useEffect, ReactNode } from "react";
import { useDispatch } from "react-redux";

// redux
import { getInitialize } from "../../store/slices/auth";

// ----------------------------------------------------------------------

type ChildrenProps = {
  children: ReactNode;
};

JwtProvider.propTypes = {
  children: PropTypes.node,
};

export default function JwtProvider({ children }: ChildrenProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getInitialize());
  }, [dispatch]);

  return <>{children}</>;
}
