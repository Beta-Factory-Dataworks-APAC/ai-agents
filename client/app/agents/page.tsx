// import { Sidebar } from "lucide-react";

import { Sidebar } from "@/components/ui/AnimatedSideBar";
import { SideBarMain } from "@/components/sideBar/SideBarMain";
import AgentsPage from "@/components/agentsListPage/AgentsPage";

const TopPageLayout = () => {
  return (
    <div className="flex flex-row gap-10">
      {/* <SideBarSection /> */}
      <div className="max-md:hidden">
        <SideBarMain />
      </div>
      <AgentsPage />
    </div>
  );
};

export default TopPageLayout;
