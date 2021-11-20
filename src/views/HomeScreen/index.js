import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { showToastMessage } from '../../utils';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
  };


  render() {
    
    return (
      <ScrollView style={{ backgroundColor: '#FFF' }}>
        <View style={styles.Wrapper}>
          <Text>Your Home Screen</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: '#FFFFFF', padding: 40, width: '100%',
    height: Platform.OS === 'ios' ? '90%' : '100%',
  },
});

const mapStateToProps = (state) => {
  return {
    loading: state.general.isLoading,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);
