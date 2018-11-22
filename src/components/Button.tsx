import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
font-size: 1erm;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
color ${props => props.theme.main};
border: 2px solid ${props => props.theme.main};
`;

export const Foo = (props: { name: string }) => {
  return <Button>{props.name}</Button>;
};
