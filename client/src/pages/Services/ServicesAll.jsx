import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import Data from "../../static/Card.json";
import { Link } from "react-router-dom";
export const ServicesAll = () => {
  const { slug } = useParams();
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto">
      <div className="w-full h-20 text-base flex items-center ">
        <p className="mx-24">
          <Link to="/" className="text-gray-500"> Home</Link> /
          <Link to="/Services" className="text-gray-500"> Services</Link> /
           {slug}{" "}
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
      <div className="flex flex-wrap gap-4 justify-center md:justify-start mx-4">
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
  );
};
