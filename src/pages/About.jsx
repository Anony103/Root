import styled from 'styled-components';
import OurService from "../components/OurService"
// import ApartmentIcon from '@mui/icons-material/Apartment';

export const Container = styled.div`
padding:0;
margin:0;
`;

export const Wrapper = styled.div`
  padding: 20px;
  margin: 0px 100px;
  background-color:#ffffff ;
  border-radius:20px ;
  display: flex;
  align-items: center;
  justify-content: center;

@media (max-width: 700px) {
  margin: 0px;
  align-items: left;
}
`;

export const Title = styled.h1`
font-weight:700 ;
text-align:center ;
margin: -10px 0px 20px;
font-size: 48px;
font-weight: bold;
background: rgb(95, 64, 95);
background: linear-gradient(180deg, #faaffa 0%, rgba(59,50,59,1) 100%);
padding:100px;
color:white;
@media (max-width: 700px) {
  font-size: 32px;
  }
  @media (max-width: 290px) {
  font-size: 24px;
  padding:80px;
  }
`;

export const Desc = styled.p`
font-size  :16px ;
font-weight:400 ;
width:65%;
text-align:center;
letter-spacing:5%;
line-height: 28px;
@media (max-width: 700px) {
width:100%;
line-height: 24px;
text-align:center;
}
  @media (max-width: 290px) {
  font-size: 14px;
  line-height: 18px;
  }

`;

const About = () => {
  return (
    <div>
       <main>
        <Title>ABOUT US</Title>
        <Wrapper>
        {/* <ApartmentIcon/> */}
          <Desc>Root 16 was settled in May 1 2021 to pamper the needs of the corporate customers who no longer wish to be accountable for organising events. We deal with planning and executing events for businesses so as to help improve  profitable business for our customers. We ensure to maintain active relationships accompanying our providers and we are smart to get the best worth of services in view of our existence for some time now. We handle events for restaurant, lounge and club owners. We handle advertisement of events and content creation for our customers.No plan you have is too difficult, get in touch with our crew to see by what method we will help you to reach your specially tailor-made goals</Desc>
        </Wrapper>
        <OurService/>
       </main>
    </div>
  )
}

export default About
