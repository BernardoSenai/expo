import * as Device from 'expo-device';
import { Platform, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import {useState} from 'react';


export default function Pitagoras() {
    
    const [catetoA, onChangeTextA] = useState(0);
    const [catetoB, onChangeTextB] = useState(0);
    const [hipo, onChangeTextH] = useState(0);
    let resultado=0

    const calc = () => {
    let resultado = 0
        if (hipo == 0) {
            resultado = (catetoA**2 + catetoB**2)**0.5
            console.log(resultado);
        }else if(catetoA == 0){
            resultado = (hipo**2 - catetoB**2)**0.5
            console.log(resultado);
        }else if(catetoB == 0){
            resultado = hipo**2 - catetoA**2**0.5
            console.log(resultado);
        }return resultado
    }
calc();
    return(
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
      style={styles.input}
      value={catetoA}
      onChangeText={onChangeTextA}
/>
        <TextInput
      style={styles.input}
      value={catetoB}
      onChangeText={onChangeTextB}
/>
        <TextInput
      style={styles.input}
      value={hipo}
      onChangeText={onChangeTextH}
/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 0,
    justifyContent: 'center',
    borderWidth:1,
    flexDirection: 'row'
  }
});
