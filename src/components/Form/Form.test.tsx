import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("<Form />", () => {
  test("testa se esta renderizando o formulario", () => {
    render(<Form />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/Nome:/i)).toBeInTheDocument();

    expect(screen.getAllByRole("button").length).toBe(2);
    expect(
      screen.getByRole("button", {
        name: "Enviar dados",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Cancelar",
      })
    ).toBeInTheDocument();
  });

  test("testa se esta chamando o callback após submit do formulario", async () => {
    /**
     * Renderizar o formulario
     * Verificar se os elementos estão presentes
     * Verificar se a mensagem de erro não esta visivel
     * Clicar no botão de submit
     * Verificar se a mensagem de erro está visivel
     *
     * Preencher o input
     * Verificar se a mensagem de erro não esta visivel
     * Clicar no botão de submit
     *
     * deverá chamar a prop onSubmit do componente Form
     *
     */

    const mockOnSubmit = jest.fn();

    // Renderizar o formulario
    render(<Form onSubmit={mockOnSubmit} />);

    // Verificar se os elementos estão presentes
    const inputName = screen.getByRole("textbox");
    expect(inputName).toBeInTheDocument();
    expect(screen.getByLabelText(/Nome:/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button").length).toBe(2);

    const btnSubmit = screen.getByRole("button", {
      name: "Enviar dados",
    });
    expect(btnSubmit).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Cancelar",
      })
    ).toBeInTheDocument();

    // Verificar se a mensagem de erro não esta visivel
    expect(
      screen.queryByText(/Nome Is A Required Field/i)
    ).not.toBeInTheDocument();

    // Clicar no botão de submit
    userEvent.click(btnSubmit);

    // Verificar se a mensagem de erro está visivel
    expect(
      await screen.findByText(/Nome Is A Required Field/i)
    ).toBeInTheDocument();

    // Preencher o input
    userEvent.type(inputName, "josé da silva");

    // Verificar se a mensagem de erro não esta visivel
    await waitFor(() =>
      expect(
        screen.queryByText(/Nome Is A Required Field/i)
      ).not.toBeInTheDocument()
    );

    // Clicar no botão de submit
    userEvent.click(btnSubmit);

    // deverá chamar a prop onSubmit do componente Form
    await waitFor(() =>
      expect(mockOnSubmit).toBeCalledWith({
        nome: "josé da silva",
      })
    );
  });
});
