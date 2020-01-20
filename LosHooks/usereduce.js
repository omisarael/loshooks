import React, {useReducer} from 'react';
import {View, Text} from 'react-native';

// useReduce es utilizado para el state de una propiedad como 
// el setState pero cuando es
//necesaria una logica mas compleja

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

export default function UseReduce () {
    const [state, action] = useReducer(reducer, initialState)
    return(
        <View>
            <Text onPress={() => action({type: 'incrementar'})}>+</Text>
            <Text>{state.cont}</Text>
            <Text onPress={() => action({type: 'decrementar'})}>-</Text>
        </View>
    )
}