import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    .ant-drawer-body{
        padding: 0%;
    }
    .ant-drawer-title{
        font-family: "Noto Sans CJK KR";
        font-style: normal;
        font-weight: bold;
        font-size: 1rem;
        color: #3A6C7B;
        text-align: center;
        text-indent: -16px;
    }
    .ant-drawer-close{
        padding: 0%;
        margin: 0%;
    }
		.ant-btn-primary {
        background: #3A6C7B;
        border: #3A6C7B;
		}
`;

export default GlobalStyle