import React from 'react'

export default function CompletePoolCard(props) {


  return (
    <div className="flex justify-center">
            <div className="md:justify-self-center sm:justify-self-center md:w-[100%] sm:w-[70%] border-2 border-[#f6b432] rounded-[8px] border-solid pb-[30px]">
            <div className="container mx-auto px-[1.25rem]">
              <div className="flex mt-[24px]">
                <button className="w-[55px] h-[31px] rounded-[5px] bg-amber-500">
                  <p className="text-[16] text-[black] font-bold ">INO</p>
                </button>
                <p className="text-[15px] text-[#f6b432] items-center flex justify-end w-[83%]">
                  1 BUSD = 40 AZY
                </p>
              </div>
              <div className="flex mt-[30px]">
                <img alt="" src={props.completePoolData.img_url}></img>
                <h2 className="text-[16] text-[#ffffff] items-center flex ml-[7px]">
                  {props.completePoolData.title}
                </h2>
              </div>
              <p className=" mt-[16px]  text-white ">
                {props.completePoolData.content}
              </p>

              <hr className="border-[#f6b432] mt-[16px]"></hr>

              <div className="mt-[17px]">
                <p className="text-[15px] text-[#ffffff] "> Total Raise</p>
                <p className="text-[24px] text-[#f6b432] font-bold">
                  {props.completePoolData.totalRaise+" BUSD"}
                </p>
              </div>

              <hr className="border-[#f6b432] mt-[18px]"></hr>

              <div className="mt-[17px]">
                <p className="text-[15px] text-[#ffffff]"> Maximum</p>
                <p className="text-[24px] text-[#f6b432] font-bold">
                  {props.completePoolData.maximum+" USD"}
                </p>
              </div>

              <hr className="border-[#f6b432] mt-[18px]"></hr>

              <div className="mt-[17px]">
                <p className="text-[15px] text-[#ffffff]"> Access</p>
                <p className="text-[24px] text-[#f6b432] font-bold"> Public</p>
              </div>

              <hr className="border-[#f6b432] mt-[18px]"></hr>

              <div>
                <div className="flex mt-[15px]">
                  <p className="text-[15px] text-[#ffffff]"> Progress</p>
                  <p className="text-[8px] text-[#ffffff] flex items-center justify-end w-[83%]">
                    Max Participants:{" "}
                    <p className="text-[12px] text-[#f6b432]">4527</p>
                  </p>
                </div>
                <button className="w-[100%] h-[16px] bg-[#f6b432] rounded-[8px] mt-[10px]"></button>
                <div className="flex">
                  <p className="text-[8px] text-[#ffffff]">100.00%</p>
                  <p className="text-[8px] text-[#ffffff] justify-end flex w-[90%]">
                    9499897.78/9500000 AZY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
