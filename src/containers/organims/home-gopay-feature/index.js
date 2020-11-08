import React, {Component} from 'react'
import {
    View,
    Image,
    Text
} from 'react-native'
import GopayFeature from '../../../components/molecules/gopay-feature';
export default class HomeGopayFeature extends Component {
    render(){
        return (
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'blue', borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 15}}>
              <Image source={require('../../../assets/icon/gopay.png')}/>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>Rp. 50.000</Text>
            </View>
            <View style={{flexDirection: 'row', backgroundColor: 'blue', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
              <GopayFeature title='Pay' image={require('../../../assets/icon/pay.png')}/>
              <GopayFeature title='Nearby' image={require('../../../assets/icon/nearby.png')}/>
              <GopayFeature title='Top Up' image={require('../../../assets/icon/topup.png')}/>
              <GopayFeature title='More' image={require('../../../assets/icon/more.png')}/>
            </View>
          </View>
        )
    }
}
