import React from "react";
import {
  BedLinenFurnishing,
  Flooring,
  Bath,
  LampsLighting,
  HomeDécor,
  KitchenTable,
  Storage,
  HBrands,
} from "../data/data";

function HomeLiving() {
  return (
    <div>
      <div className="flex gap-28 flex-wrap">
        <div className="flex flex-col list-none ">
          <p className="text-[#f1c40f] font-[sk]">Indian Fushion Wear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {HomeDécor.map((item, index) => (
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
          <p className="text-[#f1c40f] font-[sk] ">Western Wear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {HBrands.map((item, index) => (
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
          <p className="text-[#f1c40f] font-[sk] ">Shop Occassion</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {LampsLighting.map((item, index) => (
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
          <p className="text-[#f1c40f] font-[sk] ">Footwear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {KitchenTable.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none -mt-44">
          <p className="text-[#f1c40f] font-[sk] ">Sports Active Wear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {KitchenTable.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-70 "
              >
                {item.title}
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col list-none -mt-20">
          <p className="text-[#f1c40f] font-[sk] ">Sleepwear</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Flooring.map((item, index) => (
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
          <p className="text-[#f1c40f] font-[sk] ">Beauty Personal care</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {Storage.map((item, index) => (
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
          <p className="text-[#f1c40f] font-[sk] ">Beauty Personal care</p>
          <div className="text-[14px] flex flex-col gap-1 mt-4">
            {BedLinenFurnishing.map((item, index) => (
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

export default HomeLiving;
