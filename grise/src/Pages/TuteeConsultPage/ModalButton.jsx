import { Modal, Rate } from "antd";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "antd/dist/antd.min.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ModalButton = ({ consultId, consultType }) => {
	const navigate = useNavigate();
	const typeRef = useRef();
	useEffect(() => {
		if (consultType === "Requesting") {
      typeRef.current.style.display = "none";
    } else if (consultType === "SolvedConsult") {
      typeRef.current.style.display = "none";
    }
	}, [consultType]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const rate = useRef(0);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    axios({
      method: "POST",
      url: `https://grise.p-e.kr/tutee/consults/${consultId}/reivew`,
      headers: {
        Authorization: window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: {
        star: rate.current,
        content: "리뷰내용",
      },
    })
    .then((res) => {
      console.log(res);
      setIsModalVisible(false);
      navigate("/tuteeMain");
    })
    .catch((error) => console.log("리뷰API요청 에러", error));

    axios({
      method: "POST",
      url: `https://grise.p-e.kr/tutee/consults/${consultId}/done`,
      headers: {
        Authorization: window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log("완료API에러", error));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onChangeRate = (e) => {
    rate.current = e;
  };
  return (
    <>
      <CompleteButton type="primary" onClick={showModal} ref={typeRef}>
        피드백 완료
      </CompleteButton>
      <Modal
        title="별점"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>별점을 주세요.</div>
        <Rate defaultValue={0} onChange={onChangeRate} />
      </Modal>
    </>
  );
};

const CompleteButton = styled.button`
  width: 5rem;
  height: 1.5rem;
  font-size: 0.4rem;
  border-radius: 10px;
  font-weight: bold;
  background-color: #3a6c7b;
  border: none;
  color: #fff;
  margin: auto 0.3rem auto 0;
`;

export default ModalButton;