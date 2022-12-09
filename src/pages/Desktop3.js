import React , { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Desktop3 = () => {
  const navigate = useNavigate();

  const onUsernameContainerClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-sm text-black font-alatsi">
      <div className="absolute top-[0px] left-[1px] w-[1440px] h-[699px]">
        <div className="absolute top-[0px] left-[0px] bg-gray-600 w-[1440px] h-[101px]" />
        <div className="absolute top-[324px] left-[332px] rounded-[20px] bg-gray-700 w-[774px] h-[375px] mix-blend-darken" />
        <div
          className="absolute top-[413px] left-[421px] w-[626px] h-[137px] cursor-pointer"
          onClick={onUsernameContainerClick}
        >
          <img
            className="absolute top-[6px] left-[0px] w-[40px] h-[40px] overflow-hidden"
            alt=""
            src="../iconsuser2.svg"
          />
          <div className="absolute top-[0px] left-[48px] rounded-[20px] bg-gray-500 w-[578px] h-[53px] mix-blend-darken" />
          <div className="absolute top-[11px] left-[69px] inline-block w-[368px] h-[27px]">{`Enter Your Username `}</div>
          <div className="absolute top-[110px] left-[69px] inline-block w-[368px] h-[27px]">
            Enter Your Password
          </div>
        </div>
        <img
          className="absolute top-[512px] left-[421px] w-[626px] h-[53px]"
          alt=""
          src="../password1.svg"
        />
        <div className="absolute top-[611px] left-[625px] w-[189px] h-[53px]">
          <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-indigo w-[189px] h-[53px] mix-blend-darken" />
          <div className="absolute top-[11px] left-[52px] inline-block w-[81px] h-[27px]">
            Sumbit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop3;
