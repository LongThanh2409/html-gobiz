export const Articles = () => {
  const array = [
    {
      image: "/image/post-thumbnail-1.jpg",
      title:
        "10 Crazy ways to minimize oil in your diet with numerous health benefits",
      description:
        "consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi",
    },
    {
      image: "/image/post-thumbnail-2.jpg",
      title:
        "Healthiest meat recipe for all the age group including Heart patients",
      description:
        "consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi",
    },
    {
      image: "/image/post-thumbnail-3.jpg",
      title: "Right way to preserve the fruits & other organics",
      description:
        "consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi",
    },
  ];
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="capitalize text-[#222222] text-xl md:text-2xl lg:text-[32px]">
          our latest articles
        </h2>
        <div className="flex items-center">
          <button className="px-2 py-3 md:px-5 md:py-[15px] leading-4 uppercase bg-[#6BB252] text-white hover:bg-green-600 duration-300 rounded-[10px] font-medium text-base">
            view all
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-[52px] mt-5">
        {array.map((item, index) => (
          <div
            key={index}
            className="w-auto border border-[#D3D3D3] group overflow-hidden md:flex md:flex-row lg:block"
          >
            <img
              src={item.image}
              alt=""
              className="group-hover:scale-110 duration-300 cursor-pointer object-cover md:w-1/2 lg:w-auto"
            />
            <div className="p-4 md:p-[30px] flex flex-col gap-2.5">
              <div className="flex items-center text-[#828282] text-base gap-5">
                <div className="flex items-center gap-3">
                  <i className="fa-regular fa-calendar"></i>
                  <span>12th Jan 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-light">
                    <i className="fa-regular fa-folder"></i>
                  </span>
                  <span>Health</span>
                </div>
              </div>
              <span className="text-[#333333] text-lg md:text-[21px] font-semibold capitalize">
                {item.title}
              </span>
              <span className="text-[#747474] text-sm md:text-[17px] line-clamp-3">
                {item.description}
              </span>
              <div className="relative group w-fit cursor-pointer">
                <span className="uppercase text-[#111111] text-base font-semibold hover:text-black underline-hover">
                  Read more
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
