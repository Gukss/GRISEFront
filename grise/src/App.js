import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { FeedbackRequestPage } from './Pages/FeedbackRequestPage';
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
				{routes.map(route => {
					return (
						<Route key={route.path} exact path={route.path} element={<route.component />} />
					)
				})}
        {/* <Route path='/board' element={<Board />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
