import styled from "styled-components";

export const Container = styled.div`
`;

export const Pack = styled.div`
   display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 5px;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
  margin: 0px 100px;
  @media (max-width: 700px) {
    flex-direction:column;
    margin: 15px 30px 0px 30px;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  margin: 10px ;
  flex-wrap: wrap;
  width: 30%;
  height: 270px;
  border: 2px solid #C4C4C4;
  border-radius: 6px;
  box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
  -webkit-box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
  -moz-box-shadow: 1px 1px 4px 1px rgba(9, 9, 10, 0.61);

  &:hover{
    filter: brightness(60%);
  }
  @media (max-width: 700px) {
    width: 80%;
    height: 200px;
    }
    @media (max-width: 700px) {
    width: 80%;
    height: 200px;
    }
    @media (max-width: 447px) {
    width: 80%;
    height: 250px;
    }
    @media (max-width: 330px) {
    width: 80%;
    height: 270px;
    }
    @media (max-width: 295px) {
    width: 80%;
    height: 300px;
    }
  `
  export const ImageContainer = styled.div`
  background-color:#${props=>props.color} ;
  border-radius: 100%;
  width:50px;
  height:50px;
  align-items: center;
  justify-content:center;
  text-align: center;
`;

export const Image = styled.img`
  width:50px;
  padding:10px;

`;

export const Context = styled.div`
display: flex;
align-items  :center ;
justify-content: center;
flex-direction: column;

`;

export const TitleContext = styled.h2`
  font-size: 28px;
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: 24px;
    }
    @media (max-width: 779px) {
    font-size: 20px;
    }
  @media (max-width: 290px) {
  font-size: 20px;
  }
`;

export const Desc = styled.p`
  font-size: 16px;
  font-weight: 200;
  letter-spacing:-1.5%;
  line-height: 22px;
  padding:10px;
  @media (max-width: 1030px) {
    font-size: 14px;
    line-height: 20px;
    }
  @media (max-width: 837px) {
    font-size: 12px;
    line-height: 20px;
    }
  @media (max-width: 290px) {
  font-size: 12px;
  }
`;