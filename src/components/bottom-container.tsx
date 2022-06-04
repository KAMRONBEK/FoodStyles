import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

const BottomContainer = () => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomView}>
        <Image
          style={styles.addImg}
          source={require('@technicalchallenge/assets/images/add.png')}
        />
        <Text>New food</Text>
      </View>
    </View>
  );
};

export default BottomContainer;

const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 30,
    backgroundColor: '#fff',
  },

  bottomView: {
    position: 'absolute',
    bottom: 40,
    left: 30,
    right: 30,
    backgroundColor: '#fff',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    padding: 7,
    alignItems: 'center',
    borderRadius: 6,
  },

  addImg: {
    width: 35,
    height: 35,
  },
});
