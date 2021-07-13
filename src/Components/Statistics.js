import React from "react";
import styled from "styled-components";
import { Container } from "../Styled Components/styled";
import record from "../Assets/images/icon-detailed-records.svg";
import customizable from "../Assets/images/icon-fully-customizable.svg";
import brand from "../Assets/images/icon-brand-recognition.svg";
import Card from "./Card";

const Statistics = () => {
  return (
    <Wrapper>
      <Container>
        <div className="title">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with an advanced
            statistics dashboard.
          </p>
        </div>
        <div className="cards-container">
          <Card
            img={brand}
            title="Brand Recognition"
            content="Boost Your Brand Recognition with each click. Generic links don't mean a thing. Branded links helps instill confidence in your content"
            id={0}
          />

          <Card
            img={record}
            title="Detailed Records"
            content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision"
            id={1}
          />

          <Card
            img={customizable}
            title="Fully Customizable"
            content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement"
            id={2}
          />
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: rgba(0, 0, 0, 0.12);
  padding: 3rem 0;

  .title {
    width: 50%;
    margin: 0 25%;
    text-align: center;
    @media (max-width: 768px) {
      width: 90%;
      margin: 0 5%;
    }

    h1 {
      opacity: 0.8;
      font-size: 2rem;
      margin-bottom: 1rem;
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
    p {
      opacity: 0.5;
    }
  }

  .cards-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    margin: 8rem auto 10rem;
    @media (max-width: 1024px) {
      width: 50%;
      grid-template-columns: 1fr;
    }
    @media (max-width: 560px) {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
`;

export default Statistics;
