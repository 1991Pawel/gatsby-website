import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  @media (min-width: 576px) {
    display: flex;
    justify-content: flex-start;
  }
`
const Nav = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2ea9e0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 9;

  @media (min-width: 576px) {
    position: static;
    height: 4rem;
    transform: translateX(0);
    flex-direction: row;
    background: transparent;
    justify-content: flex-start;
  }

  li {
    list-style: none;
    margin: 1.25rem 0;
  }

  a {
    padding: 1rem;
    display: block;
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 700;
    color: #0d0c1d;
    text-decoration: none;

    @media (min-width: 576px) {
      margin-right: 1rem;
      padding: 0.5rem;
    }

    &:hover {
      color: #ccc;
    }
  }
`

const BurgerWrappepr = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 99;

  @media (min-width: 576px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #0d0c1d;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Navigation = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <BurgerWrappepr open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerWrappepr>
      <NavigationWrapper>
        <Nav open={open} onClick={() => setOpen(!open)}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </Nav>
      </NavigationWrapper>
    </>
  )
}

export default Navigation
