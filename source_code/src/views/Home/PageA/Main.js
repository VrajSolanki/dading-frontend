import React, { Component } from "react";
import { Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList, Button } from "react-native";
import Dings from '../../../components/Dings'
import Topics from '../../../components/Topics'
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';

const DisableableHeaderButton = props => (
  <HeaderButton
    {...props}
    background={Touchable.Ripple('white', true)}
    IconComponent={Ionicons}
    iconSize={35}
    color="white"
  />
);
export default class Main extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#FEC107',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <HeaderButtons HeaderButtonComponent={DisableableHeaderButton}>
        <Item title="search" iconName="ios-search" onPress={() => alert('search')} disabled />
        <Item title="select" iconName="ios-navigate" onPress={() => alert('select')} />
      </HeaderButtons>
    ),
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={DisableableHeaderButton}>
          <Item title="search" iconName="ios-menu" onPress={() => alert('DrawerNavigator To be added')}  />
          <Item title="HOME" />
        </HeaderButtons>
        ),
  };
  render() {
    return (
      <ScrollView>
      <View style = {styles.container}>
        <View  style = {styles.box}>
  
          <Text style = {styles.header}>
              Dings
          </Text>
  
          <Text style = {styles.tagline}>
             Let's get dinging
          </Text>
  
            <ScrollView contentContainerStyle={styles.scrollContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                    <Dings interest = "football" topic = "t1"/>
                    <Dings interest = "football" topic = "t2"/>
                    <Dings interest = "football" topic = "t3"/>
                    <Dings interest = "football" topic = "t4"/>
                    <Dings interest = "football" topic = "t1"/>
                    <Dings interest = "football" topic = "t1"/>
              </ScrollView>
  
              <ScrollView contentContainerStyle={styles.scrollContent}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              <Dings interest = "football" topic = "t1"/>
              <Dings interest = "football" topic = "t2"/>
              <Dings interest = "football" topic = "t3"/>
              <Dings interest = "football" topic = "t4"/>
              <Dings interest = "football" topic = "t1"/>
              <Dings interest = "football" topic = "t1"/>
                </ScrollView>
        </View>
  
        <View  style = {styles.box}>
          <Text style = {styles.header}>
            My Topics
          </Text>
            <ScrollView contentContainerStyle={styles.scrollContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                    <Topics topicType ="football" />
                    <Topics topicType ="cricket" />
                    <Topics topicType ="painting" />
                    <Topics topicType ="football" />
                    <Topics topicType ="game" />
              </ScrollView>
        </View>
  
        <View  style = {styles.box}>
          <Text style = {styles.header}>
            Recommendations!
          </Text>
            <ScrollView contentContainerStyle={styles.scrollContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <Topics topicType ="football" />
            <Topics topicType ="cricket" />
            <Topics topicType ="painting" />
            <Topics topicType ="football" />
            <Topics topicType ="game" />
              </ScrollView>
        </View>
  
  
        <View  style = {styles.box}>
          <Text style = {styles.header}>
            Tren-ding-ers!
          </Text>
            <ScrollView contentContainerStyle={styles.scrollContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <Dings interest = "football" topic = "t1"/>
            <Dings interest = "football" topic = "t2"/>
            <Dings interest = "football" topic = "t3"/>
            <Dings interest = "football" topic = "t4"/>
            <Dings interest = "football" topic = "t1"/>
            <Dings interest = "football" topic = "t1"/>
              </ScrollView>
  
              <ScrollView contentContainerStyle={styles.scrollContent}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              <Dings interest = "football" topic = "t1"/>
              <Dings interest = "football" topic = "t2"/>
              <Dings interest = "football" topic = "t3"/>
              <Dings interest = "football" topic = "t4"/>
              <Dings interest = "football" topic = "t1"/>
              <Dings interest = "football" topic = "t1"/>
                </ScrollView>
        </View>
  
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
  },
  ding: {
    padding: 20
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
  },
  staticContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap'      //// allow multiple rows
  },
  header: {
    fontSize:20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  box: {
    backgroundColor: "white",
    marginBottom: 4,
    padding: 6
  },
  tagline: {
    fontSize: 16,
    left: 155,
    fontStyle: 'italic',
    color: 'grey'
  }


});

