import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import AppIcon from './AppIcon';
import {colors} from '../config';

interface Props {
  onPress: () => any;
}

const Header: React.FC<PropsWithChildren<Props>> = ({children, onPress}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.mediumBlack,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          paddingTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={onPress}>
          <AppIcon
            IconComponent={AntDesign}
            name="left"
            size={7}
            styles={{marginLeft: 10}}
          />
        </TouchableOpacity>

        {children}
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
