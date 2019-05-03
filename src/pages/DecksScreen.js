import React, { Component } from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDecks } from '../actions'
import DeckItem from '../components/DeckItem';

class DecksScreen extends Component {
  
  static navigationOptions = {
    header: null
  }
  componentDidMount(){
    this.props.getDecks()
  }

  _keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <DeckItem item={item} navigation={this.props.navigation}/>
  )

  render() {

    const { decks } = this.props;

    return (
      <View style={{flex:1}}>
         <FlatList
            data={Object.values(decks)}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
          />
      </View>
    )
  }
}


function mapStateToProps(state){
  return {
    decks: state
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getDecks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksScreen)