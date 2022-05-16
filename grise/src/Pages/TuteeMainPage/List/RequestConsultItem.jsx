import React, { forwardRef, useRef } from "react";
import styled from "styled-components";

const RequestConsultItem = forwardRef((props, ref) => {
  // const detailDivRef = useRef();
  // const isShowDetail = useRef(false);
  // const showDetailInfo = () => {
  //   detailDivRef.current.style.display = isShowDetail.current
  //     ? "none"
  //     : "block";
  //   isShowDetail.current = !isShowDetail.current;
  //   if (props.isEnd) {
  //     detailDivRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div ref={ref} style={{ borderBottom: "#3A6C7B solid 0.2rem" }}>
      <Container>
        <div style={{ float: "left" }}>
          <Title>{props.data?.consult.title}</Title>
          <div>
            <Score>{props.data?.consult.tutor.name}</Score>
          </div>
        </div>
        <InfoBtn onClick>
          <div>ddd</div>
        </InfoBtn>
      </Container>
    </div>
  );
});

const InfoBtn = styled.span`
  float: right;
  margin-top: 0.8rem;
`;

const Title = styled.div`
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  display: block;
  font-size: 1rem;
  text-align: left;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  color: #3a6c7b;
  height: 1rem;
`;

const Score = styled.span`
  color: #000000;
  font-size: 0.9rem;
  vertical-align: 0.4rem;
  margin-left: 1.5rem;
`;

const Container = styled.div`
  width: 100%;
  height: 4rem;
  /* color: white; */
  font-weight: 900;
  font-size: 2rem;
  flex: 0 0 auto;
`;

export default RequestConsultItem;
