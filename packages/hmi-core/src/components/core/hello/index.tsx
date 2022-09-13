
import React from 'react';

export interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => (
  <div>
    <p>Hello, {name}</p>
  </div>
);

export default Hello;