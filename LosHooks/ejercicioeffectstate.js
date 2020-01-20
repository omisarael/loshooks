import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

export default function EffectState(){
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setUsers(json);
        setLoading(false);
    };
//dentro de useEffect no se pueden usar funciones async await por eso se
// crea aparte
    useEffect(() => {
        fetchUsers()
    }, [])

    return(
        <View>
            <Text>
                {loading == true ? 'Cargando': users[0].name  }
            </Text>
        </View>
    )
}
