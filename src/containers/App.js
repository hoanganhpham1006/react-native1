/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput, ScrollView} from 'react-native';
import {Container, Header, Title, Body} from 'native-base';
import MatchComponent from '../components/Match';

export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      matches: [
        {
          team1: `Brazil`,
          team2: `Belgium`,
          time: `1:00`,
          score1: `1`,
          score2: `2`,
          image1: `brazil`,
          image2: `belgium`,
        },
        {
          team1: `Sweden`,
          team2: `England`,
          time: `21:00`,
          score1: `0`,
          score2: `2`,
          image1: `sweden`,
          image2: `england`,
        }
      ],
      textInputValue: ``
    }
  }
  deleteMatch1() {
    const matches = this.state.matches;
    delete matches[0];

    this.setState({
      matches //Full? Why can't delete 2 times
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>World cup 2018</Title>
          </Body>
        </Header>
        <ScrollView style={styles.container}>
          <View>
            <View style={styles.round}>
              <Text style={styles.roundText}>QUATER-FINALS</Text>
            </View>
            {
              this.state.matches.map(
                match => 
                  <MatchComponent
                    team1 = {match.team1}
                    team2 = {match.team2}
                    score1 = {match.score1}
                    score2 = {match.score2}
                    image1 = {match.image1}
                    image2 = {match.image2}
                    time = {match.time}
                    key = {`match_${match.team1}_vs_${match.team2}`}
                  />
              )
            }
          </View>
          <Button
            title="Delete match 1"
            style={styles.deleteButton}
            onPress={() => {this.deleteMatch1();}}
          />
          <Text>Texting: {this.state.textInputValue}</Text>
          <TextInput
            value={this.state.textInputValue}
            style={styles.input}
            onChangeText={(newText) => {this.setState({textInputValue: newText});}}
          />

        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edf1f7'
  },
  round: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center'
  },
  roundText: {
    fontWeight: 'bold',
    paddingLeft: 10
  },
  deleteButton: {
    
  },
  input: {
    width: 500,
    height: 50,
    backgroundColor: 'white'
  }
});
