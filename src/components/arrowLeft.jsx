import styles from "../style";
import { arrowLeft } from "../assets";

const arrowLeft = ({ styles }) => (
      <img src={arrowLeft} alt="btn arrowLeft" className={`w-[200px] h-[180px] object-contain cursor-pointer ${styles}`}/>
);

export default arrowLeft;
