
import Hero from "@/components/hero";
import Header from "@/components/header";
import NewArrivals from "@/components/NewArrivals";
import TopSelling from "@/components/topsellings";
import DressStyle from "@/components/DressStyle";
import Reviews from "@/components/reviews";
import Banner from "@/components/banner";
export default function Home() {
  return (
    <>
     <Hero/>
     <NewArrivals />
     <TopSelling />
     <DressStyle/>
     <Reviews/>
     <Banner/>

    </>
  );
}
