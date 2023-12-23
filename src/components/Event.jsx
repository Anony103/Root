/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import EventItem from './EventItem';
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../config/Firebase-config'
import { useState, useEffect } from 'react';
import Pagination from './Pagination';




export const Container = styled.div`
  margin-bottom:10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap:wrap ;
  justify-content: center;
`;


export const PageNumbers = styled.ul`
list-style: none;
    display: flex;
    align-items:center;
    justify-content:center;
    gap:2px;
`;

export const List = styled.li`
padding: 10px;
border: 1px solid #ebebeb;
border-radius:6px;
    cursor: pointer;
    &:active{
        background: rgb(95, 64, 95);
  background: linear-gradient(180deg, rgba(250,175,250,1) 0%, rgba(59,50,59,1) 100%);
    color: black;
    }
`;

export const Button = styled.button`
background: rgb(95, 64, 95);
  background: linear-gradient(180deg, rgba(250,175,250,1) 0%, rgba(59,50,59,1) 100%);
border-radius:8px;
    border: none;
    padding:5px;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover{
        background-color: #9ecfe5;
    color: black;
    }
    &:focus{
        outline: none;
    }
`;

export const EmptyTitle = styled.div`
  padding: 50px;
  font-size:28px;
  text-align: center;
  font-weight: bold;

`;

export const Empty = styled.p`


`;



export const Section = styled.section`
min-height: calc(100vh - 200px);
`;

const renderData = (pastEvent) => {
  return (
    <Wrapper>
      {pastEvent.length < 1 && (
              <Empty>
                
              </Empty>
          )}
    {pastEvent.map((item) => 
    <EventItem item={item} key={item.id}/>
    )}
    </Wrapper>
  );
};

const Products = () => {
  const [pastEvent, setPastEvent] = useState([])
  const [currentPage, SetCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);


    useEffect(() => {
      const fetchEvent = async () => {
        const EventSnapshot = await getDocs(collection(db, "pastEvent"));
        setPastEvent(EventSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
        fetchEvent();
    },[]);
    const handleClick = (event) => {
        SetCurrentPage(Number(event.target.id));
  };

    const pages = [];
    for (let i = 1; i <= Math.ceil(pastEvent.length / 8); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pastEvent.slice(indexOfFirstItem, indexOfLastItem);


    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <List
              key={number}
              id={number}
              onClick={handleClick}
              className={currentPage == number ? "active" : null}
            >
              {number}
            </List>
          );
        } else {
          return null;
        }
      });

      const handleNextbtn = () => {
        SetCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
          setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
      };
      const handlePrevbtn = () => {
        SetCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit == 0) {
          setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
      };
      let pageIncrementBtn = null;
      if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
      }

      let pageDecrementBtn = null;
      if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
      }


  return (
    <Container>
      <Section>
      {renderData(currentItems)}
      </Section>


         {/* <PageNumbers>
        <li>
          <Button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </Button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <Button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </Button>
        </li>
      </PageNumbers> */}

<Pagination
        currentPage={currentPage}
        pages={pages}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        handleNextbtn={handleNextbtn}
        handlePrevbtn={handlePrevbtn}
        handleClick={handleClick}
      />

    </Container>
  )
}

export default Products