import Main from "./Pages/MainPage/Main";
import FeedBackBoard from "./Pages/FeedBackPage/Board";
import FeedbackRequestPage from "./Pages/FeedbackRequestPage/FeedbackRequestPage";

const routes = [
  {
    path: "/",
    component: Main
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
