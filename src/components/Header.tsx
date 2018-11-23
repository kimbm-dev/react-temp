import * as React from 'react';

interface IHeader {
  fontFamily?: string;
  size?: string;
}

export const Header: React.SFC<IHeader> =({...props}) => (
  <div>
    <h1></h1>
  </div>
)