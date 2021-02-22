import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="main">
    <>
      <Button buttons={['AC', '+/-', '%', '/']} />
      <Button buttons={['7', '8', '9', 'X']} />
      <Button buttons={['4', '5', '6', '-']} />
      <Button buttons={['1', '2', '3', '+']} />
      <Button buttons={['0', '.', '=']} />
    </>
  </div>
);

export default ButtonPanel;
