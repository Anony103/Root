import styled from "styled-components";


export const Container = styled.div`
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 0 20px;
  margin-top: 60px;
  font-weight: 800;
  font-size: 24px;
  line-height: 32px;
  @media (max-width: 700px) {
font-size: 100%;

}
`;

export const Title = styled.h1`
`;

export const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Empty = styled.div`
  text-align: left;
  padding: 0px 0px;
  will-change: transform;
  animation: marquee 15s linear infinite;
  width: 49%;
  overflow-x: hidden;
  &:hover {
  animation-play-state: paused;
}
@media (max-width: 700px) {
  padding: 0px 0px;
}
`;

export const EmptyTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  @keyframes marquee {
  from { transform: translateX(0%); }
  to { transform: translateX(80%); }
}
@media (max-width: 700px) {
font-size: 100%;

}
`;

export const Pack = styled.div`
   display: flex;
  align-content: center;
  justify-content: center;
  padding: 4px ;
  margin: 30px 40px 0 40px;
  width:400px;
  border-radius: 6px;
  box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
  -webkit-box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
  -moz-box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
  @media (max-width: 700px) {
    flex-wrap: wrap;
    width:80%;
    border-radius: 20px;
    text-align: center;
  }
  @media (max-width: 290px) {
    margin: 10px 5px 0 5px;
    width:250px;
    border-radius: 20px;
}
`;

export const ImageContainer = styled.div`
`;

export const Image = styled.img`
  border-radius: 16px;
  width: 600px;
  height: 160px;
`;

export const Context = styled.div`
  align-content: center;
  justify-content: center;
  border-radius: 6px;
  width: 192;
  padding: 4px;
`;

export const ContextTitle = styled.h2`
  font-weight: 700;
`;

export const TimeContext = styled.div`
  display: flex;
  justify-content: space-between;
  padding:5px ;
`;

export const Time = styled.p`
 font-size :12px ;
 line-height: 16px;
`;

export const Desc = styled.p`
  width: 100%;
  font-size :14px ;
 line-height: 20px;
 @media (max-width: 400px) {
  font-size :12px ;
  line-height: 14px;
}
 @media (max-width: 290px) {
  font-size :10px ;
  line-height: 14px;
}
`;

export const LinkWrapper = styled.p`
  font-size :12px ;
 line-height: 16px;
 margin-top: 4px;
 text-align: right;
`;




export const View = styled.span`
margin-top: 15px;
color:#a1b2ff;
float:right;
cursor: pointer;
`;