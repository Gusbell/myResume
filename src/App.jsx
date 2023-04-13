import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="max-w-7xl relative">
      <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-1/3">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
