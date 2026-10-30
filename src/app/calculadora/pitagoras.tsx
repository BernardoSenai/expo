import { StyleSheet, TextInput, Alert, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';



export default function Pitagoras() {
    
    const [catetoA, onChangeTextA] = useState('');
    const [catetoB, onChangeTextB] = useState('');
    const [hipo, onChangeTextH] = useState('');

    const calc = () => {
        const a = Number(catetoA);
        const b = Number(catetoB);
        const h = Number(hipo);
        let resultado = 0;
        if (h === 0) {
            resultado = (a ** 2 + b ** 2) ** 0.5;
            console.log(resultado);
            alert(resultado)
        } else if (a === 0) {
            resultado = (h ** 2 - b ** 2) ** 0.5;
            console.log(resultado);
            alert(resultado)
        } else if (b === 0) {
            resultado = (h ** 2 - a ** 2) ** 0.5;
            console.log(resultado);
            alert(resultado)
        }
    }

    return(
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="ta aq soh pra nao fuder tudo"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Cateto A"
          value={catetoA}
          onChangeText={onChangeTextA}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Cateto B"
          value={catetoB}
          onChangeText={onChangeTextB}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Hipotenusa"
          value={hipo}
          onChangeText={onChangeTextH}
          keyboardType="numeric"
        />
        <Button title="Calcular" onPress={calc} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    margin: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#666',
    color: '#111',
  }
});
