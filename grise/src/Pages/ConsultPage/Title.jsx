import React, {useState, useRef} from "react";
import styled from 'styled-components';
import ModalButton from "./ModalButton";

const Title = ({title, tuteeName, tutorName}) => {
	
  return (
    <StyledTitle>
      <StyledHeader>{title}</StyledHeader>
      <StyledName>
        {tutorName}
        {tuteeName}
      </StyledName>
      <ModalButton>
        
      </ModalButton>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  width: 97%;
  height: 2rem;
  margin: 0 auto;
  border-bottom: #3a6c7b solid 1px;
  padding: 0.1rem 0;
  display: flex;
  align-items: center;
`;

const StyledHeader = styled.div`
  width: 10rem;
  height: 100%;
  font-weight: bold;
  font-size: 0.7rem;
  color: #3a6c7b;
  margin: auto 0;
  display: flex;
  align-items: center;
`;

const StyledName = styled.div`
  width: 10rem;
  height: 100%;
  font-size: 0.7rem;
  font-weight: bold;
  color: #b1b1b1;
  margin: auto 0;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const CompleteButton = styled.button`
  width: 3rem;
  height: 1.5rem;
  font-size: 0.4rem;
  border-radius: 10px;
  font-weight: bold;
  background-color: #3a6c7b;
	border: none;
	color: #fff;
	margin: auto 0.3rem auto auto;
	
`;

export default Title;
