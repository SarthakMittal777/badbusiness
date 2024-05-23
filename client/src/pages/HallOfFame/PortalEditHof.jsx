import { useEffect, useState } from "react";
import { getHofDataById } from "../../api/hof";
import HOfForm from "./HofForm";
import { useParams } from "react-router-dom";
export const PortalEditHof = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getHofDataById(id);
      setData(res);
    }
    fetchData();
  }, [id]);
  return (
    data &&
    data.success && (
      <HOfForm fetchHofData={data} functionality="Edit Hall of Fame Data" />
    )
  );
};
