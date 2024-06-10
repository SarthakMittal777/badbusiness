import { useEffect, useState } from "react";
import { getPartnerDataById } from "../../api/partner";
import PartnerForm from "./PartnerForm";
import { useParams } from "react-router-dom";

const PortalEditPartner = () => {
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
        functionality="Edit a partner's details"
      />
    )
  );
};

export default PortalEditPartner;
