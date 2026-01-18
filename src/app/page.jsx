import Image from "next/image";
import ItemCard from "./components/ItemCard";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import BestSellers from "./components/BestSeller";
import WhyChooseUs from "./components/WhyChooseUs";
import NewArrivals from "./components/NewArrivals";
import Reviews from "./components/Testimonials";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";
//  className=" bg-zinc-50 font-sans dark:bg-black"
export default function Home() {
  return (
    <div>
      {/* <ItemCard /> */}
      <HeroSection />
      <BestSellers />
      <Categories />
      <WhyChooseUs />
      <NewArrivals />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
}
