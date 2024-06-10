import { useEffect, useState } from "react";
import { getEventDataById } from "../../api/events";
import EventForm from "./EventForm";
import { useParams } from "react-router-dom";

const EditEventPortal = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getEventDataById(id);
      setData(res);
    }
    fetchData();
  }, [id]);

  return (
    data &&
    data.success && (
      <EventForm fetchEventData={data} functionality="Update Event" />
    )
  );
};

export default EditEventPortal;
