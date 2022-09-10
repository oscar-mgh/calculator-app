import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import Btn from '../components/Btn';
import {useCalculator} from '../hooks/useCalculator';

export default function CalculatorScreen() {
  const {
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
  } = useCalculator();

  return (
    <View>
      {numberAbove !== '0' && (
        <Text style={styles.smallResult}>{numberAbove}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Buttons Row */}
      <View style={styles.row}>
        <Btn color="gray" text="C" action={cleanUp} />
        <Btn color="gray" text="+/-" action={positiveNegative} />
        <Btn color="gray" text="del" action={deleteNum} />
        <Btn color="orange" text="/" action={btnDivide} />
      </View>

      {/* Buttons Row */}
      <View style={styles.row}>
        <Btn text="7" action={makeNumber} />
        <Btn text="8" action={makeNumber} />
        <Btn text="9" action={makeNumber} />
        <Btn text="x" color="orange" action={btnMultiply} />
      </View>

      {/* Buttons Row */}
      <View style={styles.row}>
        <Btn text="4" action={makeNumber} />
        <Btn text="5" action={makeNumber} />
        <Btn text="6" action={makeNumber} />
        <Btn text="-" color="orange" action={btnSubtract} />
      </View>

      {/* Buttons Row */}
      <View style={styles.row}>
        <Btn text="1" action={makeNumber} />
        <Btn text="2" action={makeNumber} />
        <Btn text="3" action={makeNumber} />
        <Btn text="+" color="orange" action={btnAdd} />
      </View>

      {/* Buttons Row */}
      <View style={styles.row}>
        <Btn text="0" wide action={makeNumber} />
        <Btn text="." action={makeNumber} />
        <Btn text="=" color="orange" action={calculate} />
      </View>
    </View>
  );
}
