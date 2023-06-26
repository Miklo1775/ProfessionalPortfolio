// import ProjectPage from "@/components/Projects";
import dynamic from "next/dynamic";
const ProjectPage = dynamic(() => import("@/components/Projects"));
const AllProjectsPage = () => {
  return <ProjectPage />;
};

export default AllProjectsPage;
