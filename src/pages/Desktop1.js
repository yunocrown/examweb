import React , { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Desktop1 = () => {
  const navigate = useNavigate();

  const onSumbitButtonClick = useCallback(() => {
    navigate("/Home");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-justify text-xl text-black font-alata">
      <div className="absolute top-[444px] left-[376px] w-[710px] h-[216px]">
        <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-gray-700 w-[710px] h-[216px] mix-blend-darken" />
        <Button
          className="absolute top-[143px] left-[240px] cursor-pointer"
          sx={{ width: 189 }}
          variant="contained"
          color="primary"
          onClick={onSumbitButtonClick}
        >
          Start
        </Button>
        <div className="absolute top-[45px] left-[70px] inline-block w-[606px] h-[46px]">
          Initiate Your Verification Process
        </div>
      </div>
      <div className="absolute top-[0px] left-[1px] bg-gray-600 w-[1440px] h-[77px]" />
    </div>
  );
};

export default Desktop1;
