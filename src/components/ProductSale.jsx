import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { Rate } from "antd";

export const ProductSale = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [value, setValue] = useState(3);
  const [active, setActive] = useState(0);

  const handlePlus = () => {
    setValue(value + 1);
  };
  const handleMinus = () => {
    if (value === 1) return;
    setValue(value - 1);
  };
  const array = Array.from({ length: 12 });
  return (
    <section className="flex flex-col gap-5 overflow-x-clip">
      <div className="flex items-center justify-between">
        <h2 className="capitalize text-[#222222] text-xl md:text-2xl lg:text-[32px]">
          products on Sale
        </h2>
        <div className="flex items-center gap-12">
          <div className="flex justify-center gap-3">
            <span
              onClick={() => swiperRef?.slidePrev()}
              className={`${
                active > 0 ? "bg-[#6BB252] text-white" : "bg-[#F1F1F1]"
              } w-10 h-10 flex items-center justify-center font-medium rounded-[10px] group hover:bg-[#6BB252] active:bg-[#364127] duration-300 cursor-pointer`}
            >
              <i className="fa-solid fa-chevron-left group-hover:text-white"></i>
            </span>
            <span
              onClick={() => swiperRef?.slideNext()}
              className={` ${
                !swiperRef?.isEnd ? "bg-[#6BB252] text-white" : "bg-[#F1F1F1]"
              } w-10 h-10 flex items-center justify-center font-medium rounded-[10px] group active:bg-[#364127] duration-300 cursor-pointer`}
            >
              <i className="fa-solid fa-chevron-right group-hover:text-white"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Swiper
          spaceBetween={30}
          slidesPerView={6}
          onSlideChange={(swiper) => setActive(swiper.activeIndex)}
          onSwiper={(swiper) => setSwiperRef(swiper)}
          className="overflow-visible px-4 z-0 hover:z-50"
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
              mousewheel: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 2,
              mousewheel: true,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 3,
              spaceBetween: 30,
            },
            1800: {
              slidesPerView: 6,
              slidesPerGroup: 3,
              spaceBetween: 30,
            },
          }}
        >
          {array.map((_, index) => (
            <SwiperSlide key={index}>
              <a
                href="#"
                className="bg-white group border lg:border-none hover:z-20 duration-200 lg:hover:absolute lg:hover:scale-[1.1] lg:hover:shadow-[0px_4px_25px_0px_rgba(0,0,0,0.15)] rounded-[20px]"
              >
                <div className="flex flex-col gap-2.5 w-full lg:w-[233px] p-2.5 lg:group-hover:px-[30px] lg:group-hover:py-[26px]">
                  <div className="w-full flex justify-center">
                    <img
                      src={`/image/product/sell/product-thumb-${index + 1}.png`}
                      alt=""
                      className="duration-300 cursor-pointer"
                    />
                  </div>
                  <div className="text-center flex flex-col gap-[5px]">
                    <span className="text-[#333333] text-base capitalize">
                      Munch Crunchy Cookies
                    </span>
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="text-base font-semibold text-[#777777]">
                        $11.00
                      </span>
                      <span className="text-[#131313] font-semibold text-base">
                        $8.00
                      </span>
                      <span className="text-[#A5A5A5] border border-[#A5A5A5] text-xs font-semibold px-1.5 py-0.5">
                        10% OFF
                      </span>
                    </div>
                    <div className="flex justify-center gap-2.5">
                      <Rate
                        defaultValue={4.5}
                        allowHalf
                        disabled
                        className="text-sm text-[#6BB252]"
                      />
                      <span className="text-base font-medium text-[#A5A5A5]">
                        (221)
                      </span>
                    </div>
                    <div className="lg:hidden lg:group-hover:block">
                      <div className="flex items-center justify-center gap-[3px] mt-2.5">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleMinus();
                          }}
                          className="border border-[#E2E2E2] w-[26px] h-[26px] rounded-md hover:bg-[#F1F1F1] duration-100 active:bg-[#E2E2E2]"
                        >
                          -
                        </button>
                        <span className="border border-[#E2E2E2] w-[26px] h-[26px] rounded-md text-[#222222] flex justify-center items-center">
                          {value}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handlePlus();
                          }}
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
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
