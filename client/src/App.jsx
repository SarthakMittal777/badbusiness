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
import { PortalEditService } from "./pages/Services/PortalEditService";
import { PortalAddService } from "./pages/Services/PortalAddService";
import ServicesPortal from "./pages/Services/ServicesPortal";
import PartnersPortal from "./pages/partners/PartnersPortal";
const App = () => {
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
        <Route path="/portal/teams" element={<Portal />} />
        <Route path="/portal/team/edit/:id" element={<PortalEditMember />} />
        <Route path="/portal/team/add" element={<PortalAddMember />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/portal/services" element={<ServicesPortal />} />
        <Route path="/portal/partners" element={<PartnersPortal />} />
        <Route
          path="/portal/service/edit/:id"
          element={<PortalEditService />}
        />
        <Route path="/portal/service/add" element={<PortalAddService />} />
        <Route path="/portal/partner/edit/:id" element={<PortalEditMember />} />
        <Route path="/portal/partner/add" element={<PortalAddMember />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
