import React from 'react'

export default function PoolCard() {
    const pool_data = [
        {title:"What is Fund Startup", 
        content:"Before getting started, let's dig into Fund Startup and what it stands for"},
        {title:"What is Fund Startup", 
        content:"Before getting started, let's dig into Fund Startup and what it stands for"},
        {title:"What is Fund Startup", 
        content:"Before getting started, let's dig into Fund Startup and what it stands for"}
    ];


  return (
    <div className=" grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 gap-8 font-['Montserrat'] font-bold ">
        {pool_data.map((items) => (
            <div className=" md:justify-self-center sm:justify-self-center lg:w-[88%] md:w-[45%] sm:w-[45%] h-[207px] border-2 border-[#f6b432] rounded-[8px] border-solid">
              <div className="ml-[21px] ">
                <h3 className="xl:text-[24px] lg:text-[22px] md:text-[18px] text-[#f6b432] mt-[20px] ">
                  {items.title}
                </h3>
                <p className="text-[18px] text-[#ffffff] mt-[18px] h-[62px] ">
                  {items.content}
                </p>
                <div className="flex mt-[28px] items-center w-[150px] hover:border-2 border-solid border-[#f6b432] rounded-[8px] ">
                  <p className="text-[18px] text-[#f6b432]"> Learn More</p>
                  <img
                    alt=""
                    src="/assets/images/ArrowRight.png"
                    className="w-[28.84px] h-[13.44px] ml-[9px]"
                  ></img>
                </div>
              </div>
            </div>
        ))
        }
    </div>
  )
}
