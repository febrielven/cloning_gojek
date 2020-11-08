import React, {Component} from 'react'
import {
    View
} from 'react-native'
import MainFeature from '../../../components/molecules/main-feature';
export default class HomeMainFeature extends Component {
    render(){
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0, marginTop: 18}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 18, flexWrap:'wrap'}}>
                <MainFeature title='GO-RIDE' image={require('../../../assets/icon/go-ride.png')} />
                <MainFeature title='GO-CAR' image={require('../../../assets/icon/go-car.png')}/>
                <MainFeature title='GO-BLUEBIRD' image={require('../../../assets/icon/go-bluebird.png')}/>
                <MainFeature title='GO-SEND' image={require('../../../assets/icon/go-send.png')}/>
                <MainFeature title='GO-DEALS' image={require('../../../assets/icon/go-deals.png')}/>
                <MainFeature title='GO-PULSA' image={require('../../../assets/icon/go-pulsa.png')} />
                <MainFeature title='GO-FOOD' image={require('../../../assets/icon/go-food.png')} />
                <MainFeature title='MORE' image={require('../../../assets/icon/more.png')} />
            
                </View>
            </View>
        )
    }
}
