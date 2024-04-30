import { useParams } from "react-router-dom";
export const ServiceDetails = () => {
  const { slug } = useParams();
  const amount = "$983";
  const profile = "https://via.placeholder.com/50";
  const ratings = 4.5;
  const views = 1000;
  // useEffect(async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await res.json();
  //   console.log(data);
  // },[]);

  return (
    <div className="mb-12">
      {" "}
      <div className="w-full h-20 text-base flex items-center ">
        <p className="mx-16"> Home / Services / {slug} </p>
      </div>
      <div className="flex px-16 gap-8">
        <div className="w-[60%] flex flex-col">
          <div className="text-4xl font-semibold mb-8 ">{slug}</div>
          <div className="flex gap-8" >
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
            <div>{views} views</div>
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
        <div className="flex flex-col w-[40%] items-center">
          <div className="shadow w-full h-[40%] bg-gray-200 flex justify-center items-center">
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
    </div>
  );
};
