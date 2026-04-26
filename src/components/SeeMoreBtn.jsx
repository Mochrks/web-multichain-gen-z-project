import PropTypes from "prop-types";
import { seeMore } from "../assets";

const SeeMoreBtn = ({ styles }) => (
  <button type="button" className={`focus:outline-none ${styles}`}>
    <img
      src={seeMore}
      alt="See More"
      className="w-[200px] h-[180px] object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
    />
  </button>
);

SeeMoreBtn.prototype = {
  styles: PropTypes.string,
};
export default SeeMoreBtn;
