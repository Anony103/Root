import Root16Logo from '../assets/root16.png'
import { useState } from "react";
import {
  Container,
  LeftContainer,
  RightContainer,
  MobileNav,
  Wrapper,
  Nav,
  Linked,
  Logo,
  ShowButton,
  MobileList,
} from "./NavbarStyle";
import { NavLink, useLocation } from "react-router-dom";



function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const pathname = useLocation().pathname
  console.log(pathname)
  return (
    <Container extendNavbar={extendNavbar}>
      <Wrapper>
        <LeftContainer>
        <NavLink to="/" >
        <Logo src={Root16Logo}></Logo>
        </NavLink>
        </LeftContainer>
        <RightContainer>
          <Nav>
          <Linked to="/" activeClassName="active" >Home</Linked>
         <Linked to="/upcomingEvent" >Upcoming Event</Linked>
         <Linked to="/pastEvents" >Past Event</Linked>
         <Linked to="/about" >About Us</Linked>
         <Linked to="/contact" >Contact</Linked>
            <ShowButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </ShowButton>
          </Nav>
        </RightContainer>
      </Wrapper>
      {extendNavbar && (
        <MobileNav>
          <MobileList to="/" activeClassName="active"> Home</MobileList>
          <MobileList to="/upcomingEvent"> Upcoming Event</MobileList>
          <MobileList to="/pastEvents"> Past Event</MobileList>
          <MobileList to="/about"> About Us</MobileList>
          <MobileList to="/contact"> Contact</MobileList>
        </MobileNav>
      )}
    </Container>
  );
}

export default Navbar;
