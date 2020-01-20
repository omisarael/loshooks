import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';

//  useEffect se utiliza para hacer llamados asincronos como llamados a apis 
//  del mismos dispositivo o scribir en db
// y poder controlar su llamado sea cada que se recarga la pantalla o solo 
//  una vez sin importar las veces que sea llamada la pantalla a menos que 
// se cierre la app y se vuelva a abrir

// PARA QUE EL useEffect SE EJECUTE UNA VEZ SE UTILIZA UN ARRAY VACIO PERO 
// SI EN EL ARRAY LE PASAMS UN VALOR Y ESTE CAMBIA EL USEeFFECT SE EJECUTARA 
// DE NUEVO Y ASI QUE ESCUCHE Y SE EJECUTE AL CAMBIO DEL VALOR


// export default function UseEffectFile() {
//     const [propiedad1, propiedad2] = useState(0);
//     const [valorLoading, cambiaValorLoading] = useState(1);

//     useEffect(()=>{
//         setTimeout(() => {
//             cambiaValorLoading(0)
//         }, 1000);
//     }, [])

//     return (
//         <View>
//             <Text
//              onPress={()=>{propiedad2(propiedad1 + 1)}}
//              >
//              utilizando el hook use efect</Text>
//             <Text>{valorLoading == 1 ? 'cargando':  propiedad1}</Text>
//         </View>
//     )
// } 

export default function UseEffectFile() {
    const [propiedad1, propiedad2] = useState(0);
    const [valorLoading, cambiaValorLoading] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            cambiaValorLoading(true)
        }, 1000);
    }, [])

    return (
        <View>
            <Text
             onPress={()=>{propiedad2(propiedad1 + 1)}}
             >
             utilizando el hook use efect</Text>
            <Text>{valorLoading == false? 'cargando':  propiedad1}</Text>
        </View>
    )
} 