import React, {Component} from 'react' 
import {
    View,
    Image,
    Text
} from 'react-native'
const NavbarIcons = props => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Image style={{width: 26, height: 26}} source={props.image}/>
            <Text style={{fontSize: 10, marginTop: 4, color: props.active ? '#43AB4A' : '#545454'}}>{props.title}</Text>
        </View>
    )
}

export default NavbarIcons;