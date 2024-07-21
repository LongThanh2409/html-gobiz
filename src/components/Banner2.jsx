export const Banner2 = () => {
  return (
    <div className="py-4 md:py-10 flex flex-col md:flex-row justify-center gap-3 lg:gap-[30px]">
      <div className="w-full md:w-1/2 lg:w-[900px] h-[265px] md:h-[560px] overflow-hidden relative flex items-start">
        <img
          src="/image/banner/banner-1.jfif"
          className="w-full h-full object-cover"
          alt="Items on SALE"
        />
        <div className="absolute flex flex-col gap-2.5 top-1/2 -translate-y-1/2 left-10">
          <h2 className="capitalize text-[40px] text-white font-semibold">
            Items on SALE
          </h2>
          <span className="text-2xl text-white">Discounts up to 30%</span>
          <span className="text-[17px] font-semibold text-white underline uppercase underline-offset-4 cursor-pointer">
            Shop Now
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:gap-[30px] flex-1 ">
        <div className="relative h-[274px] lg:h-[265px] overflow-hidden">
          <img
            src="/image/banner/banner-2.png"
            className="object-cover w-full h-full"
            alt="Combo offer"
          />
          <div className="absolute flex flex-col gap-2.5 top-1/2 -translate-y-1/2 left-10">
            <h2 className="capitalize text-[40px] text-white font-semibold">
              Combo offer
            </h2>
            <span className="text-2xl text-white">save up to 100%</span>
            <span className="text-[17px] font-semibold text-white underline uppercase underline-offset-4 cursor-pointer">
              Shop Now
            </span>
          </div>
        </div>
        <div className="relative h-[274px] lg:h-[265px] overflow-hidden">
          <img
            src="/image/banner/banner-3.png"
            className="object-cover w-full h-full"
            alt="Discount Coupons"
          />
          <div className="absolute flex flex-col gap-2.5 top-1/2 -translate-y-1/2 left-10">
            <h2 className="capitalize text-[40px] text-white font-semibold">
              Discount Coupons
            </h2>
            <span className="text-2xl text-white">Discounts up to 30%</span>
            <span className="text-[17px] font-semibold text-white underline uppercase underline-offset-4 cursor-pointer">
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
