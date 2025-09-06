import PropTypes from "prop-types";
import { arrowLefts } from "../assets";

const arrowLeft = ({ styles }) => (
  <img
    src={arrowLefts}
    alt="btn arrowLeft"
    className={`w-[200px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

arrowLeft.propTypes = {
  styles: PropTypes.string,
};

export default arrowLeft;
