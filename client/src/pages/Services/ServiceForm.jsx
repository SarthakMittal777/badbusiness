import Button from "../../components/Button";
import { createServiceData, editServiceData } from "../../api/service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import SidebarPortal from "../../components/SidebarPortal";
const ServiceForm = ({ functionality, fetchServiceData }) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    image: fetchServiceData?.image,
    category: fetchServiceData?.category,
    title: fetchServiceData?.title,
  });
  useEffect(() => {
    setData({
      image: fetchServiceData?.image,
      category: fetchServiceData?.category,
      title: fetchServiceData?.title,
      description: fetchServiceData?.description,
    });
  }, [fetchServiceData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceData = {
      image: data.image,
      category: data.category,
      title: data.title,
      profile: data.profile,
      description: data.description,
    };
    if (functionality === "Add a new Service") {
      createServiceData(serviceData)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          window.alert("Data added successfully");
          navigate("/portal/services");
        })
        .catch((error) => {
          console.log(error);
          window.alert("Data not added");
          navigate("/portal/services");
        });
    }
    if (functionality === "Edit a service's details") {
      editServiceData(fetchServiceData._id, serviceData)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          window.alert("Data edited successfully");
          navigate("/portal/services");
        })
        .catch((error) => {
          console.log(error);
          window.alert("Data not updated");
          navigate("/portal/services");
        });
    }
  };
  return (
    <div className="w-full h-full  flex ">
      <MdOutlineMenu
        className="lg:hidden block absolute top-9 right-9"
        size={25}
        onClick={() => setMenu(!menu)}
      />
      <SidebarPortal menu={menu} setMenu={setMenu} />
      <div className=" p-8 flex flex-col w-full justify-center gap-8 items-center md:items-start py-12 h-screen overflow-scroll">
        <p className="text-xl font-semibold mb-3 "> {functionality}</p>
        <form
          method="POST"
          className="w-full"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full flex flex-col gap-4">
            <p className="text-base font-semibold mb-3 ">Category :</p>
            <input
              id="category"
              type="text"
              value={data.category}
              required
              placeholder="Name"
              className="border rounded-xl py-3 w-full px-4"
              onChange={(e) => setData({ ...data, category: e.target.value })}
            />
            <p className="text-base font-semibold mb-3 ">Image URL :</p>
            <input
              id="imageURL"
              type="url"
              value={data.image}
              required
              placeholder="Image URL"
              className="border rounded-xl py-3 w-full px-4"
              onChange={(e) => setData({ ...data, image: e.target.value })}
            />
            <p className="text-base font-semibold mb-3 ">Title :</p>
            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="title"
                type="text"
                value={data.title}
                required
                placeholder="title"
                className="outline-none w-full"
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
            </div>
            <p className="text-base font-semibold mb-3 ">Description </p>
            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="title"
                type="text"
                value={data.description}
                required
                placeholder="description"
                className="outline-none w-full"
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
            </div>
            <Button
              type="submit"
              className="bg-[#5BBB7B]  hover:bg-green-800 py-3 text-white font-semibold "
            >
              {functionality}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
