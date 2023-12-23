import styled from 'styled-components';
import Event from "../components/Event"
import React from 'react'


export const Main = styled.div`
padding:20px;
margin:0;

`;

const Services = () => {
  return (
    <React.Fragment>
       <Main>
          <Event />
       </Main>
    </React.Fragment>
  )
}

export default Services
