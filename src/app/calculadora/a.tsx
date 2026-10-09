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

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function Pitagoras() {
    
    const [catetoA, onChangeTextA] = useState(0);
    const [catetoB, onChangeTextB] = useState(0);
    const [hipo, onChangeTextH] = useState(0);
    const calc = () => {
    let resultado=0
        if (hipo == "") {
            resultado = (c1**2 + c2**2)**0.5
        }else if(catetoA == ""){
            resultado = (h**2 - c2**2)**0.5
        }else if(catetoB == ""){
            resultado = h**2 - c1**2**0.5
        }
    }
    return(
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          value={"catetoA"}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
