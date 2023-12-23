import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import './Form.css'

export const Modal = styled.div`
display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);`;

export const Wrapper = styled.div`
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
`;

export const Close = styled.span `
  position: absolute;
  right: 10px;
  top: 0;
  cursor: pointer;
`


export const Forms = styled.form`
  display: flex;
  flex-direction:column ;
`;
export const Title = styled.h1`
  font-size  :32px ;
font-weight:700 ;
text-align:center ;
margin-bottom: 20px;
`;

export const TitleDesc = styled.p`
font-size  :16px ;
font-weight:300 ;
width:100%;
text-align:left;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items:center ;
  margin:4px ;
`;

export const Desc = styled.label`
  margin:1rem ;
  text-align:center ;
`;

export const Textbox = styled.input`
   flex:1 ;
  min-width: 80%;
  margin: 10px 0px ;
  padding: 10px;
  border-radius:10px ;
  border:2px solid #f1f2f7 ;
  font-family:Verdana, Geneva, Tahoma, sans-serif ;
  @media (max-width: 700px) {
    min-width: 50%;
}
`;

export const MessageBox = styled.textarea`
  flex:1 ;
  height:130px;
  min-width: 80%;
  margin: 10px 0px ;
  padding: 10px;
  border-radius:10px ;
  border:2px solid #f1f2f7 ;
  font-family:Verdana, Geneva, Tahoma, sans-serif ;
  @media (max-width: 700px) {
  min-width: 50%;
}
`;

export const Submit = styled.button`
  width: 80%;
  border:none ;
  padding:15px 20px;
  background: rgb(95, 64, 95);
  background: linear-gradient(180deg, rgba(250,175,250,1) 0%, rgba(59,50,59,1) 100%);
  color:white ;
  cursor: pointer;
  margin: 15px 0px;
  border-radius:10px ;
  
  &:hover{
    transform: scale(1.1,1.1)
  }
`;


const Form = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const SubmitHandler = async (e) => {
    e.preventDefault();
    e.target.reset();
    if(!name || !email  ) {
      return toast.error('Please fill email, subject and message');
    }
    try{
     setLoading(true);
     const {data} = await axios.post('https://wicked-glasses-dove.cyclic.cloud/',{
      name,
      email,
      // subject,
      // message,
      });
      setLoading(false)
      toast.success(data.message || "message sucessfully sent");
      onClose();
    }catch(err){
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      )
    }
   }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log(formData);
  //   onClose(); // Close the modal after submission
  // };

  return (
    <div className={`modal ${isOpen ? 'is-open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <Title>Form Modal</Title>
        <Forms onSubmit={SubmitHandler}>
        <ToastContainer />
      <TextContainer>
      <Desc htmlFor={'name'}>Name</Desc>
      <Textbox type="text" id='name' style={{marginLeft:"20px"}} onChange={(e) => setName(e.target.value)}/>
        </TextContainer>
        <TextContainer>
      <Desc htmlFor={'email'}>Email</Desc>
      <Textbox type="email" id='email' style={{marginLeft:"25px"}} onChange={(e) => setEmail(e.target.value)}/>
        </TextContainer>
        <TextContainer style={{justifyContent:"center"}}>
      <Submit disabled={loading} type='submit'>{loading ? 'Sending...' : 'Submit'}</Submit>
     </TextContainer>
        </Forms>
      </div>
    </div>
  );
};

export default Form;
