import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test("greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});
// describe("Nested",()=>{
//     test("greet renders correctly with a name",()=>
// {
//     render(<Greet name={"Monika"}/>)
//     const textElement=screen.getByText("Hello Monika")
//     expect(textElement).toBeInTheDocument();
// })
// })
