// import WorkHistory from "@/components/WorkPage";

import dynamic from "next/dynamic";

const WorkHistory = dynamic(() => import("@/components/WorkPage"));
const WorkHistoryPage = () => {
  return <WorkHistory />;
};

export default WorkHistoryPage;
