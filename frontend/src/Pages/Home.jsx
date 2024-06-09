import Banner from "../Components/Banner/Banner";
import Category from "../Components/Category/Category";
import HorizontalCardProduct from "../Components/HorizontalProductCard/HorizontalCardProduct";
import Services from "../Components/Services/Services";
import VerticalCardProduct from "../Components/VerticalCardProduct/VerticalCardProduct";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Category />
      <Banner />
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCardProduct
        category={"watches"}
        heading={"Popular's Watches"}
      />
      {/* *********Vertical card*********** */}
      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"} />
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"} />
      <VerticalCardProduct category={"televisions"} heading={"Televisions"} />
      <VerticalCardProduct
        category={"camera"}
        heading={"Camera & Photography"}
      />
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"} />
      <VerticalCardProduct
        category={"speakers"}
        heading={"Bluetooth Speakers"}
      />
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"} />
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"} />
      <Services />
    </div>
  );
};

export default Home;
