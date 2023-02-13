import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background: var(--medium);
  color: var(--light);
  padding: 8px;
  border-radius: 4px;
  width: 200px;
  border: 2px solid var(--light);

  &:hover {
    color: var(--medium);
    background: var(--light);
    border: 2px solid var(--medium);
  }
`;

export default Button;
