import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders oi meu chapa! link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Oi meu chapa!/i);
  expect(linkElement).toBeInTheDocument();
});
