import React , { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Desktop6 = () => {
  const navigate = useNavigate();

  const onNextToggleButtonClick = useCallback(() => {
    navigate("/desktop-7");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-base text-black font-alatsi">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px]">
        <div className="absolute top-[0px] left-[0px] bg-gray-600 w-[1440px] h-[101px]" />
        <div className="absolute top-[184px] left-[63px] w-[1329px] h-[624px]">
          <div className="absolute top-[0px] left-[0px] [text-decoration:underline] inline-block w-[238px] h-[27px]">
            General Instruction:
          </div>
          <div className="absolute top-[72px] left-[4px] text-[inherit] font-inherit text-justify inline-block w-[1325px] h-[552px]">
            <ol className="m-[0] pl-[35px]">
              <li className="mb-[0px]">
                <span>
                  In this round each team has its own quota of 4 questions and
                  otherquestions passed to it from the previous team that did
                  not answer.A team gets 30 seconds to answer the question
                  intended for it, and isawarded 20 points for answering it.
                </span>
              </li>
            </ol>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>&nbsp;</span>
            </p>
            <ol className="m-[0] pl-[35px]">
              <li className="mb-[0px]">
                <span>
                  If the team that the question intended for passes it. The next
                  team/s get15 seconds to answer it and is awarded 10 points for
                  the right answer.
                </span>
              </li>
            </ol>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>&nbsp;</span>
            </p>
            <ol className="m-[0] pl-[35px]">
              <li className="mb-[0px]">
                <span>
                  The team members can discuss before giving the answer
                </span>
              </li>
            </ol>
            <ul className="m-[0] pl-[35px]">
              <li className="mb-[0px]">
                <span>
                  If a team cannot answer a question they can pass it or after
                  30 secondsit gets automatically passed to the next team.
                </span>
              </li>
              <li className="mb-[0px]">
                <span>
                  If a team is answering a question and the time passes, then
                  the teamgets to complete the answer and is awarded points for
                  the right answer.
                </span>
              </li>
              <li className="mb-[0px]">
                <span>There is no negative marking for wrong answer.</span>
              </li>
            </ul>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>{`      `}</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>{`     `}</span>
              <span className="text-red-200">
                {" "}
                No buzzer is used in this round.
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>&nbsp;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>&nbsp;</span>
            </p>
            <p className="m-[0]">
              <span>&nbsp;</span>
            </p>
          </div>
        </div>
        <Button
          className="absolute top-[112px] left-[1213px]"
          sx={{ width: 208 }}
          variant="outlined"
          color="primary"
        >
          View in:
        </Button>
        <div className="absolute top-[923px] left-[0px] w-[1440px] h-[101px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[1440px] h-[101px]" />
          <Button
            className="absolute top-[25px] left-[1239px] cursor-pointer"
            sx={{ width: 161 }}
            variant="outlined"
            color="primary"
            onClick={onNextToggleButtonClick}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Desktop6;
