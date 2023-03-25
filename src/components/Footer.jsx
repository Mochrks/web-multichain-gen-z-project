import styles from "../style";

import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6  ">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white sm:mx-[3%] mx-0">
        Copyright Ⓒ 2023 Mochrks. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 sm:mx-[3%] mx-0">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
