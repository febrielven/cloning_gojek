import React from 'react'
import {
    View,
    Image,
    Text
} from 'react-native'

const MainFeature = props => {
    return (
        <View style={{width: `${100/4}%`, alignItems: 'center', marginBottom:18}}> 
            <View style={{height: 58, width: 58, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 18, justifyContent:'center', alignItems: 'center'}}>
            <Image source={props.image}/>
            </View>
            <Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6}}>{props.title}</Text>
        </View>
    );
  };

export default MainFeature;