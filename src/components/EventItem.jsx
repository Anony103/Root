/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useState } from 'react';



export const Container = styled.div`
  flex:1 ;
  margin:5px ;
  min-width:230px ;
  max-width:250px ;
  height: 300px;
  display: flex;
  justify-content: center;
  position:relative ;
`;

export const Rectangle = styled.div`
  width: 90%;
  border-radius:20px ;
  bottom:5%;
  position:absolute ;
  background-color: rgba(0, 0, 0, 0.61);
  backdrop-filter: blur(5px);
  color:white;
  padding:10px;
  text-align:center;
`;

export const Title = styled.h2`
  font-weight:700;
  text-transform:uppercase;
`;

export const Desc = styled.p`
  font-weight:200;
  color: #ebebebca;

`;

export const Image  = styled.img`
  height: 95%;
  border-radius:20px;
  background-color: #ebebeb;
  box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
  -webkit-box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
  -moz-box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
  filter:brightness(80%);
 
  
`;

 export const View = styled.span`
 color:#a1b2ff;
 cursor: pointer;
`;

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Desc >
      {isReadMore ? text.slice(0, 90) : text}
      <View onClick={toggleReadMore} >
        {isReadMore ? ".....view more" : " "}
      </View>
    </Desc>
  );
};
const EventItem = ({item}) => {
  const {img1 } = item
  return (
    <Link to={`/pastEvent/${item.id}`} key={item.id}> 
    <Container >

    <Image src={img1}/>
   <Rectangle>
    <Title>{item.title}</Title>
    <ReadMore>{item.desc}</ReadMore>
   </Rectangle>
    </Container>
    </Link>
  )
}


export default EventItem