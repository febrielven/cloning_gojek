import React, {Component} from 'react'
import {
    View,
    Image,
    ScrollView,
    Text
} from 'react-native'
import ScrollableItem from '../../../components/molecules/scrollable-items'

export default class ScrollableProducts extends Component{
   render(){
     return (
      <View>
        <View style={{height: 15, width: 60, marginLeft: 16}}>
          <Image source={require('../../../assets/logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'}}>Nearby Restaurant</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>See All</Text>
        </View>
        <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
          <ScrollableItem title='KFC Aeon Mall' image={require('../../../assets/dummy/go-food-kfc.jpg')} />
          <ScrollableItem title='Bakmi GM Aeon Mall' image={require('../../../assets/dummy/go-food-gm.jpg')} />
          <ScrollableItem title='Martabak Orins' image={require('../../../assets/dummy/go-food-orins.jpg')} />
          <ScrollableItem title='Martabak Banka' image={require('../../../assets/dummy/go-food-banka.jpg')} />
          <ScrollableItem title='Ayam Bakar Pak Boss' image={require('../../../assets/dummy/go-food-pak-boss.jpg')} />
        </ScrollView>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 16, marginHorizontal: 16}}></View>
    </View>
     )
   }
}