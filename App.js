/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  style,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={[styles.text]}>Login</Text>
        <TextInput
          style={[styles.textcontaine]}
          keyboardType="email"
          placeholder="Email"
        />

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgettext}>Forget</Text>
        </TouchableOpacity>
        <TextInput
          style={[styles.textpassword]}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          style={{color: 'white',width:20,}}
          
          title="Submit"
        />
      </View>
      <TouchableOpacity style={[styles.TouchableOpacity]}>
      <Text style={[styles.textsubmit]}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 20,
    marginTop: 300,
    fontSize: 20,
    textAlign: 'center',
  },
  textcontaine: {
    borderWidthz: 40,
    borderBottomWidth: 1,
    margin: 20,
  },
  textpassword: {
    borderWidthz: 40,
    borderBottomWidth: 1,
    margin: 20,
  },
  forgettext: {
    fontSize: 15,
    marginLeft: 300,
    fontSize: 20,
  },
  submittext: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },

  buttoninfo: {
    margin: 15,
    width: '20',
    color: '#AD40AF',
  },
  textsubmit:{
textAlign: 'center',
fontSize: 16,
fontWeight: '700'
  },
  TouchableOpacity:{
   backgroundColor: 'AD40AF'
  }
});

export default App;
