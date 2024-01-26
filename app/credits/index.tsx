import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import { RootState } from '../../src/redux/store';

import Label from '../../src/components/atoms/label';
import Button from '../../src/components/atoms/button';
import Container from '../../src/components/template/container';

const Credits = () => {
  const credit = useSelector((state: RootState) => state.credit.credit);
  return (
    <Container>
      <View style={styles.header}>
        <Label variant='title'>Acepta tu credito</Label>
        <Label variant='subtitle'>Confirma que has seleccionado el crédito deseado.</Label>
      </View>
      <View>
        <Label variant='subtitle'>Credito seleccionado:</Label>
        {!!credit &&
          <Button
            active={false}
            onPress={() => null}
          >
            <Text style={styles.buttonText}>{credit.name}</Text>
            <Text style={styles.buttonText}>${credit.value}</Text>
          </Button>}
      </View>
      <Button title='Contratar' onPress={() => null} active/>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    gap: 12,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Credits;
