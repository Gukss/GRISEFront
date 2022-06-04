import TuteeMainPage from "./Pages/TuteeMainPage/TuteeMain";
import TutorMainPage from "./Pages/TutorMainPage/TutorMain";
import TuteeConsultBoard from "./Pages/TuteeConsultPage/Board";
import TutorConsultBoard from "./Pages/TutorConsultPage/Board";
import RequestConsultPage from "./Pages/RequestConsultPage/RequestConsultPage";
import TuteeLoginPage from "./Pages/LoginPage/TuteeLoginPage"
import TutorLoginPage from "./Pages/LoginPage/TutorLoginPage";
import RedirectTuteePage from './oauth/Redirect';
import RedirectTutorPage from './oauth/RedirectTutor';
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
    path: "/RedirectTutee",
    component: RedirectTuteePage,
  },
  {
    path: "/RedirectTutor",
    component: RedirectTutorPage,
  },
  {
    path: "/Test",
    component: TestPage,
  },
];

export default routes;
