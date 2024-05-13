import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import Data from "../../static/Card.json";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
export const ServicesAll = () => {
  const { slug } = useParams();
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto ">
      <Navbar />
      <div className="w-full h-20 text-base flex items-center ">
        <p className="mx-24">
          <Link to="/" className="text-gray-500">
            {" "}
            Home
          </Link>{" "}
          /
          <Link to="/Services" className="text-gray-500">
            {" "}
            Services
          </Link>{" "}
          /{slug}{" "}
        </p>
      </div>
      <div
        className="w-full h-44  items-center flex mb-12"
        style={{
          background: "url('/images/header.webp')",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-24">
          <h1 className="text-4xl font-bold">{slug} content</h1>
          <p>This is the content with {slug} content.</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4  mx-4 items-center justify-center ">
        <div className="flex justify-center md:justify-start w-fit flex-wrap max-w-[80%]">
        {Data.map((item, index) => (
          <Link key={index} to={`/services/${item.title}`}>
            {" "}
            <Card
              image={item.image}
              category={item.category}
              title={item.title}
              profile={item.profile}
              amount={item.amount}
            />
          </Link>
        ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
