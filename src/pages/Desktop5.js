import React , { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Desktop5 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-sm text-gray-100 font-alatsi">
      <div className="absolute top-[0px] left-[0px] w-[1444px] h-[1024px]">
        <div className="absolute top-[906px] left-[302px] w-[503px] h-[87px]">
          <div className="absolute top-[0px] left-[0px] w-[503px] h-[87px]">
            <Button
              className="absolute top-[42.66px] left-[24px] mix-blend-darken cursor-pointer"
              sx={{ width: 189 }}
              variant="contained"
              color="primary"
              onClick={onRectangleButtonClick}
            >
              Button
            </Button>
            <div className="absolute top-[51.87px] left-[76px] inline-block w-[102px] h-[22.59px]">
              I Confirm
            </div>
            <div className="absolute top-[0px] left-[0px] text-red-300 inline-block w-[503px] h-[22.59px]">
              To proceed with the exam, confirm your identity
            </div>
          </div>
          <Button
            className="absolute top-[40.99px] left-[278px]"
            sx={{ width: 189 }}
            variant="outlined"
            color="primary"
          >
            I Deny
          </Button>
        </div>
        <div className="absolute top-[0px] left-[0px] bg-gray-600 w-[1440px] h-[101px]" />
        <div className="absolute top-[101px] left-[1068px] w-[376px] h-[923px] text-black">
          <div className="absolute top-[0px] left-[0px] w-[376px] h-[923px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-300 w-[372px] h-[923px] mix-blend-darken" />
            <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[376px] h-[358px]" />
            <div className="absolute top-[39px] left-[102px] bg-gray-500 w-[182px] h-[181px]" />
            <div className="absolute top-[244px] left-[110px] inline-block w-[156px] h-[27px]">
              Participant 123
            </div>
            <div className="absolute top-[283px] left-[105px] inline-block w-[176px] h-[27px]">
              Dummy User 123
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[101px] left-[161px] w-[732px] h-[803px] object-cover"
        alt=""
        src="../screenshot-from-20221122-170814-1@2x.png"
      />
      <img
        className="absolute top-[140px] left-[1173px] w-[179px] h-[201px] object-cover"
        alt=""
        src="../screenshot-from-20221122-182556-11@2x.png"
      />
    </div>
  );
};

export default Desktop5;
