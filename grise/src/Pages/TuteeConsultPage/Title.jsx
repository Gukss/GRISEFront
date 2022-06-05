import React from "react";
import styled from 'styled-components';
import ModalButton from "./ModalButton";

const Title = ({ title, tuteeName, tutorName, consultId, consultType }) => {
	

  return (
    <StyledTitle>
      <StyledHeader>{title}</StyledHeader>
      <ModalButton
        consultId={consultId}
        style={{ float: "right" }}
        consultType={consultType}
      ></ModalButton>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  width: 97%;
  height: 10%;
  margin: 0 auto;
  border-bottom: #3a6c7b solid 1px;
  padding: 0.1rem 0;
  display: flex;
  justify-content: space-between;
`;

const StyledHeader = styled.div`
  width: 80%;
  height: 1rem;
  font-weight: bold;
  font-size: 0.7rem;
  color: #3a6c7b;
  margin: auto 0;
  display: flex;
  align-items: center;
	overflow: hidden;
`;


export default Title;
