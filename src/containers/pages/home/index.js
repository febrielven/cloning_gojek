
import React, {Component} from 'react';
import {
  ScrollView,
  View
} from 'react-native';

import SearchFeature from '../../../components/molecules/search-feature';
import HomeGopayFeature from '../../../containers/organims/home-gopay-feature';
import HomeMainFeature from '../../../containers/organims/home-main-feature';
import GoNews from '../../../components/molecules/gonews';
import GoInfo from '../../../components/molecules/goinfo';
import GoBanner from '../../../components/molecules/gobanner';

import ScrollableProducts from '../../../containers/organims/scrollable-products';
import NavbarMenu from '../../../containers/organims/navbar-menu';

export default class Home extends Component {
  render(){
    return (
      <View style={{flex: 1, flexDirection:'column', justifyContent:'center',alignItems: 'center'}}>
        {/* Content */}
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* Search bar */}
          <SearchFeature />
          {/* Gopay */}
          <HomeGopayFeature />
          {/* Main feature */}
            <HomeMainFeature />
          {/* Divider */}
          <View style={{height: 17, backgroundColor: 'lightgrey', marginTop: 20}}></View>
          {/* News Section*/}
            <GoNews />
          {/* Internal Information Section*/}
            <GoInfo />
          {/* Gofood Banner Section */}
            <GoBanner />
          {/* Nearby Go-food */}
          <ScrollableProducts />
            
        </ScrollView>
        {/* End content */}
        {/* Navigation */}
        <NavbarMenu />      
      </View>
    );
  }
}