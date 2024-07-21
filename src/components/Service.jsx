export const Service = () => {
  const array = [
    {
      img: "/image/icon/arcticons_aftership.svg",
      title: "Free delivery",
    },
    {
      img: "/image/icon/arcticons_samsung-secure.svg",
      title: "secure payment",
    },
    {
      img: "/image/icon/arcticons_afwall.svg",
      title: "Quality guarantee",
    },
    {
      img: "/image/icon/arcticons_akakce.svg",
      title: "guaranteed savings",
    },
    {
      img: "/image/icon/arcticons_animation-crazy.svg",
      title: "Daily offers",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {array.map((item, index) => (
        <div
          key={index}
          className="w-full px-[30px] py-5 border border-[#D2D2D2] flex flex-col gap-2.5 cursor-pointer group-rotate"
        >
          <img src={item?.img} alt="" className="w-12 h-12 hover-rotate-360" />
          <span className="capitalize text-xl text-[#333333] font-semibold">
            {item?.title}
          </span>
          <span className="text-base text-[#333333] leading-6">
            Lorem ipsum dolor sit amet, consectetur adipi elit.
          </span>
        </div>
      ))}
    </div>
  );
};
