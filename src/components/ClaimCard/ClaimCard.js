import React from 'react'

export default function ClaimCard(props) {
  return (
    <div className="my-[20px]  border-yellow-dark border-2 rounded-[5px] bg-gradient-to-t from-[#f6b43233] to-[#16161a00] ">
            <div className="grid grid-cols-12  self-center container mx-auto px-5 lg:py-3 md:py-5 py-8  w-[100%]">
              <div className="2xl:order-1 xl:order-1 lg:order-1 md:order-1 order-1 flex xl:col-span-6 lg:col-span-5 md:col-span-10  col-span-10 ">
                <img
                  alt="verse"
                  src={props.card_data.img_url}
                  className="w-[63px] h-[63px] self-center "
                />
                <div className="ml-[3%] self-center ">
                  <p className=" h-[28px] font-bold sm:text-[24px] leading-[28px] text-white">
                    {props.card_data.title}
                  </p>
                  <p className="h-[19px] font-bold text-white leading-[19px] ">
                    (11th Vesting)
                  </p>
                </div>
              </div>

              <div className="md:py-3 py-3 md:mt-3 mt-3 2xl:order-2 xl:order-2 lg:order-2 md:order-3 order-3 xl:col-span-2 lg:col-span-2 md:col-span-12 col-span-12 lg:w-[90%]   xl:border-x  lg:border-x lg:border-y-0 md:border-y border-y mt-[4px]   xl:pl-9 lg:px-5 ">
                <p className=" h-[16px] lg:text-center text-white font-normal leading-[16px]  text-[14px] ">
                  Your Allocation
                </p>
              </div>

              <div className="lg:block md:flex flex md:py-3 py-3 2xl:order-3 xl:order-3 lg:order-3 md:order-4 order-4 xl:col-span-2 lg:col-span-3 md:col-span-12 col-span-12  mt-[4px] ">
                <p className=" h-[16px] text-white font-normal leading-[16px] text-[14px]">
                  Claim Start Date{" "}
                </p>
                <div className="flex md:justify-end justify-end 2xl:w-[76.5%] xl:w-[93.5%] lg:w-[80.5%] md:w-[82%] w-[63%]">
                  <p className=" h-[19px] text-white font-bold leading-[19 px] sm:text-[16px] text-[13px] ">
                    {props.card_data.start_date}
                  </p>
                </div>
              </div>

              <div className="2xl:order-4 xl:order-4 lg:order-4 md:order-5 order-5 xl:col-span-1 lg:col-span-1 md:col-span-12 col-span-12 self-center w-[100%] xl:ml-[0%] ">
                <button className="rounded-[5px] w-[100%] bg-yellow-dark font-bold text-[15px] leading-[17px] h-[44.5px]">
                  Unavailable
                </button>
              </div>
              <div className="2xl:order-5 xl:order-5 lg:order-5 md:order-2 order-2 xl:col-span- lg:col-span-1  md:col-span-2 col-span-2  self-center xl:ml-8 lg:ml-8 md:ml-[60px] ">
                <button className=" rounded-[50%] bg-yellow-dark w-[43px] h-[43px] flex justify-center items-center border-4 border-[#937642]">
                  <img
                    alt="add"
                    src="./assets/images/claim/message-add.png"
                    className=""
                  ></img>
                </button>
              </div>
            </div>
          </div>
  )
}
