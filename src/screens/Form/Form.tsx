import React from 'react';
import {TextInput, } from 'react-native';

import { styles } from './FormStyle';

export function Form() {
  return (
    <>
        <TextInput placeholder='Nome'style={styles.textinput}></TextInput>
        <TextInput placeholder='Telefone'style={styles.textinput}></TextInput>
        <TextInput placeholder='Localização'style={styles.textinputGrande}></TextInput>
        <TextInput placeholder='Observação'style={styles.textinputGrande}></TextInput>
    </>
  );
}