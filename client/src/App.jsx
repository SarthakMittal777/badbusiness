import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Services } from "./pages/Services/Services";
import { ServicesAll } from "./pages/Services/ServicesAll";
import { ServiceDetails } from "./pages/Services/ServiceDetails";
import { Portal } from "./pages/Portal";
import { Teams } from "./pages/Teams";
import { PortalAddMember } from "./pages/PortalAddMember";
import { PortalEditMember } from "./pages/PortalEditMember";
import { PortalEditService } from "./pages/Services/PortalEditService";
import { PortalAddService } from "./pages/Services/PortalAddService";
import { PortalAddPartner } from "./pages/partners/PortalAddPartner";
import { PortalEditPartner } from "./pages/partners/PortalEditPartner";
import AuthProvider from "./auth/auth";
import PrivateRoute from "./auth/privateRoute";
import ServicesPortal from "./pages/Services/ServicesPortal";
import PartnersPortal from "./pages/partners/PartnersPortal";
import { Partners } from "./pages/partners/Partners";
import WebsiteAuth from "./auth/websiteAuth";
import { Merchandise } from "./pages/Merchandise";
import { Courses } from "./pages/Courses";
import { Form } from "./pages/Form";
import { Careers } from "./pages/Careers";
import HallofFame from "./pages/HallofFame";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/careers" element={<Careers />} />

          <Route path="/services" element={<Services />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/halloffame" element={<HallofFame />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/services/:slug/all" element={<ServicesAll />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/courses" element={<Courses />} />
          <Route element={<WebsiteAuth />}>
            <Route path="/form" element={<Form />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/portal" element={<Portal />} />
            <Route path="/portal/teams" element={<Portal />} />

            <Route
              path="/portal/team/edit/:id"
              element={<PortalEditMember />}
            />
            <Route path="/portal/team/add" element={<PortalAddMember />} />
            <Route path="/portal/services" element={<ServicesPortal />} />
            <Route path="/portal/partners" element={<PartnersPortal />} />
            <Route
              path="/portal/service/edit/:id"
              element={<PortalEditService />}
            />
            <Route path="/portal/service/add" element={<PortalAddService />} />
            <Route
              path="/portal/partner/edit/:id"
              element={<PortalEditPartner />}
            />
            <Route path="/portal/partner/add" element={<PortalAddPartner />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
