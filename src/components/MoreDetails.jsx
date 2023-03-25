import styles, { layout } from "../style";
import SeeMoreBtn from "./SeeMoreBtn";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { motion } from "framer-motion";

const MoreDetails = () => (
  <section
    id="more-details"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col `}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${layout.sectionImg} flex-col z-[5]`}
    >
      <motion.h2
        variants={fadeIn("down", "tween", 0.2, 1.5)}
        className={`${styles.heading2} text-center tex-justify`}
      >
        Get More Details.
      </motion.h2>
      <motion.p
        variants={fadeIn("left", "tween", 0.2, 1.5)}
        className={`${styles.paragraph} max-w-[700px] mt-10 text-center`}
      >
        Another important aspect of blockchain is its transparency. Because all
        transactions are recorded on the blockchain, anyone can view the
        transaction history of a particular address or wallet.
      </motion.p>
      <motion.div variants={fadeIn("up", "tween", 0.2, 1.5)}>
        <SeeMoreBtn />
      </motion.div>
    </motion.div>

    {/* bg gradient */}
    <div className="absolute z-[0] w-[30%] h-[30%] left-[1%]  rounded-full   gradient-02-3 " />
  </section>
);

export default MoreDetails;
