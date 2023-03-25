import styles from "../style";
import Button from "./Button";
import { apple, asetsdownload, google } from "../assets";

const Download = () => (
  <section
    id="pricing"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-blue-dark-gradient rounded-[20px] box-shadow `}
  >
    <div className="flex-1 flex sm:flex-row flex-col ">
      <div className="flex flex-col">
        <h2 className={styles.heading2}>Let’s try & join now!</h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>

        <div className={` sm:ml-0 ml-0 sm:mt-10 mt-10`}>
          <Button />
        </div>

        <div className="flex flex-row">
          <img src={apple} alt="apple" className="mt-10" />
          <img src={google} alt="google" className="mt-10 mx-10" />
        </div>
      </div>
      <div className="flex1 md:pl-[200px] pl-0">
        <img
          src={asetsdownload}
          alt="card"
          className="w-[140%] sm:ml-16 ml-1 sm:mt-0 mt-0 sm:ml-10 ml-1"
        />
      </div>
    </div>
  </section>
);

export default Download;
