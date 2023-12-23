import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation} from "react-router-dom";
const Navbar = lazy(() => import('./components/Navbar'));
const Homepage = lazy(() => import('./pages/Homepage'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Event = lazy(() => import('./pages/Event'));
const UpcomingItem = lazy(() => import('./pages/UpcomingItem'));
const Footer = lazy(() => import('./components/Footer'));
import styled from "styled-components";



export const Main = styled.main`
min-height: calc(100vh - 150px);
`;


function App() {

  const location = useLocation();
  const isMenuRoute = location.pathname === '/menu';
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      {/* Render Navbar unless it's the '/menu' route */}
      {!isMenuRoute && <Navbar />}
      <Main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/upcomingEvent" element={<Gallery />} />
          <Route path="/pastEvent/:id" element={<Event />} />
          <Route path="/upcomingEvent/:id" element={<UpcomingItem />} />
          <Route path="/pastEvents" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Main>
      {/* Render Footer unless it's the '/menu' route */}
      {!isMenuRoute && <Footer />}
    </Suspense>
  </div>
  )
}

export default App