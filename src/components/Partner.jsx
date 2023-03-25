import styles, { layout } from "../style";
import { airbnb,binance,dropbox,coinbase,ripple,ada ,lite} from "../assets";



const Partner = () =>  (
  <section id="listed-project" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col z-[5]`}>

    <div className={`${layout.sectionImg} flex-wrap w-full z-[5] `}>
      <img src={airbnb} alt="airbnb"  className="sm:w-[192px] w-[100px] object-contain mx-5 my-5"/>
      <img src={binance} alt="binance" className="sm:w-[192px] w-[100px] object-contain mx-5 my-5" />
      <img src={ripple} alt="ripple" className="sm:w-[82px] w-[50px] object-contain mx-5 my-5"/>
      <img src={coinbase} alt="coinbase" className="sm:w-[192px] w-[100px] object-contain mx-5 my-5"/>
      <img src={ada} alt="ada" className="sm:w-[82px] w-[80px] object-contain mx-5 my-5"/>
      <img src={lite} alt="lite" className="sm:w-[82px] w-[60px] object-contain mx-5 my-5"/>  
    </div>
   
    
    
    
  </section>
);

export default Partner;
