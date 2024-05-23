import React from "react";
import {
  PiFacebookLogoThin,
  PiLinkedinLogoThin,
  PiTwitterLogoThin,
} from "react-icons/pi";
import {
  RiFacebookCircleLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterLine,
} from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div
      className="md:pl-16 sm:pl-10 pl-4 md:pr-16 sm:pr-10 pr-4 pt-8 mt-12 pb-6 w-full text-[#d9d9d9] bg-[#323232] font-Lato flex flex-col gap-5"
      id="contact-us"
    >
      <div className="w-full grid md:grid-cols-2fr-1fr-1fr sm:grid-cols-3 md:gap-[80px] gap-8 md:p-4">
        <div className="flex flex-col items-start gap-5 ">
          <h1 className="text-4xl font-semibold text-primary hover:opacity-80 cursor-pointer ">
            Feast
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            aspernatur eum quasi ab ut hic numquam accusantium minima ducimus
            suscipit nam error, omnis laudantium explicabo. In dolore sed vero?
            Dolorum repellat delectus mollitia. Nostrum aut a repellat odit
          </p>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-2xl font-semibold">COMPANY</h2>
          <ul className="flex flex-col gap-2 cursor-pointer">
            <li className="hover:text-primary hover:font-semibold">Home</li>
            <li className="hover:text-primary hover:font-semibold">About us</li>
            <li className="hover:text-primary hover:font-semibold">Delivery</li>
            <li className="hover:text-primary hover:font-semibold">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-2xl font-semibold">GET IN TUCH</h2>
          <ul className="flex flex-col gap-2">
            <li>+91 8825151049</li>
            <li className=" cursor-pointer text-sm">
              <a href="mailto:kumarsurajverma6001@gmail.com">
                kumarsurajverma6001@gmail.com
              </a>
            </li>
          </ul>
          <div className="flex gap-3 justify-center items-center">
            <RiFacebookCircleLine className="text-3xl  cursor-pointer hover:bg-primary rounded-full  hover:scale-105 transition-all duration-500 ease-in-out  " />
            <RiTwitterLine className="text-3xl  cursor-pointer hover:bg-primary rounded-full  hover:scale-105 transition-all duration-500 ease-in-out  " />
            <TiSocialLinkedinCircular className="text-4xl cursor-pointer hover:bg-primary rounded-full  hover:scale-105 transition-all duration-500 ease-in-out  " />
            <RiGithubFill className="text-3xl cursor-pointer hover:bg-primary rounded-full  hover:scale-105 transition-all duration-500 ease-in-out  " />
          </div>
        </div>
      </div>
      <div className="w-full border-b-2 border-primary "></div>
      <p className="text-center">
        Copyright © 2024 Foodie.com. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
