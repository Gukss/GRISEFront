import React from 'react'
import NavBar from '../NavBar'
import Title from "./Title";
import Video from "./Video";
import MainText from "./MainText";
import Footer from "./Footer";
import CommentContainer from "./CommentContainer";

const Board = () => {


	return (
    <>
      <NavBar />
      <Video />
      <Title />
			<MainText />
			<CommentContainer />
			<Footer />
    </>
  );
};

export default Board;