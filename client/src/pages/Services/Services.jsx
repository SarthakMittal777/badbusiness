import Card from "../../components/Card";
import { Link } from "react-router-dom";
export const Services = () => {
  return (
    <div className="w-full flex flex-col  items-center justify-center bg-gray-200">
      <div className="w-full h-20 text-base flex items-center ">
        <p className="mx-24">
          <Link to="/" className="text-gray-500">
            Home
          </Link>{" "}
          / Categories
        </p>
      </div>
      <div
        className="w-full h-44  items-center flex"
        style={{
          background: "url('/images/header.webp')",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-24">
          <h1 className="text-4xl font-bold">Categories</h1>
          <p>This is the content for categories.</p>
        </div>
      </div>
      <div className="w-full  text-base flex items-center justify-between my-16 md:mb-24 flex-col md:flex-row ">
        <p className="mx-24 text-center">
          {" "}
          Showing results for <b>3</b> categories
        </p>
        {/* <p className="mx-24 border rounded px-7 py-2 border-black flex gap-4">
          Sort by (Default)
          <img
            src="/images/sort.png"
            alt="sort icon"
            width={20}
            height="2rem"
          />
        </p> */}
      </div>
      <div className="flex w-full xl:justify-around gap-12 mb-32 flex-wrap justify-center sm:justify-normal">
        <Card
          image="https://via.placeholder.com/150"
          category="   Web and App design"
          title=" I will create modern flat design illustration"
          profile="https://via.placeholder.com/50"
          amount="$983"
        />
        <Card
          image="https://via.placeholder.com/150"
          category="   Web and App design"
          title=" I will create modern flat design illustration"
          profile="https://via.placeholder.com/50"
          amount="$983"
        />
        <Card button="View all Tech products" slug="Technology" />
      </div>
      <div className="flex w-full xl:justify-around gap-12 mb-32 flex-wrap justify-center sm:justify-normal">
        <Card
          image="https://via.placeholder.com/150"
          category="   Web and App design"
          title=" I will create modern flat design illustration"
          profile="https://via.placeholder.com/50"
          amount="$983"
        />
        <Card
          image="https://via.placeholder.com/150"
          category="   Web and App design"
          title=" I will create modern flat design illustration"
          profile="https://via.placeholder.com/50"
          amount="$983"
        />
        <Card button="View all Design products" slug="Design" />
      </div>
      <div className="flex w-full xl:justify-around gap-12 mb-32 flex-wrap justify-center sm:justify-normal">
        <Card
          image="https://via.placeholder.com/150"
          category="   Web and App design"
          title=" I will create modern flat design illustration"
          profile="https://via.placeholder.com/50"
          amount="$983"
        />
        <Card
          image="https://via.placeholder.com/150"
          category="   Web and App design"
          title=" I will create modern flat design illustration"
          profile="https://via.placeholder.com/50"
          amount="$983"
        />
        <Card button="View all Services products" slug="Services" />
      </div>
    </div>
  );
};
