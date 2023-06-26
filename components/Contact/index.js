// import ContactHead from "./ContactHeadings/ContactHead";
// import ContactForm from "./ContactForm";

import classes from "./ContactPage.module.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import dynamic from "next/dynamic";
const ContactHead = dynamic(() =>
  import("@/components/Contact/ContactHeadings/ContactHead")
);
const ContactForm = dynamic(() => import("@/components/Contact/ContactForm"));
const ParticlesComponent = dynamic(() => import("@/components/Particles"));
const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.contactContainer}
    >
      <AnimatePresence mode="wait">
        {/* <ContactHead key="contact1" /> */}
        <ContactForm key="form1" />
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactPage;
