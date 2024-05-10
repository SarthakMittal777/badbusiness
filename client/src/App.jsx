import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Services } from "./pages/Services/Services";
import { ServicesAll } from "./pages/Services/ServicesAll";
import { ServiceDetails } from "./pages/Services/ServiceDetails";
import { Footer } from "./components/Footer";
import { Portal } from "./pages/Portal";
import { Teams } from "./pages/Teams";
import { PortalAddMember } from "./pages/PortalAddMember";
import { PortalEditMember } from "./pages/PortalEditMember";
const App = () => {
  localStorage.setItem("accesstoken", import.meta.env.VITE_ACCESS_TOKEN);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/services/:slug/all" element={<ServicesAll />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/portal/team" element={<Portal />} />
        <Route path="/portal/team/edit/:id" element={<PortalEditMember />} />
        <Route path="/portal/team/add" element={<PortalAddMember />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
