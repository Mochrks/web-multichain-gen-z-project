import styles from "../styles/style";
import { socialMedia, navLinks } from "../apis";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col relative overflow-hidden`}
  >
    {/* Background Decorative Gradients */}
    <div className="absolute z-[0] w-[30%] h-[30%] -left-[10%] bottom-0 blue__gradient opacity-50" />
    <div className="absolute z-[0] w-[20%] h-[20%] right-[10%] top-[10%] pink__gradient opacity-30" />

    <div className={`${styles.boxWidth} ${styles.paddingX} z-[1]`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-12 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <p
            className={`${styles.paragraph} mt-6 max-w-[312px] text-dimWhite leading-[28px]`}
          >
            Empowering the next generation of digital assets with secure,
            seamless multi-chain connectivity.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-12">
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-semibold text-[20px] leading-[27px] text-white mb-6 border-b-2 border-secondary w-fit pb-1">
              Links
            </h4>
            <ul className="list-none">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-all duration-300 transform hover:translate-x-2 ${
                    index !== navLinks.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-semibold text-[20px] leading-[27px] text-white mb-6 border-b-2 border-secondary w-fit pb-1">
              Community
            </h4>
            <ul className="list-none">
              {["Ecosystem", "Partners", "Blog", "Documentation"].map(
                (item, index) => (
                  <li
                    key={item}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-all duration-300 transform hover:translate-x-2 ${
                      index !== 3 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-semibold text-[20px] leading-[27px] text-white mb-6 border-b-2 border-secondary w-fit pb-1">
              Legal
            </h4>
            <ul className="list-none">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, index) => (
                  <li
                    key={item}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-all duration-300 transform hover:translate-x-2 ${
                      index !== 2 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-10 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-dimWhite">
          Copyright Ⓒ 2023{" "}
          <span className="text-secondary font-semibold">Mochrks</span>. All
          Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6 gap-4">
          {socialMedia.map((social) => (
            <div
              key={social.id}
              className="w-[45px] h-[45px] flex items-center justify-center rounded-xl bg-gray-gradient hover:bg-blue-gradient transition-all duration-500 cursor-pointer shadow-lg group"
              onClick={() => window.open(social.link)}
            >
              <img
                src={social.icon}
                alt={social.id}
                className="w-[22px] h-[22px] object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
