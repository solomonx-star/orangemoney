import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";
import Transaction from '../screens/Transaction';
import Topup from "../screens/Topup" ;
import TransferMoney from "../screens/TransferMoney";
import Cashout from '../screens/Cashout';
import DataBundles from '../screens/DataBundles';
import Merchant from '../screens/Merchant';
import SelfReversal from '../screens/SelfReversal';
import AccessMyBank from '../../shared/AccessMyBank';
import Edsa from '../../shared/Edsa';





const screens = {
    Home: {
        screen: Transaction,
        navigationOptions: {
            // headerTitle: () => <Transaction />,
            
        }
    },

    Topup: {
        screen: Topup,
        navigationOptions: {
            // headerTitle: () => <Year1 />
            
        }
    },

    TransferMoney: {
        screen: TransferMoney,
        navigationOptions: {
            // headerTitle: () => <Year2 />
        }
    },

    Cashout: {
        screen: Cashout,
    },

    Merchant: {
        screen: Merchant,
    },

    SelfReversal: {
        screen: SelfReversal,
    },

    DataBundles: {
        screen: DataBundles
    },

    AccessBank: {
        screen: AccessMyBank
    },

    Edsa: {
        screen: Edsa
    }
}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#2096F3',
            

        }
    }
    
});

export default createAppContainer(HomeStack);