import React from 'react';
import Button from './Button';

const ButtonPanel = ({onClick}) => {
  const group1 = ['AC', '+/-', '%', '/'];
  const group2 = ['7', '8', '9', 'X'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];

  return (
    <div className="main">
      <div>
        {group1.map(item => (
          <Button key={`${item} + ${Math.random(0, 100)}`} name={item} onClick={()=> onClick(item)} />
        ))}
      </div>
      <div>
        {group2.map(item => (
          <Button key={`${item} + ${Math.random(0, 100)}`} name={item} onClick={()=> onClick(item)} />
        ))}
      </div>
      <div>
        {group3.map(item => (
          <Button key={`${item} + ${Math.random(0, 100)}`} name={item} onClick={()=> onClick(item)} />
        ))}
      </div>
      <div>
        {group4.map(item => (
          <Button key={`${item} + ${Math.random(0, 100)}`} name={item} onClick={()=> onClick(item)} />
        ))}
      </div>
      <div>
        {group5.map(item => (
          <Button key={`${item} + ${Math.random(0, 100)}`} name={item} onClick={()=> onClick(item)} />
        ))}
      </div>
    </div>
  );
};

export default ButtonPanel;
