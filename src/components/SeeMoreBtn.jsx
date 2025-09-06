import PropTypes from "prop-types";
import { seeMore } from "../assets";

const SeeMoreBtn = ({ styles }) => (
  <img
    src={seeMore}
    alt="seeMore"
    className={`w-[200px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

SeeMoreBtn.prototype = {
  styles: PropTypes.string,
};
export default SeeMoreBtn;
