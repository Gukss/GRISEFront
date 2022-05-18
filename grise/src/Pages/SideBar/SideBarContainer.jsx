import React,{useRef} from 'react';
import styled from 'styled-components';
const SideBarContainer = () => {
    const containerRef = useRef();

    return (
        <Contianer ref = {containerRef}>
            <SideBarHeader></SideBarHeader>
        </Contianer>
    )
};

const Contianer = styled.div`
    width:100%;
    height:100%;
    background-color:#ffffff;
`

const SideBarHeader = styled.div`
    width: 100%;
    height: 3.5rem;
    border-bottom: #3A6C7B solid 0.2rem;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
`


export default SideBarContainer