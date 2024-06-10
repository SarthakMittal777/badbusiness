import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import SidebarPortal from "../../components/SidebarPortal";
import { getEventData, deleteEventData } from "../../api/events";
const EventPortal = () => {
  const [menu, setMenu] = useState(false);
  const [eventData, setEventData] = useState({ events: [] });
  const [functionality, setFunctionality] = useState(null);

  const deletePartner = async (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this Event?"
    );

    if (confirmation) {
      try {
        const res = await deleteEventData(id);
        window.alert(res.data.message);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Deletion canceled by user.");
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await getEventData();
      setEventData(res);
    }
    fetchData();
  }, []);
  console.log(eventData);
  return (
    <div className="flex w-full h-full ">
      <MdOutlineMenu
        className="lg:hidden block absolute top-9 right-9"
        size={25}
        onClick={() => setMenu(!menu)}
      />
      <SidebarPortal
        menu={menu}
        setMenu={setMenu}
        setFunctionality={setFunctionality}
      />
      {functionality == null && (
        <section className="w-[95vw] h-screen ">
          <div className="w-full p-12">
            <div className="w-[96%] flex justify-end mx-12 mb-3">
              <Link to={`/portal/event/add`}>
                <Button
                  type=""
                  className="bg-[#5BBB7B] w-52 my-4 hover:bg-green-800 py-3 text-white font-semibold mx-2 "
                >
                  Add Event
                </Button>
              </Link>
            </div>
            <div className="h-[33rem] overflow-y-scroll relative ">
              <table className="table-auto min-w-full">
                <thead className="relative">
                  <tr className="bg-gray-200  sticky top-0 z-[100]">
                    <th className="px-4 py-2  sticky top-0 z-[100]">#</th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">Banner</th>

                    <th className="px-4 py-2  sticky top-0 z-[100]">Title</th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">
                      Description
                    </th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">Date</th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">Time</th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">Type</th>
                   

                    <th className="px-4 py-2  sticky top-0 z-[100]">Edit</th>
                    <th className="px-4 py-2  sticky top-0 z-[100]">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {eventData &&
                  eventData.events &&
                  eventData.events.length > 0 ? (
                    eventData.events.map((event, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border px-4 py-1 mx-auto text-center hover:underline">
                          {index + 1}
                        </td>
                        <td className="border px-4 py-2 rounded-full">
                          {event.banner === "" ? (
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#c7b0ff] mx-auto"></div>
                          ) : (
                            <img
                              src={event.banner}
                              alt={event.title}
                              className="w-8 h-8 rounded-full mx-auto object-cover object-center"
                            />
                          )}
                        </td>
                        <td className="border px-4 py-1 mx-auto text-center hover:underline">
                          {event.title}
                        </td>
                        <td className="border px-4 py-1 mx-auto text-center hover:underline">
                          {event.description}
                        </td>
                        {/* <td className="border px-4 py-1 mx-auto hover:underline">
                         {new Date(event.date).toISOString().split('T')[0]}
                        </td> */}
                        <td className="border px-4 py-1  hover:underline">
                          {event.time}
                        </td>
                        <td className="border px-4 py-1 text-center hover:underline">
                          {event.type}
                        </td>
                        <td className="border px-4 py-1 text-center hover:underline">
                          {event.listedBy}
                        </td>

                        <td className="border px-4 py-1 ">
                          <Link to={`/portal/event/edit/${event._id}`}>
                            <MdEdit size={25} className="mx-auto" />
                          </Link>
                        </td>
                        <td className="border px-4 py-1">
                          <MdDelete
                            size={25}
                            className="mx-auto"
                            onClick={() => deletePartner(event._id)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="9"
                        className="text-center border py-4 text-gray-700"
                      >
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default EventPortal;
