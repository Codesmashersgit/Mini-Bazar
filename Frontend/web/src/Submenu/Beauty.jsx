import React from "react";
import {
  Makeup,
  SkincareBathBody,
  Haircare,
  HairStraightener,
  BTopBrands,
  Fragrances,
  MenGrooming,
  BeautyGiftMakeupSet,
} from "../data/data";

function Beauty() {
  return (
    <div>
      <div className="flex gap-24 flex-wrap">
        <div className="flex flex-col list-none ">
          <p className="text-[#9b59b6] font-[sk]">Makeup</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Makeup.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70"
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>

        <div className="flex flex-col list-none ">
          <p className="text-[#9b59b6] font-[sk] ">SkincareBathBody</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {SkincareBathBody.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none ">
          <p className="text-[#9b59b6] font-[sk] ">Haircare</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Haircare.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none ">
          <p className="text-[#9b59b6] font-[sk] ">Top Brands</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {BTopBrands.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none ">
          <p className="text-[#9b59b6] font-[sk] ">Men Grooming</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {MenGrooming.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none -mt-36">
          <p className="text-[#9b59b6] font-[sk] ">HairStraightener</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {HairStraightener.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>

        <div className="flex flex-col list-none -mt-36">
          <p className="text-[#9b59b6] font-[sk] ">BeautyGiftMakeupSet </p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {BeautyGiftMakeupSet.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none -mt-80 ml-[35%]">
          <p className="text-[#9b59b6] font-[sk] ">Fragrances</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Fragrances.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beauty;
