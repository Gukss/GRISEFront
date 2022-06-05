import TuteeMainPage from "./Pages/TuteeMainPage/TuteeMain";
import TuteeConsultBoard from "./Pages/TuteeConsultPage/Board";
import RequestConsultPage from "./Pages/RequestConsultPage/RequestConsultPage";
import TuteeLoginPage from "./Pages/LoginPage/TuteeLoginPage"
import RedirectTuteePage from './oauth/Redirect';
// import TestPage from './Pages/Test';

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
    path: "/tuteeLogin",
    component: TuteeLoginPage,
  },
  {
    path: "/tuteeConsult",
    component: TuteeConsultBoard,
  },
  {
    path: "/requestConsult",
    component: RequestConsultPage,
  },
  {
    path: "/RedirectTutee",
    component: RedirectTuteePage,
  },
  // {
  //   path: "/Test",
  //   component: TestPage,
  // },
];

export default routes;
