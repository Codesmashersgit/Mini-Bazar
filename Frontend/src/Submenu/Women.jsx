import React from "react";
import {
  WFootwear,
  Indian_FusionWear,
  Western_Wear,
  Lingerie_Sleepwear,
  Sports_ActiveWear,
  Beauty_Personal_Care,
  Shop_Occassion,
} from "../data/data";

function Women() {
  return (
    <div>
      <div className="flex gap-28 flex-wrap">
        <div className="flex flex-col list-none ">
          <p className="text-pink-400 font-[sk]">Indian Fushion Wear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Indian_FusionWear.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70"
              >
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </div>
        </div>

        <div className="flex flex-col list-none ">
          <p className="text-pink-400 font-[sk] ">Western Wear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Western_Wear.map((item, index) => (
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
          <p className="text-pink-400 font-[sk] ">Shop Occassion</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Shop_Occassion.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                 <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none ">
          <p className="text-pink-400 font-[sk] ">Footwear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {WFootwear.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none -mt-36">
          <p className="text-pink-400 font-[sk] ">Sports Active Wear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Sports_ActiveWear.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none -mt-48 ml-[30%]">
          <p className="text-pink-400 font-[sk] ">Sleepwear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Lingerie_Sleepwear.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </div>
        </div>

        <div className="flex flex-col list-none -mt-48">
          <p className="text-pink-400 font-[sk] ">Beauty Personal care</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Beauty_Personal_Care.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Women;
