import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectTutor = (props) => {
  // const navigate = useNavigate();
  useEffect(() => {
    const current = decodeURI(window.location.href);
    const search = current.split("?")[1];
    const params = new URLSearchParams(search);
    const keywords = params.get("token");
    if (keywords !== null) {
      GoogleApiPOST(keywords);
    }
  }, []);

  const GoogleApiPOST = (token) => {
    axios({
      method: "GET",
      url: `http://grise.p-e.kr/api/v1/users`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("로그인되었습니다.");
        window.localStorage.setItem("userId", res.data.body.user.userId);
        window.localStorage.setItem("userName", res.data.body.user.username);
        window.localStorage.setItem("token", `Bearer ${token}`);
        if (res.data.body.user.roleType === "GUEST") {
          //게스트일때 post로 등록
          axios({
            method: "POST",
            url: `http://grise.p-e.kr/tutor/register`,
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              console.log("튜티 등록성공");
              // navigate("/tuteeMain");
              window.location.href = "http://localhost:3000/tutorMain";
            })
            .catch((error) => alert("등록 Error가 발생하였습니다", error));
        } else {
          //튜티일때
          console.log("등록된 유저입니다.");
          // navigate("/tuteeMain");
          window.location.href = "http://localhost:3000/tutorMain";
        }
      })
      .catch((error) => alert("Error가 발생하였습니다", error));
  };

  return null;
};

export default RedirectTutor;