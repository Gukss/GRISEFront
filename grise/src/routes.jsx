import Main from "./Pages/MainPage/Main";
import FeedBackBoard from "./Pages/FeedBackPage/Board";
import FeedbackRequestPage from "./Pages/FeedbackRequestPage/FeedbackRequestPage";
import TuteeLoginPage from "./Pages/LoginPage/TuteeLoginPage"
import TutorLoginPage from "./Pages/LoginPage/TutorLoginPage";
const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/tuteeLogin",
    component: TuteeLoginPage
  },
  {
    path: "/tutorLogin",
    component: TutorLoginPage
  },
  {
    path: "/feedback",
    component: FeedBackBoard
  },
  {
    path: "/feedbackRequest",
    component: FeedbackRequestPage
  }
];

export default routes;
