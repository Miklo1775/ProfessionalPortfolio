import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import HomePage from "@/components/Home";
// import WhoAmI from "@/components/WhoAmI";
import { motion } from "framer-motion";

import dynamic from "next/dynamic";
const WhoAmI = dynamic(() => import("@/components/WhoAmI"));
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <HomePage /> */}
      <WhoAmI />
    </motion.div>
  );
}
