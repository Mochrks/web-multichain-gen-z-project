import styles from "./styles/style";
import {
  Desc,
  Partner,
  Download,
  Footer,
  Navbar,
  Hero,
  Protect,
  MoreDetails,
  Future,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className="w-full z-[5]">
      <Partner />
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Desc />
        <Protect />
        <MoreDetails />
        <Download />
        <Future />
      </div>
    </div>
    <div className={`bg-black`}>
      <Footer />
    </div>
  </div>
);

export default App;
