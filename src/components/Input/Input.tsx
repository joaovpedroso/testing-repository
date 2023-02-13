import styled from "styled-components";
import { TInput } from "./Input.types";

const Input = styled.input<TInput>`
  width: 200px;
  height: 24px;
  border: 2px solid var(--medium);
  border-radius: 4px;
  padding: 4px;

  color: var(--strong);
  font-weight: 500;
`;

export default Input;
