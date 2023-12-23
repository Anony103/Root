import React from 'react';
import styled from 'styled-components';

const PageNumbers = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

const List = styled.li`
  padding: 10px;
  border: 1px solid #ebebeb;
  border-radius: 6px;
  cursor: pointer;
  &:active {
    background: rgb(95, 64, 95);
    background: linear-gradient(
      180deg,
      rgba(250, 175, 250, 1) 0%,
      rgba(59, 50, 59, 1) 100%
    );
    color: black;
  }
`;

const Button = styled.button`
  background: rgb(95, 64, 95);
  background: linear-gradient(
    180deg,
    rgba(250, 175, 250, 1) 0%,
    rgba(59, 50, 59, 1) 100%
  );
  border-radius: 8px;
  border: none;
  padding: 5px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: #9ecfe5;
    color: black;
  }
  &:focus {
    outline: none;
  }
`;

const Pagination = ({
  currentPage,
  pages,
  maxPageNumberLimit,
  minPageNumberLimit,
  handleNextbtn,
  handlePrevbtn,
  handleClick,
}) => {
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <List
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? 'active' : null}
        >
          {number}
        </List>
      );
    } else {
      return null;
    }
  });

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  return (
    <PageNumbers>
      <li>
        <Button onClick={handlePrevbtn} disabled={currentPage === pages[0]}>
          Prev
        </Button>
      </li>
      {pageDecrementBtn}
      {renderPageNumbers}
      {pageIncrementBtn}
      <li>
        <Button
          onClick={handleNextbtn}
          disabled={currentPage === pages[pages.length - 1]}
        >
          Next
        </Button>
      </li>
    </PageNumbers>
  );
};

export default Pagination;
