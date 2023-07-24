import { useMenu } from "@/utils/context";
import { useMenuStore } from "@/utils/store";
import clsx from "clsx";
import React from "react";
import Navigation from "./Navigation";
import NavigationAfter from "./NavigationAfter";

export interface OpenSidebarProps {}
const OpenSidebar: React.FC<OpenSidebarProps> = () => {
  const { menuProps } = useMenuStore();
  const { variant } = useMenu();

  const isOpenClosed = menuProps.variant === "closed" && variant === "open";
  return (
    <div
      className={clsx(
        "pointer-events-auto relative hidden px-2 sm:px-0 md:block",
        isOpenClosed && "!px-2"
      )}
    >
      <div className="flex h-full flex-col bg-white">
        <NavigationAfter />
      </div>
    </div>
  );
};

export default OpenSidebar;
