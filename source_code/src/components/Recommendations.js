import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Icon } from 'expo';
export default class Topics extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <View style= {styles.outerBox}>
                  <View style= {styles.innerBox}>
                      <Text style = {styles.text}>
                          Cricket
                      </Text>
                      <View style = {styles.icon}>
                          <Icon.Ionicons
                              name={'md-football'}
                              color = "black"
                              size={80}
                            />
                      </View>
                  </View>
            </View>
            <View style = {styles.dingers}>
              <View style = {styles.dingerIcon}>
                    <Icon.Ionicons
                      name={'md-heart'}
                      color = "red"
                      size={20}
                      />
               </View>
               <View style = {styles.dingIt}>
                   <Icon.Ionicons
                     name={'md-checkmark-circle'}
                     color = "green"
                     size={20}
                     />
               </View>
              <Text style = {styles.dingerText}>20 Dingers</Text>
                <Text style = {[styles.dingerText, {top:-55}]}>Ding It</Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dingIt:{
      top: 0,
      left: -5
  },
  dingerText: {
    fontWeight: 'bold',
    top:-45,
    left: 12,
    padding: 5,
  },
  dingerIcon: {
    top: 2,
    left: -5
  },
  outerBox: {
    borderColor:'#FB9F00',
    borderWidth: 3,
    borderRadius: 1,
    position: 'relative',
  },
  innerBox:{
    height: 100,
    width: 100,
    backgroundColor:'#FCBE4E',
    margin: 3
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 5
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color:"white",
    position: 'absolute',
    top: 80,
    left: 45
  },

});
