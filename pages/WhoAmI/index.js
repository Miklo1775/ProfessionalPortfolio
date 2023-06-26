import dynamic from "next/dynamic";
const WhoAmI = dynamic(() => import("@/components/WhoAmI"));
// import WhoAmI from "@/components/WhoAmI";

const Who = () => {
  return <WhoAmI />;
};

export default Who;
