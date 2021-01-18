import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (

    <header className = 'header' > {props.text} </header>
  );

}

function Footer(props) {
  return (
    <footer className = 'header'>{props.tradeMark}</footer>
  );
}


class Odometer extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0


    };

  }

  increaseCounter(value) {
    if (this.state.counter + value > 9999){
      this.state.counter = this.state.counter + value - 10001

    }
    this.setState({ counter: this.state.counter + value });

  }

  render(){
    return(
<>
<button className = 'button' onClick={()=> this.increaseCounter(1)}>+1</button>
<button className = 'button' onClick={()=> this.increaseCounter(10)}>+10</button>
<button className = 'button' onClick={()=> this.increaseCounter(100)}>+100</button>
<button className = 'button' onClick={()=> this.increaseCounter(1000)}>+1000</button>
<h1 className = 'counter'>{String(this.state.counter).padStart(4,0)}</h1>
</>
    );
  }
}


function App() {
  return (
    <>
      <Header text='Hello from the other side' />
      <Odometer />
      <Footer tradeMark='RAND' />
    </>
  );
}

export default App;
