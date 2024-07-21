import { useState } from "react";

export const Banner3 = () => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === "") return;
    alert("Đã submit với email: " + value);
  };
  return (
    <section className="flex flex-col gap-4 lg:gap-10">
      <div className="w-full h-[325px] relative">
        <img
          src="/image/banner/banner-newsletter.jpeg"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute w-full p-2 lg:p-0 lg:w-auto top-1/2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-row items-center gap-2 md:gap-3 lg:gap-[72px]">
          <div className="flex flex-col gap-2 md:gap-8 w-full md:w-[448px]">
            <span className="text-white font-medium text-2xl md:text-3xl lg:text-[38px]">
              Get 20% discount on your first purchase
            </span>
            <span className="text-base text-white">
              Just Sign Up & Register it now to become member.
            </span>
          </div>
          <form
            className="flex flex-col items-center gap-3.5 w-full lg:w-auto"
            onSubmit={onSubmit}
          >
            <div className="flex items-center bg-white px-5 w-full md:w-[523px] h-14 gap-3">
              <i className="fa-solid fa-envelope text-base text-[#C8C8C8]"></i>
              <input
                type="email"
                name=""
                value={value}
                onChange={(e) => setValue(e.target.value)}
                id=""
                placeholder="Email address"
                className="outline-none text-[#222222] text-base leading-9"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-[523px] h-14 uppercase text-white bg-[#6BB252] duration-300 hover:bg-green-600 active:bg-green-700 font-semibold text-base outline-none"
            >
              Subscribe now
            </button>
          </form>
        </div>
      </div>
      <div className="static lg:relative grid grid-cols-2 items-end w-full h-full lg:h-[531px] bg-[#DDF6D5]">
        <div className="lg:absolute top-1/2 lg:-translate-y-1/2 left-1/2 md:left-[192px] flex flex-col gap-5 p-4 lg:p-0">
          <span className="text-lg md:text-2xl lg:text-[32px] text-[#222222] whitespace-nowrap md:whitespace-normal">
            Download Organic App
          </span>
          <span className="text-[#555555] text-sm md:text-lg lg:text-xl whitespace-nowrap -mt-3 md:mt-0">
            Online Orders made easy, fast and reliable
          </span>
          <div className="flex flex-col lg:flex-row items-stretch gap-1 md:gap-3.5 mt-4 md:mt-0">
            <a
              href="https://play.google.com/store"
              target="_blank"
              className="flex items-center justify-center gap-3 h-auto md:h-[60px] bg-black text-white px-4 rounded-[5px]"
            >
              <img
                src="/image/icon/Google_Play_logo.svg"
                className="w-5 md:w-auto"
                alt=""
              />
              <div className="text-left">
                <span className="text-[8px] md:text-xs">GET IT ON</span>
                <p className="m-0 p-0 text-xs md:text-xl">Google Play</p>
              </div>
            </a>
            <a
              href="https://apps.apple.com/"
              target="_blank"
              className="flex items-center justify-center gap-3 h-auto md:h-[60px] bg-black text-white px-4 rounded-[5px]"
            >
              <img
                src="/image/icon/Apple logo.svg"
                className="w-5 md:w-auto"
                alt=""
              />
              <div className="text-left">
                <span className="text-[8px] md:text-xs">Download on the</span>
                <p className="m-0 p-0 text-xs md:text-xl">App Store</p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          {/* <div className="flex items-stretch gap-3.5 md:hidden -ml-32">
            <a
              href="https://play.google.com/store"
              target="_blank"
              className="flex items-center justify-center gap-3 h-[60px] bg-black text-white px-4 rounded-[5px]"
            >
              <img
                src="/image/icon/Google_Play_logo.svg"
                className="w-5"
                alt=""
              />
              <div className="text-left">
                <span className="text-[10px]">GET IT ON</span>
                <p className="m-0 p-0 text-xs md:text-xl whitespace-nowrap">
                  Google Play
                </p>
              </div>
            </a>
            <a
              href="https://apps.apple.com/"
              target="_blank"
              className="flex items-center justify-center gap-3 h-[60px] bg-black text-white px-4 rounded-[5px]"
            >
              <img src="/image/icon/Apple logo.svg" alt="" />
              <div className="text-left">
                <span className="text-xs">Download on the</span>
                <p className="m-0 p-0 text-xl">App Store</p>
              </div>
            </a>
          </div> */}
          <div className="lg:absolute right-[103px] bottom-0">
            <img src="/image/banner/banner-onlineapp.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
