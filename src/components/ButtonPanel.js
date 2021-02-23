import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const group1 = ['AC', '+/-', '%', '/'];
  const group2 = ['7', '8', '9', 'X'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];

  return (
    <div className="main">
      <>
        <Button name={group1} />
        <Button name={group2} />
        <Button name={group3} />
        <Button name={group4} />
        <Button name={group5} />
      </>
    </div>
  );
};

export default ButtonPanel;
