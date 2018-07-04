
import UserProfile from "../views/UserProfile/UserProfile";
import Maps from "../views/Maps/Maps";
import Notifications from "../views/Notifications/Notifications";
import ViewJobs from "../views/ViewJobs/ViewJobs";

const candidateDashBoardRoutes = [
  {
    path: "/ViewJobs",
    name: "View Jobs",
    icon: "pe-7s-search",
    component: ViewJobs
  }, 
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  //default to view jobs
  { redirect: true, path: "/", to: "/ViewJobs", name: "ViewJobs" }
];

export default candidateDashBoardRoutes;
