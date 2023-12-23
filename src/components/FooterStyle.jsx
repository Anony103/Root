import styled from "styled-components";

export const Container = styled.footer`
  display:flex;
  justify-content: center;
  align-items: center;
  /* position: absolute;
    bottom: 0;
    width: 100%; */
  padding: 20px;
  height: 80px;
  border-top: 2px solid #C4C4C4;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  @media (max-width: 700px) {
   padding: 40px 5px;
  }
`;

export const Left = styled.div`
  flex:1;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 70px;
  height: auto;
  @media (max-width: 400px) {
    margin: 0px;
    width: 100%;
  }
`;



export const Middle = styled.div`
  flex:1;
`;

export const SocialContainer = styled.div`
display: flex;

`;
export const SocialIcon = styled.div`
width:40px;
height: 40px;
border-radius:5px ;
color:white ;
background-color:#${props=>props.color} ;
display: flex;
align-items:center ;
justify-content: center;
margin: 5px;
text-align:center;
@media (max-width: 400px) {
  width: 100%;
  height: 20px;
}
`;
export const Social = styled.img`

max-width: 30px;
height: auto;
@media (max-width: 400px) {
  margin: 0px;
  width: 80%;
}



`;
export const Right = styled.div`
  flex:1;
`;

export const Copy = styled.div`
float: right;
@media (max-width: 480px) {
  font-size:12px;
}
@media (max-width: 300px) {
  font-size:9px;
}

`;