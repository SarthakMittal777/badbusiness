import { useEffect, useState } from "react";
import { getCareerDataById } from "../../api/career";
import { useParams } from "react-router-dom";
import CareerForm from "./CareerForm";

const PortalEditCareer = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getCareerDataById(id);
      setData(res);
    }
    fetchData();
  }, [id]);

  return (
    data &&
    data.success && (
      <CareerForm fetchCareerData={data} functionality="Update Career" />
    )
  );
};

export default PortalEditCareer;
