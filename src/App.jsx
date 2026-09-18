import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waiting, setWaiting] = useState(false);

  function numberClick(number) {
    if (display === "0" || waiting) {
      setDisplay(number);
      setWaiting(false);
    } else {
      setDisplay(display + number);
    }
  }

  function decimalClick() {
    if (waiting) {
      setDisplay("0.");
      setWaiting(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  }

  function operatorClick(op) {
    const currentNumber = Number(display);

    if (firstNumber === null) {
      setFirstNumber(currentNumber);
    } else if (operator) {
      calculate(currentNumber);
    }

    setOperator(op);
    setWaiting(true);
  }

  function calculate(secondNumber = Number(display)) {
    let answer;

    if (operator === "+") {
      answer = firstNumber + secondNumber;
    } else if (operator === "-") {
      answer = firstNumber - secondNumber;
    } else if (operator === "×") {
      answer = firstNumber * secondNumber;
    } else if (operator === "÷") {
      if (secondNumber === 0) {
        setDisplay("Error");
        setFirstNumber(null);
        setOperator(null);
        return;
      }

      answer = firstNumber / secondNumber;
    }

    setDisplay(String(answer));
    setFirstNumber(null);
    setOperator(null);
    setWaiting(true);
  }

  function clear() {
    setDisplay("0");
    setFirstNumber(null);
    setOperator(null);
    setWaiting(false);
  }

  function deleteNumber() {
    if (display.length === 1 || display === "Error") {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  }

  return (
    <div className="page">
      <div className="calculator">

        <div className="display">
          {display}
        </div>

        <div className="buttons">

          <button className="special" onClick={clear}>
            AC
          </button>

          <button className="special" onClick={deleteNumber}>
            DEL
          </button>

          <button className="operator" onClick={() => operatorClick("÷")}>
            ÷
          </button>

          <button className="operator" onClick={() => operatorClick("×")}>
            ×
          </button>

          <button onClick={() => numberClick("7")}>7</button>
          <button onClick={() => numberClick("8")}>8</button>
          <button onClick={() => numberClick("9")}>9</button>

          <button className="operator" onClick={() => operatorClick("-")}>
            −
          </button>

          <button onClick={() => numberClick("4")}>4</button>
          <button onClick={() => numberClick("5")}>5</button>
          <button onClick={() => numberClick("6")}>6</button>

          <button className="operator" onClick={() => operatorClick("+")}>
            +
          </button>

          <button onClick={() => numberClick("1")}>1</button>
          <button onClick={() => numberClick("2")}>2</button>
          <button onClick={() => numberClick("3")}>3</button>

          <button className="equals" onClick={() => calculate()}>
            =
          </button>

          <button className="zero" onClick={() => numberClick("0")}>
            0
          </button>

          <button onClick={decimalClick}>.</button>

        </div>

      </div>
    </div>
  );
}

export default App;