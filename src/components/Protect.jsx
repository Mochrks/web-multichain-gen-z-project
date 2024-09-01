import { mobile } from "../assets";
import styles, { layout } from "../styles/style.js";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { motion } from "framer-motion";

const Protect = () => (
  <section
    id="about"
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
        variants={fadeIn("down", "tween", 0.2, 1.5)}
        className="flex md:flex-row flex-col"
      >
        <img
          src={mobile}
          alt="mobile"
          className="md:w-[50%] w-[500px] md:my-10  my-2 md:mx-10  mx-2  object-contain"
        />
        <div className="flex-1  flex-col">
          <h2 className={`${styles.heading2} sm:text-start text-center `}>
            Protecting investor with high security
          </h2>
          <p
            className={`${styles.paragraph} max-w-[700px] mt-10  text-justify`}
          >
            Using blockchain technology for investment can offer investors an
            increased level of security and protection. The decentralized nature
            of blockchain ensures that there is no single point of failure or
            control, making it more difficult for bad actors to manipulate the
            system.
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Protect;
