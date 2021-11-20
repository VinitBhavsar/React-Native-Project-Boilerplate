import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {Fonts} from '../../../constants';
import {Button} from '../../Buttons/Button';

class HoldOnPopUp extends Component {
  constructor(props) {
    super(props);
  }

  enterButtonclick = () => {};

  render() {
    const {visible, onRequestClose, onRequestClear} = this.props;
    let width = Dimensions.get('window').width * 0.8;
    let buttonWidth = (width - 20 * 3) / 2;
    return (
      <Modal
        isVisible={visible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        backdropOpacity={0.4}
        onBackButtonPress={() => {}}
        onBackdropPress={() => {}}
        style={styles.modalBackground}
        collapsable={true}>
        <View
          style={[
            {
              width: '80%',
              borderRadius: 20,
              backgroundColor: 'white',
            },
          ]}>
          <View style={[styles.Wrapper]}>
            <Text style={styles.title}>Hold on!</Text>
            <Text style={styles.description}>
              {' '}
              Are you sure you want to exit?{' '}
            </Text>
            <View style={styles.bottomButtonView}>
              <Button
                title={'Cancel'}
                onPress={onRequestClose}
                buttonWidth={buttonWidth}
                fontSize={17}
                type={'cancel'}
              />
              <Button
                fontSize={17}
                title={'Confirm'}
                type={'red'}
                onPress={onRequestClear}
                buttonWidth={buttonWidth}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.regular,
    fontSize: 22,
    textAlign: 'center',
    marginTop: 15,
    letterSpacing: 1,
  },
  Wrapper: {
    width: '100%',
    flexDirection: 'column',
  },
  description: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.regular,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    letterSpacing: 1,
    marginBottom: 10,
  },
  bottomButtonView: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    marginLeft: 20,
    marginBottom: 20,
  },
});
export default HoldOnPopUp;