import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'

import { white, cyan } from '../utils/colors'
import DecksScreen from '../pages/DecksScreen'
import DeckDetails from '../pages/DeckDetails'
import AddCard from '../pages/AddCard'
import CreateDeck from '../pages/CreateDeck'

 const RouteConfigs = {
    DecksList: {
      screen: DecksScreen,
      navigationOptions: {
        tabBarLabel: "DECKS",
      }
    },
    CreateDeck: {
      screen: CreateDeck,
      navigationOptions: {
        tabBarLabel: "NEW DECK",
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
      DeckDetails: DeckDetails,
      AddCard: AddCard
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