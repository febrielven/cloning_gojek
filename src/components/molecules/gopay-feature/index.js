import React from 'react'
import {
    View,
    Image,
    Text
} from 'react-native'

const GopayFeature = (props) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20, paddingBottom: 14}}>
        <Image source={props.image}/>
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>{props.title}</Text>
      </View>
    );
  };

export default GopayFeature;