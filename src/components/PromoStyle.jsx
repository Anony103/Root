import styled from "styled-components";


export const Container = styled.div`
  display: flex; 
  justify-content:space-between;
  position: relative;
  align-content: center;
  text-align: start;
  color:#ffffff;
  padding: 0px 40px;
  height: 576px;
  @media (max-width: 700px) {
    padding: 0px 10px;
    height: 306px;
  }
`;

export const Image = styled.img`
  border-radius: 16px;
  width:100%;
  background-color: #ebebeb;
  filter: brightness(70%);

`;

export const Wrapper = styled.div`
  position: absolute;
  top: 144px;
  padding: 0px 40px;
  font-size: 36px;
  line-height: 40px;
  justify-content: center;
  align-content: center;
  @media (max-width: 700px) {
    top: 84px;
    padding: 0px 10px;
  }
`;

export const Title = styled.h1`
padding: 0px 10px;
  font-size: 44px;
  line-height: 48px;
  width:75%;
  font-weight: bold;
  
  @media (max-width: 700px) {
    font-size: 15px;
  line-height: 20px;
  padding: 0px 10px;
  }
`;

export const Botton = styled.button`
  padding: 16px;
  font-size: 20px;
  line-height: 28px;
  left: 24px;
  justify-content: center;
  align-content: center;
  text-align: center;
  border-radius: 6px;
  margin-top: 40px;
  margin-left: 10px;
  background: rgb(95, 64, 95);
  background: linear-gradient(180deg, rgba(250,175,250,1) 0%, rgba(59,50,59,1) 100%);

  &:hover{
    transform: scale(1.1,1.1)
  }
  @media (max-width: 700px) {
  font-size: 15px;
  line-height: 20px;
  padding: 10px;
  border-radius: 6px;
  margin-top: 10px;
  margin-left: 10px;
  }
`;