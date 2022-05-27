import TuteeMainPage from "./Pages/TuteeMainPage/TuteeMain";
import TutorMainPage from "./Pages/TutorMainPage/TutorMain";
import ConsultBoard from "./Pages/ConsultPage/Board";
import RequestConsultPage from "./Pages/RequestConsultPage/RequestConsultPage";
import TuteeLoginPage from "./Pages/LoginPage/TuteeLoginPage"
import TutorLoginPage from "./Pages/LoginPage/TutorLoginPage";
import RedirectPage from './oauth/Redirect';
const routes = [
  {
    path: "/",
    component: TuteeLoginPage,
  },
  {
    path: "/tuteeMain",
    component: TuteeMainPage,
  },
  {
    path: "/tutorMain",
    component: TutorMainPage,
  },
  {
    path: "/tuteeLogin",
    component: TuteeLoginPage,
  },
  {
    path: "/tutorLogin",
    component: TutorLoginPage,
  },
  {
    path: "/Consult",
    component: ConsultBoard,
  },
  {
    path: "/RequestConsult",
    component: RequestConsultPage,
  },
  {
    path: "/oauth/Redirect",
    component: RedirectPage,
  },
];

export default routes;
