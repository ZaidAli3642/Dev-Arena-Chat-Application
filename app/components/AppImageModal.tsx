import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Modal from 'react-native-modal';

import {colors} from '../config';
import AppText from './AppText';

interface Props {
  isVisible: boolean;
  openLibrary: () => any;
  closeImageMenu?: () => any;
}

const AppImageModal: React.FC<PropsWithChildren<Props>> = ({
  isVisible,
  openLibrary,
  closeImageMenu,
}) => {
  return (
    <Modal isVisible={isVisible} style={styles.imageModal}>
      <View style={styles.imageMenu}>
        <TouchableOpacity
          style={styles.imageMenuItem}
          activeOpacity={0.7}
          onPress={openLibrary}>
          <AppText
            title="Open Library"
            fontSize={22}
            styles={{letterSpacing: 1}}
            color={colors.lowBlack}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageMenuItem}
          activeOpacity={0.7}
          onPress={closeImageMenu}>
          <AppText
            title="Close"
            fontSize={22}
            styles={{letterSpacing: 1}}
            color={colors.lowBlack}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default AppImageModal;

const styles = StyleSheet.create({
  imageMenu: {
    width: '100%',
  },
  imageModal: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
  },
  imageMenuItem: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopColor: colors.lightBlack,
    borderTopWidth: 1,
  },
});
