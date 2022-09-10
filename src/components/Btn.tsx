import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

interface Props {
  text: string;
  color?: 'dark' | 'orange' | 'gray';
  wide?: boolean;
  action: (textNumber: string) => void;
}

export default function Btn({text, color = 'dark', wide = false, action}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.2} onPress={() => action(text)}>
		<View
		  style={[
			styles.btn,
			color === 'gray' ? styles.grayBtn : styles.orangeBtn,
			color === 'dark' && styles.defaultColor,
			{width: wide ? 175 : 80},
		  ]}>
		  <Text style={[styles.btnText, color === 'gray' && styles.textBlack]}>
			{text}
		  </Text>
		</View>
	</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 7,
  },
  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
  },
  defaultColor: {
    backgroundColor: '#2D2D2D',
  },
  grayBtn: {
    backgroundColor: '#777E7F',
  },
  orangeBtn: {
    backgroundColor: '#F90',
  },
  textBlack: {
    color: '#242424',
  },
});
