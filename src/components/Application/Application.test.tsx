import { render, screen } from "@testing-library/react";

import Application from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", { level: 1 });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    const inputElement = screen.getByRole("textbox", { name: "Name" });
    expect(inputElement).toBeInTheDocument();

    const inputElement2 = screen.getByLabelText("Name");
    expect(inputElement2).toBeInTheDocument();

    const inputElement3 = screen.getByPlaceholderText("Full Name");
    expect(inputElement3).toBeInTheDocument();

    const inputElement4 = screen.getByDisplayValue("Monika");
    expect(inputElement4).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();

    // const checkboxElement2=screen.getByText("I agree  to the terms and conditions ")
    // expect(checkboxElement2).toBeInTheDocument()

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();

    const textareaElement = screen.getByRole("textbox", { name: "Bio" });
    expect(textareaElement).toBeInTheDocument();

    const paragraphElement = screen.getByText(
      "Lorem ipsum dolor sit amet consectetur a",
    );
    expect(paragraphElement).toBeInTheDocument();

    const paragraphElement1 = screen.getByText("Lorem ipsum", { exact: false });
    expect(paragraphElement1).toBeInTheDocument();

    // const paragraphElement2=screen.getByText(/^lorem ipsum$/i)
    // expect(paragraphElement2).toBeInTheDocument()

    const paragraphElement3 = screen.getByText((content) =>
      content.startsWith("Lorem"),
    );
    expect(paragraphElement3).toBeInTheDocument();

    const imageElement = screen.getByAltText("Leaf");
    expect(imageElement).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const dataTestElement = screen.getByTestId("custom-element");
    expect(dataTestElement).toBeInTheDocument();
  });
});
