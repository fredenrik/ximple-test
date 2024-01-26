import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

interface Props {
  children: ReactNode;
}
const Container = ({children}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
});

export default Container;
