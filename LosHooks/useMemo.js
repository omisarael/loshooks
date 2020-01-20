import React, {useReducer, useMemo} from 'react';
import {View, Text} from 'react-native';

// useMemo se usa para  REALIZAR CALCULO GRANDE DE DATOS para mostrar siempre el mismo 
// valor final si no se han realizado cambios en los datos
// 

const initialState = {
    cont: 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'incrementar': {
            return {cont: state.cont + 1}
        }
        case 'decrementar': {
            return {cont: state.cont - 1}
        }
        default: {
            return state
        }
    }
}

const users = [{name: 'lala', age: 2}, {name: 'lolo', age: 4}];

export default function UseMemmo () {
    const [state, action] = useReducer(reducer, initialState);
    const toalAgeMemo = useMemo(()=>{
        let age= 0
        console.log(`calculando`);
        users.forEach(x => {
            age = age + x.age
        })
        return age
        //este argumento en el array , si es vacio [] solo se ejecuta 1 vez, si no tiene
        // se ejecuta siempre el useMemo y si tiene valor se ejecuta solo si el valor cambia en alguna parte, si no
        // soo se ejecuta 1 vez
    }, [users])

    console.log(`resultado age: ${toalAgeMemo}`)
    return(
        <View>
            <Text onPress={() => action({type: 'incrementar'})}>+</Text>
            <Text>{state.cont}</Text>
            <Text onPress={() => action({type: 'decrementar'})}>-</Text>
        </View>
    )
}