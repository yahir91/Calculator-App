import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  handleClick(buttonName) {
    let calcData = this.state
    let newData = calculate(calcData, buttonName)
    const {total, next, operation} = newData
    this.setState(total, next, operation)
  }

  render() {  
    const {total, next} = this.state
    return (
      <div>
        < Display display={next} />
        < ButtonPanel onClick={()=> this.handleClick(buttonName)} />
      </div>
    )
  }
};

export default App;
