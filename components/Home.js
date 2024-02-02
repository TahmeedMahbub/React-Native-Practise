import {View, Text, StyleSheet, StatusBar, Button} from 'react-native';
import App from '../App';

export const Home = (props) => {
    console.warn(props.route.params);
    const {name, age} = props.route.params;
    return (
        <View>
            <Text style={{ fontSize: 25, margin: 5, padding: 5 }}>Home Screen</Text>
            <Text style={{ fontSize: 20, margin: 5, padding: 5 }}>Name: {name}</Text>
            <Text style={{ fontSize: 20, margin: 5, padding: 5 }}>Age: {age}</Text>
        </View>
    )
}