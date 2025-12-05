import React from "react";
import {
  Topwear,
  bottomwear,
  Footwear,
  indian_festive,
  Gadgets,
  Innerwear_Sleepwear,
  Sports_Active_Wear,
  Fashion_Accessories,
} from "../data/data";

function Men() {
  return (
    <div>
      <div className="flex gap-28 flex-wrap">
        <div className="flex flex-col list-none ">
          <p className="text-[#ff3f6c] font-[sk]">Top Wear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Topwear.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70"
              >
                <a  target="_blank" href={item.url}>{item.title}</a>
              </li>
            ))}
          </div>
        </div>

        <div className="flex flex-col list-none ">
          <p className="text-[#ff3f6c] font-[sk] ">Bottom Wear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {bottomwear.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                <a  target="_blank" href={item.url}>{item.title}</a>
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none ">
          <p className="text-[#ff3f6c] font-[sk] ">Footwear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Footwear.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
               <a target="_blank" href={item.url}>{item.title}</a>
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none ">
          <p className="text-[#ff3f6c] font-[sk] ">Fashion Accessories</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Fashion_Accessories.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                <a target="_blank" href={item.url}>{item.title}</a>
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none -mt-36">
          <p className="text-[#ff3f6c] font-[sk] ">Indian Festive</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {indian_festive.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                <a target="_blank" href={item.url}>{item.title}</a>
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none -mt-64">
          <p className="text-[#ff3f6c] font-[sk] ">Sports Active Wear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Sports_Active_Wear.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
              <a target="_blank" href={item.url}>{item.title}</a>
              </li>
            ))}
          </div>
        </div>

        <div className="flex flex-col list-none -mt-44">
          <p className="text-[#ff3f6c] font-[sk] ">Innerwear Sleepwear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Innerwear_Sleepwear.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                <a target="_blank" href={item.url}>{item.title}</a>
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none -mt-28">
          <p className="text-[#ff3f6c] font-[sk] ">Gadegts</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Gadgets.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
              <a target="_blank" href={item.url}>{item.title}</a>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Men;
