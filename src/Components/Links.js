import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../State/GlobalState";
import { Container } from "../Styled Components/styled";
import LinkPreview from "./LinkPreview";

const Links = () => {
  const { isShortening, shortenedUrls, error } = useContext(GlobalContext);

  return (
    <Wrapper>
      <Container>
        <div
          className={`loading ${
            isShortening ? "show-loading" : "hide-loading"
          }`}
        >
          <p>Shortening Link...</p>
        </div>

        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}

        <div className="links-container">
          {shortenedUrls.map((url, index) => {
            const { original_link, full_short_link2 } = url;
            return (
              <LinkPreview
                key={index}
                original_link={original_link}
                full_short_link2={full_short_link2}
              />
            );
          })}
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: rgba(0, 0, 0, 0.12);
  padding-top: 7rem;
  padding-bottom: 1rem;

  .loading {
    text-align: center;
    margin: 2rem auto;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--grayish-violet);
  }
  .show-loading {
    display: block;
  }
  .hide-loading {
    display: none;
  }

  .error {
    margin: 1rem auto;

    p {
      color: var(--red);
    }
  }

  .links-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    @media (max-width: 768px) {
      margin: 3rem auto;
    }
  }
`;

export default Links;
