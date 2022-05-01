import styledComponents from "styled-components"
export * from "./Windows"
export * from "./android"
export * from "./Macos"
const Apple = styledComponents.span`
    font-size:${({size})=>size}px;
    margin: 0px 5px;
`;
export const AppleIcon = ({size=20})=>{
    return <Apple size={size} ></Apple>
}