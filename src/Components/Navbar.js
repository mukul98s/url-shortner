import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Container, Link } from "../Styled Components/styled";
import logo from "../Assets/images/logo.svg";
import menu from "../Assets/images/menu.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const linksRef = useRef();
  const linksContainerRef = useRef();

  useEffect(() => {
    const height = linksRef.current.getBoundingClientRect().height;
    if (showNavbar) {
      linksContainerRef.current.style.height = `${height}px`;
    } else {
      linksContainerRef.current.style.height = 0;
    }
  }, [showNavbar]);

  return (
    <Wrapper>
      <Container>
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="shortly" />
            <button onClick={() => setShowNavbar((prev) => !prev)}>
              <img src={menu} alt="menu" />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <div className="links" ref={linksRef}>
              <div>
                <Link href="/">Features</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">Resources</Link>
              </div>
              <div>
                <Link>Login</Link>
                <Link button>Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 560px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .nav-container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .nav-logo {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        background: transparent;
        border: none;
        outline: none;
        font-size: 1rem;
        opacity: 0.6;
        display: none;
        cursor: pointer;
        @media (max-width: 768px) {
          display: block;
        }
      }
    }

    .links-container {
      height: 0;
      z-index: 1000;
      transition: all linear 0.3s;
      @media (max-width: 768px) {
        overflow: hidden;
        background: var(--dark-violet);
        margin-top: 1rem;
        border-radius: 15px;
      }

      .links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 768px) {
          flex-direction: column;
          width: 100%;
          padding-bottom: 2rem;
          padding-top: 2rem;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          &:first-child {
            div:first-child {
              border-bottom: 2px solid var(--gray);
              padding-bottom: 2rem;
            }
          }
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          @media (max-width: 768px) {
            flex-direction: column;
            gap: 2rem;
            width: 100%;
          }
        }
      }
    }
  }
`;

export default Navbar;
