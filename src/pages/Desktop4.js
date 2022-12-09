import React , { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Desktop4 = () => {
  const navigate = useNavigate();

  const onSumbitContainerClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-sm text-black font-alatsi">
      <div className="absolute top-[0px] left-[1px] w-[1440px] h-[699px]">
        <div className="absolute top-[0px] left-[0px] bg-gray-600 w-[1440px] h-[101px]" />
        <div className="absolute top-[324px] left-[332px] rounded-[20px] bg-gray-700 w-[774px] h-[375px] mix-blend-darken" />
        <div className="absolute top-[413px] left-[421px] w-[626px] h-[53px]">
          <img
            className="absolute top-[6px] left-[0px] w-[40px] h-[40px] overflow-hidden"
            alt=""
            src="../iconsuser1.svg"
          />
          <div className="absolute top-[0px] left-[48px] rounded-[20px] bg-gray-500 w-[578px] h-[53px] mix-blend-darken" />
          <div className="absolute top-[11px] left-[69px] inline-block w-[368px] h-[27px]">
            Participant 123
          </div>
        </div>
        <img
          className="absolute top-[512px] left-[421px] w-[626px] h-[53px]"
          alt=""
          src="../password.svg"
        />
        <div
          className="absolute top-[611px] left-[625px] w-[189px] h-[53px] cursor-pointer"
          onClick={onSumbitContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-indigo w-[189px] h-[53px] mix-blend-darken" />
          <div className="absolute top-[11px] left-[52px] inline-block w-[81px] h-[27px]">
            Sumbit
          </div>
        </div>
      </div>
      <img
        className="absolute top-[532px] left-[497px] w-[15px] h-[15px]"
        alt=""
        src="../ellipse-1.svg"
      />
      <img
        className="absolute top-[532px] left-[521px] w-[15px] h-[15px]"
        alt=""
        src="../ellipse-1.svg"
      />
      <img
        className="absolute top-[532px] left-[545px] w-[15px] h-[15px]"
        alt=""
        src="../ellipse-1.svg"
      />
      <img
        className="absolute top-[532px] left-[569px] w-[15px] h-[15px]"
        alt=""
        src="../ellipse-1.svg"
      />
      <img
        className="absolute top-[532px] left-[593px] w-[15px] h-[15px]"
        alt=""
        src="../ellipse-1.svg"
      />
      <img
        className="absolute top-[532px] left-[617px] w-[15px] h-[15px]"
        alt=""
        src="../ellipse-1.svg"
      />
      <img
        className="absolute top-[532px] left-[641px] w-[15px] h-[15px]"
        alt=""
        src="../ellipse-1.svg"
      />
    </div>
  );
};

export default Desktop4;
