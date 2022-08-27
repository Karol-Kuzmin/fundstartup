import React from 'react'

export default function AdvisorCard() {
    const advisor_data = [
        {
            img_url: "/assets/images/amazy_b.png",
            title: "Amazy",
            content: " AMAZY is a challenging fitness app with game-fi features. You wear trendy virtual sneakers and take a walk or jog to earn AMT tokens."
        },
        {
            img_url: "/assets/images/amazy_b.png",
            title: "Amazy",
            content: " AMAZY is a challenging fitness app with game-fi features. You wear trendy virtual sneakers and take a walk or jog to earn AMT tokens."
        },
        {
            img_url: "/assets/images/amazy_b.png",
            title: "Amazy",
            content: " AMAZY is a challenging fitness app with game-fi features. You wear trendy virtual sneakers and take a walk or jog to earn AMT tokens."
        },
        
    ];

  return (
    <div className="flex grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 gap-8 mt-[46px]">
        {advisor_data.map((items)=>(
            <div className="md:justify-self-center sm:justify-self-center lg:w-[88%] md:w-[55%] sm:w-[45%] border-2 border-[#f6b432] rounded-[8px] border-solid ">
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
                <img alt="" src={items.img_url}></img>
                <h2 className="text-[16] text-[#ffffff] items-center flex ml-[7px]">
                  {items.title}
                </h2>
              </div>
              <p className="mt-[16px]  text-white ">
                {items.content}
              </p>

              <hr className="border-[#f6b432] mt-[16px]"></hr>

              <div className="mt-[17px]">
                <p className="text-[15px] text-[#ffffff] "> Total Raise</p>
                <p className="text-[24px] text-[#f6b432] font-bold">
                  {" "}
                  237497.44 BUSD
                </p>
              </div>

              <hr className="border-[#f6b432] mt-[18px]"></hr>

              <div className="mt-[17px]">
                <p className="text-[15px] text-[#ffffff]"> Maximum</p>
                <p className="text-[24px] text-[#f6b432] font-bold">
                  {" "}
                  1939.85 BUSD
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
        ))}

         
        </div>
  )
}
