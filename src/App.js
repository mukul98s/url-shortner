import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Links from "./Components/Links";
import Statistics from "./Components/Statistics";
import { GlobalProvider } from "./State/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Links />
      <Statistics />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
