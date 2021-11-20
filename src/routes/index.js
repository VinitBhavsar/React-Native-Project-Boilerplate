import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { connect } from 'react-redux';
import LoginScreen from '../views/LoginScreen';
import AuthLoading from '../views/AuthScreen';
import HomeScreen from '../views/HomeScreen';

const AuthStack = createStackNavigator(
    {
        LoginScreen: LoginScreen,
    },
    {
        initialRouteName: 'LoginScreen',
        defaultNavigationOptions: {
            headerShown: false,
        },
    },
);

const AppStack = createStackNavigator({
    Home: HomeScreen
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerShown: false,
    },
})
const RouteContainer = createAppContainer(
    createSwitchNavigator(
        {
            Authentication: AuthLoading,
            Auth: AuthStack,
            App: AppStack,
        },
        {
            initialRouteName: 'Authentication',
        },
    ),
);

export default connect(null, null)(RouteContainer);
