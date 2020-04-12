import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      displayText: "22+454",
    };
  }

  handleClick(i)
  {
    alert("Clicked: " + i);
  }

  renderButton(i) {
    return(
      <Button 
          key={i}
          text={i} 
          onClick={() => this.handleClick(i)}
      />
    );
  }

  renderButtonSpace() {
    return(
    <div className="calcInputButton"></div> 
    );
  }

  render() {
    return(
      <div className="calculator">
        <div className="container">
          <Display text={this.state.displayText}/>
        </div>
        <div className="container">
          {this.renderButtonSpace()}
          {this.renderButtonSpace()}
          {this.renderButtonSpace()}
          {this.renderButton("C")}
        </div>
        <div className="container">
          {this.renderButton("+")}
          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}
        </div>
        <div className="container">
          {this.renderButton("-")}
          {this.renderButton(4)}
          {this.renderButton(5)}
          {this.renderButton(6)}
        </div>
        <div className="container">
          {this.renderButton("*")}
          {this.renderButton(7)}
          {this.renderButton(8)}
          {this.renderButton(9)}
        </div>
        <div className="container">
          {this.renderButton("/")}
          {this.renderButton(0)}
          {this.renderButtonSpace()}
          {this.renderButton("=")}
        </div>
    </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return(
    <button className="calcInputButton" onClick={() => this.props.onClick()}>
      {this.props.text}
    </button>
    );
  }
}

class Display extends React.Component {
  render() {
    return(
      <div className="display">{this.props.text}</div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
