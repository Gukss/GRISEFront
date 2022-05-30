import React, { forwardRef } from "react";
import styled from "styled-components";
import RequestConsultItem from "./RequestConsultItem";

const RequestConsultItem = forwardRef((props,ref) => {
    const navigate = useNavigate();
    const consult = {
        data: props.data.consult
    }
    const onClickShowConsultBtn = () =>{
        console.log(consult.data,'피드백 확인');
	    navigate("/tuteeConsult", { state: consult });
    }
    return (
        <div ref={ref} style={{borderBottom:"#3A6C7B solid 0.2rem"}}>
            <Container>
                <div style={{float:'left'}}>
                    <Title>{props.data?.title}</Title>
                    <Name>{props.data?.username}</Name>
                </div>
                <ShowConsultBtn onClick={onClickShowConsultBtn}>피드백 확인</ShowConsultBtn>
            </Container>
        </div>
    )
});

  const getItem = () => {
    if (outputList.length === 0) {
      return;
    }
    const result = [];
    for (let i = 0; i < outputList.length - 1; i++) {
      result.push(
        <RequestConsultItem
          key={i}
          isEnd={false}
          data={outputList[i]}
        ></RequestConsultItem>
      );
    }
    result.push(
      <RequestConsultItem
        key={outputList.length - 1}
        isEnd={true}
        data={outputList[outputList.length - 1]}
        ref={ItemRef}
      ></RequestConsultItem>
    );
    return result;
  };

  return (
    <>
      <ScrollDiv
        ref={ContainerRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {getItem()}
      </ScrollDiv>
      <Link
        to="/RequestConsult"
        state={{ consult: "NormalConsult", tutorId: null }}
      >
        <RequestButton>일반 피드백 요청하기</RequestButton>
      </Link>
    </>
  );
};

const ScrollDiv = styled.div`
  margin: 0 auto;
  width: 95%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const RequestButton = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 50%;
  margin-left: -6rem;
  border-radius: 0.5rem;
  text-align: center;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: bold;
  color: #fff;
  background-color: #3a6c7b;
  width: 12rem;
  height: 3rem;
  float: left;
  font-size: 1rem;
  line-height: 3rem;
`;

const Title = styled.div`
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    display: block;
    font-size: 1rem;
    text-align:left;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    color: #3A6C7B;
    height: 1rem;
`

const Container = styled.div`
    width: 100%;
    height: 4.5rem;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    flex: 0 0 auto;
`

export default RequestConsultItem;