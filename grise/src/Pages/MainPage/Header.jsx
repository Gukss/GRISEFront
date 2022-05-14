import React, {useState} from "react";
import HeaderButton from "./HeaderButton";

const Header = () => {
	

  return (
    <div style={{ display: "flex" }}>
      <HeaderButton text={"일반 피드백"} id={1}/>
    </div>
  );
};

export default Header;
