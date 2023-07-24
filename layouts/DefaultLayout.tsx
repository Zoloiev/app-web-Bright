import { Header, Sidebar } from "@/components";
import OpenSidebar from "@/components/sidebar/OpenSidebar";
import { useWindowSize } from "@/hooks/useWindowSize";
import { MenuProvider } from "@/utils/context";
import clsx from "clsx";
import React from "react";
import AuthGuard from "../guards/AuthGuard";

export interface DefaultLayoutProps {
  children: React.ReactNode;
  sidebarVariant: "open" | "closed";
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  sidebarVariant = "open",
}) => {
  const windowSize = useWindowSize();

  return (
    <AuthGuard>
      <MenuProvider
        variant={windowSize.width && windowSize.width > 768 ? "open" : "closed"}
      >
        <div className="relative h-screen">
          <Header />
          <div
            className={clsx("flex w-full", " h-screen")}
            style={{
              maxHeight: "calc(100% - 72px)",
            }}
          >
            {windowSize.width && windowSize.width > 768 && <OpenSidebar />}
            {children}
          </div>
        </div>
      </MenuProvider>
    </AuthGuard>
  );
};

export default DefaultLayout;
