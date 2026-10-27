import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import * as Device from "expo-device";
import { useState } from "react";
import { Alert, Button, Platform, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function calculadora() {
    
    const [numero, onChangeTextA] = useState('');
    const [memoria, onChangeTextB] = useState('');
    const [operacao, onChangeTextC] = useState('');

    const calc = () => {
        const num = Number(numero);
        const mem = Number(memoria);
        const ope = (operacao);
        let resultado = 0;

        if(ope == "+"){
            resultado = mem + num
            console.log(resultado);
            alert(resultado)
        }
        else if(ope == "-"){
            resultado = mem - num
            console.log(resultado);
            alert(resultado)
        }
        else if(ope == "*"){
            resultado = mem * num
            console.log(resultado);
            alert(resultado)
        }else if(ope == "/"){
            resultado = mem / num
            console.log(resultado);
            alert(resultado)
        }
        
    }
    calc();
    return (
       <ThemedView style={styles.container}>
         <SafeAreaView style={styles.safeArea}>
           <ThemedView style={styles.heroSection}>
             <TextInput
               style={styles.input}
               value={numero}
               onChangeText={onChangeTextA}
             />
             <TextInput
               style={styles.input}
               value={memoria}
               onChangeText={onChangeTextB}
             />
             <TextInput
               style={styles.input}
               value={operacao}
               onChangeText={onChangeTextC}
             />
             <Button title="Calcular" onPress={calc} />
           </ThemedView>
         </SafeAreaView>
       </ThemedView>
     );
   }
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: "center",
       flexDirection: "row",
     },
     safeArea: {
       flex: 1,
       paddingHorizontal: Spacing.four,
       alignItems: "center",
       gap: Spacing.three,
       paddingBottom: BottomTabInset + Spacing.three,
       maxWidth: MaxContentWidth,
     },
     heroSection: {
       alignItems: "center",
       justifyContent: "center",
       flex: 1,
       paddingHorizontal: Spacing.four,
       gap: Spacing.four,
     },
     title: {
       textAlign: "center",
     },
     code: {
       textTransform: "uppercase",
     },
     stepContainer: {
       gap: Spacing.three,
       alignSelf: "stretch",
       paddingHorizontal: Spacing.three,
       paddingVertical: Spacing.four,
       borderRadius: Spacing.four,
     },
     input: {
       borderWidth: 1,
     },
   });