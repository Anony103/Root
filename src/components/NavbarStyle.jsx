import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "45vh" : "70px")};
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2.5rem;
  position:-webkit-sticky;
  position:sticky;
  border-bottom: 2px solid #C4C4C4;
  top:0px;
  z-index: 1;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  margin-bottom:10px;

  @media (min-width: 700px) {
    height: 65px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Linked = styled(NavLink)`
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  &:hover{
    border-bottom-color: #DB2777;
        border-bottom-width: 2px;
       color: #800080;
}

 &.active{
   border-bottom-color: #DB2777;
   border-bottom-width: 2px;
    color: #800080;
 }

//   &:focus{
//    border-bottom-color: #DB2777;
//         border-bottom-width: 2px;
//        color: #800080;
//  }

  @media (max-width: 786px) {
    display: none;
  }


`;

export const MobileList = styled(NavLink)`
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  font-size:16px;

  &:hover{
       border-bottom-color: #DB2777;
        border-bottom-width: 2px;
       color: #800080;
 }

 .active{
   border-bottom-color: #DB2777;
        border-bottom-width: 2px;
       color: #800080;
 }

`;

export const Logo = styled.img`
  max-width: 100px;
  height: auto;
  @media (max-width: 700px) {
    padding: 18px 0px;
    width: 100%;
  }
`;

export const ShowButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  font-size: 35px;
  cursor: pointer;
  align-items: center;

  @media (min-width: 786px) {
    display: none;
  }
`;

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 786px) {
    display: none;
  }
`;