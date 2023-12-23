import reactLogo from '../assets/hero.png'
import {
  Container,
  Image,
  Wrapper,
  Title,
  Botton
} from "./PromoStyle";
import { Link } from "react-router-dom";

const Promo = () => {
  return (
    <Container >
        <Image src={reactLogo} alt=""  />
       <Wrapper >
        <Title >THROW AN EVENT YOU`LL NEVER FORGET.</Title>
        <Link to={`/contact`}> 
        <Botton type='button' >Contact Us</Botton>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Promo
