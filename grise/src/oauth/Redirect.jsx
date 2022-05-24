import React, { useState, useEffect } from "react";
import axios from "axios";

const Redirect = (props) => {
	useEffect (() => {
		const current = decodeURI(window.location.href);
    const search = current.split("?")[1];
    const params = new URLSearchParams(search);
    const keywords = params.get("token");

		if (keywords !== null) {
      GoogleApiPOST(keywords);
    }
	}, []);

	const GoogleApiPOST = (token) => {
    axios
      .get(`http://study-with-ai.p-e.kr/api/v1/users`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("로그인되었습니다.");
        console.log(res.data.body.user);
				window.localStorage.setItem('userId', res.data.body.user.userId);
				window.localStorage.setItem('username', res.data.body.user.username);
        window.localStorage.setItem('token', "Bearer " + token);

				window.location.href = "http://localhost:3000/tuteeMain";
      })
      .catch((error) => alert("Error가 발생하였습니다", error));
		};
		

	return (
    null
  );
};

export default Redirect;