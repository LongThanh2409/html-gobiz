import { Articles } from "./components/Articles";
import { Banner } from "./components/Banner";
import { Banner2 } from "./components/Banner2";
import { Banner3 } from "./components/Banner3";
import { Category } from "./components/Category";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ListProducts } from "./components/ListProducts";
import { ProductSale } from "./components/ProductSale";
import { ProductSell } from "./components/ProductSell";
import { Service } from "./components/Service";
import { TagSearch } from "./components/TagSearch";

function App() {
  return (
    <div className="bg-[#F6f6f6]">
      <div className="shadow-lg fixed top-0 z-[100] w-full bg-white">
        <Header />
      </div>
      <main className="max-w-[1800px] w-full mx-auto pt-[100px] md:pt-[193px] lg:pt-[84px]">
        <Banner />
        <div className="bg-white px-2 pt-10 lg:px-[100px] flex flex-col gap-4 lg:gap-10">
          <Category />
          <ListProducts />
          <Banner2 />
          <ProductSell />
          <ProductSale />
          <Articles />
          <Banner3 />
          <Service />
          <TagSearch />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
