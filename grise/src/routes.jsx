import TuteeMainPage from "./Pages/TuteeMainPage/TuteeMain";
import TutorMainPage from "./Pages/TutorMainPage/TutorMain";
import TuteeConsultBoard from "./Pages/TuteeConsultPage/Board";
import TutorConsultBoard from "./Pages/TutorConsultPage/Board";
import RequestConsultPage from "./Pages/RequestConsultPage/RequestConsultPage";
import TuteeLoginPage from "./Pages/LoginPage/TuteeLoginPage"
import TutorLoginPage from "./Pages/LoginPage/TutorLoginPage";
import RedirectPage from './oauth/Redirect';
import TestPage from './Pages/Test';

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
    path: "/tuteeConsult",
    component: TuteeConsultBoard,
  },
  {
    path: "/tutorConsult",
    component: TutorConsultBoard,
  },
  {
    path: "/requestConsult",
    component: RequestConsultPage,
  },
  {
    path: "/Redirect",
    component: RedirectPage,
  },
  {
    path: "/Test",
    component: TestPage,
  },
];

export default routes;
