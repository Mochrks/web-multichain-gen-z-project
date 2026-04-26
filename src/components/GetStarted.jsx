import PropTypes from "prop-types";
import { btnstart } from "../assets";

const GetStarted = ({ styles }) => (
  <button type="button" className={`focus:outline-none ${styles}`}>
    <img
      src={btnstart}
      alt="Get Started"
      className="w-[200px] h-[180px] object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
    />
  </button>
);

GetStarted.prototype = {
  styles: PropTypes.string,
};

export default GetStarted;
