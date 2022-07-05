import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navBar";
import Calculator from "./components/calculator";

// export default class Website extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return <Calculator />;
//   }
// }

const Website = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />

        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  );
};

export default Website;
