import {css} from "styled-components";

export const Mobile =(props) =>{
    return css`
    @media only screen and(min-width:700px){
       ${props}
    }
    `
} 

export const Tablet =(props) =>{
    return css`
    @media only screen and(max-width:700px){
       ${props}
    }
    `
} 