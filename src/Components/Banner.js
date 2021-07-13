import React from "react";
import styled from "styled-components";
import illustrate from "../Assets/images/illustration-working.svg";
import { Link } from "../Styled Components/styled";

const Banner = () => {
  return (
    <Wrapper>
      <div className="banner__text">
        <h1>More than just shorter Links</h1>
        <p>
          Build you brand's recognistion and get detialed insights on how your
          links are performing
        </p>
        <Link href="/" buttonLarge>
          Get Started
        </Link>
      </div>
      <div className="banner__image">
        <img src={illustrate} alt="working" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;
  max-width: 1440px;
  width: 80vw;
  gap: 4rem;
  @media (max-width: 560px) {
    flex-direction: column-reverse;
    margin: 2rem auto;
  }

  .banner__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    flex: 1;
    @media (max-width: 560px) {
      align-items: center;
      text-align: center;
    }

    h1 {
      font-size: 4rem;
      line-height: 5rem;
      @media (max-width: 1024px) {
        font-size: 2rem;
        line-height: 2.5rem;
      }
    }

    p {
      opacity: 0.5;
      margin-top: 1rem;
      margin-bottom: 2.5rem;
    }
  }

  .banner__image {
    flex: 1;
    img {
      width: 100%;
    }
  }
`;

export default Banner;
