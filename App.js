import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducers';
import ReduxThunk from 'redux-thunk';

import CardsBar from './src/components/CardsBar'
import { cyan } from './src/utils/colors'
import MainNavigator from './src/navigation'


const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
          <View style={{flex: 1}}>
              <CardsBar backgroundColor={cyan} barStyle="light-content" />
              <MainNavigator/>
          </View>
      </Provider>

    );
  }
}
