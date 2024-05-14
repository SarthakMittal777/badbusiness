import Button from "../../components/Button";
import ImageUploader from "../../components/ImageUpload";
import { createServiceData, editServiceData } from "../../api/service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SidebarPortal from "../../components/SidebarPortal";
const ServiceForm = ({ functionality, fetchServiceData }) => {

  const navigate = useNavigate();
  const [data, setData] = useState({
    image: fetchServiceData?.image,
    category: fetchServiceData?.category,
    title: fetchServiceData?.title,
    profile: fetchServiceData?.profile,
  });
  useEffect(() => {
    setData({
      image: fetchServiceData?.image,
      category: fetchServiceData?.category,
      title: fetchServiceData?.title,
      profile: fetchServiceData?.profile,
    });
  }, [fetchServiceData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceData = {
      image: data.image,
      category: data.category,
      title: data.title,
      profile: data.profile,
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
        });
    }
  };
  return (
    <div className="w-full h-full  flex ">
      <SidebarPortal/>
      <div className="w-[60vw] p-8 flex flex-col shadow-xl  justify-center gap-8 items-center md:items-start ">
        <p className="text-xl font-semibold mb-3 "> {functionality}</p>
        <form
          method="POST"
          className="w-full"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full flex flex-col gap-4">
            <ImageUploader />
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
              type="text"
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
            <p className="text-base font-semibold mb-3 ">Profile :</p>
            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="profile"
                type="text"
                value={data.profile}
                required
                placeholder="Domain"
                className="outline-none w-full"
                onChange={(e) => setData({ ...data, profile: e.target.value })}
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
