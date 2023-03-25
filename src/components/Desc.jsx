import { applications, infras, Security } from "../assets";
import styles, { layout } from "../style";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { motion } from "framer-motion";

const Desc = () => (
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
      <motion.h2
        variants={fadeIn("down", "tween", 0.2, 1.5)}
        className={`${styles.heading2} text-center tex-justify`}
      >
        Blockchain technology is revolutionizing the way we conduct
        transactions, with its secure and transparent nature.
      </motion.h2>

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1.5)}
        className={`${styles.paragraph} max-w-[700px] mt-10 text-center`}
      >
        The decentralized nature of blockchain means that there is no need for
        intermediaries, which results in faster and cheaper transactions
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex sm:flex-row flex-col"
      >
        <motion.img
          variants={fadeIn("right", "tween", 0.2, 1.5)}
          src={Security}
          alt=""
          className="md:w-[290px] w-[200px] md:my-10  my-2 md:mx-10  mx-2 object-contain"
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.2, 1.5)}
          src={applications}
          alt=""
          className="md:w-[300px] w-[200px] my-10 md:mt-[200px] mt-5 object-contain"
        />
        <motion.img
          variants={fadeIn("left", "tween", 0.2, 1.5)}
          src={infras}
          alt=""
          className="md:w-[300px] w-[200px] md:my-10 my-2 md:mx-10 mx-2 object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Desc;
