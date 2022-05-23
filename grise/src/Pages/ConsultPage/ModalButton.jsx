import { Modal, Rate } from "antd";
import { useState, useRef } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";

const ModalButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
	const rate = useRef(0);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
		// console.log(rate.current);
		// window.location.href = "http://localhost:3000/tuteeMain";
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
	const onChangeRate = (e) => {
		rate.current = e;
	};
  return (
    <>
      <CompleteButton type="primary" onClick={showModal}>
        피드백
        <br />
        완료
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

export default ModalButton;
