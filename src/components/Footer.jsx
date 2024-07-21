import { useState } from "react";

export const Footer = () => {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === "") return;
    alert("Đã submit với email: " + value);
  };
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-start gap-10 lg:gap-[121px]">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center">
            <img
              src="/image/icon/konoha.svg"
              className="w-20 object-cover"
              alt=""
            />

            <span className="font-medium text-[90px] text-black khand-medium">
              Organic
            </span>
          </div>
          <nav>
            <ul className="flex items-center justify-end gap-4">
              <li className="w-[42px] h-[45px] border border-[#EFEFEF] rounded group flex justify-center items-center cursor-pointer duration-300 hover:shadow-[0px_6px_20px_0px_rgba(0,0,0,0.1)]">
                <a target="_blank" href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook-f group-hover:text-[#201F1F] text-[#A5A5A5] text-[18px] duration-300"></i>
                </a>
              </li>
              <li className="w-[42px] h-[45px] border border-[#EFEFEF] rounded group flex justify-center items-center cursor-pointer duration-300 hover:shadow-[0px_6px_20px_0px_rgba(0,0,0,0.1)]">
                <a href="">
                  <i className="fa-brands fa-twitter group-hover:text-[#201F1F] text-[#A5A5A5] text-[18px] duration-300"></i>
                </a>
              </li>
              <li className="w-[42px] h-[45px] border border-[#EFEFEF] rounded group flex justify-center items-center cursor-pointer duration-300 hover:shadow-[0px_6px_20px_0px_rgba(0,0,0,0.1)]">
                <a href="">
                  <i className="fa-brands fa-pinterest group-hover:text-[#201F1F] text-[#A5A5A5] text-[18px] duration-300"></i>
                </a>
              </li>
              <li className="w-[42px] h-[45px] border border-[#EFEFEF] rounded group flex justify-center items-center cursor-pointer duration-300 hover:shadow-[0px_6px_20px_0px_rgba(0,0,0,0.1)]">
                <a href="">
                  <i className="fa-brands fa-instagram group-hover:text-[#201F1F] text-[#A5A5A5] text-[18px] duration-300"></i>
                </a>
              </li>
              <li className="w-[42px] h-[45px] border border-[#EFEFEF] rounded group flex justify-center items-center cursor-pointer duration-300 hover:shadow-[0px_6px_20px_0px_rgba(0,0,0,0.1)]">
                <a href="">
                  <i className="fa-brands fa-youtube group-hover:text-[#201F1F] text-[#A5A5A5] text-[18px] duration-300"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-start flex-wrap  lg:justify-between flex-1 gap-10">
          <div className="flex flex-col gap-5 family-open-sans mt-7">
            <span className="capitalize text-[#222222] text-xl font-semibold">
              ouick links
            </span>
            <nav>
              <ul className="flex flex-col gap-2">
                <li
                  onClick={backToTop}
                  className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer"
                >
                  Home
                </li>
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  About us
                </li>
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  Offers
                </li>
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  Services
                </li>
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  Contact us
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-5 family-open-sans mt-7">
            <span className="capitalize text-[#222222] text-xl font-semibold">
              About
            </span>
            <nav>
              <ul className="flex flex-col gap-2">
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  How it work
                </li>
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  our packages
                </li>
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  promotions
                </li>
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  refer a friend
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-5 family-open-sans mt-7">
            <span className="capitalize text-[#222222] text-xl font-semibold">
              Help Centre
            </span>
            <nav>
              <ul className="flex flex-col gap-2">
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  Payments
                </li>
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  Shipping
                </li>
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  Product
                </li>
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  returns
                </li>
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  FAQs
                </li>
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  Checkout
                </li>
                <li className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
                  Other Issues
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-5 family-open-sans mt-7 w-[333px]">
            <span className="capitalize text-[#222222] text-xl font-semibold">
              Our newsletter
            </span>
            <span className="text-base text-[#747474] capitalize underline-hover w-fit cursor-pointer">
              Subscribe to our newsletter to get updates about our grand offers.
            </span>
            <form className="flex items-center" onSubmit={onSubmit}>
              <div className="flex items-center rounded-s-[10px] h-[47px] px-3.5 border-y border-l border-[#D8D8D8] w-full">
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  type="email"
                  className="h-5 outline-none text-base w-full"
                  placeholder="Enter your email-address"
                />
              </div>
              <div className="h-[47px] leading-[47px] bg-[#6BB252] hover:bg-green-600 active:bg-green-700 duration-300 rounded-e-[10px] px-4 text-white text-sm font-semibold uppercase">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-[94px] leading-[94px] flex justify-between flex-wrap family-open-sans border-t border-[#E2E2E2]">
        <span className="text-[#747474]">
          © 2024 Organic. All rights reserved.
        </span>
        <span className="text-[#747474]">
          Code by <span className="font-bold">LongThanh2409</span>
        </span>
      </div>
    </>
  );
};
