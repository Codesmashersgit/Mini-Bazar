import React from "react";
import {
  KFootwear,
  Boys_Clothing,
  Girls_Clothing,
  Kids_Accessories,
  Toys,
  Infants,
  KBrands,
} from "../data/data";

function Kids() {
  return (
    <div>
      <div className="flex gap-20 flex-wrap">
        <div className="flex flex-col list-none ">
          <p className="text-[#e67e22] font-[sk]">Boy's Clothing</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Boys_Clothing.map((item, index) => (
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
          <p className="text-[#e67e22] font-[sk] ">Girl's Clothing</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Girls_Clothing.map((item, index) => (
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
          <p className="text-[#e67e22] font-[sk] ">Footwear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {KFootwear.map((item, index) => (
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
          <p className="text-[#e67e22] font-[sk] ">Kids Accessories</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Kids_Accessories.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none -mt-28">
          <p className="text-[#e67e22] font-[sk] ">Toys</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Toys.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none ml-[30%] -mt-48">
          <p className="text-[#e67e22] font-[sk] ">Brands</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {KBrands.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>

        <div className="flex flex-col list-none -mt-48">
          <p className="text-[#e67e22] font-[sk] ">Infants</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Infants.map((item, index) => (
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

export default Kids;
