import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CheckBox from "../../components/checkbox/CheckBox";
import ClaimCard from "../../components/ClaimCard/ClaimCard";
import { useEffect } from "react";
const ClaimPage = () => {
  const claim_data = [
    {
      img_url: "./assets/images/claim/verse.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/girl.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/last_survivor.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/ellipse_image.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/verse.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/girl.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/last_survivor.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/ellipse_image.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/girl.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/last_survivor.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/ellipse_image.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/verse.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/girl.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/last_survivor.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/ellipse_image.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
    {
      img_url: "./assets/images/claim/girl.png",
      title: "Hero Arena Private",
      start_date: "2022-Aug-21 20:00 UTC",
    },
  ];

  const [changeButton, setChangeButton] = useState("monthly");
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  //get current post
  const indexOflastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOflastPost - postsPerPage;
  const currentPosts = claim_data.slice(indexOfFirstPost, indexOflastPost);

  // pagination
  let maxPages = Math.ceil(claim_data.length / postsPerPage);
  let items = [];
  let leftSide = currentPage;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage;
  if (rightSide > maxPages) rightSide = maxPages;
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        onClick={() => {
          setCurrentPage(number);
        }}
        className="text-white text-[20px] px-3"
      >
        {number}
      </div>
    );
  }

  useEffect(() => {}, [currentPosts]);

  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="bg-[#23170b]">
      <Header />
      {/* Content Part */}
      <div className="mt-[159px] container mx-auto px-[50px] font-['play']">
        <div className="grid grid-cols-12  ">
          <ul className=" xl:col-span-5 lg:col-span-5 md:col-span-7 col-span-12 h-[81px] flex gap-2">
            <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
              <img alt="kucoin" src="./assets/images/claim/kucoin.png"></img>
            </li>
            <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
              <img alt="gate" src="./assets/images/claim/gate.png"></img>
            </li>
            <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
              <img alt="binance" src="./assets/images/claim/binance.png"></img>
            </li>
            <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
              <img alt="pancake" src="./assets/images/claim/pancake.png"></img>
            </li>
            <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
              <img alt="okex" src="./assets/images/claim/okex.png"></img>
            </li>
          </ul>

          <div className="flex lg:ml-[5%] xl:ml-[5%] md:ml-[5%] xl:col-span-3 lg:col-span-4 md:col-span-5 col-span-12">
            <div className=" flex  items-center h-[81px]">
              <CheckBox />
            </div>
            <div className="flex ml-[2%] items-center  h-[81px]">
              <p className="text-white leading-[20px] font-bold text-[16px] ">
                Show Only claimable Tokens
              </p>
            </div>
          </div>

          <div className="relative items-center h-[81px] flex lg:ml-[0.8%] xl:col-span-2 lg:col-span-3 md:col-span-12 col-span-12 ">
            <form className="h-[50px] md:w-[100%] flex  searchbox" action="">
              <input
                type="search"
                className="w-[100%] rounded-[5px] text-white bg-[#2f251c]"
                placeholder="search.."
              />
            </form>
          </div>

          <div className="items-center flex xl:ml-[19px] h-[81px] lg:col-span-2 md:col-span-3 col-span-12">
            <div className="w-[100%] h-[57px] bg-[#2f251c] flex items-center justify-center">
              <button
                className={
                  changeButton === "monthly"
                    ? "w-[48%] h-[51px] bg-yellow-dark text-[black] text-[16px] font-bold leading-[20px]"
                    : "w-[48%] h-[51px]  text-[white] text-[16px] font-bold leading-[20px]"
                }
                onClick={() => setChangeButton("monthly")}
              >
                Monthly
              </button>
              <button
                className={
                  changeButton === "linear"
                    ? "w-[48%] h-[51px] bg-yellow-dark text-[black] text-[16px] font-bold leading-[20px]"
                    : "w-[48%] h-[51px]  text-[white] text-[16px] font-bold leading-[20px]"
                }
                onClick={() => setChangeButton("linear")}
              >
                Linear
              </button>
            </div>
          </div>
        </div>

        {/* claims */}

        <div className="mt-[40px] mb-[263px]">
          {currentPosts.map((items) => {
            return <ClaimCard card_data={items} />;
          })}

          <div className="flex-container paginate-ctn">
            <div className="round-effect" onClick={prevPage}>
              {" "}
              &lsaquo;{" "}
            </div>
            {items}
            <div className="round-effect" onClick={nextPage}>
              {" "}
              &rsaquo;{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClaimPage;
