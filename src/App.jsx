import React from "react";
import { Router } from "./routes/router";
import { Toaster } from "react-hot-toast";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-center" />
      <Router />
    </>
  );
}

export default App;
