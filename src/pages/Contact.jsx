import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 ">
        <img
          className="w-full md:max-w-[500px] "
          src={assets.contact_img}
          alt="image"
        />
        <div className="flex  flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600"> Our Store</p>
          <p className="  text-gray-500">
            1234 Berlin Station <br /> Suite 200, CL, USA
          </p>
          <p className="  text-gray-500">
            Tel: (971) 555-1234 <br /> Email: solowebwiz@gmail.com
          </p>
          <p className=" font-semibold text-xl text-gray-500">
            Careers at SoloWebWiz
          </p>
          <p className="  text-gray-500">
            Learn more about our teams and job offers.
          </p>
          <button className="border border-black px-8 py-4 hover:bg-gray-700 hover:text-white transition-all duration-300 rounded-md">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default Contact;
