import { create } from "zustand";

type MenuState = {
  menuProps: {
    variant: "open" | "closed";
  };
  setMenuProps: (variant: MenuState["menuProps"]["variant"]) => void;
};
export const useMenuStore = create<MenuState>((set) => ({
  menuProps: { variant: "closed" },
  setMenuProps: (variant) => {
    set(() => ({
      menuProps: {
        variant,
      },
    }));
  },
}));
