import React, {useState, useEffect} from 'react';
import { SafeAreaView, Platform, StyleSheet, Image, AsyncStorage, ScrollView } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';
import api from '../services/api';

export default function List({navigation}) {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            if(storagedTechs) {
                const techsArray = storagedTechs.split(','). map(tech => tech.trim());
                setTechs(techsArray);
            }
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech}/>)}
            </ScrollView>
            
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    },
});
