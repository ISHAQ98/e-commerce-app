import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row  gap-16">
        <img
          className="w-full md:max-w-[500px]"
          src={assets.about_img}
          alt="about-image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa id
            nemo facere iste nam animi est a, omnis consequatur officia aut sed
            natus et totam perspiciatis aperiam voluptate sit. Quisquam.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            cumque aut nesciunt unde odio rerum, non ex obcaecati suscipit
            incidunt eaque voluptatum veritatis recusandae autem cum eius rem
            velit amet?
          </p>
          <b className="text-gray-800 text-lg">Our Mission </b>
          <p>
            esciunt unde odio rerum, non ex obcaecati suscipit incidunt eaque
            voluptatum veritatis recusandae autem cum eius rem velit amet?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gao-5">
          <b>Quality Assurance</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            esse?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gao-5">
          <b>Convenience:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            esse?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gao-5">
          <b>Special Services :</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            esse?
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default About;
