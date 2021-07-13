import React from "react";
import styled from "styled-components";

const Card = ({ img, title, content, id }) => {
  return (
    <Wrapper style={{ transform: `translateY(${id * 30}%)` }}>
      <div className="card-container">
        <div className="image">
          <img src={img} alt={title} />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: #fff;
  border-radius: 5px;
  /* transform: translate(0, 0) !important; */

  .card-container {
    position: relative;
    padding: 0rem 2rem;

    .image {
      background: var(--dark-violet);
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -25%;
      transform: translateY(25%);
      @media (max-width: 1024px) {
        left: 50%;
        top: -2.5rem;
        transform: translate(-50%, 0);
      }
      img {
        object-fit: contain;
      }
    }

    .content {
      padding: 2rem 0;
      @media (max-width: 1024px) {
        text-align: center;
      }

      h3 {
        opacity: 0.8;
        padding: 2rem 0 1rem;
      }
      p {
        opacity: 0.4;
        @media (max-width: 560px) {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default Card;
