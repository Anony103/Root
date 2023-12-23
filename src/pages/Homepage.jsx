import React, {Suspense} from "react"
import Promo from "../components/Promo"
import UpComingEvent from "../components/UpComingEvent"

// import PrevEvent from "../components/PrevEvent"
import OurService from "../components/OurService"

import styled from 'styled-components';
const PrevEvent = React.lazy(() => import('../components/PrevEvent'));
export const Container = styled.div`
padding:0;
margin:0;
overflow: hidden;
`;

export const Main = styled.div`

`;

const Homepage = () => {
  return (
    <div>
       <Main>
        <Promo/>
        <UpComingEvent/>
        <Suspense fallback={<div>Loading...</div>}>
        <PrevEvent/>
        </Suspense>
        <OurService/>
       </Main>
    </div>
  )
}

export default Homepage
