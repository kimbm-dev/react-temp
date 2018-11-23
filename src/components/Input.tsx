import * as React from 'react';
import styled from "styled-components";

interface IProperties {
  type: string;
}

const OnInput = styled.input.attrs({})`
  -webkit-appearance: none;
  outline: none;
  font-size: 1em;
  border: none;
  border-bottom: 1px solid rgb(50, 50, 50);
  margin: 0.5em 1em;
  padding-bottom: 4px;
`;

export const Input: React.SFC<IProperties> = (props: IProperties) => (
  <div>
    <OnInput type={props.type} />
  </div>
)