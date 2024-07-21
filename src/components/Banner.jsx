import { Statistic } from "antd";
import CountUp from "react-countup";
export const Banner = () => {
  const formatter = (value) => <CountUp end={value} separator="," />;
  return (
    <div className="relative">
      <img
        src="/image/banner/banner-1.jpg"
        className="w-full h-96 object-cover lg:h-auto"
        alt=""
      />
      <div className="absolute top-10 left-0 lg:top-[206px] lg:left-[271px] w-full lg:w-[566px] flex flex-col gap-5 lg:gap-10 ml-5 md:ml-0">
        <h1 className="text-[#111111] text-4xl lg:text-[69px] lg:leading-[82px]">
          <span className="text-[#6BB252] font-bold">Organic</span> Foods <br />
          <span className="whitespace-nowrap">
            at your {""}
            <span className="font-bold">Doorsteps</span>
          </span>
        </h1>
        <div className="flex items-star lg:items-center gap-2.5">
          <button className="text-white text-xl rounded-full px-5 lg:px-10 py-3 lg:py-5 bg-[#6BB252] font-semibold hover:bg-opacity-95 active:bg-opacity-90 leading-5">
            Start Shopping
          </button>
          <button className="text-white text-xl rounded-full px-5 lg:px-10 py-3 lg:py-5 bg-[#131313] font-semibold hover:bg-opacity-95 active:bg-opacity-90 leading-5">
            Join us
          </button>
        </div>

        <div className="flex flex-col md:flex-row lg:items-center gap-2 md:gap-5">
          <div className="flex items-center gap-2.5 leading-[38px]">
            <span className="text-[32px] text-black font-bold flex items-center">
              <Statistic value={19} formatter={formatter} />
              k+
            </span>
            <span className="uppercase text-sm text-black w-[81px]">
              Variety of Products
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-[32px] text-black font-bold flex items-center">
              <Statistic value={9} formatter={formatter} />
              k+
            </span>
            <span className="uppercase text-sm text-black">
              Happy Customers
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-[32px] text-black font-bold flex items-center">
              <Statistic value={10} formatter={formatter} />+
            </span>
            <span className="uppercase text-sm text-black">
              Store Locations
            </span>
          </div>
        </div>
      </div>
      <div className="static lg:absolute w-full lg:w-auto bottom-0 flex flex-col lg:flex-row items-center left-1/2 lg:-translate-x-1/2 cursor-pointer">
        <div className="bg-[#F95F09] flex items-start w-full lg:w-[427px] p-5 gap-7 hover:bg-opacity-95 active:bg-opacity-90">
          <img src="/image/icon/fresh.svg" alt="" />
          <div className="text-white capitalize">
            <span className="text-2xl font-semibold">Fresh from farm</span>
            <p className="text-base m-0">
              consectetur adipiscing elit Sagittis sed ptibus
            </p>
          </div>
        </div>
        <div className="bg-[#364127] flex items-start w-full lg:w-[427px] p-5 gap-7 hover:bg-opacity-[99] active:bg-opacity-95">
          <img src="/image/icon/konoha-white.svg" alt="" />
          <div className="text-white capitalize">
            <span className="text-2xl font-semibold">100% Organic</span>
            <p className="text-base m-0">
              consectetur adipiscing elit Sagittis sed ptibus
            </p>
          </div>
        </div>
        <div className="bg-[#6BB252] flex items-start w-full lg:w-[427px] p-5 gap-7 hover:bg-opacity-[98] active:bg-opacity-[96]">
          <img src="/image/icon/cart.svg" alt="" />
          <div className="text-white capitalize">
            <span className="text-2xl font-semibold">Free delivery</span>
            <p className="text-base m-0">
              consectetur adipiscing elit Sagittis sed ptibus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
