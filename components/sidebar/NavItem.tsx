import { useMenu } from "@/utils/context";
import { useMenuStore } from "@/utils/store";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export interface NavItemProps {
  icon: React.ReactElement;
  path: string;
  title: string;
  cs?: string;
  fromDialog?: boolean;
  type?: string;
}
const NavItem: React.FC<NavItemProps> = ({
  icon,
  title,
  path,
  cs,
  fromDialog,
  type = 'first'
}) => {
  const { menuProps } = useMenuStore();
  const { variant } = useMenu();
  const isOpenClosed = menuProps.variant === "closed" && variant === "open";
  return (
    <Link
      className={clsx(
        "flex flex-col justify-center py-3 pl-4 hover:text-bu-main focus:rounded-r-2xl focus:bg-bu-main/10 focus:text-bu-main mo:space-y-3 mo:pr-4 sm:flex-row sm:items-center sm:justify-start sm:space-x-3 sm:py-3 sm:pl-6",
        fromDialog &&
          "!flex-row items-center justify-start space-x-3 py-3 pl-6",
        cs,
        isOpenClosed &&
          "!flex-col  space-y-1 !space-x-0 p-4 focus:!bg-transparent sm:!p-0"
      )}
      // href={`/${title.toLowerCase()}`}
      href={path}
    >
      <div className={clsx("flex h-6 w-6 justify-center")}>{icon}</div>
      <span
        className={clsx(
          "font-semibold",
          "text-sm mo:text-sm",
          isOpenClosed && "!text-xs",
          type === 'second' ? 'text-[#B8B5C6]': ''
        )}
      >
        {title}
      </span>
    </Link>
  );
};

export default NavItem;
