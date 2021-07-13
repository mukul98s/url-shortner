import React, { useRef, useState } from "react";
import styled from "styled-components";

const LinkPreview = ({ original_link, full_short_link2 }) => {
  const [isCopied, setIsCopied] = useState(false);
  const buttonRef = useRef();

  const copyToClipboard = () => {
    setIsCopied(true);
    const el = document.createElement("textarea");
    el.value = full_short_link2;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <Wrapper>
      <p>{original_link.slice(0, 27) + "..."}</p>
      <p className="short">{full_short_link2}</p>
      <button
        onClick={copyToClipboard}
        className={`${isCopied ? "copied" : "copy"}`}
        ref={buttonRef}
      >
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fff;
  display: grid;
  grid-template-columns: 4fr 3fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 10px;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 1rem;
    text-align: center;
    padding: 0;
  }

  p {
    font-weight: 700;
    opacity: 0.8;
    &:first-child {
      @media (max-width: 768px) {
        border-bottom: 2px solid var(--gray);
      }
    }
    @media (max-width: 768px) {
      padding: 1rem;
    }
  }
  .short {
    color: var(--cyan);
    opacity: 1;
  }

  button {
    border: none;
    outline: none;
    padding: 1rem 3rem;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
    @media (max-width: 768px) {
      margin: auto 10% 1rem;
    }
  }
  .copy {
    background: var(--cyan);
  }
  .copied {
    background: var(--very-dark-violet);
  }
`;

export default LinkPreview;
