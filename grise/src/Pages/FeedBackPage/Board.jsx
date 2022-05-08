import React from 'react'
import styled from 'styled-components'
import NavBar from '../NavBar'
import Title from "./Title";
import Video from "./Video";
import MainText from "./MainText";
import Footer from "./Footer";
import CommentContainer from "./CommentContainer";


const Board = () => {


	return (
    <Wrap>
      <NavBar />
      <Video />
      <Title />
      <MainText />
      <CommentContainer />
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 768px;
  margin: 0 auto;
`;

export default Board;