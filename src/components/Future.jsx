import { marketplace } from "../assets";
import styles, { layout } from "../styles/style.js";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { motion } from "framer-motion";

const Future = () => (
  <section
    id="future"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${layout.sectionImg} flex-col`}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1.5)}
        className="flex md:flex-row flex-col"
      >
        <div className="flex-1  flex-col">
          <h2 className={`${styles.heading2} w-full sm:text-end text-center `}>
            The Future Of <span className="text-gradient">Marketplace</span> Is
            Decentralized
          </h2>
          <p
            className={`${styles.paragraph} max-w-[700px] mt-10 sm:text-end text-center`}
          >
            One of the key features of blockchain is its decentralized nature.
            Unlike traditional systems that are controlled by a central
            authority, blockchain is a distributed network that is run by
            multiple nodes. This ensures that the system is highly resistant to
            tampering and hacking, making it a secure and reliable platform for
            data storage and exchange
          </p>
        </div>
        <img
          src={marketplace}
          alt="marketplace"
          className="md:w-[50%] w-[500px] md:my-10  my-2 md:mx-10  mx-2  object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Future;
