import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { Container } from "../Styled Components/styled";
import bgBoostDesktop from "../Assets/images/bg-boost-desktop.svg";
import bgBoostMobile from "../Assets/images/bg-boost-mobile.svg";
import { GlobalContext } from "../State/GlobalState";

const Search = () => {
  const [url, setUrl] = useState("");
  const wrapperRef = useRef();
  const divRef = useRef();
  const [wrongUrl, setWrongUrl] = useState(false);

  const { shortenUrl } = useContext(GlobalContext);

  useEffect(() => {
    let height = divRef.current.getBoundingClientRect().height;
    wrapperRef.current.style.height = `${height}px`;
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (url) {
        shortenUrl(url);
        setUrl("");
      } else {
        setWrongUrl(true);
        setTimeout(() => setWrongUrl(false), 2000);
      }
    },
    [url, shortenUrl]
  );

  return (
    <Container>
      <Wrapper ref={wrapperRef}>
        <div ref={divRef}>
          <div className="search-field">
            <form onSubmit={handleSubmit} className="input-field">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                placeholder="Shorten a link here..."
                className={`${wrongUrl ? "show-input-error" : ""}`}
              />
              <p className={`${wrongUrl ? "show-error" : ""}`}>
                <em>Please add a link</em>
              </p>
            </form>
            <button onClick={handleSubmit}>Shorten It!</button>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.section`
  position: relative;
  @media (max-width: 560px) {
  }

  > div {
    width: 100%;
    position: absolute;
    top: 50%;
    border-radius: 10px;
    background-size: cover;
    background: var(--dark-violet);
    background-repeat: no-repeat;
    padding: 3rem 5rem;
    background-image: url(${bgBoostDesktop});
    @media (max-width: 560px) {
      background-image: url(${bgBoostMobile});
      padding: 2rem 2rem;
      width: 90vw;
    }
  }

  .search-field {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }

    .input-field {
      flex: 4;
      @media (max-width: 768px) {
        flex: 1;
        width: 100%;
      }

      input {
        background: white;
        border: 2px solid transparent;
        outline: none;
        padding: 1rem;
        border-radius: 10px;
        font-size: 1.2rem;
        width: 100%;
        &::placeholder {
          opacity: 0.4;
        }
      }
      .show-input-error {
        border: 2px solid var(--red);
        transition: all ease 0.2s;
        &::placeholder {
          color: var(--red);
        }
      }

      p {
        height: 0;
        display: none;
        color: var(--red);
      }
      .show-error {
        transition: all ease 0.2s;
        display: block;
      }
    }

    button {
      display: block;
      background: var(--cyan);
      border: none;
      outline: none;
      cursor: pointer;
      color: #fff;
      font-size: 1.2rem;
      border-radius: 10px;
      padding: 1rem 2rem;
      @media (max-width: 768px) {
        width: 100%;
        flex: 1;
      }
    }
  }
`;

export default Search;
