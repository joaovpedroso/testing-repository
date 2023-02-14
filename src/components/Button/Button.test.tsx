import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("<Button />", () => {
  it("should render L1", () => {
    render(<Button>Teste</Button>);
    expect(screen.getByText("Teste")).toBeTruthy();
  });

  it("should render onClick", () => {
    const mockOnClick = jest.fn();
    render(
      <Button onClick={mockOnClick} data-testid="botao-de-teste">
        Teste
      </Button>
    );

    const button = screen.getByTestId("botao-de-teste");
    userEvent.click(button);
    expect(mockOnClick).toBeCalled();
  });

  it("should render onClick value", () => {
    const mockOnClick = jest.fn();
    render(
      <Button
        onClick={() => mockOnClick({ ola: "teste" })}
        data-testid="botao-de-teste"
      >
        Teste
      </Button>
    );

    const button = screen.getByTestId("botao-de-teste");
    userEvent.click(button);
    expect(mockOnClick).toBeCalledWith({
      ola: "teste",
    });
    
  });
});
