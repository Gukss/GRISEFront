import React, { useState } from "react";

const HeaderButton = ({ text, id }) => {
  const [flag, setFlag] = useState("radio0");
  const onClick = (e) => {
    setFlag(e.target.id);
    console.log(e.target.id);
  };
  return (
    <div
      style={{
        width: "90%",
        height: "2.5rem",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        style={{
          visibility: "hidden",
          width: "0px",
          height: "100%",
          margin: "0px",
        }}
        onClick={onClick}
        type="radio"
        name="select"
        id="radio0"
      />
      <label
        htmlFor="radio0"
        style={{
          width: "40%",
          hight: "100%",
          fontWeight: "bold",
          textAlign: "center",
          borderBottom:
            flag === "radio0"
              ? "0.15rem solid #3A6C7B"
              : "0.15rem solid #b1b1b1",
          color: flag === "radio0" ? "#3A6C7B" : "#b1b1b1",
          padding: "0.5rem 0 0.5rem 0",
          margin: "0 auto",
        }}
      >
        일반 피드백
      </label>

      <input
        style={{
          visibility: "hidden",
          width: "0px",
          height: "100%",
          margin: "0px",
        }}
        onClick={onClick}
        // checked={flag === 0}
        type="radio"
        name="select"
        id="radio1"
      />
      <label
        htmlFor="radio1"
        style={{
          width: "40%",
          hight: "100%",
          fontWeight: "bold",
          textAlign: "center",
          borderBottom:
					flag === "radio1"
						? "0.15rem solid #3A6C7B"
						: "0.15rem solid #b1b1b1",
          color: 
					flag === "radio1" 
						? "#3A6C7B" 
						: "#b1b1b1",

          padding: "0.5rem 0 0.5rem 0",
          margin: "0 auto",
        }}
      >
        요청받은 피드백
      </label>
    </div>
  );
};
export default HeaderButton;
