import UserProfile from "../views/UserProfile/UserProfile";
import TableList from "../views/TableList/TableList";
import Maps from "../views/Maps/Maps";
//import SignIn from "../views/SignIn/SignIn";
import ViewJobs from "../views/ViewJobs/ViewJobs";

const dashboardRoutes = [
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
  {
    path: "/table",
    name: "Candidate list",
    icon: "pe-7s-note2",
    component: TableList
  },
  { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  /*{
    path: "/signin",
    name: "SignIn",
    icon: "pe-7s-bell",
    component: SignIn
  },*/
  //default to view jobs
  { redirect: true, path: "/", to: "/ViewJobs", name: "ViewJobs" }
];

export default dashboardRoutes;
