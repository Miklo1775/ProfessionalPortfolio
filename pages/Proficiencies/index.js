// import Proficienies from "@/components/Proficiencies/Proficiencies";

import dynamic from "next/dynamic";
const Proficiencies = dynamic(() => {
  return import("@/components/Proficiencies/Proficiencies.js");
});
const ProficiencyPage = () => {
  return <Proficiencies />;
};

export default ProficiencyPage;
