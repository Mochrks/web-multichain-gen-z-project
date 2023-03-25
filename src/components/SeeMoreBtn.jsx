import { seeMore } from "../assets";

const SeeMoreBtn = ({ styles }) => (
  <img
    src={seeMore}
    alt="seeMore"
    className={`w-[200px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

export default SeeMoreBtn;
