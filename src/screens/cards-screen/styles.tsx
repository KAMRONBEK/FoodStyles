import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '@technicalchallenge/constants/window-sizes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: WINDOW_HEIGHT / 8,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  itemName: {
    // fontFamily: 'ProximaNovaAlt-Bold',
  },

  item: {
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 6,
    width: WINDOW_WIDTH - 40,
    marginTop: 10,
    height: 52,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  optionsImg: {
    width: 24,
    height: 24,
  },

  modalView: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
  },

  optionImg: {
    width: 40,
    height: 40,
  },

  rowPressable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
