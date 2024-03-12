import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const incrementScoreA = () => {
    setScoreA(scoreA + 1);
  };

  const incrementScoreB = () => {
    setScoreB(scoreB + 1);
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://img.freepik.com/free-vector/gradient-background-with-bokeh-effect_52683-29043.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1710115200&semt=ais' }} 
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.teamsContainer}>
          <View style={styles.teamBlueContainer}>
            <Text style={styles.title}>Time A</Text>
            <Text style={styles.score}>{scoreA}</Text>
            <Button title="+1" onPress={incrementScoreA} />
          </View>
          <View style={styles.teamRedContainer}>
            <Text style={styles.title}>Time B</Text>
            <Text style={styles.score}>{scoreB}</Text>
            <Button title="+1" onPress={incrementScoreB} color="red" /> 
          </View>
        </View>
        <Button title="Zerar" onPress={resetScores} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover', // or 'stretch'
  },
  teamsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
    marginTop: 50,
  },
  teamBlueContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-around',
  },
  teamRedContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  score: {
    fontSize: 30,
    marginRight: 10,
  },
});
