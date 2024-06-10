import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAdminData } from "../../api/admin";
import AdminForm from "./AdminForm";

const EditAdminPortal = () => {
  const { email } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getAdminData();
        const admin = res.admins.find((admin) => admin.email === email);
        setData({ admin });
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    }
    fetchData();
  }, [email]);

  return (
    data && <AdminForm fetchAdminData={data} functionality="Update Admin" />
  );
};

export default EditAdminPortal;
