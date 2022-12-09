import React , { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Desktop8 = () => {
  const navigate = useNavigate();

  const onSumbitContainerClick = useCallback(() => {
    navigate("/desktop-9");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/desktop-7");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-base text-black font-alatsi">
      <div className="absolute top-[112px] left-[1213px] w-[208px] h-[36px] text-sm">
        <div className="absolute top-[0px] left-[0px] inline-block w-[86px] h-[27px]">
          View in:
        </div>
        <div className="absolute top-[0px] left-[91px] rounded-[4px] bg-gray-500 w-[117px] h-[36px]" />
        <div className="absolute top-[5px] left-[107px] font-akshar inline-block w-[68px] h-[27px]">
          English
        </div>
        <img
          className="absolute top-[13px] left-[180.67px] w-[21.65px] h-[15px]"
          alt=""
          src="../polygon-1.svg"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] bg-gray-600 w-[1440px] h-[101px]" />
      <div className="absolute top-[221px] left-[79px] w-[1325px] h-[307px]">
        <div className="absolute top-[0px] left-[258px] [text-decoration:underline] inline-block w-[766px] h-[27px]">
          Recruitment of Jaipur Association ( Customer Support and Sales ) is
        </div>
        <div className="absolute top-[55px] left-[526px] [text-decoration:underline] inline-block w-[230px] h-[27px]">
          State Bank of India
        </div>
        <div className="absolute top-[131px] left-[567px] [text-decoration:underline] inline-block w-[147px] h-[27px]">
          Instructions
        </div>
        <div className="absolute top-[186px] left-[0px] text-[inherit] font-inherit text-justify inline-block w-[1325px] h-[121px]">
          <ol className="m-[0] pl-[35px]">
            <li className="mb-[0px]">
              The text displayed on the screen must be written by you in the
              space provided in the capital letters. You will be given 5 minutes
              for this activity.
            </li>
            <li className="mb-[0px]">
              The Question Paper contains of objective type questions as follows
            </li>
          </ol>
        </div>
      </div>
      <div className="absolute top-[538px] left-[67px] w-[1322.06px] h-[269px] text-justify font-alata">
        <div className="absolute top-[0px] left-[0px] w-[1322.06px] h-[269px]">
          <div className="absolute top-[0px] left-[1px] w-[1321.06px] h-[269px]">
            <div className="absolute top-[20px] left-[315.04px] w-[104px] h-[241px]">
              <div className="absolute top-[0px] left-[0px] font-alatsi text-left inline-block w-[104px] h-[27px]">
                No of Qs.
              </div>
              <div className="absolute top-[70px] left-[42px] inline-block w-[39px] h-[35px]">
                35
              </div>
              <div className="absolute top-[113px] left-[42px] inline-block w-[39px] h-[35px]">
                35
              </div>
              <div className="absolute top-[160px] left-[42px] inline-block w-[39px] h-[35px]">
                30
              </div>
              <div className="absolute top-[206px] left-[38px] inline-block w-[62px] h-[35px]">
                100
              </div>
            </div>
            <div className="absolute top-[10px] left-[838.04px] w-[447px] h-[192px] text-left font-alatsi">
              <div className="absolute top-[0px] left-[33px] inline-block w-[414px] h-[36px]">{`Duration for P&D Candidates eligible for following time`}</div>
              <div className="absolute top-[118px] left-[0px] font-alata text-justify inline-block w-[447px] h-[74px]">
                20 Minutes for every hour of Examination
              </div>
            </div>
            <div className="absolute top-[18px] left-[616.04px] w-[178px] h-[197px]">
              <div className="absolute top-[0px] left-[34px] font-alatsi text-left inline-block w-[103px] h-[36px]">
                Duration
              </div>
              <div className="absolute top-[72px] left-[0px] inline-block w-[178px] h-[35px]">
                20 Minutes
              </div>
              <div className="absolute top-[115px] left-[0px] inline-block w-[178px] h-[35px]">
                20 Minutes
              </div>
              <div className="absolute top-[162px] left-[0px] inline-block w-[178px] h-[35px]">
                20 Minutes
              </div>
            </div>
            <div className="absolute top-[7px] left-[452.04px] w-[128px] h-[254px]">
              <div className="absolute top-[0px] left-[0px] font-alatsi text-left inline-block w-[128px] h-[27px]">
                Maximum marks
              </div>
              <div className="absolute top-[83px] left-[23px] inline-block w-[39px] h-[35px]">
                35
              </div>
              <div className="absolute top-[126px] left-[23px] inline-block w-[39px] h-[35px]">
                35
              </div>
              <div className="absolute top-[173px] left-[23px] inline-block w-[39px] h-[35px]">
                30
              </div>
              <div className="absolute top-[219px] left-[19px] inline-block w-[62px] h-[35px]">
                100
              </div>
            </div>
            <div className="absolute top-[20px] left-[91.04px] w-[210px] h-[240px]">
              <div className="absolute top-[0px] left-[0px] font-alatsi text-left inline-block w-[189px] h-[27px]">
                Name of the Test
              </div>
              <div className="absolute top-[67px] left-[3px] inline-block w-[207px] h-[35px]">
                Resoning Ability
              </div>
              <div className="absolute top-[115px] left-[2px] inline-block w-[207px] h-[35px]">
                Numerical Ability
              </div>
              <div className="absolute top-[160px] left-[16px] inline-block w-[168px] h-[35px]">
                English Ability
              </div>
              <div className="absolute top-[205px] left-[16px] inline-block w-[65px] h-[35px]">
                Total
              </div>
            </div>
            <div className="absolute top-[17px] left-[10.04px] w-[62px] h-[196px]">
              <div className="absolute top-[0px] left-[0px] font-alatsi text-left inline-block w-[62px] h-[27px]">
                S No.
              </div>
              <div className="absolute top-[69px] left-[21px] inline-block w-[19px] h-[35px]">
                1
              </div>
              <div className="absolute top-[118px] left-[16px] inline-block w-[19px] h-[35px]">
                2
              </div>
              <div className="absolute top-[161px] left-[16px] inline-block w-[19px] h-[35px]">
                3
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[1321.06px] h-[269px]"
              alt=""
              src="../rectangle-structure.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[0px] w-[1322px] h-[269px]">
            <div className="absolute top-[0px] left-[0px] [border:1px_solid_#000] box-border w-[1322px] h-[269px]" />
          </div>
        </div>
      </div>
      <div className="absolute top-[833px] left-[-58px] [border:1px_solid_#000] box-border w-[1520px] h-[209px]" />
      <div
        className="absolute top-[952px] left-[632px] w-[239px] h-[53px] cursor-pointer text-sm text-gray-100"
        onClick={onSumbitContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-indigo w-[239px] h-[53px] mix-blend-darken" />
        <div className="absolute top-[9px] left-[21px] inline-block w-[210px] h-[27px]">
          I am ready to begin
        </div>
      </div>
      <div className="absolute top-[857px] left-[26px] w-[161px] h-[142px] text-lg font-akshar">
        <div
          className="absolute top-[91px] left-[0px] w-[161px] h-[51px] cursor-pointer"
          onClick={onGroupContainer2Click}
        >
          <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white [border:1px_solid_#000] box-border w-[161px] h-[51px]" />
        </div>
        <div className="absolute top-[100px] left-[54px] inline-block w-[104px] h-[27px]">
          Previous
        </div>
        <img
          className="absolute top-[102px] left-[21.53px] w-[19.5px] h-[30.51px]"
          alt=""
          src="../group-4.svg"
        />
        <img
          className="absolute top-[0px] left-[23.59px] w-[28.44px] h-[16.51px]"
          alt=""
          src="../group-5.svg"
        />
      </div>
      <div
        className="absolute top-[845px] left-[38px] rounded-[6px] [border:1px_solid_#000] box-border w-[45px] h-[40px] cursor-pointer"
        onClick={onRectangle6Click}
      />
      <div className="absolute top-[845px] left-[103px] font-alata text-justify inline-block w-[1325px]">
        This is the declaration the I’ve read all the instructions given above
        and all the information provided by me is correct and if any wrong
        information is filled it will be my reponsibility.
      </div>
    </div>
  );
};

export default Desktop8;
