import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { Mousewheel } from "swiper/modules";

export const Category = () => {
  const categories = [
    {
      image: "/image/category-thumb-1.jpg",
      name: "Fruits & Veges",
    },
    {
      image: "/image/category-thumb-2.jpg",
      name: "Breads & Sweets",
    },
    {
      image: "/image/category-thumb-3.jpg",
      name: "Wine & Drinks",
    },
    {
      image: "/image/category-thumb-4.jpg",
      name: "Oil & Ghee",
    },
    {
      image: "/image/category-thumb-5.jpg",
      name: "Raw Meat",
    },
    {
      image: "/image/category-thumb-6.jpg",
      name: "Natural Herbs",
    },
    {
      image: "/image/category-thumb-7.jpg",
      name: "Eggs",
    },
    {
      image: "/image/category-thumb-8.jpg",
      name: "Bakery",
    },
    {
      image: "/image/category-thumb-1.jpg",
      name: "Fruits & Veges",
    },
    {
      image: "/image/category-thumb-2.jpg",
      name: "Breads & Sweets",
    },
    {
      image: "/image/category-thumb-3.jpg",
      name: "Wine & Drinks",
    },
    {
      image: "/image/category-thumb-4.jpg",
      name: "Oil & Ghee",
    },
    {
      image: "/image/category-thumb-5.jpg",
      name: "Raw Meat",
    },
    {
      image: "/image/category-thumb-6.jpg",
      name: "Natural Herbs",
    },
    {
      image: "/image/category-thumb-7.jpg",
      name: "Eggs",
    },
    {
      image: "/image/category-thumb-8.jpg",
      name: "Bakery",
    },
  ];

  const [swiperRef, setSwiperRef] = useState(null);
  const [active, setActive] = useState(0);
  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h2 className="capitalize text-[#222222] text-xl md:text-2xl lg:text-[32px]">
          Popular categories
        </h2>
        <div className="flex items-center gap-2 lg:gap-12">
          <span className="text-[#787878] font-semibold flex items-center gap-2 text-xs md:text-base">
            View All Categories
            <i className="fa-solid fa-arrow-right hidden md:block"></i>
          </span>
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
      <div>
        <Swiper
          modules={[Mousewheel]}
          spaceBetween={50}
          slidesPerView={8}
          slidesPerGroup={3}
          onSlideChange={(swiper) => setActive(swiper.activeIndex)}
          onSwiper={(swiper) => setSwiperRef(swiper)}
          breakpoints={{
            320: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 10,
              mousewheel: true,
            },
            768: {
              slidesPerView: 5,
              slidesPerGroup: 2,
              mousewheel: true,
            },
            1024: {
              slidesPerView: 8,
              slidesPerGroup: 3,
            },
          }}
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index} className="">
              <a href="#" className="flex flex-col items-center gap-1 md:gap-5">
                <div className="rounded-full overflow-hidden border-2 border-transparent hover:border-green-600 duration-300">
                  <img
                    src={item.image}
                    alt={item?.name}
                    className="object-cover hover:scale-110 duration-300 cursor-pointer w-full"
                  />
                </div>
                <span className="text-[#222222] text-xs md:text-base whitespace-nowrap">
                  {item.name}
                </span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
