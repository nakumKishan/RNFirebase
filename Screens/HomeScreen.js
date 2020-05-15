import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component{
    state={
        email:"",
        displayName:"",
    }

    componentDidMount(){
        const {email,displayName} = firebase.auth().currentUser;
        
        this.setState({email,displayName});
    }

    signOutUser = () =>{
        firebase.auth().signOut();
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})