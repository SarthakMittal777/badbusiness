import { useEffect, useState } from "react";
import TeamForm from "../components/TeamForm";
import { useParams } from "react-router-dom";
import { getTeamDataById } from "../api/teams";
export const PortalEditMember = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getTeamDataById(id);
      console.log(res);
      setData(res);
    }
    fetchData();
  }, [id]);

  return (
    data &&
    data.success && (
      <TeamForm
        fetchMemberData={data}
        functionality="Edit a team member details"
      />
    )
  );
};
