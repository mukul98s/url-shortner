import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
      <Banner />
      <Search />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .search-container {
    position: relative;
    height: max-content;
    display: block;
  }
`;
export default Header;
