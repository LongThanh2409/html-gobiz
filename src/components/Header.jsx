import { Drawer } from "antd";
import { useState } from "react";
import { Menu } from "./Menu";

export const Header = () => {
  const menu = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "sale",
      link: "#",
    },
    {
      name: "stores",
      link: "#",
    },
    {
      name: "about",
      link: "#",
    },
    {
      name: "contact",
      link: "#",
    },
  ];
  const [menuSelected, setMenuSelected] = useState("Home");
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <head className="bg-white max-w-[1800px] mx-auto w-full flex flex-col lg:flex-row h-auto lg:h-[84px] lg:items-center justify-between px-2 md:px-5 py-2 md:py-0 ">
      <div className="flex items-center justify-between w-full lg:w-auto gap-1">
        <img src="/image/icon/konoha.svg" alt="" />
        <span className="font-medium text-[40px] text-black khand-medium">
          Organic
        </span>
        <span
          onClick={showDrawer}
          className="text-black text-xl ml-1.5 cursor-pointer"
        >
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
      <div className="w-full lg:w-auto flex items-center justify-between gap-1 md:gap-4">
        <div className="flex items-center w-2/3 md:w-full lg:w-auto">
          <div className="flex items-center w-full lg:w-auto rounded-s-[10px] h-8 md:h-[47px] px-3.5 border-y border-l border-[#D8D8D8] bg-[#F5F5F5]">
            <input
              type="text"
              className="w-full lg:w-[378px] h-5 outline-none text-xs md:text-[15px] bg-[#F5F5F5] placeholder:text-[#A4A4A4]"
              placeholder="Search product"
            />
          </div>
          <div className="h-8 md:h-[47px] leading-8 md:leading-[47px] bg-[#6BB252] hover:bg-green-600 duration-300 rounded-e-[10px] px-3 md:px-4 text-white text-sm font-semibold">
            <button className="hidden md:block">SEARCH</button>
            <i className="fa-solid fa-magnifying-glass md:hidden"></i>
          </div>
        </div>
        <div className="lg:hidden flex items-center justify-between gap-2.5 md:gap-4">
          <span className="text-lg">
            <i className="fa-regular fa-circle-user hover:font-semibold cursor-pointer"></i>
          </span>
          <div className="cursor-pointer">
            <img
              src="/image/icon/solar_bookmark-linear.svg"
              className="w-full"
              alt=""
            />
          </div>
          <div className="cursor-pointer">
            <img
              src="/image/icon/solar_cart-3-linear.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center h-full">
        <ul className="uppercase flex items-center h-full">
          {menu.map((item, index) => (
            <li
              key={index}
              onClick={() => setMenuSelected(item?.name)}
              className={`text-sm hover:text-[#5d763b] text-black font-medium px-5 h-full duration-200 leading-[84px] cursor-pointer relative bottom-hover-menu ${
                item?.name == menuSelected
                  ? "border-b-2 border-[#364127]"
                  : "border-none"
              }`}
            >
              <a href="#">{item?.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex items-center">
        <div className="px-5">
          <span className="text-xl">
            <i className="fa-regular fa-circle-user hover:font-semibold cursor-pointer"></i>
          </span>
        </div>
        <div className="px-5 cursor-pointer">
          <img
            src="/image/icon/solar_bookmark-linear.svg"
            className="w-full"
            alt=""
          />
        </div>
        <div className="px-5 cursor-pointer">
          <img
            src="/image/icon/solar_cart-3-linear.svg"
            className="w-full"
            alt=""
          />
        </div>
      </div>
      <Drawer
        open={open}
        closable={false}
        onClose={onClose}
        placement="left"
        width={368}
        title={
          <div className="flex items-center justify-between h-[43px]">
            <span className="tracking-[0.5em] text-xs text-[#999999] uppercase">
              Menu
            </span>
            <span onClick={onClose} className="cursor-pointer">
              <i className="fa-solid fa-xmark text-black opacity-70"></i>
            </span>
          </div>
        }
      >
        <Menu menu={menu} />
      </Drawer>
    </head>
  );
};
