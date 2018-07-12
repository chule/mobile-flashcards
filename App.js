import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors'
import ListView from './views/ListView'
import NewDeckView from './views/NewDeckView'
import DeckView from './views/DeckView'
import NewQuestionView from './views/NewQuestionView'
import QuizView from './views/QuizView'
import { Constants } from 'expo'

function FlashcardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator({
  ListView: {
    screen: ListView,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
},
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 56,
        backgroundColor: purple,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    },
  },
  Deck: { screen: DeckView },
  NewQuestion: { screen: NewQuestionView },
  Quiz: { screen: QuizView }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlashcardsStatusBar
          backgroundColor={purple}
          barStyle='light-content'
        />
        <MainNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
