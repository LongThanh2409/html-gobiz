import React from "react";

export const Menu = ({ menu }) => {
  //   public/image/menu/1healthicons_fruits-outline.svg public/image/menu/2healthicons_baby-formula-outline.svg public/image/menu/3healthicons_animal-chicken-outline.svg public/image/menu/4healthicons_simple-logo-outline.svg public/image/menu/5material-symbols-light_bakery-dining-outline.svg public/image/menu/6pepicons-pencil_can.svg public/image/menu/7solar_fridge-broken.svg public/image/menu/8icon-park-outline_rice.svg public/image/menu/9fluent-mdl2_breakfast.svg public/image/menu/10icon-park-outline_snacks.svg public/image/menu/11nimbus_drink.svg public/image/menu/12icon-park-outline_bottle.svg public/image/menu/13game-icons_cool-spices.svg public/image/menu/14mdi_bakery.svg public/image/menu/15cil_baby.svg public/image/menu/16iconoir_health-shield.svg public/image/menu/17solar_cart-2-linear.svg public/image/menu/18solar_cart-3-linear.svg public/image/menu/19streamline_pet-paw.svg
  const arrayIcon = [
    {
      image: "1healthicons_fruits-outline.svg",
      text: "Fruits and vegetables",
    },
    {
      image: "2healthicons_baby-formula-outline.svg",
      text: "Dairy and Eggs",
    },
    {
      image: "3healthicons_animal-chicken-outline.svg",
      text: "Meat and Poultry",
    },
    {
      image: "4healthicons_simple-logo-outline.svg",
      text: "Seafood",
    },
    {
      image: "5material-symbols-light_bakery-dining-outline.svg",
      text: "Bakery and Bread",
    },
    {
      image: "6pepicons-pencil_can.svg",
      text: "Canned Goods",
    },
    {
      image: "7solar_fridge-broken.svg",
      text: "Frozen Foods",
    },
    {
      image: "8icon-park-outline_rice.svg",
      text: "Pasta and Rice",
    },
    {
      image: "9fluent-mdl2_breakfast.svg",
      text: "Breakfast Foods",
    },
    {
      image: "10icon-park-outline_snacks.svg",
      text: "Snacks and Chips",
    },
    {
      image: "11nimbus_drink.svg",
      text: "Beverages",
    },
    {
      text: "water, juice, soda, and tea",
    },
    {
      image: "12icon-park-outline_bottle.svg",
      text: "Condiments and Sauces",
    },

    {
      image: "13game-icons_cool-spices.svg",
      text: "Spices and Seasonings",
    },
    {
      image: "14mdi_bakery.svg",
      text: "Baking Supplies",
    },
    {
      text: "Deli and Prepared Foods",
    },
    {
      image: "15cil_baby.svg",
      text: "Baby Food and Formula",
    },
    {
      image: "16iconoir_health-shield.svg",
      text: "Health and Wellness",
    },
    {
      image: "17solar_cart-2-linear.svg",
      text: "Household Supplies",
    },

    {
      image: "18solar_cart-3-linear.svg",
      text: "Personal Care",
    },
    {
      image: "19streamline_pet-paw.svg",
      text: "Pet paw",
    },
  ];
  return (
    <div>
      <ul>
        <div className="md:hidden flex flex-col">
          {menu.map((item: any, index: number) => (
            <li
              key={index}
              className="relative cursor-pointer border-b border-dashed"
            >
              <div className="flex items-center gap-2.5 h-[43px] menu-hover pl-[10px]">
                <span className="text-[#333333] text-base capitalize">
                  {item?.name}
                </span>
              </div>
            </li>
          ))}
        </div>
        {arrayIcon.map((icon, index) => (
          <li
            key={index}
            className="relative cursor-pointer border-b border-dashed"
          >
            <div className="flex items-center gap-2.5 h-[43px] menu-hover pl-[10px]">
              {icon?.image && (
                <img
                  src={`public/image/menu/${icon?.image}`}
                  alt="icon"
                  className="w-6 h-6"
                />
              )}
              <span className="text-[#333333] text-base capitalize">
                {icon?.text}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
