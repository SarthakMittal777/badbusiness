import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
export const ServiceDetails = () => {
  const { slug } = useParams();
  const amount = "$983";
  const profile = "https://via.placeholder.com/50";
  const ratings = 4.5;
  const views = 1000;
  return (
    <div >
      <Navbar />
      <div className="w-full h-20 text-base flex items-center ">
        <p className="mx-16 text-gray-500">
          <Link to="/">Home</Link> /<Link to="/Services"> Services</Link> /{" "}
          <span className="text-[black]">{slug} </span>
        </p>
      </div>
      <div className="flex px-16 gap-8 flex-col md:flex-row mb-12">
        <div className="md:w-[60%]  w-full flex flex-col">
          <div className="text-4xl font-semibold mb-8 ">{slug}</div>
          <div className="flex gap-8 sm:flex-row flex-col">
            {" "}
            <div className="flex  justify-between items-center max-w-full mb-5 gap-3">
              <img
                src={profile}
                alt="placeholder"
                className="h-6 w-6 rounded-full"
              />
              <div className="text-gray-400 ">
                Starting at <span className="text-black">{amount}</span>
              </div>
            </div>
            <div>⭐{ratings}</div>
            <div className="mb-5">{views} views</div>
          </div>
          <div className="w-full">
            <img
              src="https://via.placeholder.com/500"
              alt="placeholder"
              width="100%"
              height="5%"
            />
          </div>
          <div>
            <p className="font-bold py-12 text-xl">Service Description</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            laudantium atque consequuntur quas culpa nobis dolorum
            exercitationem nulla veritatis tenetur modi earum obcaecati quam
            deserunt provident, ipsa, dolore corrupti in Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Sed labore veritatis quaerat
            fugiat atque suscipit, consequuntur deserunt harum vero perspiciatis
            voluptates temporibus aliquam voluptate iusto corrupti cum id,
            quibusdam est. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium laudantium atque consequuntur quas culpa nobis
            dolorum exercitationem nulla veritatis tenetur modi earum obcaecati
            quam deserunt provident, ipsa, dolore corrupti in Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Sed labore veritatis quaerat
            fugiat atque suscipit, consequuntur deserunt harum vero perspiciatis
            voluptates temporibus aliquam voluptate iusto corrupti cum id,
            quibusdam est. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium laudantium atque consequuntur quas culpa nobis
            dolorum exercitationem nulla veritatis tenetur modi earum obcaecati
            quam deserunt provident, ipsa, dolore corrupti in Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Sed labore veritatis quaerat
            fugiat atque suscipit, consequuntur deserunt harum vero perspiciatis
            voluptates temporibus aliquam voluptate iusto corrupti cum id,
            quibusdam est. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium laudantium atque consequuntur quas culpa nobis
            dolorum exercitationem nulla veritatis tenetur modi earum obcaecati
            quam deserunt provident, ipsa, dolore corrupti in Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Sed labore veritatis quaerat
            fugiat atque suscipit, consequuntur deserunt harum vero perspiciatis
            voluptates temporibus aliquam voluptate iusto corrupti cum id,
            quibusdam est.
          </div>
        </div>
        <div className="flex flex-col md:w-[40%] w-full items-center">
          <div className="shadow w-full md:h-[40%] h-48 bg-gray-200 flex justify-center items-center">
            Writup
          </div>
          <div className="bg-green-300 w-full h-16 rounded text-center m-8 flex justify-center font-bold items-center">
            Get a quote
          </div>
          <div className="shadow w-full p-12">
            <p className="font-bold text-lg">Powered by :</p>
            <p className="border-b py-6">MentorMenti</p>
            <p className="py-6">Innovait</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
