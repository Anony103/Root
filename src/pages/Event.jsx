import styled from 'styled-components';
import ReactPlayer from 'react-player'
import { doc, getDoc} from 'firebase/firestore';
import {db} from '../config/Firebase-config'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import img3 from '../assets/YouTube_Music.webp'

export const Container = styled.div`
border-radius:20px ;
margin-bottom: 20px;
@media (max-width: 700px) {
  padding: 0px;
}
`;

export const Wrapper = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  @media (max-width: 290px) {
    flex-direction: column;
}  
`;

export const Left = styled.div`
   flex: 40%;
   
`;

export const Right = styled.div`
  flex: 40%;
  align-items: center;
  justify-content: center;
  padding:60px 0px;
  `;

export const TitleWrapper = styled.div`
  margin-top: 10px;
  font-weight: 800;
  font-size: 30px;
  line-height: 32px;
  @media (max-width: 700px) {
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  }
  @media (max-width: 290px) {
    
} 
  
  
`;

export const BottomTitle = styled.div`
  /* padding: 0 10px; */
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  
  
`;

export const Title = styled.h1`
 
`;

export const ImageContainer = styled.div`
  padding: 20px;
  position: relative;

  
  .none{
    display:none;
  }
 
  &:hover{
    background-color: #f02d34;
  }

`;



export const Image = styled.img`
  border-radius: 15px;
   background-color: #ebebeb;
  width: 600px;
  height: 400px;
  cursor: pointer;
  transition: .3s ease-in-out;

  &:hover{
    background-color: #f02d34;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
  @media (max-width: 290px) {
    width: 500px;
  height: 200px;
} 
  
`;

export const SmallImageContainer = styled.div`
    display: flex;
  gap: 10px;
  padding: 20px;
  @media (max-width: 700px) {
    padding:0px 20px;
  }
  
`;

export const SmallImage = styled.img`
    border-radius: 8px;
  background-color: #ebebeb;
  width: 90px;
  height: 90px;
  cursor: pointer;

  &:hover{
    background-color: #f02d34;
  }

  @media (max-width: 700px) {
    width: 115px;
    height: 100px;
  }

  @media (max-width: 400px) {
    width: 100px;
    height: 100px;
  } 

  @media (max-width: 290px) {
    width: 70px;
    height: 70px;
} 

`;

// export const EventDesc = styled.div`
// border-right: 2px solid #c4c4c4;
// padding: 0px 50px 0px 0px;
// `;

export const Date = styled.div`

`;

export const Desc = styled.p`
  font-size :20px ;
 line-height: 24px;
`;


export const TopContainer = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  margin-top: 20px;
  background-color: #faaffa14;
  padding: 10px 70px;
  border-radius: 10px;
  margin-left: 20px;
  box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
  -webkit-box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
  -moz-box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
`;

export const Label = styled.label`
 font-size :20px ;
 line-height: 24px;
 color: #850085;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-top: 20px;
  background-color: #faaffa14;
  padding: 10px 30px;
  border-radius: 10px;
  margin-left: 20px;
  box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
  -webkit-box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
  -moz-box-shadow: 1px 1px 4px 1px rgba(156,153,175,0.61);
`;

export const EventStaff = styled.div`
   display:flex;
   justify-content: space-between;
   background-color: #ffffff;
   padding: 10px 30px;
   margin-top: 10px;
   border-radius: 20px;
   box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

 `;

 export const Staff = styled.p`
  
 `;

export const EventDesc = styled.div`
  margin-top  : 15px ;
`;

// export const Desc = styled.p`
  
// `;


export const TimeContext = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Time = styled.p`
 font-size :14px ;
 line-height: 16px;
`;
const Event = () => {

  const [pastEvent, setPastEvent] = useState({});
  const [autoplay, setAutoplay] = useState(false);

  const { id } = useParams();
 console.log(id);
  useEffect(() => {
    const getEventId = async (id) => {
    const docRef = doc(db, "pastEvent", id);
    const result = await getDoc(docRef);
    const data =result.data();
    setPastEvent(data);
   };
   getEventId(id)
  },[id]);


  console.log(pastEvent)
  const {img1, img2, video} = pastEvent;

  let data = [
  {id:0,src:img1},
  {id:1,src:img2},
  {id:2,src:img3},
  ] 
  
  const [index, setIndex] = useState(0);

  const handleClick=(index)=>{
    console.log(index);
    const slider = data[index];
    setIndex(slider);

    if (slider.id === 2) {
      setAutoplay(true);
    } else {
      setAutoplay(false);
    }
  };

  const renderCurrentSelection = () => {
    switch (index.id) {
        case 0:
            return <Image src={index.src}/>;
        case 1:
            return <Image src={index.src}/>;
        case 2:
            return <ReactPlayer
            url={video}
            light ={img3}
            width='100%'
            height='400px'
            style={{backgroundColor:"black"}}
            playing={autoplay}
          />;
        default:
            return null;
    }
};


  
  

 
  return (
    <Container>
      <Wrapper>
      <Left>
      <ImageContainer>
      {index === 0?<Image src={img1}/>: renderCurrentSelection()}
      </ImageContainer>
      <SmallImageContainer >
        {data.map((item, i) =>
        <SmallImage key={item.id} 
        src={item.src} 
        // className={index.id === i?"clicked":""}
        onClick={()=>handleClick(i)}></SmallImage>
          )}
      </SmallImageContainer>
      </Left>
      <Right>
      <TitleWrapper>
        <Title>{pastEvent.title}</Title>
      </TitleWrapper>
      <EventDesc>
      <TimeContext >
          <Time ><b>VENUE: </b><i>{pastEvent.venue}</i></Time>
          </TimeContext>
        <Desc>{pastEvent.desc}</Desc>
      </EventDesc>
      </Right>
      </Wrapper>
    </Container>
  )
}

export default Event