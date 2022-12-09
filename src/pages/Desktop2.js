import React ,  { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { userCurrent } from "../hooks/userCurrent";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onSumbitContainerClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);
};

function Desktop(){
  const {isLoading} = userCurrent();

  if (isLoading) {
      return null;
  }

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-justify text-sm text-black font-alata">
     <div className="absolute top-[0px] left-[1px] w-[1440px] h-[907px] text-left font-alatsi">
       <div className="absolute top-[0px] left-[0px] bg-gray-600 w-[1440px] h-[101px]" />
       <div
         className="absolute top-[854px] left-[576px] w-[189px] h-[53px] cursor-pointer"
         onClick={onSumbitContainerClick}
       >
         <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-indigo w-[189px] h-[53px] mix-blend-darken" />
         <div className="absolute top-[11px] left-[52px] inline-block w-[81px] h-[27px]">
           Sumbit
         </div>
       </div>
     </div>
     <div className="absolute top-[213px] left-[298px] w-[761px] h-[471px] text-xl">
       <img
         className="absolute top-[38px] left-[165px] w-[416px] h-[416px] object-cover"
         alt=""
         src="../istockphoto672437440170667aremovebgpreview-1@2x.png"
       />
       <div className="absolute top-[0px] left-[204px] inline-block w-[352px] h-[29px]">
         Verify Your Identity
       </div>
       <div className="absolute top-[415px] left-[311px] text-xs inline-block w-[120px] h-[29px]">
         Touch Sensor
       </div>
       <div className="absolute top-[437px] left-[0px] inline-block w-[761px] h-[34px]">
         Confirm your fingerprint to verify it’s you.
       </div>
     </div>
     <div className="absolute top-[823px] left-[624px] inline-block w-[105px] h-[34px]">
       Verified?
     </div>
   </div>
  
 );
}


e
export default Desktop;

