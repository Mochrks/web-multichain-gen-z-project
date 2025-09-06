import PropTypes from "prop-types";
import { arrowRights } from "../assets";

const arrowRight = ({ styles }) => (
  <img
    src={arrowRights}
    alt="btn arrowRight"
    className={`w-[200px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

arrowRight.propTypes = {
  styles: PropTypes.string,
};

export default arrowRight;
