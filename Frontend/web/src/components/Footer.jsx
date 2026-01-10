import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div
      className={`flex md:gap-32 gap-14 font-[sk] text-[12px] pt-12 lg:flex-nowrap flex-wrap px-10 md:px-7 `}
    >
      <div className="lg:px-24 md:px-8 ">
        <p className="uppercase">Online Shopping</p>
        <div className="flex flex-col gap-1 mt-10 list-none  text-[14px] ">
          <Link to="/Men">
            <li className="cursor-pointer ">Men</li>
          </Link>
         <Link to='/Saree'><li className="cursor-pointer ">Women</li></Link>
          <li className="cursor-pointer ">Kids</li>
          <li className="cursor-pointer ">Home & Living</li>
          <li className="cursor-pointer ">Beauty</li>
          <li className="cursor-pointer ">Gift Cards</li>
          <li className="cursor-pointer ">Myntra Insider</li>
        </div>
      </div>

      <div>
        <p className="uppercase">Customer Policies</p>
        <div className="mt-10 list-none lg:pb-4 flex flex-col gap-1 text-[14px]">
          <li className="cursor-pointer ">Contact Us</li>
          <li className="cursor-pointer ">FAQ</li>
          <li className="cursor-pointer ">T&C</li>
          <li className="cursor-pointer ">Terms of Use</li>
          <li className="cursor-pointer ">Track Orders</li>
          <li className="cursor-pointer ">Shipping</li>
          <li className="cursor-pointer ">Cancellation</li>
          <li className="cursor-pointer ">Returns</li>
          <li className="cursor-pointer ">Privacy policy</li>
          <li className="cursor-pointer ">Grievance Redressal</li>
        </div>
      </div>
      <div className="md:flex flex-col md:mt-0">
        <p className="uppercase md:text-[12px] text-[10px]">
          Experience myntra App on mobile
        </p>
        <div className="flex md:mt-7 gap-2 mt-2">
          <img
            src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
            className="lg:w-[140px] lg:h-[42px] w-[80px] h-[25px] md:w-[100px] md:h-[32px] cursor-pointer"
          ></img>
          <img
            src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
            className="lg:w-[130px] lg:h-[42px] w-[70px] h-[25px] md:w-[105px] md:h-[32px] cursor-pointer"
          ></img>
        </div>
        <div className="md:mt-5 mt-2">
          <p>Keep in touch</p>
          <div className="flex gap-4 md:mt-5">
            <img
              src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
              className="md:w-[20px] md:h-[20px] h-[15px] w-[15px] cursor-pointer"
            ></img>
            <img
              src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"
              className="md:w-[20px] md:h-[20px] h-[15px] w-[17px] cursor-pointer"
            ></img>
            <img
              src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"
              className="md:w-[28px] md:h-[20px] h-[15px] w-[24px] cursor-pointer"
            ></img>
            <img
              src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
              className="md:w-[20px] md:h-[22px] h-[17px] w-[15px] cursor-pointer"
            ></img>
          </div>
        </div>
      </div>

      <div className="flex flex-col pb-20">
        <div className="flex gap-2 items-center">
          <img
            src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
            className="md:w-[48px] md:h-[40px] h-[20px] w-[24px]"
          ></img>
          <p className="uppercase text-[14px]">
            100% original{" "}
            <span className="lowercase opacity-[0.9] font-sans text-[12px]">
              guarantee for all products at myntra.com{" "}
            </span>
          </p>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <img
            src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
            className="md:w-[48px] md:h-[49px] h-[20px] w-[20px]"
          ></img>
          <p className=" text-[14px]">
            Return Within 14days{" "}
            <span className="lowercase opacity-[0.9] font-sans text-[12px]">
              of receiving your order
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
