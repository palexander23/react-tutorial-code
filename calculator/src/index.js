import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      displayText: "",
      clearOnNextInput: false,
      charactersDisplayed: 0,      
    };
  }

  handleClick(i)
  {
    switch(i) {
      case 'C':
        this.setState({
          displayText: "",
          charactersDisplayed: 0,
        });
        break;
      case '=':
        this.evaluateAnswer()
        break;
      case '<-':
        if(this.state.clearOnNextInput) {
          this.setState({
            displayText: "",
            clearOnNextInput: false,
            charactersDisplayed: this.state.charactersDisplayed - 1,
          })
        } else {
          const displayText = this.state.displayText;
          const displayTextLen = displayText.length;
          this.setState({
            displayText: displayText.slice(0, displayTextLen - 1),
          });
        }
        break;
      
      default:
        if(!this.state.clearOnNextInput && (this.state.charactersDisplayed >= 18)) {
          break;
        }
        if(this.state.clearOnNextInput) {
          this.setState({
            displayText: i,
            clearOnNextInput: false,
            charactersDisplayed: 1,
          })
        } else {
          this.setState({
            displayText: this.state.displayText + i,
            charactersDisplayed: this.state.charactersDisplayed + 1,
          });
        }
        break;
    }
  }

  evaluateAnswer()
  {
    const expression = this.state.displayText;
    const expressionFormatRegEx = /[0-9.]+[+/\-*][0-9.]+$/g;
    const expressionFormatMatchArray = expression.match(expressionFormatRegEx);
    if((expressionFormatMatchArray == null) || (expressionFormatMatchArray.length !== 1)) {
      this.syntaxError();
      return;
    }

    const operatorsRegEx = /([+\-*/])/g
    const operatorsArray = expression.match(operatorsRegEx);

    const numbersRegEx = /([0-9.])+/g
    const numbers = expression.match(numbersRegEx);

    if((operatorsArray.length !== 1) || (numbers.length !== 2)) {
      this.syntaxError();
      return;
    }

    const num1 = parseFloat(numbers[0], 10);
    const num2 = parseFloat(numbers[1], 10);
    const operator = operatorsArray[0];
    let answer;

    switch(operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
      case '/':
        answer = num1 / num2;
        break;

      default:
        answer = null;
        break;
    }

    this.setState({
      displayText: answer,
    })
  }

  syntaxError() {
    this.setState({
      displayText: "SYNTAX ERROR",
      clearOnNextInput: true,
    })
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
    <div className="calcInputButtonDimensions calcInputButtonSpaceColor"></div> 
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
          {this.renderButton("←")}
          {this.renderButton("C")}
        </div>
        <div className="container">
          {this.renderButton("+")}
          {this.renderButton("1")}
          {this.renderButton("2")}
          {this.renderButton("3")}
        </div>
        <div className="container">
          {this.renderButton("-")}
          {this.renderButton("4")}
          {this.renderButton("5")}
          {this.renderButton("6")}
        </div>
        <div className="container">
          {this.renderButton("*")}
          {this.renderButton("7")}
          {this.renderButton("8")}
          {this.renderButton("9")}
        </div>
        <div className="container">
          {this.renderButton("/")}
          {this.renderButton(".")}
          {this.renderButton("0")}
          {this.renderButton("=")}
        </div>
    </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return(
    <button className="calcInputButtonDimensions calcInputButtonColorTextProperties" onClick={() => this.props.onClick()}>
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
