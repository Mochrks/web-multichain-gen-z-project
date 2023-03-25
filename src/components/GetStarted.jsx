import { btnstart } from "../assets";

const GetStarted = ({ styles }) => (
  <img
    src={btnstart}
    alt="btn start"
    className={`w-[200px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

export default GetStarted;
