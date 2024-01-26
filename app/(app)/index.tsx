import {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {useGetCreditsQuery} from '../../src/api/fetchApi';

import InputLabel from '../../src/components/molecules/inputLabel';
import Label from '../../src/components/atoms/label';
import Button from '../../src/components/atoms/button';
import Container from '../../src/components/template/container';

import ModalHome from './modalHome';

const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);

  const { data, isSuccess, refetch } = useGetCreditsQuery('');

  const handleRegister = () => {
    refetch();
    setVisible(true);
  };

  return (
    <Container>
      <View style={styles.header}>
        <Label variant='title'>Descubre tu credito</Label>
        <Label variant='subtitle'>Llena el siguiente formulario para conocer los créditos que tenemos disponibles para ti.</Label>
      </View>
      <View style={styles.form}>
        <InputLabel
          label='Registro de Usuario'
          placeHolder='Nombre'
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <InputLabel
          label='Correo'
          placeHolder='Correo Electrónico'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <Button
        title='Descubrir Creditos'
        onPress={handleRegister}
        active={!!name && !!email}
        disabled={!name && !email}
      />
      {isSuccess && <ModalHome visible={visible} setVisible={setVisible} data={data.data}/>}
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    gap: 12,
    width: '100%',
  },
  form: {
    gap: 16,
    width: '100%',
  },
});

export default HomePage;
