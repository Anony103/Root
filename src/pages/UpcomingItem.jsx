import styled from 'styled-components';
import { doc,  setDoc,  getDoc, collection, addDoc} from 'firebase/firestore';
import {db} from '../config/Firebase-config'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import Root16Logo from '../assets/root16.png'
import { Link } from "react-router-dom";

export const Container = styled.div`
border-radius:20px ;
margin-bottom: 20px;

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
  @media (max-width: 700px) {
  padding: 10px 20px;
}
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

  .react-player{
    
  }

  .none{
    display:none;
  }
 

`;



export const Image = styled.img`
  border-radius: 15px;
   background-color: #ebebeb;
  width: 600px;
  height: 400px;
  cursor: pointer;
  transition: .3s ease-in-out;


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
  font-size :16px ;
 line-height: 20px;
 font-weight: 200px;
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
  margin-top: 10px;
  margin-bottom: 10px;
  gap:10px;
`;

export const Time = styled.p`
 font-size :12px ;
 line-height: 16px;
`;

export const Botton = styled.button`
  padding: 10px 15px;
  font-size: 20px;
  line-height: 28px;
  justify-content: center;
  align-content: center;
  color:#ffffff;
  text-align: center;
  border-radius: 6px;
  margin-top: 40px;
  background: rgb(95, 64, 95);
  background: linear-gradient(180deg, rgba(250,175,250,1) 0%, #3b323b 100%);

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

const ModalOverlay = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%; /* Make the modal width 90% */
  max-width: 500px; /* Set a maximum width */
  border-radius: 10px;
  border: 2px solid #f1f2f7;
  transform: translate(-50%, -50%);
  background: white;
  padding: 10px; /* Reduce padding for small screens */
  z-index: 1001;

  @media (max-width: 700px) {
    padding: 20px;
    max-width: 100%; /* Adjust max-width for smaller screens */
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:left ;
  margin:4px ;
  gap: 0px;
  @media (max-width: 700px) {
    gap: 5px;
}
  /* background-color:red; */
`;

export const Descs = styled.label`
  text-align: left;
  font-size: 12px; /* Adjust font size for small screens */

`;

export const Textbox = styled.input`
   flex:1 ;
  min-width: 80%;
  margin: 10px 0px ;
  padding: 8px;
  border-radius:10px ;
  border:2px solid #000000 ;
  border-style: dashed;
  font-family:Verdana, Geneva, Tahoma, sans-serif ;
  @media (max-width: 700px) {
    min-width: 90%;
}
`;

export const Select = styled.select`
  flex:1 ;
  min-width: 80%;
  margin: 10px 0px ;
  padding: 8px;
  border-radius:10px ;
  border:2px solid #f1f2f7 ;
  font-family:Verdana, Geneva, Tahoma, sans-serif ;
  @media (max-width: 700px) {
  min-width: 90%;
}
`;

export const Option = styled.option`
  font-size: 16px;
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center ;
  margin:4px ;
  gap: 0px;
  @media (max-width: 700px) {
    gap: 5px;
}
  /* background-color:red; */
`;
export const Submit = styled.button`
  width: 80%;
  border:none ;
  padding:12px 20px;
  background: rgb(95, 64, 95);
  background: linear-gradient(180deg, rgba(250,175,250,1) 0%, rgba(59,50,59,1) 100%);
  color:white ;
  cursor: pointer;
  margin: 15px 0px;
  border-radius:10px ;
  
  &:hover{
    transform: scale(1.1,1.1)
  }

  @media (max-width: 700px) {
    width: 90%; /* Adjust width for smaller screens */
  }
`;

export const FormImage = styled.div`
display: flex;
justify-content: center;
margin:40px 0 0 0;
`;

export const FImage = styled.img`
border-radius: 15px;
width
;
cursor: pointer;
transition: .3s ease-in-out;


`;

export const NewWrapper = styled.div`

`





const UpcomingItem = () => {

    const [pastEvent, setPastEvent] = useState({});
    const [date, setDate] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedTicket, setSelectedTicket] = useState("Select a Ticket");
  const [loading, setLoading] = useState(false);

    const { id } = useParams();
   console.log(id);
    
    useEffect(() => {
      const getEventId = async (id) => {
      const docRef = doc(db, "upComingEvent", id);
      const result = await getDoc(docRef);
      const data =result.data();
      setDate(data.date.toDate().toLocaleString())
      setPastEvent(data);
      setSubject(data.title);
     };
     getEventId(id)
    },[id]);
    
    console.log(pastEvent)
    const {img, img1, img2, desc, title,venue} = pastEvent;
     console.log(date)
   
    
    let data = [
    {id:0,src:img},
    {id:1,src:img1},
    {id:2,src:img2},
    ] 
    
    const [index, setIndex] = useState(0);
  
    const handleClick=(index)=>{
      console.log(index);
      const slider = data[index];
      setIndex(slider)
    };

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
    // const closeModal = () => setIsModalOpen(false);

    const addBooking = async (bookingData) => {
        try {
          const bookingRef = collection(db, 'bookings'); // Replace 'bookings' with your collection name
          const newBookingDoc = await addDoc(bookingRef, bookingData);
          const newBookingId = newBookingDoc.id;
          return newBookingId;
        } catch (error) {
          console.error('Error adding booking: ', error);
          throw error;
        }
      };
      

    
    const SubmitHandler = async (e) => {
      e.preventDefault();
      e.target.reset();
      if (!name || !email || !phoneNumber || !subject || selectedTicket === "Select a Ticket") {
        return toast.error('Please fill in all required fields');
      }
    
      try {
        setLoading(true);

        const bookingData = {
          name,
          email,
          phoneNumber,
          subject,
          ticketType: selectedTicket,
        };

        const newBookingId = await addBooking(bookingData);





        const { data } = await axios.post('https://wicked-glasses-dove.cyclic.cloud/book', {
          name,
          email,
          phoneNumber,
          subject,
          ticketType: selectedTicket,
          bookingId: newBookingId,
        });

    
        setLoading(false);
        toast.success(data.message || "Message successfully sent");
      } catch (err) {
        setLoading(false);
        toast.error(
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        );
      }
    };

    const handlePhoneNumberChange = (input) => {
      // Remove any non-digit characters (e.g., spaces, hyphens)
      const cleanedInput = input.replace(/\D/g, '');
      
      // Limit the input to a maximum of 11 digits
      const limitedInput = cleanedInput.slice(0, 11);
      
      // Update the phoneNumber state with the cleaned and limited input
      setPhoneNumber(limitedInput);
    };
    
        
    return (
    <Container>
    <Wrapper>
    <Left>
    <ImageContainer>
    {index === 0?<Image src={img}/>:<Image src={index.src}/>}
    </ImageContainer>

    


    <SmallImageContainer >
      {data.map((item, i) =>
        <SmallImage 
        key={item.id} 
        src={item.src} 
        onClick={()=>handleClick(i)}
         />
        )}
    </SmallImageContainer>
    </Left>
    <Right>
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>
    <EventDesc>
      <TimeContext >
          <Time ><b>DATE&TIME: </b>{date}</Time>
          <Time ><b>VENUE: </b><i>{venue}</i></Time>
          </TimeContext>
      <Desc>{desc}</Desc>
    </EventDesc>
    <NewWrapper>
      <Botton onClick={openModal}>Make Reservation</Botton>
      <Link to={`/menu`}> 
      <Botton style={{marginLeft:'20px'}} >Menu</Botton>
      </Link>
      <ModalOverlay isOpen={isOpen}>
        <ModalContainer isOpen={isOpen}>
          <CloseButton onClick={closeModal}>&#10005;</CloseButton>
          <FormImage>
          <FImage src={Root16Logo}/>
          </FormImage>
          <Form onSubmit={SubmitHandler}>
        <ToastContainer />
      <TextContainer>
      <Descs htmlFor={'name'}>Name</Descs>

      <Textbox type="text" id='name'  onChange={(e) => setName(e.target.value)}/>
        </TextContainer>
        <TextContainer>
      <Descs htmlFor={'email'}>Email</Descs>
      <Textbox type="email" id='email'  onChange={(e) => setEmail(e.target.value)}/>
        </TextContainer>
        <TextContainer>
      <Descs htmlFor="phone">Phone Number</Descs>
    <Textbox
    type="tel"
    id="phone"
    placeholder="Enter your phone number"
    value={phoneNumber}
    onChange={(e) => handlePhoneNumberChange(e.target.value)}
  />
</TextContainer>

        <TextContainer>
              <Descs htmlFor={'subject'}>Subject</Descs>
              <Textbox type="text" id="subject" value={subject} readOnly />
        </TextContainer>

        <TextContainer>
        <Descs htmlFor={'Select'}>Ticket</Descs>
        <Select
  value={selectedTicket}
  onChange={(e) => setSelectedTicket(e.target.value)}
>
  <Option disabled value="Select a Ticket">Select a Ticket</Option>
  <Option value="FIRST WAVE">FIRST WAVE</Option>
  <Option value="Table for 3-4">Table for 3-4</Option>
  <Option value="SQUAD First Wave (Group of 5)">SQUAD First Wave (Group of 5)</Option>
  <Option value="VIP Table for 6-8">VIP Table for 6-8</Option>
  <Option value="VIP Table for 8-10">VIP Table for 8-10</Option>
  <Option value="VVIP Table for 10-12">VVIP Table for 10-12</Option>
</Select>
        </TextContainer>
        <SubmitContainer style={{justifyContent:"center"}}>
      <Submit disabled={loading} type='submit'>{loading ? 'Sending...' : 'Submit'}</Submit>
     </SubmitContainer>
        </Form>
        </ModalContainer>
      </ModalOverlay>
    </NewWrapper>
    </Right>
    </Wrapper>
  </Container>
  )
}

export default UpcomingItem
