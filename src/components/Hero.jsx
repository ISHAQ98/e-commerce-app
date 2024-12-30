import { assets } from "../assets/assets";

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side  */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:p-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm  uppercase md:text-base">
              Our bestsellers
            </p>
            <p className="w-14 md:w-20 h-[15.5px] rounded-full  bg-[#414141]"></p>
          </div>
          <h1 className="text-4xl  sm:py-3 lg-text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="w-14 md:w-20 h-[15.5px]  rounded-full bg-[#414141]"></p>
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
          </div>
        </div>
      </div>
      {/* Hero Right SIde */}
      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="hero-image" />
    </div>
  );
}

export default Hero;
