import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

import { Homepage } from "./pages/Homepage";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Services } from "./pages/Services/Services";
import { ServicesAll } from "./pages/Services/ServicesAll";
import { ServiceDetails } from "./pages/Services/ServiceDetails";
import { Team } from "./pages/Team";
import { Partners } from "./pages/partners/Partners";
import { Merchandise } from "./pages/Merchandise";
import { Courses } from "./pages/Courses";
import { Form } from "./pages/Form";
import Careers from "./pages/Careers";
import CareerDescription from "./pages/CareerDescription";
import HallofFame from "./pages/HallofFame";
import Success from "./pages/SuccessStories";
import Blogs from "./pages/Blogs/Blogs";
import BlogPost from "./pages/Blogs/BlogPost";
import Home from "./pages/Home";
import CategoryPage from "./pages/Category";
import Post from "./pages/Post";
import Login from "./components/Login";
import { FindMentors } from "./features";
import Mentor from "./components/Mentor";
import ThankYou from "./pages/ThankYou";
import AuthProvider from "./auth/auth";

const WebsiteAuth = loadable(() => import("./auth/websiteAuth"));
const Portal = loadable(() => import("./pages/Portal"));
const PortalAddMember = loadable(() => import("./pages/PortalAddMember"));
const PortalEditMember = loadable(() => import("./pages/PortalEditMember"));
const PortalEditService = loadable(() =>
  import("./pages/Services/PortalEditService")
);
const PortalEditCareer = loadable(() => import("./pages/Career/EditJob"));

const PortalAddService = loadable(() =>
  import("./pages/Services/PortalAddService")
);
const PortalAddPartner = loadable(() =>
  import("./pages/partners/PortalAddPartner")
);
const PortalEditPartner = loadable(() =>
  import("./pages/partners/PortalEditPartner")
);
// const AuthProvider = loadable(() => import("./auth/auth"));
const PrivateRoute = loadable(() => import("./auth/privateRoute"));
const ServicesPortal = loadable(() =>
  import("./pages/Services/ServicesPortal")
);
const PartnersPortal = loadable(() =>
  import("./pages/partners/PartnersPortal")
);
const HofPortal = loadable(() => import("./pages/HallOfFame/portal"));
const PortalAddHof = loadable(() => import("./pages/HallOfFame/PortalAddHof"));
const PortalEditHof = loadable(() =>
  import("./pages/HallOfFame/PortalEditHof")
);
const StoryPortal = loadable(() => import("./pages/story/portal"));
const PortalAddStory = loadable(() => import("./pages/story/PortalAddStory"));
const PortalEditStory = loadable(() => import("./pages/story/PortalEditStory"));
const BlogPortal = loadable(() => import("./pages/Blogs/portal"));
const EditBlogPortal = loadable(() => import("./pages/Blogs/EditBlogPortal"));
const AddBlogPortal = loadable(() => import("./pages/Blogs/AddBlogPortal"));
const AdminPortal = loadable(() => import("./pages/Admin/portal"));
const EditAdminPortal = loadable(() => import("./pages/Admin/EditAdminPortal"));
const AddAdminPortal = loadable(() => import("./pages/Admin/AddAdminPortal"));
const JobPortal = loadable(() => import("./pages/Career/portal"));
const AddJobPortal = loadable(() => import("./pages/Career/AddJob"));
const EventPortal = loadable(() => import("./pages/Events/portal"));
const AddEventsPortal = loadable(() =>
  import("./pages/Events/AddEventsPortal")
);
const EditEventPortal = loadable(() =>
  import("./pages/Events/EditEventsPortal")
);

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
          <Route path="/careers/:id" element={<CareerDescription />} />
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
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/mentors" element={<FindMentors />} />
          <Route path="/join-as-mentor" element={<Mentor />} />
          <Route path="/session/thank-you" element={<ThankYou />} />
          <Route element={<WebsiteAuth />}></Route>
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
            <Route path="/portal/careers" element={<JobPortal />} />
            <Route path="/portal/partner/add" element={<PortalAddPartner />} />
            <Route path="/portal/blogs" element={<BlogPortal />} />
            <Route path="/portal/blogs/edit/:id" element={<EditBlogPortal />} />
            <Route
              path="/portal/careers/edit/:id"
              element={<PortalEditCareer />}
            />
            <Route path="/portal/blogs/add" element={<AddBlogPortal />} />
            <Route path="/portal/admin" element={<AdminPortal />} />
            <Route
              path="/portal/admin/edit/:id"
              element={<EditAdminPortal />}
            />
            <Route
              path="/portal/careers/edit:id"
              element={<PortalEditCareer />}
            />
            <Route path="/portal/careers/add" element={<AddJobPortal />} />
            <Route path="/portal/admin/add" element={<AddAdminPortal />} />
            <Route path="/portal/events" element={<EventPortal />} />
            <Route
              path="/portal/event/edit/:id"
              element={<EditEventPortal />}
            />
            <Route path="/portal/event/add" element={<AddEventsPortal />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
