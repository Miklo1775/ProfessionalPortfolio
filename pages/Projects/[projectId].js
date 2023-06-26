import supabase from "@/lib/supabaseClient";
// import ProjectDetails from "@/components/ProjectDetails";
import dynamic from "next/dynamic";

const ProjectDetails = dynamic(() => import("@/components/ProjectDetails"));

const ProjectDetailsPage = ({ projectInfo }) => {
  // console.log(props);
  return <ProjectDetails projectInfo={projectInfo} />;
};

export const getStaticPaths = async () => {
  const { data } = await supabase.from("projects").select("id");

  return {
    fallback: "blocking",
    paths: data.map((project) => {
      return {
        params: {
          projectId: `${project.id}`,
        },
      };
    }),
  };
};

export const getStaticProps = async (context) => {
  const projectId = context.params.projectId;

  const { data } = await supabase
    .from("projects")
    .select()
    .eq("id", projectId)
    .single();

  return {
    props: {
      projectInfo: data,
    },
    revalidate: 10,
  };
};

export default ProjectDetailsPage;
