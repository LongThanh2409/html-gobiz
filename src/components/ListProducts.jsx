import { Rate } from "antd";
import { useState } from "react";

export const ListProducts = () => {
  const [value, setValue] = useState(3);

  const handlePlus = () => {
    setValue(value + 1);
  };
  const handleMinus = () => {
    if (value === 1) return;
    setValue(value - 1);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h2 className="capitalize text-[#222222] text-xl md:text-2xl lg:text-[32px]">
          Freshly arrived
        </h2>
        <div className="flex items-center">
          <button className="px-2 py-3 md:px-5 md:py-[15px] leading-4 uppercase bg-[#6BB252] text-white hover:bg-green-600 duration-300 rounded-[10px] font-medium text-base">
            view all
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className="border lg:border-none">
            <div className="flex flex-col bg-white gap-2.5 cursor-pointer z-50 group lg:hover:absolute py-[23px] px-[27px] duration-200 lg:hover:scale-[1.1] lg:hover:shadow-[0px_4px_25px_0px_rgba(0,0,0,0.15)] rounded-[20px]">
              <div className="min-h-[210px] flex justify-center ">
                <img
                  src={`/image/product/product-thumb-${index + 1}.svg`}
                  alt=""
                />
              </div>
              <div className="text-center flex flex-col gap-[5px]">
                <span className="text-[#333333] text-base capitalize whitespace-nowrap">
                  Munch Crunchy Cookies
                </span>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-base font-semibold text-[#777777]">
                    $11.00
                  </span>
                  <span className="text-[#131313] font-semibold text-base">
                    $8.00
                  </span>
                  <span className="text-[#A5A5A5] border border-[#A5A5A5] text-xs font-semibold px-1.5 py-0.5 whitespace-nowrap">
                    10% OFF
                  </span>
                </div>
                <div className="flex justify-center gap-2.5">
                  <Rate
                    defaultValue={4.5}
                    allowHalf
                    disabled
                    className="text-sm text-[#FFC43F]"
                  />
                  <span className="text-base font-medium text-[#A5A5A5]">
                    (221)
                  </span>
                </div>
              </div>
              <div className="lg:hidden lg:group-hover:block">
                <div className="flex items-center justify-center gap-[3px] mt-2.5">
                  <button
                    onClick={handleMinus}
                    className="border border-[#E2E2E2] w-[26px] h-[26px] rounded-md hover:bg-[#F1F1F1] duration-100 active:bg-[#E2E2E2]"
                  >
                    -
                  </button>
                  <span className="border border-[#E2E2E2] w-[26px] h-[26px] rounded-md text-[#222222] flex justify-center items-center">
                    {value}
                  </span>
                  <button
                    onClick={handlePlus}
                    className="border border-[#E2E2E2] w-[26px] h-[26px] rounded-md hover:bg-[#F1F1F1] duration-100 active:bg-[#E2E2E2]"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-2.5 lg:hidden lg:group-hover:block">
                <div className="flex items-stretch justify-center gap-2 ">
                  <div className="w-full lg:w-auto flex items-center justify-center gap-2.5 border border-black hover:bg-[#ebe9e9] active:bg-[#fff8f8]  rounded-[10px] px-4 py-2.5">
                    <i className="fa-sharp fa-solid fa-cart-plus"></i>
                    <button className="text-[#111111] capitalize text-sm font-semibold whitespace-nowrap">
                      Add to cart
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-2.5 border border-black hover:bg-[#ebe9e9] active:bg-[#fff8f8] rounded-[10px] px-4 py-2.5">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
