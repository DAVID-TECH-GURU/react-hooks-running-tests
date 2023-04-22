import React from "react";
import Article from './Article'
import Header from './Header'

function App() {
  return <div className="App">
    learn react!
    <Header/>
    <Article />
  </div>;
}
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);
  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});


export default App;
