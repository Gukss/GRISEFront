import Main from "./Pages/MainPage/Main";
import FeedBackBoard from "./Pages/FeedBackPage/Board";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/feedback",
    component: FeedBackBoard,
  },
];

export default routes;
