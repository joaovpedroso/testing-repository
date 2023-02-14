import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("<Input />", () => {
  it("should render", () => {
    render(<Input placeholder="Input test" />);

    expect(screen.getByPlaceholderText(/Input test/i)).toBeInTheDocument();
  });

  it("should call onChange on change input value", () => {
    const mockOnChange = jest.fn();

    render(
      <Input
        placeholder="Input test"
        data-testid="andre-boiola"
        onChange={mockOnChange}
      />
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();

    const newInputValue = "text input value";
    userEvent.type(inputElement, newInputValue);

    expect(inputElement).toHaveValue(newInputValue);
    expect(mockOnChange).toBeCalled();
  });
});
