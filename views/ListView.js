import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableNativeFeedback
} from 'react-native'
import { connect } from 'react-redux'

import { steelblue, white } from '../utils/colors'
import { fetchDecks } from '../actions'

class ListView extends Component {

  componentWillMount() {
    this.props.fetchData()
  }

  renderItem = ({ item, i }) => {
    return (
      <TouchableNativeFeedback
        key={item.title + i}
        onPress={() => this.props.navigation.navigate('Deck', { deckTitle: item.title })}
      >
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.number}>{`${item.questions &&
            item.questions.length} Cards`}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {Object.keys(this.props.decks).length === 0 && (
          <Text style={styles.title}>Please create a new deck!</Text>
        )}
        <FlatList
          data={
            this.props.decks !== undefined && Object.values(this.props.decks)
          }
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.title}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  item: {
    backgroundColor: white,
    borderBottomColor: steelblue,
    borderBottomWidth: 2,
    flex: 1,
    padding: 50,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20
  },
  number: {
    color: 'rgba(0,0,0,0.54)'
  }
})

const mapStateToProps = state => ({
  decks: state
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetchData: () => dispatch(fetchDecks())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListView)