import { useMenu } from "@/utils/context";
// import ClosedSidebar from "./sidebar/ClosedSidebar";
import OpenSidebar from "./sidebar/OpenSidebar";
import ClosedSidebarAfter from "./sidebar/ClosedSidebarAfter";

interface SideBarProps {}
const Sidebar: React.FC<SideBarProps> = () => {
  const { variant } = useMenu();
  return <>{variant === "open" ? <OpenSidebar /> : <ClosedSidebarAfter />}</>;
};
export default Sidebar;
