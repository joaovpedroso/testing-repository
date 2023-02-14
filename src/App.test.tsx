import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("<App />", () => {
  test("renders oi meu chapa! link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Oi meu chapa!/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("should render is submited message", async () => {
    render(<App />);

    const inputName = screen.getByRole("textbox");
    expect(inputName).toBeInTheDocument();

    const btnSubmit = screen.getByRole("button", {
      name: "Enviar dados",
    });
    expect(btnSubmit).toBeInTheDocument();

    userEvent.click(btnSubmit);
    expect(screen.queryByText(/Formulario enviado/i)).not.toBeInTheDocument();

    userEvent.type(inputName, "josé da silva");
    userEvent.click(btnSubmit);

    expect(await screen.findByText(/Formulario enviado/i)).toBeInTheDocument();
  });
});
