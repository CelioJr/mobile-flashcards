import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'

import { white, cyan } from '../utils/colors'
import DecksScreen from '../pages/DecksScreen'
import DeckDetails from '../pages/DeckDetails'

 const RouteConfigs = {
    DecksList: {
      screen: DecksScreen,
      navigationOptions: {
        tabBarLabel: "DECKS",
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      }
    },
    NewDeck: {
      screen: DecksScreen,
      navigationOptions: {
        tabBarLabel: "NEW DECKS",
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      }
    },
    
  };
  
  const TabNavigatorConfig = {
      navigationOptions: {
        header: null
      },
      tabBarOptions: {
        activeTintColor: white,
        style: {
          height: 56,
          backgroundColor: cyan,
          shadowColor: "rgba(0, 0, 0, 0.24)",
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 6,
          shadowOpacity: 1
        }
      }
    };
  
  const Tabs = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);
  
  const HomeStack = createStackNavigator(
    {
      Home: Tabs,
      DeckDetails: DeckDetails
    },
    {
      initialRouteName: "Home",
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: cyan,
        },
        headerTintColor: white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  );
  export default createAppContainer(HomeStack)