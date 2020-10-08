import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header'
import Gamescreen from './screens/Gamescreen';
import Startgamescreen from './screens/Startgamescreen'
import Gameover from './screens/Gameover'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {

  const [usernumber, setusernumber] = useState()

  const [guessround, setguessround] = useState(0)

  const [dataloaded, setdataloaded] = useState(false)

  if (!dataloaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setdataloaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const confignewgame = () => {
    setguessround(0);
    setusernumber(null)
  }

  const startgamehandler = (selectednumber) => {
    setusernumber(selectednumber)
    setguessround(0)
  }

  const gameoverhandler = numofrounds => {
    setguessround(numofrounds)
  }

  let content = <Startgamescreen onStartgame={startgamehandler} />

  if (usernumber && guessround <= 0) {
    content = <Gamescreen userChoice={usernumber} onGameover={gameoverhandler} />
  }
  else if (guessround > 0) {
    content = <Gameover roundsnumber={guessround} usernumber={usernumber} onrestart={confignewgame} />
  }


  return (
    <View style={styles.container}>

      <Header title='Guess a Nummber' />
      {content}

    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});