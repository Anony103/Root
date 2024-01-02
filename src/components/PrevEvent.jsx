import {TitleWrapper,Title} from  './UpComingEventStyle'
import {
  Container,
  Wrapper,
  EmptyTitle,
  Empty
  // Context,
  // Desc
} from "./PrevEventStyle";
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../config/Firebase-config'
import { useState, useEffect } from 'react';
import EventItem from './EventItem';



const PrevEvent = () => {

  const [pastEvent, setPastEvent] = useState([])

  useEffect(() => {
    const fetchEvent = async () => {
      const EventSnapshot = await getDocs(collection(db, "pastEvent"));
      setPastEvent(EventSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      };
      fetchEvent();
  },[]);



 console.log(pastEvent)


  return (
    <Container >
      <TitleWrapper style={{marginTop:"60px",marginBottom:'30px'}}>
        <Title >CHECK OUT OUR PAST EVENT</Title>
      </TitleWrapper>
      {pastEvent.length < 1 && (
              <Empty>
                {/* <EmptyTitle>This page is currently under construction.</EmptyTitle> */}
              </Empty>
          )}
      <Wrapper>
      {pastEvent.slice(0,4).map((item) => 
    <EventItem item={item} key={item.id}/>
    )}
      </Wrapper>
    </Container>
  )
}

export default PrevEvent
