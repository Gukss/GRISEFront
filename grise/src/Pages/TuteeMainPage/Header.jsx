import GlobalStyle from '../../styles/globalStyle/GlobalStyle';
import React, { useRef } from "react";
import ConsultList from "./List/ConsultList"
import {Select} from 'antd';

const Header = () => {
  const RequestConsultListRef = useRef(null);
  const TutorListRef = useRef(null);
  const SolvedConsultListRef = useRef(null);
  const { Option } = Select;


  const onChangeSelect = (value) =>{
    if(value === 'Consulting'){
      RequestConsultListRef.current.style.display='block';
      SolvedConsultListRef.current.style.display='none';
      TutorListRef.current.style.display='none';
    }else if(value === 'SolvedConsult'){
      RequestConsultListRef.current.style.display='none';
      SolvedConsultListRef.current.style.display='block';
      TutorListRef.current.style.display='none';
    }else if(value === 'Tutor'){
      RequestConsultListRef.current.style.display='none';
      SolvedConsultListRef.current.style.display='none';
      TutorListRef.current.style.display='block';
    }
  }

  return (
    <div>
      <GlobalStyle/>
      <Select
        defaultValue={'Consulting'}
        onChange={onChangeSelect}
      >
        <Option key = 'Consulting'>진행중인 피드백</Option>
        <Option key = 'SolvedConsult'>완료된 피드백</Option>
        <Option key = 'Tutor'>튜터 목록</Option>
      </Select>
      <div ref={RequestConsultListRef}>
        <ConsultList consult = "Consulting"/>
      </div>
      <div ref = {SolvedConsultListRef} style={{display:'none'}}>
        <ConsultList consult = "SolvedConsult"/>
      </div>
			<div ref={TutorListRef} style={{display:'none'}}>
				<ConsultList consult="Tutor"/>
			</div>
    </div>
  );
};

export default Header;
