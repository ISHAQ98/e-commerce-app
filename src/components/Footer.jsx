import { assets } from "../assets/assets";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-10 mt-40 text-sm ">
        <div>
          <img
            src={assets.channel_logo}
            alt="logo"
            className="mb-5 w-32 rounded-full"
          />
          <p className="w-full md:2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            amet dolorum, ab minus repellendus magnam error quia iste, sed quasi
            deleniti illo saepe at eum ipsam dicta facere adipisci assumenda?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+971-212-2321</li>

            <li>contact@solowebwiz.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5  text-sm text-center  ">
          Copyright 2024@ SoloWebWiz - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
