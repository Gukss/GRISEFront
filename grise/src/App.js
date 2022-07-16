import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import React,{useEffect} from 'react'
function App() {
  /*
	useEffect(()=>{
    const loginURL = `${window.location.origin}`;
    const currentURL = window.location.href;
    if(currentURL === window.location.origin||currentURL.includes('tuteeLogin') || currentURL.includes('RedirectTutee')){return;}
    if(window.localStorage.getItem('token')===''){
      window.location.href=loginURL;
      alert('비정상적인 접근입니다. 로그인해주세요!');
    } 
		로그아웃으로 토큰 삭제 후 메인에 접근하지 못하게
  },[])
	*/
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              exact
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
