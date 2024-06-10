import { useEffect, useState } from "react";
import ServiceForm from "./ServiceForm";
import { useParams } from "react-router-dom";
import { getServiceDataById } from "../../api/service";

const PortalEditService = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getServiceDataById(id);
      setData(res);
    }
    fetchData();
  }, [id]);
  return (
    data && (
      <ServiceForm
        fetchServiceData={data}
        functionality="Edit a service's details"
      />
    )
  );
};

export default PortalEditService;
