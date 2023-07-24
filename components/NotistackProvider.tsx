import PropTypes from "prop-types";
import { ReactNode } from "react";
import { SnackbarProvider } from "notistack";

// ----------------------------------------------------------------------

type ChildrenProps = {
  children: ReactNode;
};

NotistackProvider.propTypes = {
  children: PropTypes.node,
};

export default function NotistackProvider({ children }: ChildrenProps) {
  return (
    <SnackbarProvider
      dense
      maxSnack={5}
      preventDuplicate
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {children}
    </SnackbarProvider>
  );
}
