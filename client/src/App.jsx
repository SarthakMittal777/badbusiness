import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Services } from "./pages/Services/Services";
import { ServicesAll } from "./pages/Services/ServicesAll";
import { ServiceDetails } from "./pages/Services/ServiceDetails";
import { Portal } from "./pages/Portal";
import { Team } from "./pages/Team";
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
import Careers from "./pages/Careers";
import HallofFame from "./pages/HallofFame";
import Success from "./pages/SuccessStories";
import { PortalAddStory } from "./pages/story/PortalAddStory";
import { PortalEditStory } from "./pages/story/PortalEditStory";
import { StoryPortal } from "./pages/story/portal";
import { PortalAddHof } from "./pages/HallOfFame/PortalAddHof";
import { PortalEditHof } from "./pages/HallOfFame/PortalEditHof";
import HofPortal from "./pages/HallOfFame/portal";
import Blogs from "./pages/Blogs/Blogs";
import BlogPost from "./pages/Blogs/BlogPost";
import { EditBlogPortal } from "./pages/Blogs/EditBlogPortal";
import BlogPortal from "./pages/Blogs/portal";
import { AddBlogPortal } from "./pages/Blogs/AddBlogPortal";
import AdminPortal from "./pages/Admin/portal";
import { EditAdminPortal } from "./pages/Admin/EditAdminPortal";
import { AddAdminPortal } from "./pages/Admin/AddAdminPortal";

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
          <Route path="/hall-of-fame" element={<HallofFame />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/services/:slug/all" element={<ServicesAll />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/success-stories" element={<Success />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/share-your-business-problem" element={<Form />} />
          <Route element={<WebsiteAuth />}>
           
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
            <Route path="/portal/halloffame" element={<HofPortal />} />
            <Route path="/portal/halloffame/add" element={<PortalAddHof />} />
            <Route
              path="/portal/halloffame/edit/:id"
              element={<PortalEditHof />}
            />
            <Route path="/portal/story" element={<StoryPortal />} />
            <Route path="/portal/story/:id" element={<StoryPortal />} />
            <Route
              path="/portal/story/edit/:id"
              element={<PortalEditStory />}
            />
            <Route
              path="/portal/story/edit/:id"
              element={<PortalEditStory />}
            />
            <Route path="/portal/story/add" element={<PortalAddStory />} />
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
            <Route path="/portal/blogs" element={<BlogPortal />} />
            <Route path="/portal/blogs/edit/:id" element={<EditBlogPortal />} />
            <Route path="/portal/blogs/add" element={<AddBlogPortal />} />
            <Route path="/portal/admin" element={<AdminPortal />} />
            <Route
              path="/portal/admin/edit/:id"
              element={<EditAdminPortal />}
            />
            <Route path="/portal/admin/add" element={<AddAdminPortal />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
