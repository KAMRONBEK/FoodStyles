import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';

interface Props {
  isModalVisible: boolean;
  toggleModal: () => void;
  deleteItem: () => void;
  duplicateItem: () => void;
  shareItem: () => void;
}

const SelectedItem = ({
  isModalVisible,
  toggleModal,
  deleteItem,
  duplicateItem,
  shareItem,
}: Props) => {
  return (
    <Modal
      backdropColor="#fff"
      backdropOpacity={0.8}
      isVisible={isModalVisible}
      onBackdropPress={toggleModal}
      style={styles.modal}>
      <View style={styles.modalView}>
        <Pressable style={styles.rowPressable} onPress={shareItem}>
          <Text style={styles.optionTxt}>Share</Text>
          <Image
            style={styles.optionImg}
            source={require('@technicalchallenge/assets/images/share.png')}
          />
        </Pressable>
        <Pressable style={styles.rowPressable} onPress={duplicateItem}>
          <Text style={styles.optionTxt}>Duplicate</Text>
          <Image
            style={styles.optionImg}
            source={require('@technicalchallenge/assets/images/duplicate.png')}
          />
        </Pressable>
        <Pressable style={styles.rowPressable} onPress={deleteItem}>
          <Text style={styles.optionTxt}>Delete</Text>
          <Image
            style={styles.optionImg}
            source={require('@technicalchallenge/assets/images/delete.png')}
          />
        </Pressable>
      </View>
    </Modal>
  );
};

export default SelectedItem;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
  },

  modalView: {
    alignItems: 'flex-end',
    paddingHorizontal: 25,
  },

  optionImg: {
    width: 40,
    height: 40,
  },

  rowPressable: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionTxt: {
    color: '#11B777',
    fontSize: 15,
    marginRight: 5,
  },
});
