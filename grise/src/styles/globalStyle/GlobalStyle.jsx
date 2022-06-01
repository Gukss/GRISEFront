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
    .ant-select:not(.ant-select-customize-input) .ant-select-selector{
        border: 0;
    }
    .ant-select.ant-select-single.ant-select-show-arrow{
        margin-top: 0.5rem;
        margin-left:2.5%;
        width: 95%;
        height: 2.5rem;
        border-bottom: 3px solid #3A6C7B;
    }
    .ant-select-selection-item{
        padding-right: 0;
        height: 2.5rem;
        font-family: 'Noto Sans CJK KR';
        font-style: normal;
        font-weight: bold;
        text-align: center;
        font-size: 1.5rem;
        color: #3A6C7B;
    }
    .ant-select-selection-search{
        font-family: 'Noto Sans CJK KR';
        font-style: normal;
        font-weight: bold;
        text-align: center;
        font-size: 1.5rem;
        color: #3A6C7B;
    }
    .ant-select-dropdown{
        font-family: 'Noto Sans CJK KR';
        font-style: normal;
        text-align: center;
    }
`;

export default GlobalStyle