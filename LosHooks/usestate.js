import React, {useState} from 'react';
import { View, Text } from 'react-native';

//useState se usa en funciones no en clases

// se usa para agregar un estado sustituye a setState({})


//useState() para indicar el valor inicial que va a tener una porpiedad
//en argumento 1 y como argumento 2 representa un funcion que actualiza el
// valor

export default function HookUseState() {
    const [propiedad1, propiedad2] = useState(0);

    return (
        <View>
            <Text onPress={()=>{propiedad2(propiedad1 + 1)}}>utilizando el hook use state</Text>
            <Text>{propiedad1}</Text>
        </View>
    )
} 