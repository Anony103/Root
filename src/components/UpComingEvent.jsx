import {Container,
  TitleWrapper,
  Title,
  Wrapper,
  Pack,
  ImageContainer,
  Image,
  Context,
  ContextTitle,
  TimeContext,
  Time,
  Desc,
  LinkWrapper,
  Empty,
  EmptyTitle,
  View
} from  './UpComingEventStyle'
import { collection, getDocs, query,where } from 'firebase/firestore';
import {db} from '../config/Firebase-config'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";




// eslint-disable-next-line react/prop-types
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Desc >
      {isReadMore ? text.slice(0, 100) : text}
      <View onClick={toggleReadMore} >
        {isReadMore ? "view more" : " "}
      </View>
    </Desc>
  );
};


const UpComingEvent = () => {

  const [upComingEvent, setUpComingEvent] = useState([])

  useEffect(() => {
    const fetchEvent = async () => {
      const todayDate = new Date();

      const EventSnapshot = await getDocs(query(collection(db, "upComingEvent"),where('date', '>=', todayDate)));
      setUpComingEvent(EventSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      };
      fetchEvent();
  },[]);



  return (
    <Container>
      <TitleWrapper>
        <Title>UPCOMING EVENT</Title>
      </TitleWrapper>
    <Wrapper>
    {upComingEvent.length < 1 && (
              <Empty>
                <EmptyTitle>Check out for Upcoming Event</EmptyTitle>
              </Empty>
          )}
        {upComingEvent.map(({id, date,img,title ,desc }) => {
          return(
            <Link to={`/upcomingEvent/${id}`} key={id}> 
      <Pack >
          <ImageContainer >
        <Image src={img} alt="" />
        </ImageContainer>
        <Context >
            <ContextTitle >{title}</ContextTitle>
            <TimeContext >
            <Time >{date.toDate().toLocaleString()}</Time>
            </TimeContext>
            <ReadMore >{desc}</ReadMore>
            <LinkWrapper>
            </LinkWrapper>
        </Context>
       </Pack>
       </Link>
          );
         })}
           </Wrapper>
           </Container>
      )
    }

export default UpComingEvent
