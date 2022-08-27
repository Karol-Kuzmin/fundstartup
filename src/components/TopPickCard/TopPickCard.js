import React from 'react'

export default function TopPickCard() {


    const toppick_data = [
        {
            img_url: "/assets/images/gems_b.png",
            title: "GEMS",
            content: "ARtonar is the first opp-less  3D & Augmnented reality NFT generation platform for the metaverse."
        },
        {
            img_url: "/assets/images/gems_b.png",
            title: "GEMS",
            content: "ARtonar is the first opp-less  3D & Augmnented reality NFT generation platform for the metaverse."
        },
        {
            img_url: "/assets/images/gems_b.png",
            title: "GEMS",
            content: "ARtonar is the first opp-less  3D & Augmnented reality NFT generation platform for the metaverse."
        },
        {
            img_url: "/assets/images/gems_b.png",
            title: "GEMS",
            content: "ARtonar is the first opp-less  3D & Augmnented reality NFT generation platform for the metaverse."
        },
       
    ];

  return (
    <div className="flex grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-8 mt-[46px]">
           
        {toppick_data.map((items)=> (
            <div className="flex md:justify-self-center sm:justify-self-center lg:w-[88%] md:w-[55%] sm:w-[45%] h-[372px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
              <div className="container mx-auto px-[1.25rem]">
                <div className="mt-[24px] flex">
                  <button className="w-[55px] h-[31px]  rounded-[8px]   bg-amber-500">
                    <p className="text-[16] text-[black] font-bold">INO</p>
                  </button>
                  <div className="flex justify-end  w-[80%]">
                    <button className="w-[93px] h-[31px] border-2 border-[#f6b432] rounded-[8px] border-solid font-bold">
                      <p className="text-[16] text-[#f6b432]">1st Phase</p>
                    </button>
                  </div>
                </div>
                <div className="flex mt-[30px]">
                  <img alt="" src={items.img_url}></img>
                  <h2 className="text-[16] text-[#ffffff] ml-[7px] items-center flex">
                   {items.title}
                  </h2>
                  <div className="flex justify-end w-[80%]">
                    <button className="w-[93px] h-[31px] border-2 border-[#f6b432] rounded-[8px] border-solid">
                      <p className="text-[16] text-[#f6b432] bg-[#241a06]">
                        In 5 days
                      </p>
                    </button>
                  </div>
                </div>
                <p className="text-[16px] text-[white] font-['Montserrat, '] mt-[16px]">
                  {items.content}
                </p>

                <hr className="border-[#f6b432] mt-[10px]"></hr>

                <div className="mt-[12px] ">
                  <div className="flex  grid grid-cols-3 text-[10px] text-[#ffffff] ">
                    <p>Min Allocation</p>
                    <p>Maximum</p>
                    <p>Access</p>
                  </div>
                  <div className="flex grid grid-cols-3 text-[16px] text-[#f6b432]">
                    <p>0.01</p>
                    <p>TBA</p>
                    <p>Public</p>
                  </div>
                </div>

                <hr className="border-[#f6b432] mt-[15px]"></hr>

                <div className="flex items-center justify-center h-[50px] ">
                  <div className="flex hover:border-2 border-solid border-[#f6b432] rounded-[8px]">
                    <p className="text-[18px] text-[#f6b432] "> Learn More</p>
                    <img
                      alt=""
                      src="/assets/images/ArrowRight.png"
                      className="w-[28.84px] h-[13.44px] ml-[9px] self-center "
                    ></img>
                  </div>
                </div>
              </div>
            </div>
        ))}
           
          </div>
  )
}
