import React from 'react'
import Contacts from "../components/Contact"
import styled from 'styled-components';

export const Container = styled.div`
padding:0;
margin:0;
overflow: hidden;
background-color:#f9f7fa ;
`;

const Contact = () => {
  return (
    <React.Fragment>
       <main>
       <Contacts />
       </main>
    </React.Fragment>
  )
}

export default Contact
