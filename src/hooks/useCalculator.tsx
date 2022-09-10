import {useState, useRef} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export function useCalculator() {
  const [number, setNumber] = useState('0');
  const [numberAbove, setNumberAbove] = useState('0');

  const lastOperator = useRef<Operators>();

  const cleanUp = () => {
    setNumber('0');
    setNumberAbove('0');
  };

  const makeNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        setNumber(number + textNumber);
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const deleteNum = () => {
    if (number.length === 1) {
      setNumber('0');
    } else if (number.includes('-') && number.length === 2) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeLastNumber = () => {
    if (number.endsWith('.')) {
      setNumberAbove(number.slice(0, -1));
    } else {
      setNumberAbove(number);
    }
    setNumber('0');
  };

  const btnAdd = () => {
    changeLastNumber();
    lastOperator.current = Operators.add;
  };

  const btnSubtract = () => {
    changeLastNumber();
    lastOperator.current = Operators.subtract;
  };

  const btnMultiply = () => {
    changeLastNumber();
    lastOperator.current = Operators.multiply;
  };

  const btnDivide = () => {
    changeLastNumber();
    lastOperator.current = Operators.divide;
  };

  const calculate = () => {
    const firstNum = Number(number);
    const secondNum = Number(numberAbove);

    switch (lastOperator.current) {
      case Operators.add:
        setNumber(`${firstNum + secondNum}`);
        break;
      case Operators.subtract:
        setNumber(`${secondNum - firstNum}`);
        break;
      case Operators.multiply:
        setNumber(`${firstNum * secondNum}`);
        break;
      case Operators.divide:
        setNumber(`${secondNum / firstNum}`);
        break;

      default:
        break;
    }
    setNumberAbove('0');
  };

  return {
    btnAdd,
    btnDivide,
    btnMultiply,
    btnSubtract,
    calculate,
    changeLastNumber,
    cleanUp,
    deleteNum,
    makeNumber,
    number,
    numberAbove,
    positiveNegative,
  };
}
