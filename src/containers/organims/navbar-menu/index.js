import React, {Component} from 'react'
import {
    View
} from 'react-native'
import NavbarIcons from '../../../components/molecules/navbar-icons';
export default class NavbarMenu extends Component {
       render(){
        return (
            <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
            <NavbarIcons title='Home' image={require('../../../assets/icon/home-active.png')} active />
            <NavbarIcons title='Order' image={require('../../../assets/icon/order.png')} />
            <NavbarIcons title='Help' image={require('../../../assets/icon/help.png')} />
            <NavbarIcons title='Inbox' image={require('../../../assets/icon/inbox.png')} />
            <NavbarIcons title='Account' image={require('../../../assets/icon/account.png')} />
          </View>
        )
       }
}
