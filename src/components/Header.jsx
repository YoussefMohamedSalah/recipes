import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GiFoodTruck } from 'react-icons/gi';
// import { BiDish } from 'react-icons/bi';

function Header() {
  return (
    <Div>
      <SLink to={'/'}>
        <GiFoodTruck />
        {/* <BiDish /> */}
        <h4>Delicious</h4>
      </SLink>
    </Div>
  );
}

const Div = styled.div`
  /* left: -10rem;
  position: relative; */
`;
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  /* background: linear-gradient(35deg, #494949, #313131); */
  width: 7rem;
  height: 5rem;
  cursor: pointer;
  transform: scale(1);

  h4 {
    color: linear-gradient(to right, #f27121, #e94057);
    font-size: 1.5rem;
    font-family: Dancing Script, sans-serif;
  }

  svg {
    color: linear-gradient(to right, #f27121, #e94057);
    font-size: 1.5rem;
  }
  /* &.active{
    background: linear-gradient(to right, #f27121, #e94057);
  } */
`;

export default Header;
