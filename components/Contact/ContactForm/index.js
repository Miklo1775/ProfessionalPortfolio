import { useState } from "react";
import { motion } from "framer-motion";
import Envelope from "../Envelope";
import { envelopeVar, formVar } from "@/components/variants";
import SubmissionResponse from "../SubmissionResponse.js";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [showEnevelope, setShowEnevelope] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setShowEnevelope(true);
    setTimeout(() => {
      setIsSent(true);
    }, 2000);
    const data = {
      name,
      email,
      message,
    };

    const fetching = fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setEmail("");
    setName("");
    setMessage("");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, height: "100vh" }}
      transition={{
        opacity: {
          duration: 0.1,
        },
        height: {
          duration: 0.1,
        },
      }}
      // transition={{ delay: 1.2 }}
      className={isSent ? classes.contactContainer : classes.formContainer}
    >
      {!isSent && (
        <motion.form className={classes.contactForm} onSubmit={submitHandler}>
          <h3 style={{ color: "#ffffff" }} className={classes.formGreeting}>
            Any questions? Please feel free to send me an email! I will respond
            as soon as I can!
          </h3>
          <motion.div
            variants={formVar}
            initial="hidden"
            animate={showEnevelope ? "visible2" : "visible"}
            exit={{ scale: 0 }}
            className={classes.contactFormInputs}
          >
            <label htmlFor="name">Name:</label>
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              id="name"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={classes.contactInputs}
              required
              value={name}
            />
            <label htmlFor="email">Email:</label>
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              id="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className={classes.contactInputs}
            />
            <label htmlFor="message">Message: </label>
            <motion.textarea
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              id="message"
              type="text"
              rows="4"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              // className="contact-inputs"
              value={message}
              required
            />
          </motion.div>
          <div className={classes.submitBtnContainer}>
            {!showEnevelope && (
              <motion.button
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  fontWeight: 900,
                }}
                whileTap={{
                  scale: 0.5,
                  backgroundColor: "#fca311",
                  rotate: -90,
                  borderRadius: "50%",
                }}
                className={classes.submitBtn}
                type="submit"
                style={{ fontWeight: 400 }}
              >
                Submit
              </motion.button>
            )}
            {showEnevelope && (
              <div className={classes.responseDiv}>
                <motion.div
                  variants={envelopeVar}
                  initial="hidden"
                  animate="visible"
                  className={classes.envelopeIcon}
                >
                  <Envelope />
                </motion.div>
                {/* <SubmissionResponse /> */}
              </div>
            )}
          </div>
        </motion.form>
      )}

      {isSent && <SubmissionResponse />}
    </motion.div>
  );
};

export default ContactForm;
