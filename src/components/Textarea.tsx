import * as React from 'react';
import styled from 'styled-components';

interface ITextarea {
  rows?: number;
  cols?: number;
};

const OnTextArea = styled.textarea.attrs({

})`
-webkit-appearance: none;
outline: none;
border: none;
border: 0.5px solid;
`;

export const Textarea: React.SFC<ITextarea> = ({ ...props }) =>(
  <OnTextArea cols={props.cols} rows={props.rows} />
)