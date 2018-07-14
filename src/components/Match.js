import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { FLAGS_IMG_PATH } from '../config/flags';

export default class MatchComponent extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const {team1, team2, time, score1, score2, image1, image2} = this.props;

    return (
      <View style={styleMatches.line}>
        <Text style={styleMatches.time}>{time}</Text>
        <View style={styleMatches.image}>
          <Image
            style={{width: 18, height: 18, marginBottom: 5}}
            source={FLAGS_IMG_PATH[image1]}
          />
          <Image
            style={{width: 18, height: 18}}
            source={FLAGS_IMG_PATH[image2]}
          />
        </View>
        <View style={styleMatches.team}>
          <Text style={{marginBottom: 5}}>{team1}</Text>
          <Text>{team2}</Text>
        </View>
        <View style={styleMatches.score}>
          <Text style={{marginBottom: 5}}>{score1}</Text>
          <Text>{score2}</Text>
        </View>
      </View>
    );
  }
}

export const styleMatches = StyleSheet.create({
  line: {
    // borderBottomWidth: 1,
    // borderBottomColor: '#edf1f7',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginTop: 5,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  time: {
    width: 50
  },
  team: {
    flexDirection: 'column',
    width: 220
  },
  score: {
    flexDirection: 'column',
  },
  image: {
    width: 30,
    flexDirection: 'column',
  },
  marginBottom5:{
    marginBottom: 5
  }

});