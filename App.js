import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AudioRecord from 'react-native-audio-record';
import { Audio } from 'expo-av';

Audio.requestPermissionsAsync();

export default function App() {
 
  const options = {
    sampleRate: 16000,  // default 44100
    channels: 1,        // 1 or 2, default 1
    bitsPerSample: 16,  // 8 or 16, default 16
    audioSource: 6,     // android only 
    wavFile: 'test.wav' // default 'audio.wav'
  };
  
  // The code that's not working:
  // Error msg: TypeError: Cannot read property 'init' of undefined

  /*
    AudioRecord.init(options);

    // Start Recording
    AudioRecord.start();
    
    
    // Stop Recording
    AudioRecord.stop();
  */
  

  return (
    <View style={styles.container}>
      <Text selectable selectionColor="blue" color="#fff">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//const element = <Mic record="true" />;
//ReactDOM.render(element, document.getElementById('root'));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
