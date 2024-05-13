import { useEffect, useState } from "react";
import PartnerForm from "./partners/PartnerForm";
import { useParams } from "react-router-dom";
import { getPartnerDataById } from "../api/partner";
export const PortalEditMember = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getPartnerDataById(id);
      setData(res);
    }
    fetchData();
  }, [id]);

  return (
    data &&
    data.success && (
      <PartnerForm
        fetchPartnerData={data}
        functionality="Edit the partner's details"
      />
    )
  );
};
