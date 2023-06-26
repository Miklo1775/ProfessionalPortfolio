// import ContactPage from "@/components/Contact";
import dynamic from "next/dynamic";
const ContactPage = dynamic(() => import("@/components/Contact"));
const Contact = () => {
  return <ContactPage />;
};

export default Contact;
