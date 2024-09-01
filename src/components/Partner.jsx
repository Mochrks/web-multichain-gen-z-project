import styles, { layout } from "../styles/style";
import {
  airbnb,
  binance,
  dropbox,
  coinbase,
  ripple,
  ada,
  lite,
} from "../assets";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { motion } from "framer-motion";

const Partner = () => (
  <section
    id="listed-project"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col z-[5]`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${layout.sectionImg} flex-wrap w-full z-[5]`}
    >
      <motion.img
        variants={fadeIn("left", "tween", 0.5, 2)}
        initial="hidden"
        whileInView="show"
        src={airbnb}
        alt="airbnb"
        className="sm:w-[192px] w-[100px] object-contain mx-5 my-5"
      ></motion.img>
      <motion.img
        variants={fadeIn("left", "tween", 0.5, 2)}
        initial="hidden"
        whileInView="show"
        src={binance}
        alt="binance"
        className="sm:w-[192px] w-[100px] object-contain mx-5 my-5"
      ></motion.img>
      <motion.img
        variants={fadeIn("left", "tween", 0.5, 2)}
        initial="hidden"
        whileInView="show"
        src={ripple}
        alt="ripple"
        className="sm:w-[82px] w-[50px] object-contain mx-5 my-5"
      ></motion.img>
      <motion.img
        variants={fadeIn("left", "tween", 0.5, 2)}
        initial="hidden"
        whileInView="show"
        src={coinbase}
        alt="coinbase"
        className="sm:w-[192px] w-[100px] object-contain mx-5 my-5"
      ></motion.img>
      <motion.img
        variants={fadeIn("left", "tween", 0.5, 2)}
        initial="hidden"
        whileInView="show"
        src={ada}
        alt="ada"
        className="sm:w-[82px] w-[80px] object-contain mx-5 my-5"
      ></motion.img>
      <motion.img
        variants={fadeIn("left", "tween", 0.5, 2)}
        initial="hidden"
        whileInView="show"
        src={lite}
        alt="lite"
        className="sm:w-[82px] w-[60px] object-contain mx-5 my-5"
      />
    </motion.div>
  </section>
);

export default Partner;
