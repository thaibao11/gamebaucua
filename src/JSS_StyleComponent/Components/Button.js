import styled from "styled-components";

export const Button = styled.button`
  color: red;
  background-color: ${(props) => (props.bg_primary ? "blue" : "green")};
  &:hover {
    color: white;
    background-color: red;
    cursor: pointer;
  }
`;

export const SecondButton = styled(Button)`
  color: black;
`;
