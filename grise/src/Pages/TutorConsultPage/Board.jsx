import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import NavBar from '../NavBar'
import Title from "./Title";
import Video from "./Video";
import MainText from "./MainText";
import Footer from "./Footer";
import CommentContainer from "./CommentContainer";
import axios from 'axios';


const Board = () => {
	const [consult, setConsult] = useState({});
	useEffect(() => {
		axios.get("./Json/consultPage/consult.json").then((response) => {
			setConsult(response.data.consult);
		});
	}, []);

	return (
    <Wrap>
      <NavBar />
      <Video />
      <Title title={consult?.title} tuteeName={consult?.tutee?.name} tutorName={consult?.tutor?.name}/>
      <MainText content={consult?.content}/>
      {/* <CommentContainer /> */}
			<Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
	/* display: flex;
	flex-direction: column; */
  @media (max-width: 1220px) {
    width: 100%;
    
  }

  @media (max-width: 768px) {
    width: 100%;
    
  }

  @media (max-width: 480px) {
    width: 100%;
    
  }
`;

export default Board;