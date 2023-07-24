import React from "react";
import { useMenuStore } from "../store";

type MenuContextType = {
  variant: "open" | "closed";
};
export const MenuContext = React.createContext<MenuContextType>(
  {} as MenuContextType
);

export const useMenu = () => React.useContext(MenuContext);

export interface MenuProps {
  variant: "open" | "closed";
  children: React.ReactNode;
}
const MenuProvider: React.FC<MenuProps> = ({ variant, children }) => {
  const { setMenuProps } = useMenuStore();

  React.useEffect(() => {
    variant === "open" ? setMenuProps("open") : setMenuProps("closed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);
  return (
    <MenuContext.Provider
      value={{
        variant,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
