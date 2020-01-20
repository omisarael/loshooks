import React, {useState, useCallback} from 'react';
import { View, Text } from 'react-native';

// nos devuelve la misma instancia creada  de la funcion envuelta en callback se parece a 
// useMemo (se ejecuta  otra instancia a menos que cambie un valor de la propiedad dentro de [])
// lo que significa que que si las funciones me consumen muchos recursos 
//  esta funcion nos ayudara con la optimizacion de memoria o recursos 
export default function HookUseCallBack() {
    const [cont, setCont] = useState(0);


    const incrementar = useCallback(
        () => {
            setCont(cont + 1)
        } 
    )

    const  decrementar = useCallback(
        () => {
            setCont(cont -1)
        }
    )

    return (
        <View>
            <Text onPress={()=>{incrementar()}}>+</Text>
            <Text>{cont}</Text>
            <Text onPress={()=>{decrementar()}}>-</Text>
        </View>
    )
} 