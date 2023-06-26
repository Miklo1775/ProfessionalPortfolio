import { motion } from "framer-motion";

const HomeBody = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Quotes>These are very inspirational quotes</Quotes>
    </motion.div>
  );
};

export default HomeBody;
