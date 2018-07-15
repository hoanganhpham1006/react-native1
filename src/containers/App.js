/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput, ScrollView, Image, ActivityIndicator} from 'react-native';
import {Container, Header, Title, Body, Tab, Tabs, ScrollableTab, Icon} from 'native-base';
import MatchComponent from '../components/Match';
import { matchesList } from '../models/matchesList';
import { getMatchesList } from '../models/matchesList';

export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      matchesList: matchesList.WC2018,
      loadingText: `LOADING..`
    }
  }

  componentDidMount() {
    for (let i = 20180616; i <= 20180621; i++) {
      if(i == 20180631) i = 20180701;
      getMatchesList(i + '')
        .then(allMatch => {
          let allMatchInfo = [];

          if (allMatch['FIFA World Cup']) {
            for (wcmatch of allMatch['FIFA World Cup']) {
              allMatchInfo.push(
                {
                  team1: wcmatch.competitors.split(' vs. ')[0],
                  team2: wcmatch.competitors.split(' vs. ')[1],
                  time: wcmatch.time,
                  score1: wcmatch.scores.split('-')[0],
                  score2: wcmatch.scores.split('-')[1],
                  image1: `brazil`,
                  image2: `belgium`,
                },
              )
            }
            if (i == 20180621) this.setState({loadingText: ''});

            this.state.matchesList.push({
              date: i + '',
              matches: allMatchInfo
            });

            this.state.matchesList = this.state.matchesList.sort((a, b) => a.date > b.date);
          }
        })
        .catch(e => console.log(e));
        // console.log(i);
    }
    // console.log("DONE");
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>World cup 2018</Title>
          </Body>
        </Header>
        
        { this.state.loadingText ?
          <View style={[styles.container, {flex: 1, justifyContent: 'center'}]}>
            <Text style={styles.loadingText}>{this.state.loadingText}</Text>
            <ActivityIndicator size="large" color="gray" />
          </View>
          :
          <ScrollView style={styles.container}>
            <Tabs 
              renderTabBar={() => <ScrollableTab/>} 
            >
              {this.state.matchesList.map(
                matchDay =>
                <Tab heading={matchDay.date} style={styles.container} tabStyle={styles.tabHeading} activeTabStyle={styles.tabHeading} key={`match_day_${matchDay.date}`}>
                  <View>
                    <View style={styles.round}>
                      <Text style={styles.roundText}>QUATER-FINALS</Text>
                    </View>
                    {
                      matchDay.matches.map(
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
                </Tab>
              )}
            </Tabs>
          </ScrollView> 
        }
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edf1f7',
    flex: 1
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
  },
  tabHeading: {
    width: 150,
  },
  loadingText: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center'
  }
});
