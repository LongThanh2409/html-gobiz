export const TagSearch = () => {
  const arrayTag = [
    "Blue diamon almonds",
    "Angie’s Boomchickapop Corn",
    "Salty kettle Corn",
    "Chobani Greek Yogurt",
    "Sweet Vanilla Yogurt",
    "Foster Farms Takeout Crispy wings",
    "Warrior Blend Organic",
    "Encore Seafoods Stuffed Alaskan Salmon",
    "Chao Cheese Creamy",
    "Chicken meatballs",
    "Werther’s caramel hard candies",
    "Mate coffee creamer",
    "Pasture raised chicken eggs",
    "Tree top fruit water",
    "Natural Vanilla Light Roast Coffee",
    "Sweet Vanilla essence Yogurt",
  ];
  return (
    <section>
      <h2 className="text-[32px] text-[#222222] capitalize">
        People are also looking for
      </h2>
      <div className="flex flex-wrap gap-[15px] mt-5">
        {arrayTag.map((tag, index) => (
          <a
            href="#"
            key={index}
            className="text-[#555555] text-base leading-5 bg-[#DDF6D5] active:bg-green-100 duration-300 hover:bg-green-400 rounded-[10px] family-open-sans px-3 py-2.5 capitalize"
          >
            {tag}
          </a>
        ))}
      </div>
    </section>
  );
};
