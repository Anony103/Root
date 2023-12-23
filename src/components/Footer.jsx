import {
  Container,
  Left,
  Middle,
  Right,
  Logo,
  SocialContainer,
  SocialIcon,
  Social,
  Copy
} from "./FooterStyle";
import { Link } from "react-router-dom";
import Root16Logo from '../assets/root16.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import whatsapp from '../assets/whatsapp.png'

const Footer = () => {
  return (
    <Container>
      <Left><Link to="/" >
        <Logo src={Root16Logo}></Logo>
        </Link></Left>
      <Middle>
      <SocialContainer>
      <SocialIcon  >
        <a href="https://instagram.com/root16ng?igshid=MzRlODBiNWFlZA==" target="_blank">
          <Social src={instagram} />
        </a>
      </SocialIcon >
      <SocialIcon color="e2e1e1" >
      <a href="https://www.tiktok.com/@root16ng?_t=8fTjIYS8gCs&_r=1" target="_blank">
          <Social src={tiktok} />
          </a>
      </SocialIcon >
      <SocialIcon  >
      <a href="https://wa.me/message/TTUUTDAX3NRAF1" target="_blank">
          <Social src={whatsapp} />
          </a>
      </SocialIcon >
            </SocialContainer>
      </Middle>
      <Right><Copy><>&#169;</> copyright ROOT16</Copy></Right>
    </Container>
  )
}

export default Footer
