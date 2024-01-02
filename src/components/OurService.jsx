
import {TitleWrapper,Title} from  './UpComingEventStyle'
import {service} from "./data"

import {
  Container,
  Pack,
  Wrapper,
  ImageContainer,
  Context,
  TitleContext,
  Desc,
  Image
} from "./OurServiceStyle";

const OurService = () => {
  return (
    <Container>
         <TitleWrapper style={{marginTop:"60px",marginBottom:'30px'}}>
        <Title >OUR SERVICE</Title>
      </TitleWrapper>
      <Pack>
        {service.map((item,index) => {
          return (
          <Wrapper key={index}>
        <ImageContainer color={item.bg}>
        <Image src={item.img} />
        </ImageContainer>
        <Context>
          <TitleContext>{item.title}</TitleContext>
          <Desc>{item.desc}</Desc>
        </Context>
      </Wrapper>

          );
        })}

      </Pack>
    </Container>
  )
}

export default OurService