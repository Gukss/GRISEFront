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
        console.log(res.data.body);
      })
      .catch((error) => alert("Error가 발생하였습니다", error));
  };

	return (
    <>
      <div>로그인</div>
    </>
  );
};

export default Redirect;