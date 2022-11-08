import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import axios from 'axios';


const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',
  headers: {
    'X-RapidAPI-Key': '3af8888741mshf86007a6977fc6ep13e3c4jsnb84d4f6f19b3',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



const App = () => {
  return (
    <SafeAreaView>

      <StatusBar backgroundColor='green'></StatusBar>
        <View style={{ alignItems: "center",backgroundColor: '#ddd' }}>
      <Text style={styles.headline}>Matches</Text>
      </View>

      <View>
      <Text style={styles.btn_text}>International</Text>
      </View>
    </SafeAreaView>
  )
}

export default App
 const styles= StyleSheet.create ({
  headline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 10,
    marginBottom:10,
    width: 200,
  },
  btn_text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    padding:5,
    marginBottom:10,
    marginStart:10,
    backgroundColor: '#347C17',
    width: 110,
    color:'white',
    
  },
 })
  
  
  