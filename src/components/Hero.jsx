import { motion } from "framer-motion";
import styles from "../styles/style.js";
import { nft, arrowLeft, arrowRight } from "../assets";
import GetStarted from "./GetStarted";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";

const Hero = () => {
  return (
    <section id="index" className={`flex md:flex-row flex-col sm:py-1 py-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[0]`}
      >
        {/* the next generation */}
        <motion.div
          variants={textVariant(1.1)}
          className="flex flex-row justify-between items-center w-full  "
        >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Multi Chain <br className="sm:block hidden" />
            <span className="text-white">Gen Z</span>
          </h1>
        </motion.div>

        <motion.h1
          variants={textVariant(1.2)}
          className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"
        >
          Platform.
        </motion.h1>

        <motion.p
          variants={fadeIn("right", "tween", 0.2, 1.5)}
          className={`${styles.paragraph} max-w-[770px] mt-5`}
        >
          A blockchain web application is built on a decentralized architecture,
          which means that it is not controlled by a central authority or
          server. Instead, it operates through a network of computers or nodes,
          where each node has a copy of the blockchain ledger.
          <GetStarted styles={` mt-1`} />
        </motion.p>
      </motion.div>

      <div
        className={`flex-1 ${styles.flexCenter} flex-col md:my-0 my-10 relative`}
      >
        <motion.img
          variants={fadeIn("left", "tween", 0.5, 2)}
          initial="hidden"
          whileInView="show"
          src={nft}
          alt="nft"
          className="w-[100%] h-[100%] relative z-[2] cursor-pointer"
        ></motion.img>

        <motion.div
          variants={fadeIn("left", "tween", 0.5, 2)}
          initial="hidden"
          whileInView="show"
          className=" z-[5] flex flex-row justify-end items-center w-full sm:my-10 sm:pr-20 pr-10 sm:pt-1 pt-10"
        >
          <img
            src={arrowLeft}
            alt="arrowLeft"
            className="w-[50]  relative cursor-pointer"
          />
          <img
            src={arrowRight}
            alt="arrowLeft"
            className="w-[50]  relative cursor-pointer"
          />
        </motion.div>

        {/* gradient start */}
        <div className="absolute z-[0] w-[180%] h-[115%] -right-[100%] top-0  rounded-full gradient-01-1" />
        <div className="absolute z-[1] w-[20%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[90%] h-[90%] -left-[190%] gradient-02-2  bottom-40" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
