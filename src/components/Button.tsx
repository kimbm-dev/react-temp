import * as React from "react";
import styled from "styled-components";


interface InterfaceProperties {
  primary?: boolean;
  onClick: () => void;
}

const OnButton = styled.button`
  -webkit-appearance: none;
  outline: none;
  font-size: 1.2em;
  margin: 1em;
  padding: 0.25em 0.75em;
  border-radius: 3.5px;
  border: 0.5px solid;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  :active {
    background-color: rgba(0, 0, 0, 0.2);
  }
  ${(props: InterfaceProperties) =>
    props.primary &&
    `
  `};
`;

export const Button: React.SFC<InterfaceProperties> = ({ ...props }) => <OnButton {...props} />;
